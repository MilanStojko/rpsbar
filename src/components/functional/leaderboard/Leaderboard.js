function Leaderboard(props) {
  let newLeaderboard = JSON.parse(localStorage.getItem("leaderboard"));

  function compare(a, b) {
    if (a.score < b.score) {
      return -1;
    }
    if (a.score > b.score) {
      return 1;
    }
    return 0;
  }
  newLeaderboard.sort(compare);

  return (
    <>
      <div>
        {newLeaderboard !== [] &&
          newLeaderboard.map((element, key) => {
            return (
              <div key={key}>
                <span>{playerNow(element)}</span>
                <span>{element.score}</span>
              </div>
            );
          })}
        <div>
          <h1>ANCORA NESSUNO IN CLASSIFICA</h1>
        </div>
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
