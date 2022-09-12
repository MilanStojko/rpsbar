//props == type, lable, type, callback
import "./input.css";
function Input(props) {
  function handleChange(event) {
    props.callback(event);
  }
  return (
    <div className="dFlex">
      <h2>{props.lable}</h2>
      <input
        className={"baseInput"}
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
