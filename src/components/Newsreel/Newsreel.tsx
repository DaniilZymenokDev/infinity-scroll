import React, {ButtonHTMLAttributes, MutableRefObject, useEffect, useRef, useState} from 'react';
import NewsItem from "../NewsItem/NewsItem";
import styles from './Newsreel.module.scss'
import axios from "axios";
import {Simulate} from "react-dom/test-utils";

type PropTypes = {
    articles: Array<object>
}

const Newsreel = () => {

    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${currentPage}`)
            .then(response => {
                // setArticles(response.data)
                setArticles(response.data);
                setLoading(true)
                // setTotalCount(response.headers[`x-total-count`])
            })

    }, [currentPage])

    const loadMore = ():void =>{
        setCurrentPage(prevState => prevState + 1)
        console.log(currentPage)
    }
    const pageEnd = useRef(null!);

    useEffect(()=>{
        if (loading){
            const observer = new IntersectionObserver(entries=>{},{threshold:1});
            observer.observe(pageEnd)
        }
    },[loading])
    return (
        <div className={styles.newsreel}>
            <h1>Newsreel</h1>
            <table>
                <tbody>
                {
                    articles ? articles.map((item: any) => {
                        return <NewsItem key={item.id} id={item.id} title={item.title} description={item.body}/>
                    }) : <caption>Nothing to read...</caption>
                }

                </tbody>
                <button onClick={loadMore} ref={pageEnd}>Load more</button>

            </table>
        </div>
    );
};

export default Newsreel;