function Leaderboard(props) {
  let newLeaderboard = JSON.parse(localStorage.getItem("leaderboard"));
  let counter = 0;

  return (
    <>
      <div>
        {newLeaderboard.map((element, key) => {
          return (
            <div key={key}>
              {(counter = counter + 1)}
              <span>{counter}</span>
              <span>{playerNow(element)}</span>
              <span>{element.score}</span>
            </div>
          );
        })}
      </div>
    </>
  );

  function playerNow(element) {
    if (element.name === props.playerNow) {
      return <span className="thisPlayer">{element.name}</span>;
    } else {
      return <span className="genericPlayer">{element.name}</span>;
    }
  }
}
export default Leaderboard;
