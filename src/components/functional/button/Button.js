function Button() {
  function handleClick() {
    props.callback();
  }

  return (
    <>
      <div>
        <button onClick={handleClick}></button>
      </div>
    </>
  );
}
export default Button;
