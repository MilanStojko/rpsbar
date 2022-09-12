import './choices.css'

function Choices(props) {
  function handleCallback() {
    props.callback(props.label);
  }

  return (
    <div onClick={handleCallback} id={props.label} >
      <img src={props.src} alt={""} className='image'/>
    </div>
  );
}
export default Choices;
