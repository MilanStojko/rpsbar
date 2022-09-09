import { Component } from "react";

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Title />
        <Home />
        <Game />
        <Result />
        <Leaderboard />
        <Footer />
      </>
    );
  }
}

export default Container;
