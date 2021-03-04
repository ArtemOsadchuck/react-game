import React, { SetStateAction, useState } from 'react';
import { Weapon } from '../Weapon/Weapon';
import { Chance } from './Chance';

export interface Ihome {
  weaponChoice: any
};

export class Home extends React.Component<Ihome> {
  [x: string]: any;
  weaponArr: Array<string>;
  constructor({ weaponChoice }: Ihome) {
    super(weaponChoice.arrOfGamesHome);
    this.state = {
      man: weaponChoice.weapon[1],
      ai: weaponChoice.weapon[1],
      win: weaponChoice.winner,
      arrOfGamesHome: weaponChoice.arrOfGames,
      goButton: "GO",
      gameLength: 2,
      scoreClone: '',
      selectionTime: weaponChoice.selectionTime,
      chance: true,
      score: {
        player: weaponChoice.scoreThisGame ? JSON.parse(weaponChoice.scoreThisGame).player : 0,
        ai: weaponChoice.scoreThisGame ? JSON.parse(weaponChoice.scoreThisGame).ai : 0,
      },
      gameLengthBtn: {
        two: 2,
        three: 3,
        five: 5
      },
    }
    this.weaponArr = weaponChoice.weapon;
    this.effectPlay = weaponChoice.effectPlay;
    this.start.bind(this);
    this.weaponsSelect.bind(this);
    this.winnerSelect.bind(this);
    this.readLocalGames.bind(this);
    this._goOnclick = this._goOnclick.bind(this);
    this.changeGameLength = this.changeGameLength.bind(this);
    this.countGames = this.countGames.bind(this);
    this.showWinScore = this.showWinScore.bind(this);
    this.chanceChange = this.chanceChange.bind(this);
    this.runAutoplay = this.runAutoplay.bind(this);
  }

  start() {
    this.effectPlay();
    let count = 0;
    const { ai }: any = this.state;
    let { selectionTime }: any = this.state;
    const game = setInterval(() => {
      count += 1;
      const randomNumWin = Math.floor(Math.random() * 3);
      this.setState({
        ai: this.weaponArr[randomNumWin],
        win: 'Ready',
      });
      if (count > selectionTime) {
        clearInterval(game);
        this.setState({ win: this.winnerSelect() });
      }
    }, 50);
  }

  winnerSelect() {
    const { man, ai, score, chance }: any = this.state;
    if (man === ai && chance === true) {
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
      return 'You Loose!';
    };
  }

  weaponsSelect(weapon: string) {
    const { man, win }: any = this.state;
    this.setState({
      man: weapon,
      win: weapon,
    });
  }

  showWinScore(score: SetStateAction<any>) {
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
    let { score, arrOfGamesHome, goButton, scoreClone }: any = this.state;
    let countGames = score.ai + score.player;
    let laocalGames = localStorage.getItem('gameScore');

    this.setState({ scoreClone: { ...score } });
    this.showWinScore(scoreClone);
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
  }

  changeGameLength(length: any) {
    this.setState(() => {
      return {
        gameLength: length
      }
    })
  }

  _goOnclick() {
    const { score }: any = this.state;
    if (score.ai === this.gameLength || score.player === this.gameLength) {
      this.readLocalGames();
    }
    this.start()
  }

  countGames() {
    const { man, ai, score, goButton, gameLength }: any = this.state;
    const gameLengtho = gameLength;
    if (score.ai === gameLengtho || score.player === gameLengtho) {
      this.readLocalGames();
      this.setState(function (prev: any) {
        return {
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
          goButton: 'GO'
        }
      })
    }
  }

  chanceChange(chanceFromComponentChance: boolean) {
    console.log(chanceFromComponentChance);
    this.setState({ chance: chanceFromComponentChance });
  }

  runAutoplay() {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 30) {
        this._goOnclick();
        count += 1
        console.log(count)
      } else clearInterval(interval);
    }, 500);
  }

  render() {
    const { man, ai, win, score, goButton, gameLengthBtn, scoreClone, chance }: any = this.state
    localStorage.setItem('score', JSON.stringify(score));
    return (
      <div className="container">
        <h3><em>_My simple React.JS game</em></h3>
        <div>
          <div className='container'>
            <div className='row '>
              <Chance chanceChange={this.chanceChange} value={chance} />
              <div className='col s6 container'>
                <h5>Selection time: </h5>
                <form action="#" >
                  <p>
                    <label>
                      <input name="group2" value='10' type="radio" defaultChecked={true}
                        onChange={() => { this.setState({ selectionTime: 25 }) }} />
                      <span className='select_time'>short</span>
                    </label>
                    <label>
                      <input name="group2" type="radio"
                        onChange={() => { this.setState({ selectionTime: 25 }) }} />
                      <span className='select_time'>long</span>
                    </label>
                  </p>
                </form>
              </div>
            </div>
            <h5>Game lenght: </h5>
            {Object.entries(gameLengthBtn).map<Array<any>>((el): any => {
              return (
                <button className='btn waves-effect waves-light brown darken-1' key={Math.random()}
                  onClick={() => this.changeGameLength(el[1])}>{el[0]}
                </button>
              )
            })
            }
          </div>
        </div>
        <div>
          <h4>{win}</h4>
          <h5>Previos game {scoreClone.player} {scoreClone.player || scoreClone.ai ? ':' : null} {scoreClone.ai}</h5>
          <h4>{score.player} : {score.ai}</h4>
        </div>
        <div className="weapons_container row">
          <Weapon weapon={man} />
          <Weapon weapon={ai} />
        </div>
        <div className='home_btn_wrapper'>
          <button className="btn waves-effect waves-light brown darken-4"
            onClick={() => this.weaponsSelect("scissors")}>scissors</button>
          <div>
            <button className="btn waves-effect waves-light brown darken-4"
              onClick={() => this.weaponsSelect("rock")}>rock</button>
          </div>
          <button className="btn waves-effect waves-light brown darken-4 accent-4"
            onClick={() => this.weaponsSelect("paper")}>paper</button>
          <div className="container home_btn_wrapper">
            <button className="btn waves-effect waves-light btn_go deep-orange"
              onClick={() => this._goOnclick()}>{goButton}</button>
            <button className="btn waves-effect waves-light brown darken-1"
              onClick={() => this.runAutoplay()}>autoplay</button>
          </div>
        </div>
      </div>
    );
  }
};
