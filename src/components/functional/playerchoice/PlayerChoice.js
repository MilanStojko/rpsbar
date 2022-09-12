import Choices from "../choices/Choices";
import Beer from "../../../assets/media/img/Beer.png";
import Wine from "../../../assets/media/img/Wine.png";
import Cocktail from "../../../assets/media/img/Cocktail.png";

import "./playerChoice.css";

function PlayerChoice(props) {
  function handleCallback(label) {
    props.callback(label);
  }

  return (
    <div className="choice">
      <Choices
        label="rock"
        callback={handleCallback}
        src={Beer}
        description={"Birretta"}
      />
      <Choices
        label="paper"
        callback={handleCallback}
        src={Wine}
        description={"Vinello"}
      />
      <Choices
        label="scissors"
        callback={handleCallback}
        src={Cocktail}
        description={"Negroni"}
      />
    </div>
  );
}

export default PlayerChoice;
