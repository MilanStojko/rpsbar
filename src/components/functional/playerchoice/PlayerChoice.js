import Choices from "../choices/Choices";

function PlayerChoice(props) {
  function handleCallback(label) {
    props.callback(label);
  }

  return (
    <>
      <Choices label="rock" callback={handleCallback} />
      <Choices label="paper" callback={handleCallback} />
      <Choices label="scissors" callback={handleCallback} />
    </>
  );
}

export default PlayerChoice;
