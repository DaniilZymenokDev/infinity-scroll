import React from 'react';
import styles from './NewsItem.module.scss'

const NewsItem = () => {
    return (
        <tr className={styles.newsitem}>
            <td>
                <p>Title</p>
                <p>Description</p>
            </td>
        </tr>
    );
};

export default NewsItem;
