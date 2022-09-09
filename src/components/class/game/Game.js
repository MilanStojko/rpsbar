import { Component } from "react";
import PlayerChoice from "../../functional/playerchoice/PlayerChoice";
import Play from "../../functional/play/Play";

class Game extends Component {
  constructor(props) {
    super(props);

    this.playerPlay = null;
    this.comPlay = null;
    this.playerWinsCount = 0;
    this.comWinsCount = 0;
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
      displayPlay: false,
      playerPoints: 0,
      comPoints: 0,
    };
  }

  //Function returns a number between 1 and 3. comPlay is used in the recursive function
  getComPlay(comRoll = 0) {
    let counter = 0;
    let variabile = 0;
    let choices = ["rock", "paper", "scissors"];

    comRoll = Math.floor(Math.random() * 3);

    if (variabile === comRoll) {
      counter++;
      if (counter === 2) {
        this.comRoll = this.getcomPlay(comRoll);
      } else {
        counter = 0;
      }
    }

    variabile = comRoll;
    this.comPlay = choices[comRoll];
  }

  game(label = "scissors") {
    this.playerPlay = label;
    this.getComPlay(this.comPlay);
    console.log("Questo è comPlay", this.comPlay);
    console.log(
      `Player gioca ${this.playerPlay}, il computer gioca ${this.comPlay}`
    );

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

  consoleLogging() {
    this.game();
    console.log("this.playerPlay", this.playerPlay);
  }

  handleCallback() {
    this.props.callback
  }

  render() {
    return (
      <>
        <button onClick={this.consoleLogging.bind(this)} />
        <PlayerChoice />
        <Play game={this.handleGame.bind(this)} />
      </>
    );
  }
}

export default Game;

//Andrà ancora fatto PlayerChoice e Play, probabilmente darà errore.