import React from 'react';
import styles from './NewsItem.module.scss'

type PropTypes = {
    id: number,
    title: string,
    description: string
}

const NewsItem = (props: PropTypes) => {
    return (
        <tr className={styles.newsitem}>
            <td>
                <p>{props.id}</p>
                <p><strong>{props.title}</strong></p>
                <p>{props.description}</p>
            </td>
        </tr>

    );
};

export default NewsItem;