import Circle from "../UI_components/Circle";

function Game({score, circles, clickHandler, stopHandler}){
  return (
    <div>
      <p>{score}</p>
      <div className="circles">{
      circles.map((_, i) => <Circle key={i} id={i}
      clickHandler={clickHandler}/>)}
      </div>
      <button onClick={stopHandler}>Stop Game</button>
    </div>
  );
}

export default Game;