import Button from "../button/Button";
import beerrobot from "../../../assets/media/img/beerrobot.jpg";
import frybeer from "../../../assets/media/img/frybeer.png";
import { useLocation, useNavigate } from "react-router-dom";

import "./result.css";

function Result(props) {
  let location = useLocation();
  let navigate = useNavigate();
  let imgWin = props.img;
  console.log(imgWin);

  function sendLeaderbord() {
    navigate("/leaderboard", {
      state: { playerName: location.state.playerName },
    });
  }

  return (
    <div className={location.state.className}>
      <h1>{location.state.win} HA VINTO LA BATTAGLIA</h1>
      {location.state.img == "frybeer" ? (
        <img src={frybeer}></img>
      ) : (
        <img src={beerrobot}></img>
      )}
      <Button callback={sendLeaderbord} label={"vai alla leaderboard"} />
    </div>
  );
}

export default Result;
