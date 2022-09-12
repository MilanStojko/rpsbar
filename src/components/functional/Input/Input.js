//props == type, lable, type, callback
import './input.css'
function Input(props) {
  function handleChange(event) {
    props.callback(event);
  }
  return (
    <>
      <div>
        <label>
          {props.lable}
          <input
            className={"baseInput"}
            id="name"
            name="name"
            type={props.type}
            placeholder={props.placeholder}
            onChange={handleChange}
          ></input>
        </label>
      </div>
    </>
  );
}
export default Input;
