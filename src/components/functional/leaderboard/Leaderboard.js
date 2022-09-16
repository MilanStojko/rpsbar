import Button from "../button/Button";
import { useLocation, useNavigate } from "react-router-dom";

import "./leaderboard.css";

function Leaderboard() {
  let location= useLocation()
  let navigate= useNavigate()
  let newLeaderboard = JSON.parse(localStorage.getItem("leaderboard"));

  function compare(a, b) {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  }
  if (newLeaderboard !== []) newLeaderboard.sort(compare);

  function playerNow(element) {
    if (element.name === location.state.playerName) {
      return <span className="thisPlayer">{element.name}</span>;
    } else {
      return <span className="genericPlayer">{element.name}</span>;
    }
  }

  function restartGame() {
    navigate('/home')
  }

  return (
    <div className="table">
      <h2>CLASSIFICA</h2>
      <div>
        {newLeaderboard !== [] &&
          newLeaderboard.map((element, key) => {
            return (
              <div key={key} className="container">
                <span className="name">{playerNow(element)}</span>
                <span className="score">{element.score}</span>
              </div>
            );
          })}
        <div>
          {newLeaderboard === [] && <h1>ANCORA NESSUNO IN CLASSIFICA</h1>}
        </div>
      </div>
      <div className="restartButton">
        <Button callback={restartGame} label={"Torna alla home"} />
      </div>
    </div>
  );
}
export default Leaderboard;
