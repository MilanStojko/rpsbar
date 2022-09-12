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
      rock: "Il gusto della birra vince su tutto",
      paper: "Il gusto delicato del vino è superiore",
      scissors: "Il gusto del negroni la spunta",
    },
    com: {
      rock: "Qualcosa hai perso contro il vino",
      paper: "Qualcosa hai perso contro il negroni",
      scissors: "Qualcosa hai perso contro la birra",
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
    <>
      <img src={gallery[player]} className={"image"} />
      {winMap[winner][player]}
      <br/>Il punteggio è: {props.playerWinsCount} a {props.comWinsCount}
      <img src={gallery[com]} className={"image"} />
      <br />
      <Button callback={handleCallback} label={"Continua"} />
    </>
  );
}
export default Play;
