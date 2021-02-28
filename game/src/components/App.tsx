import React, {useState} from 'react';
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


export interface Iint {
    jj: string
}


export const App: React.FC = () => {
    const react: Iint = {
        jj: 'React TS'
    };

    const weaponsArr: Array<string> = ['paper', 'rock', 'scissors'];
    const [weapon, setWeapon] = useState(weaponsArr);
    const [player, setPlayer] = useState(weapon[0]);
    const [opponent, setOpponent] = useState(weapon[0]);
    const [winner, setWinner] = useState('Ready');

    const appState = {
        weapon,
        player,
        opponent,
        winner,
    }
    return (
        <><BrowserRouter>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/">
                        <Home weaponChoice={appState} />
                    </Route>

                    <Route path="/score">
                        <Score />
                    </Route>
                </Switch>
                {/* <Settings /> */}
            </main>
            <Footer />
        </BrowserRouter>
        </>
    );
}