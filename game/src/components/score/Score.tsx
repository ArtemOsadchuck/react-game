import React, {useEffect, useState} from 'react';
// import ReactDOM from 'react-dom';

export interface Iscore {
    scoreProps: object
    arrOfGames: any
    // genereteList: any | Array<any>
    clearScoreHome: Function
}

export const Score: React.FC<Iscore> = (props) => {

    // const genereteList = props.scoreProps.arrOfGames

    let genereteListL = localStorage.getItem('arrOfGames')
    let genereteList: Array<any>
    if (genereteListL) {
         genereteList = JSON.parse(genereteListL)
        if (genereteList!.length > 32) {
            genereteList = [{"player":0,"ai":0}];
        };
    }else if(!genereteListL){
         genereteList = [{"player":0,"ai":0}];
    }
    let [arrOfGames1, setArrOfGames] = useState(genereteList!);


    const list = genereteList!.map((elList: any) => {
        return <li key={Date.now() * Math.random()}>Player {elList.player} VS {elList.ai} Opponent</li>
    }).reverse()
    

    // let [arrOfGames1, setArrOfGames] = useState(genereteList);
    function clearScore () {
        const ll: string | null = localStorage.getItem('arrOfGames')
        console.log('arrOfGames')
        setArrOfGames([{"player":0,"ai":0}]);
        props.clearScoreHome()
    };
    
    const clearBtn = () => {
        const localS = localStorage.removeItem('arrOfGames')
        clearScore();
        console.log(arrOfGames1)
    }

    return (
        <div className="container">
            <h1>score</h1>
            <ul>
                <button onClick={
                    () =>{
                        // eff
                        clearBtn();
                    }
                    }>Clear</button>
                {list}
            </ul>
        </div>
    );
}