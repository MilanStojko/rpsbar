import { Component } from "react";
import PlayerChoice from "../../functional/playerchoice/PlayerChoice";
import Play from "../../functional/play/Play";
import "./game.css";
import withRouter from "../../../routing/withNavigation.js";

class Game extends Component {
  constructor(props) {
    super(props);

    this.playerPlay = null;
    this.comPlay = null;
    this.playerWinsCount = 0;
    this.comWinsCount = 3;
    this.playerWon = "";
    this.winner = "";
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
      playerWins: 0,
      displayPlay: false,
      playerWon: false,
    };
  }

  //Function returns a number between 1 and 3. comPlay is used in the recursive function
  getComPlay(comRoll = 0) {
    let counter = 0;
    let flag = 0;
    let choices = ["rock", "paper", "scissors"];

    comRoll = Math.floor(Math.random() * 3);

    if (flag === comRoll) {
      flag = comRoll;
      counter++;
      if (counter === 2) {
        this.comRoll = this.getcomPlay(comRoll);
      } else {
        counter = 0;
      }
    }

    flag = comRoll;
    this.comPlay = choices[comRoll];
  }

  getEndGame(win) {
    let resolvePlayer = this.props.router.location.state.name; //prenditi da home il giocatore
    let isAlreadyPresent = false; //se il player è già in classifica
    let resolveWins = this.state.playerWins; //vittorie del giocatore
    if (win === true) {
      resolvePlayer = true;
      resolveWins = 1;
      let oldLeaderboard =
        JSON.parse(localStorage.getItem("leaderboard")) || [];

      oldLeaderboard.map((element) => {
        if (element.name === resolvePlayer) {
          element.score = element.score + 1;
          isAlreadyPresent = true;
        }
      });
      if (!isAlreadyPresent) {
        this.newPlayer = {
          name: resolvePlayer,
          score: resolveWins,
        };
        oldLeaderboard.push(this.newPlayer);
      }

      localStorage.setItem("leaderboard", JSON.stringify(oldLeaderboard));
    }
    this.setState({
      playerWon: resolvePlayer,
      playerWins: resolveWins,
      insertedName: false,
      gameFinished: true,
    });
  }

  game(label = "scissors") {
    let state = this.state;
    this.playerPlay = label;
    this.getComPlay(this.comPlay);
    /*console.log("Questo è comPlay", this.comPlay);
    console.log(
      `Player gioca ${this.playerPlay}, il computer gioca ${this.comPlay}`
    );*/

    this.playerWinsCount =
      this.playerWinsCount + this.rules[this.playerPlay][this.comPlay][1];

    this.comWinsCount =
      this.comWinsCount + this.rules[this.playerPlay][this.comPlay][2];

    if (this.rules[this.playerPlay][this.comPlay][1] === 1) {
      this.winner = "player";
    } else if (this.rules[this.playerPlay][this.comPlay][2] === 1) {
      this.winner = "com";
    } else {
      this.winner = "tie";
    }

    if (this.playerWinsCount === 3) {
      this.playerWinsCount = 0;
      this.comWinsCount = 0;
      this.playerWon = true;
      //this.props.callback(this.playerWon);
      //this.handlePlay();
      this.props.router.navigate("/result", {
        state: {
          playerName: this.props.router.location.state.name,
          className: "result",
          win: "IL CAMPIONE BEVITORE",
          img: "frybeer",
        },
      });

      /*<Result
            className={"result"}
            callback={}
            label={"vai alla leaderboard"}
            win={"IL CAMPIONE BEVITORE"}
            img={"frybeer"}
          />*/
    } else if (this.comWinsCount === 3) {
      this.playerWinsCount = 0;
      this.comWinsCount = 0;
      this.playerWon = false;
      //this.props.callback(this.playerWon);
      //this.handlePlay();
      this.props.router.navigate("/result", {
        state: {
          className: "result",
          win: "L'AMBASCIATORE DELLA SOBRIETÀ",
          img: "beerrobot",
        },
      });
    }
    state.displayPlay = true;
    this.setState(state);
  }

  handlePlayerChoice(play) {
    let playerChoice = play;
    this.game(playerChoice);
  }

  handlePlay() {
    let state = this.state;
    state.displayPlay = false;
    this.setState(state);
  }

  handleCallback() {
    this.props.callback(this.playerWon);
  }

  render() {
    return (
      <div>
        {this.state.displayPlay === false ? ( //SE NON VA POTREBBE ESSERE QUESTO
          <PlayerChoice
            className="choice"
            callback={this.handlePlayerChoice.bind(this)}
          />
        ) : (
          <Play
            className="play"
            callback={this.handlePlay.bind(this)}
            player={this.playerPlay}
            com={this.comPlay}
            winner={this.winner}
            playerName={this.props.playerName}
            playerWinsCount={this.playerWinsCount}
            comWinsCount={this.comWinsCount}
          />
        )}
      </div>
    );
  }
}

export default withRouter(Game);
