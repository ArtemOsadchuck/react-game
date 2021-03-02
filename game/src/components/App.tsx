import React, {useState, useEffect, useCallback} from 'react';
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

    const [gameLength, setGameLength] = useState(0)

    let [arrOfGames1, setArrOfGames] = useState(localStorage.getItem('arrOfGames'));
    useEffect(() => {
        setArrOfGames(localStorage.getItem('arrOfGames'))
    })
    let scoreThisGame: string | null | void = localStorage.getItem('score');
    if(!scoreThisGame){
        const scoreThisGameNew = localStorage.setItem('score',JSON.stringify({"player":0,"ai":0}))
        scoreThisGame = scoreThisGameNew
    };
    // let arrOfGames: string | null | Array<string> = localStorage.getItem('arrOfGames');
    let arrOfGames
    if (arrOfGames1) {
        arrOfGames = JSON.parse(arrOfGames1)
        if (arrOfGames!.length > 32) {
            setArrOfGames(null);
        };
    }else if(!arrOfGames1){
        arrOfGames = [];
    }

    
    function clearScoreHome () {
        // setArrOfGames(null);
        arrOfGames =[]
    };
    
    // const [stateFuncScore, setStateFuncScore] = useState(clearScore.bind(this))
    // const gameLength = 2;
    const appStateHome = {
        weapon,
        player,
        opponent,
        winner,
        scoreThisGame,
        arrOfGames,
        gameLength,
    }

    const scoreProp = {
        arrOfGames,
    }
    // const changeLameLength = () => {
    //     setGameLength(5)
    //     console.log(gameLength)
    // }
    return (
        <><BrowserRouter>
            <Header />
            <main>
                <Switch>
                    {/* <button onClick={changeLameLength}>5</button> */}
                    <Route exact path="/">
                    {/* <button onClick={changeLameLength}>{gameLength}</button> */}
                        <Home weaponChoice={appStateHome} />
                    </Route>

                    <Route path="/score">
                        
                        <Score scoreProps={scoreProp} 
                        clearScoreHome={clearScoreHome}
                         />
                    </Route>
                </Switch>
                {/* <Settings /> */}
            </main>
            <Footer />
        </BrowserRouter>
        </>
    );
}