import { checkPropTypes } from "prop-types";
import Button from "../button/Button";

function PlayerChoice(props) {

  function handleCallback (label){
    props.callback(label)
  }

  return (
    <>
      <Button img = {props.img} callback={handleCallback} />
      <Button img = {props.img} callback={handleCallback}/>
      <Button img = {props.img} callback={handleCallback}/>
    </>
  );
}

export default PlayerChoice;
