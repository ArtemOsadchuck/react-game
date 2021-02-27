import React from 'react';
// import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

export interface Iheader {
    jj: string
}

export const Header: React.FC = () => {
    const react: Iheader = {
        jj: 'React TS'
    };

    

    return (
        <header >
            <nav>

                <div className="nav-wrapper brown lighten-1">
                    <a href="https://rs.school/js/" className="logo">
                        <img className="footer_image" src='./assets/rss.svg' alt="Rolling Scope School" />
                    </a>

                    <ul id="nav-mobile" className="right hide-on-med">
                        <li><NavLink to="/" activeClassName="home_active">Home game</NavLink></li>
                        <li><NavLink to="/score/" className="nav_a">Score</NavLink></li>
                        <li><NavLink to="/settings/" className="nav_a">Settings</NavLink></li>
                    </ul>


                </div>
            </nav>
        </header>
    );
}