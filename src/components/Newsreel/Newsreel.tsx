import React, {useEffect, useRef, useState} from 'react';
import NewsItem from "../NewsItem/NewsItem";
import styles from './Newsreel.module.scss'
import {requester} from "../../utils/api/requester";
import Pagination from "../Pagination/Pagination";


const Newsreel = () => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage] = useState(5)

    useEffect(() => {
        requester(articles, setArticles, setLoading, currentPage)//just axios-function which changes states
    }, [currentPage])

    const lastArticleIndex: number = currentPage * articlesPerPage;
    const firstArticleIndex: number = lastArticleIndex - articlesPerPage;
    const currentArticle:Array<object> = articles.slice(firstArticleIndex, lastArticleIndex);

    const paginate = (pageNumber:number):void => {setCurrentPage(pageNumber)}

    return (
        <div className={styles.newsreel}>
            <h1>Newsreel</h1>
            <table>
                <tbody>
                {
                    currentArticle ? currentArticle.map((item: any) => {
                        return <NewsItem key={item.id} id={item.id} title={item.title} description={item.body}/>
                    }) : <caption>Nothing to read...Please, reload this page.</caption>
                }
                </tbody>
            </table>
            <Pagination articlesPerPage={articlesPerPage} totalArticles={articles.length} paginate={paginate}/>
        </div>
    );
};

export default Newsreel;