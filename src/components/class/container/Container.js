import { Component } from "react";

//import di componenenti
import Home from "../../hook/home/Home";
import Title from "../../functional/title/Title";
import Game from "../game/Game";
import Result from "../../functional/result/Result";
import Leaderboard from "../../functional/leaderboard/Leaderboard";
import Footer from "../../functional/footer/Footer";

//import di css
import "./container.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.newPlayer = {};

    //dichiarazione stati
    this.state = {
      playerName: "",
      playerWins: 0,
      homeView: true,
      gameFinished: false,
      playerWon: false,
      insertedName: false,
      leaderboard: false,
    };
  }

  getName(par1) {
    this.setState({
      playerName: par1,
      homeView: false,
      insertedName: true,
    });
  }

  getEndGame(win) {
    let resolveWins = this.state.playerWins;
    let resolvePlayer = this.state.playerWon;
    if (win === true) {
      resolvePlayer = true;
      resolveWins = 1;
      let oldLeaderboard =
        JSON.parse(localStorage.getItem("leaderboard")) || [];

      oldLeaderboard.foreach((element) => {
        if (element.name === this.state.playerName) {
          element.score = element.score + 1;
        } else {
          this.newPlayer = {
            name: this.state.playerName,
            score: resolveWins,
          };
        }
      });
      oldLeaderboard.push(this.newPlayer);

      localStorage.setItem("leaderboard", JSON.stringify(oldLeaderboard));
    }
    this.setState({
      playerWon: resolvePlayer,
      playerWins: resolveWins,
      insertedName: false,
      gameFinished: true,
    });
  }

  getLeaderboard() {
    this.setState({
      gameFinished: false,
      leaderboard: true,
    });
  }

  restartGame() {
    this.setState({
      homeView: true,
      gameFinished: false,
      playerWon: false,
      insertedName: false,
      leaderboard: false,
    });
  }

  render() {
    return (
      <>
        <Title className="title" />
        {this.state.homeView === true && (
          <Home className={"home"} callback={this.getName.bind(this)} />
        )}

        {this.state.insertedName === true && (
          <Game className="game" callback={this.getEndGame.bind(this)} />
        )}
        {this.state.gameFinished === true && this.state.playerWon === true && (
          <Result
            className="result"
            callback={this.getLeaderboard.bind(this)}
            win={"IL CAMPIONE BEVITORE"}
            img={""}
          />
        )}
        {this.state.gameFinished === true && this.state.playerWon === false && (
          <Result
            className="result"
            callback={this.getLeaderboard.bind(this)}
            win={"L'AMBASCIATORE DELLA SOBRIETÀ"}
            img={""}
          />
        )}
        {this.state.leaderboard === true && (
          <Leaderboard
            className="leaderboard"
            playerNow={this.state.playerName}
            callback={this.restartGame.bind(this)}
          />
        )}

        <Footer />
      </>
    );
  }

  startGameComponent() {
    return (
      <div>
        <Game callback={this.getEndGame.bind(this)} />
      </div>
    );
  }
}

export default Container;
