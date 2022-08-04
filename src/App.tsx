import React, {ReactEventHandler, useEffect} from 'react';
import Newsreel from "./components/Newsreel/Newsreel";
import {Logger} from "sass";

function App() {

    useEffect(()=>{
        document.addEventListener('scroll', scrollHandler)
        return function (){
            document.removeEventListener('scroll', scrollHandler)
        }
    },[])
    const scrollHandler = (e:any):void =>{
        console.log('scroll')
    }

    return (
        <div className="App">
            <Newsreel/>
        </div>
    );
}

export default App;
