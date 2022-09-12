import Choices from "../choices/Choices";
import Beer from "../../../assets/media/img/Beer.png";
import Wine from "../../../assets/media/img/Wine.png";
import Cocktail from "../../../assets/media/img/Cocktail.png";

function PlayerChoice(props) {
  function handleCallback(label) {
    props.callback(label);
  }

  return (
    <>
      <Choices label="rock" callback={handleCallback} src={Beer} />
      <Choices label="paper" callback={handleCallback} src={Wine} />
      <Choices label="scissors" callback={handleCallback} src={Cocktail} />
    </>
  );
}

export default PlayerChoice;
