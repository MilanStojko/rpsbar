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
      playerWon: false,
      insertedName: false,
    };
  }

  getName(par1) {
    this.setState({
      playerName: par1,
      homeView: false,
      insertedName: true,
    });
  }

  getWins(win) {
    if (win === true) {
      this.setState({
        playerWon: true,
      });
    }
  }

  render() {
    return (
      <>
        <Title />
        {this.state.homeView === true && (
          <Home callback={this.getName.bind(this)} />
        )}

        {this.state.insertedName === true && (
          <Game callback={this.getWins.bind(this)} />
        )}
        {this.state.playerWon === true && <Result win={""} img={""} />}

        <Leaderboard />
        <Footer />
      </>
    );
  }

  startGameComponent() {
    return (
      <div>
        <Game callback={this.getWins.bind(this)} />
      </div>
    );
  }
}

export default Container;
