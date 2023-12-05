import { levels } from "../levels";

function GameOver({closeHandler, level, score, name}) {
  return (
    <div className="modal">
      <h1>Game Over !</h1> 
      <p>{name}</p>
      <h2>{score}</h2>
      <p>{level}</p>
      <button onClick={closeHandler}>X</button>
    </div>
  );
}

export default GameOver;