import { Component } from "react";
import PlayerChoice from "../../functional/playerchoice/PlayerChoice";
import Play from "../../functional/play/Play"

class Game extends Component {
  constructor(props) {
    super(props);

    this.playerPlay = null;
    this.comPlay = null;
    this.playerWinsCount = null;
    this.comWinsCount = null;
    this.rules = {
      rock: {
        rock: ["tie", 0, 0],
        paper: ["lose", 0, 1],
        scissors: ["win", 1, 0],
      },
      paper: {
        rock: ["win", 1, 0],
        paper: ["tie", 0, 0],
        scissors: ["lose", 0, 1],
      },
      scissors: {
        rock: ["lose", 0, 1],
        paper: ["win", 1, 0],
        scissors: ["tie", 0, 0],
      },
    };

    this.state = {
      displayPlay : false,
      playerPoints : 0,
      comPoints : 0
    };
  }

  //Function returns a number between 1 and 3. comPlay is used in the recursive function
  getComPlay(comPlay) {
    let counter = 0;
    let variabile = 0;
    let choices = ['rock', 'paper', 'scissors']
    this.comPlay = Math.floor(Math.random() * 3);

    if (variabile === comPlay) {
      counter++;
      if (counter === 2) {
        this.comPlay = this.getcomPlay(comPlay);
      } else {
        counter = 0;
      }
    }
    
    variabile = this.comPlay;
    this.comPlay = choices[this.comPlay]
    return comPlay;
  }

  game(label) {
    this.playerPlay = label;
    this.comPlay = this.getComPlay();
    console.log(`Player gioca ${this.playerPlay}, il computer gioca ${this.comPlay}`);

    this.playerWinsCount =
      this.playerWinsCount + this.rules[this.playerPlay][this.comPlay][1];
    this.comWinsCount =
      this.comWinsCount + this.rules[this.playerPlay][this.comPlay][2];

    if (this.playerWinsCount === 3) {
      console.log("Player wins");
      this.playerWinsCount = 0;
      this.comWinsCount = 0;
    } else if (this.comWinsCount === 3) {
      console.log("COM wins");
      this.playerWinsCount = 0;
      this.comWinsCount = 0;
    } else {
    }
  }

  handleGame(play) {
    this.playerPlay = play;
    this.game(this.playerPlay);
  }

  render() {
    return (
      <>
        <PlayerChoice />
        <Play game={this.handleGame.bind(this)} />
      </>
    );
  }
}

export default Game;
