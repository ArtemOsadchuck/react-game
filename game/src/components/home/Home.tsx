import React, { useState } from 'react';
import { Weapon } from '../Weapon/Weapon';
// import icon from './assets/rss.svg';
// import ReactDOM from 'react-dom';
export interface Ihome {
  weaponChoice: any
}

export class Home extends React.Component<Ihome> {
  [x: string]: any;
  weaponArr: Array<string>;
  constructor({ weaponChoice }: Ihome) {
    // super(weaponChoice.weapon)
    super(weaponChoice.arrOfGamesHome)

    this.state = {
      man: weaponChoice.weapon[1],
      ai: weaponChoice.weapon[1],
      win: weaponChoice.winner,
      score: {
        player: weaponChoice.scoreThisGame ? JSON.parse(weaponChoice.scoreThisGame).player : 0,
        ai: weaponChoice.scoreThisGame ? JSON.parse(weaponChoice.scoreThisGame).ai : 0,
      },
      arrOfGamesHome: weaponChoice.arrOfGames,
      goButton: "GO",
      gameLength: 2,
      gameLengthBtn: {
        two: 2,
        three: 3,
        five: 5
      },
      scoreClone: ''
    }
    this.weaponArr = weaponChoice.weapon;
    // this.gameLength = gameLength
    this.start.bind(this);
    this.weaponsSelect.bind(this);
    this.winnerSelect.bind(this);
    this.readLocalGames.bind(this);
    this._goOnclick = this._goOnclick.bind(this);
    this.changeLameLength = this.changeLameLength.bind(this);
    this.countGames = this.countGames.bind(this)
    this.showWinScore = this.showWinScore.bind(this)
  }

  start() {
    let count = 0;
    const { ai } = this.state;

    const game = setInterval(() => {
      count += 1;
      const randomNumWin = Math.floor(Math.random() * 3)
      this.setState({
        ai: this.weaponArr[randomNumWin],
        win: 'Ready',
      });
      console.log(ai)
      if (count > 10) {
        clearInterval(game);
        this.setState({ win: this.winnerSelect() })
      }
    }, 50);
  }

  // countGames() {
  //   const { man, ai, score, goButton, gameLength} = this.state

  //   if (score.ai === gameLength || score.player === gameLength ){
  //     this.readLocalGames();
  //     console.log('end game')
  //     this.setState(function() {
  //       return {
  //         goButton: '99'
  //       }
  //     })
  //   }
  // }

  winnerSelect() {
    const { man, ai, score, goButton, gameLength } = this.state
    // // let countGames = score.ai + score.player
    // // console.log(countGames)
    // // console.log(oooo,"prev")
    // const gameLengtho = gameLength

    // // console.log(gameLengtho, 'wiii')
    // const countGames = () => {
    //   console.log(gameLengtho, 'wiii')
    //   if (score.ai === gameLengtho || score.player === gameLengtho) {
    //     this.readLocalGames();
    //     console.log('end game')
    //     this.setState(function(prev) {
    //       return {
    //         goButton: 'GO'
    //       }
    //     })
    //   } else {
    //     this.setState(function(prev) {
    //       return {
    //         goButton: 'Again'
    //       }
    //     })
    //   }
    // }


    if (man === ai) {
      this.countGames();
      return '===';
    } else if (
      (man === "rock" && ai === "scissors") ||
      (man === "scissors" && ai === "paper") ||
      (man === "paper" && ai === "rock")
    ) {
      this.setState({
        score: {
          player: score.player + 1,
          ai: score.ai,
        }
      });
      this.countGames();
      return 'You Win!';
    } else {
      const count = 0;
      this.setState({
        score: {
          player: score.player,
          ai: score.ai + 1,
        }
      });
      this.countGames();

      return 'You Loose!'
    };
  }

  weaponsSelect(weapon: string) {
    const { man, win } = this.state
    this.setState({
      man: weapon,
      win: weapon,
    });
  }
  showWinScore(score) {


    return (
      <>
        <span>
          {score.ai}
        </span>
        <span>
          {score.player}
        </span>
      </>
    )
  }

  readLocalGames() {
    let { score, arrOfGamesHome, goButton, scoreClone } = this.state
    let countGames = score.ai + score.player
    const laocalGames = localStorage.getItem('gameScore')
    this.setState({ scoreClone: { ...score } })
    // scoreClone = {...score}


    this.showWinScore(scoreClone)
    arrOfGamesHome.push(score);
    localStorage.setItem('arrOfGames', JSON.stringify(arrOfGamesHome));
    this.setState(function (prev) {
      return {
        ...prev,
        score: {
          player: 0,
          ai: 0,
        },
      }
    })

    // this.setState({
    //   // goButton: "99",
    //   score: {
    //     player: 0,
    //     ai: 0,
    //   },
    // })
  }
  changeLameLength(length: null) {
    let { gameLength }:any = this.state
    this.setState(() => {
      return {
        gameLength: length
      }
    })
    gameLength = length
    console.log(gameLength, '----------gameLength')
  }

  _goOnclick() {
    const { score }: any = this.state
    if (score.ai === this.gameLength || score.player === this.gameLength) {
      this.readLocalGames();
    }
    this.start()
  }
  countGames() {
    const { man, ai, score, goButton, gameLength } = this.state
    const gameLengtho = gameLength
    console.log(gameLengtho, 'countGames')
    if (score.ai === gameLengtho || score.player === gameLengtho) {
      this.readLocalGames();
      console.log('end game')
      this.setState(function (prev) {
        return {
          // ...prev,
          score: {
            player: prev.score.player,
            ai: prev.score.ai,
          },
          goButton: 'Again'
        }
      })
    } else {
      this.setState(function (prev) {
        return {
          // ...prev,
          goButton: 'GO'
        }
      })
    }
  }

  render() {
    const { man, ai, win, score, goButton, gameLengthBtn, scoreClone } = this.state
    localStorage.setItem('score', JSON.stringify(score));
    console.log(scoreClone, 'scoreClone')
    return (
      <div className="container">
        <h3><em>_My simple React.JS game</em>
          {scoreClone.ai}
        </h3>
        {/* <button onClick={() => this.changeLameLength(gameLengthBtn.two)}>2</button>
        <button onClick={() => this.changeLameLength(gameLengthBtn.three)}>3</button>
        <button onClick={() => this.changeLameLength(gameLengthBtn.five)}>5</button> */}
        <div className='container'><span> <h5>Game lenght: </h5>
          {Object.entries(gameLengthBtn).map<Array<any>>((el) => {
            return (
              <button className='btn waves-effect waves-light brown darken-1' key={Math.random()} onClick={() => this.changeLameLength(el[1])}>{el[0]}</button>
            )
          })}
        </span>
        </div>
        <div>
          <h4>{win}</h4>
          <h5>Previos game {scoreClone.player} {scoreClone.player || scoreClone.ai ? ':' : null} {scoreClone.ai}</h5>
          <h4>{score.player} : {score.ai}</h4>
        </div>
        <div className="weapons_container row">
          <Weapon jj={man} />
          <Weapon jj={ai} />
        </div>
        <div className='home_btn_wrapper'>
          <button className="btn waves-effect waves-light brown darken-4" onClick={() => this.weaponsSelect("scissors")}>scissors</button>
          <div>
            <button className="btn waves-effect waves-light brown darken-4" onClick={() => this.weaponsSelect("rock")}>rock</button>
          </div>
          <button className="btn waves-effect waves-light brown darken-4" onClick={() => this.weaponsSelect("paper")}>paper</button>
          <div className="container">
            <button className="btn waves-effect waves-light btn_go deep-orange accent-4" onClick={() => this._goOnclick()}>{goButton}</button>
          </div>
        </div>
      </div>
    );
  }
}
