/*
  Props required:
    -callback, type: function, it's the function that will execute on click
    -label: the text inside the button
*/

import "./button.css";
function Button(props) {
  function handleClick() {
    props.callback();
  }

  return (
    <div>
      <button onClick={handleClick} className={"baseButton"}>
        {props.label}
      </button>
    </div>
  );
}

Button.defaultProps = {
  label: "default",
};
export default Button;
