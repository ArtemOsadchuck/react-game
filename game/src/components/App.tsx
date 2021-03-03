import React, { useState, useEffect, useRef } from 'react';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Home } from './home/Home';
import {
    Switch,
    Route,
    BrowserRouter
} from "react-router-dom";
import { Score } from './score/Score';
import { Settings } from './settings/settings';

export interface Iint {
    jj: string
};

export const App: React.FC = () => {
    const audRef = useRef(null);
    const effectClickRef: any = useRef(null);
    const [IsAudioPlay, setIsAudioPlay] = useState(true);
    const weaponsArr: Array<string> = ['paper', 'rock', 'scissors'];
    const [weapon, setWeapon] = useState(weaponsArr);
    const [player, setPlayer] = useState(weapon[0]);
    const [opponent, setOpponent] = useState(weapon[0]);
    const [winner, setWinner] = useState('Ready');
    const [gameLength, setGameLength] = useState(0);
    const [selectionTime, setSelectionTime] = useState(10);
    let [arrOfGames1, setArrOfGames] = useState(localStorage.getItem('arrOfGames'));
    useEffect(() => {
        setArrOfGames(localStorage.getItem('arrOfGames'));
    })

    let scoreThisGame: string | null | void = localStorage.getItem('score');
    if (!scoreThisGame) {
        const scoreThisGameNew = localStorage.setItem('score', JSON.stringify({ "player": 0, "ai": 0 }));
        scoreThisGame = scoreThisGameNew;
    };

    let arrOfGames;
    if (arrOfGames1) {
        arrOfGames = JSON.parse(arrOfGames1);
        if (arrOfGames!.length > 186) {
            setArrOfGames(null);
        };
    } else if (!arrOfGames1) {
        arrOfGames = [];
    }

    function clearScoreHome() {
        arrOfGames = [];
    };

    const changeIsSudio = (bool: boolean) => {
        setIsAudioPlay(bool)
    };

    const effectPlay = () => {
        if (IsAudioPlay) {
            effectClickRef.current.play();
        }
    };

    const appStateHome = {
        weapon,
        player,
        opponent,
        winner,
        scoreThisGame,
        arrOfGames,
        gameLength,
        selectionTime,
        effectPlay
    };

    const scoreProp = {
        arrOfGames,
    };

    return (
        <><BrowserRouter>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/">
                        <Home weaponChoice={appStateHome} />
                    </Route>
                    <Route path="/score">
                        <Score scoreProps={scoreProp}
                            clearScoreHome={clearScoreHome} />
                    </Route>
                    <Route path="/settings">
                        <Settings value={audRef} isplatngEffects={IsAudioPlay} changeIsSudioProp={changeIsSudio} />
                    </Route>
                </Switch>
                <audio ref={audRef} src="./assets/sounds/led9.mp3"></audio>
                <audio ref={effectClickRef} src="./assets/sounds/click.mp3"></audio>
            </main>
            <Footer />
        </BrowserRouter>
        </>
    );
};
