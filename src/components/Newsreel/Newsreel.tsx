import React from 'react';
import NewsItem from "../NewsItem/NewsItem";
import styles from './Newsreel.module.scss'
import articlesData from '../../back/data'


const Newsreel = () => {
    console.log(articlesData)
    return (
        <div className={styles.newsreel}>
            <h1>Newsreel</h1>
            <table>
                <tbody>
                    <NewsItem/>
                    {
                        articlesData.map((item=>{item.id, item.title, item.body})=>({}))
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Newsreel;
