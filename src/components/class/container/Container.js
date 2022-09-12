import { Component } from "react";
import Home from "../../hook/home/Home";
import Title from "../../functional/title/Title";
import Game from "../game/Game";
import Result from "../../functional/result/Result";
import Leaderboard from "../../functional/leaderboard/Leaderboard";
import Footer from "../../functional/footer/Footer";

class Container extends Component {
  constructor(props) {
    super(props);

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
    }
    this.setState({
      playerWon: resolvePlayer,
      playerWins: resolveWins,
      gameFinished: true,
    });
  }

  getLeaderboard() {
    this.setState({
      leaderboard: true,
    });
  }

  render() {
    return (
      <>
        <Title />
        {this.state.homeView === true && (
          <Home callback={this.getName.bind(this)} />
        )}

        {this.state.insertedName === true && (
          <Game callback={this.getEndGame.bind(this)} />
        )}
        {this.state.gameFinished === true && this.state.playerWon === true && (
          <Result
            callback={this.getLeaderboard.bind(this)}
            win={"IL CAMPIONE BEVITORE"}
            img={""}
          />
        )}
        {this.state.gameFinished === true && this.state.playerWon === false && (
          <Result
            callback={this.getLeaderboard.bind(this)}
            win={"L'AMBASCIATORE DELLA SOBRIETÀ"}
            img={""}
          />
        )}
        {this.state.leaderboard === true && <Leaderboard />}

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
