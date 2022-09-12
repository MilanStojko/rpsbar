import { checkPropTypes } from "prop-types";
import Button from "../button/Button"

function Play(props) {

  function handleCallback(){
    props.callback()
  }

  return(
    <>
      <Button callback={handleCallback}/>
    </>
  );
}
export default Play;
