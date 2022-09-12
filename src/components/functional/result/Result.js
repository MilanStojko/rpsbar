import Button from "../button/Button";
import beerrobot from "../../../assets/media/img/beerrobot.jpg";
import frybeer from "../../../assets/media/img/frybeer.png";

import "./result.css";

function Result(props) {
  let imgWin = props.img;
  console.log(imgWin);
  function sendLeaderbord() {
    props.callback();
  }

  return (
    <div className="result">
      <h1>{props.win} HA VINTO LA BATTAGLIA</h1>
      {imgWin == "frybeer" ? (
        <img src={frybeer}></img>
      ) : (
        <img src={beerrobot}></img>
      )}
      <Button callback={sendLeaderbord} label={"vai alla leaderboard"} />
    </div>
  );
}

export default Result;
