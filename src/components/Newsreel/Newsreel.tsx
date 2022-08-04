import React, {useEffect, useRef, useState} from 'react';
import NewsItem from "../NewsItem/NewsItem";
import styles from './Newsreel.module.scss'
import {requester, observing} from "../../utils/api/requester";


const Newsreel = () => {

    const [articles, setArticles] = useState([{}]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false)
    const pageEnd = useRef(null!);

    useEffect(() => {
        requester(articles, setArticles, setLoading, currentPage)//just axios-function which changes states
    }, [currentPage])

    const loadMore = (): void => {
        setCurrentPage(prevState => prevState + 1)
    }

    useEffect(() => {
        loading && observing(loadMore, pageEnd)
    }, [loading])

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
            </table>
            <div ref={pageEnd}/>
        </div>
    );
};

export default Newsreel;