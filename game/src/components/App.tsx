import React from 'react';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Home } from './home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import { Score } from './score/Score';
import { Settings } from './settings/settings';

// import ReactDOM from 'react-dom';

export interface Iint {
    jj: string
}
export const App: React.FC = () => {
    const react: Iint = {
        jj: 'React TS'
    };

    return (
        <><BrowserRouter>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/score">
                        <Score />
                    </Route>
                </Switch>
                <Settings />
            </main>
            <Footer />
        </BrowserRouter>
        </>
    );
}