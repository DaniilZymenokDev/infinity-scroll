import React, {useEffect, useState} from 'react';
import Newsreel from "./components/Newsreel/Newsreel";
import axios from "axios";

function App() {






    // useEffect(() => {
    //     document.addEventListener('scroll', scrollHandler)
    //     return function () {
    //         document.removeEventListener('scroll', scrollHandler)
    //     }
    // }, [fetch])
    // const scrollHandler = (e: any): void => {
    //     if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
    //         setFetch(true)
    //     }
    //
    // }

    return (
        <div className="App">
            <Newsreel/>
        </div>
    );
}

export default App;
