import Input from "../../functional/Input/Input";
import Button from "../../functional/button/Button";
import { useNavigate } from "react-router-dom";

import "./home.css";

function Home() {
  let navigate = useNavigate()
  let newName = "";

  function goToGame(){
    navigate('/game', {state:{name:newName}})
  }

  function getName(event) {
    newName = event.target.value;
    console.log(newName);
  }
/*
  function sendName() {
    props.callback(newName);
  }
*/

  return (
    <div className="home">
      <Input
        placeholder={"inserisci il tuo nome"}
        lable={"Chi è il coraggioso bevitore??"}
        type={"text"}
        callback={getName}
      />
      <Button callback={goToGame} label={"ALLA GUERRA"} />

    </div>
  );
}

export default Home;
