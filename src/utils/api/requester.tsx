import axios from "axios";
import {MutableRefObject} from "react";

export const requester = (articles: Array<object>, setArticles: Function, setLoading: Function, currentPage: number): void => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${currentPage}`)
        .then(response => {
            setArticles([...articles, ...response.data]);
            setLoading(true)
        })
}
export const observing = (loadMore:Function, pageEnd:MutableRefObject<any>): void => {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            loadMore()
        }
    }, {threshold: 1});
    observer.observe(pageEnd.current)
}
