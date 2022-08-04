import React, {ReactEventHandler, useEffect, useState} from 'react';
import Newsreel from "./components/Newsreel/Newsreel";
import {Logger} from "sass";
import articlesData from "./back/data";

function App() {


    useEffect(()=>{
        document.addEventListener('scroll', scrollHandler)
        return function (){
            document.removeEventListener('scroll', scrollHandler)
        }
    },[])
    const scrollHandler = (e:any):void =>{
        if (e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<100){
            console.log('scroll')
        }
    }

    return (
        <div className="App">
            <Newsreel/>
        </div>
    );
}

export default App;
