//props == type, lable, type, callback
import "./input.css";
function Input(props) {
  function handleChange(event) {
    props.callback(event);
  }
  return (
    <div className="dFlex">
      <h1 className="margin1">{props.lable}</h1>
      <input
        className={"baseInput margin1"}
        id="name"
        name="name"
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
      ></input>
    </div>
  );
}
export default Input;
