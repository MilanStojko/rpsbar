import "./choices.css";

function Choices(props) {
  function handleCallback() {
    props.callback(props.label);
  }

  return (
    <div onClick={handleCallback} id={props.label} className="singleChoice">
      <img src={props.src} alt={""} className="image" />
      <p>{props.description}</p>
    </div>
  );
}
export default Choices;
