//le props sono player com e winner, winner può essere player com e tie

import { checkPropTypes } from "prop-types";
import Button from "../button/Button";
import Beer from "../../../assets/media/img/Beer.png";
import Wine from "../../../assets/media/img/Wine.png";
import Cocktail from "../../../assets/media/img/Cocktail.png";
import "./play.css";

function Play(props) {
  let player = props.player;
  let com = props.com;
  let winner = props.winner;

  const winMap = {
    player: {
      rock: "Il gusto della birra regna supremo!",
      paper:
        "Il gusto delicato del vino, così superiore ad una semplice birra!",
      scissors:
        "Nemmeno cento bicchieri di vino potrebbero raggiungere questo tasso alcolemico!",
    },
    com: {
      rock: "L'odore pungente del vino fa scappare via i tuoi luppoli!",
      paper: "Un buon negroni sciacqua via il vino come fosse acqua!",
      scissors:
        "Un singolo negroni cosa può contro la schiacciante forza numerica di cento birre?",
    },
    tie: {
      rock: "Un brindisi alla birra! Pareggio!",
      paper: "Un brindisi al vino! Pareggio!",
      scissors: "Un brindisi con il negroni! Pareggio!",
    },
  };

  const gallery = {
    rock: Beer,
    paper: Wine,
    scissors: Cocktail,
  };

  function handleCallback() {
    props.callback();
  }

  return (
    <div>
      <div className="play">
        <img src={gallery[player]} className={"image"} />
        <div className="winner">
          {winMap[winner][player]}
          <br />
          Il punteggio è: {props.playerWinsCount} a {props.comWinsCount}!
        </div>
        <img src={gallery[com]} className={"image"} />
        <br />
      </div>
      <div className="soloButton">
        <Button callback={handleCallback} label={"Continua"} />
      </div>
    </div>
  );
}
export default Play;
