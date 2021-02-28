import React, { useState } from 'react';
import { Weapon } from '../Weapon/Weapon';
// import icon from './assets/rss.svg';
// import ReactDOM from 'react-dom';
export interface Ihome {
  weaponChoice: any
  weaponArr: Array<string>
  // weapon: Array<string>
  // player: string
  // opponent: object
  // winner: string
}

export class Home extends React.Component {
  weaponArr: Array<string>;
  constructor({ weaponChoice }: Ihome) {
    // super(weaponChoice.weapon)
    super()
    this.state = {
      man: weaponChoice.weapon[1],
      ai: weaponChoice.weapon[1],
      win: weaponChoice.winner
    }
    this.weaponArr = weaponChoice.weapon;
    console.log(this.state)
    this.start.bind(this);
    this.weaponsSelect.bind(this);
    this.winnerSelect.bind(this)
  }

  start() {
    let count = 0;
    const { man, ai, win } = this.state
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

  winnerSelect() {
    console.log('0000000000000000000000000000000000000000000')
    const { man, ai } = this.state
    if (man === ai) {
      return '===';
    } else if (
      (man === "rock" && ai === "scissors") ||
      (man === "scissors" && ai === "paper") ||
      (man === "paper" && ai === "rock")
    ) {
      return 'You Win!';
    } else {
      return 'You Loose!'
    };
  }
  weaponsSelect(weapon: string) {
    const { man } = this.state
    this.setState({
      man: weapon,
      win: man,
    });
  }

  render() {
    const { man, ai, win } = this.state
    return (
      <div className="container">
        <h3><em>_My simple React.JS game</em></h3>
        <div><h4>{win}</h4></div>
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
            <button className="btn waves-effect waves-light btn_go deep-orange accent-4" onClick={() => this.start()}>GO</button>
          </div>
        </div>

      </div>
    );
  }


}
