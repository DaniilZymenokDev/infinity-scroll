import React, {useState} from 'react';
import NewsItem from "../NewsItem/NewsItem";
import styles from './Newsreel.module.scss'
import articlesData from '../../back/data'


const Newsreel = () => {
    const [articles, setArticles] = useState(articlesData)

    return (
        <div className={styles.newsreel}>
            <h1>Newsreel</h1>
            <table>
                <tbody>
                    {
                        articles.map((item:any)=>{
                            return <NewsItem key={item.id} id={item.id} title={item.title} description={item.body}/>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Newsreel;