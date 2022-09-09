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
      playerWins: "",
    };
  }

  getName(par1) {
    this.setState({
      playerName: par1,
    });
  }

  render() {
    return (
      <>
        <Title />
        <Home callback={this.getName.bind(this)} />
        <Game />
        <Result />
        <Leaderboard />
        <Footer />
      </>
    );
  }
}

export default Container;
