import Button from "../button/Button";

function Result(props) {
  function sendLeaderbord() {
    props.callback();
  }

  return (
    <>
      <div>
        <h1>{props.win} HA VINTO LA BATTAGLIA</h1>
        <img src={props.img}></img>
      </div>
      <div>
        <Button callback={sendLeaderbord} />
      </div>
    </>
  );
}

export default Result;
