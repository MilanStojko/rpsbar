function Choices(props) {

    function handleCallback(){
        props.callback(props.label)
    }

  return <div onClick={handleCallback} id={props.label}><img src={props.src} alt={"AAAAAA"}/></div>;
}
export default Choices;
