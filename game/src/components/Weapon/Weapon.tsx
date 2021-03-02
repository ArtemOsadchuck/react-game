import React, {useEffect} from 'react';
// import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

export interface Iweapon {
    jj: string
}

export const Weapon: React.FC<Iweapon> = ({ jj }) => {

    // console.log(jj, 'Weapon')
    // const imgSrcFromProps: string = jj === 'paper' ? 'paper' :
    //                                 jj === 'rock' ? 'rock' :
    //                                     'scissors';


    
    const imgSrc: string = `../../assets/${jj}.png`

    // console.log(imgSrc, 'src')

    return (
        <div className="container">
            <img className="weapon_img" src={imgSrc} alt="weapons" />
        </div>
    );
}