import Input from "../../functional/Input/Input";
import Button from "../../functional/button/Button";

import "./home.css";

function Home(props) {
  let newName = "";

  function getName(event) {
    newName = event.target.value;
    console.log(newName);
    return newName;
  }

  function sendName() {
    props.callback(newName);
  }

  return (
    <div className="home">
      <Input
        placeholder={"inserisci il tuo nome"}
        lable={"Chi è il coraggioso bevitore??"}
        type={"text"}
        callback={getName}
      />
      <Button callback={sendName} label={"ALLA GUERRA"} />
    </div>
  );
}

export default Home;
