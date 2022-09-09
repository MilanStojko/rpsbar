import { Component } from "react";

class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <PlayerChoice />
        <Play />
      </>
    );
  }
}

export default Game;
