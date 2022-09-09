import { Component } from "react";

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
    comPlay = Math.floor(Math.random(1) * 4);

    if (variabile === comPlay) {
      counter++;
      if (counter === 2) {
        comPlay = this.getcomPlay(comPlay);
      } else {
        counter = 0;
      }
    }
    variabile = comPlay;
    return comPlay;
  }

  game(label) {
    let playerPlay = label;
    this.comPlay = this.getComPlay();
    console.log(`Player gioca ${playerPlay}, il computer gioca ${comPlay}`);

    this.playerWinsCount =
      this.playerWinsCount + WINS_AND_LOSSES[playerPlay][comPlay][1];
    this.comWinsCount =
      this.comWinsCount + WINS_AND_LOSSES[playerPlay][comPlay][2];

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
