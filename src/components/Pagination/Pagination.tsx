import React from 'react';
import styles from './Pagination.module.scss'

type PropTypes = {
    articlesPerPage: number,
    totalArticles: number,
    paginate:any,
}

const Pagination = (props: PropTypes) => {
    const pageCount: Array<number> = [];

    for (let i: number = 1; i < Math.ceil(props.totalArticles / props.articlesPerPage); i++) {
        pageCount.push(i);
    }

    return (
        <div className={styles.paginationContainer}>
            <ul className={styles.pagination}>
                {
                    pageCount && pageCount.map(number => (
                        <li key={number}>
                            <a href={"#"} onClick={() => {props.paginate(number)}}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;
