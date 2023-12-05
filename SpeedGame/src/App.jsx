import { useState, useRef } from 'react'
import NewGame from './components/NewGame'
import { levels } from './levels'
import './App.css'
import Game from './components/Game'
import GameOver from './components/GameOver'


function App() {
  const [player, setPlayer] = useState()
  const [circles, setCircles] = useState([])
  const [score, setScore] = useState(0)
  const [gameOn, setGameOn] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [gameLaunch, setGameLaunch] = useState(true)
  const [current, setCurrent] = useState(-1);
  const timeoutIdRef = useRef(null);
  const rounds = useRef(0);
  const currentInst = useRef(0);
  /*  function randomNumb() {
     timoutIdRef.current = setTimeout(randomNumb, pace)
     function stopHandler(){
       clearTimeout(timeoutIdRef.current);
       timeoutIdRef.current = null
     }
   } */

  /* let timer; */
  let pace = 1000;
  let levelsAmount;

  const getRndInt = (min, max) => { Math.floor(Math.random() * (max - min /* + 1 */)) + min };
  const gameSetHandler = (level, name) => {

    /*  const levelIndex = levels.findIndex(el => el.name === level);
     const levelAmount = levels[levelIndex].amount 
     levelsAmount = levels[levelIndex].amount Or code below */
    const { amount } = levels.find(el => el.name === level);
    levelsAmount = amount;
    const criclesArray = Array.from({ length: amount }, (_, i) => i);

    setCircles(criclesArray)
    setPlayer({
      level: level,
      name: name
    })
    setGameLaunch(!gameLaunch);
    /* setGameLaunch((prevLaunch) => !prevLaunch); */
    setGameOn(!gameOn);
    randomNumb();

  }
  const stopHandler = () => {
    setGameOn(!gameOn);
    setGameOver(!gameOver);
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;
  }

  const closeHandler = () => {
    setGameOver(!gameOver)
    setGameLaunch(!gameLaunch)
    setScore(0)
  }

  const clickHandler = (id) => {
    if (current !== id) {
      stopHandler();
      return;
    }
    setScore(score + 10);
    /* rounds.current--; */
    rounds.current=0;
  };

  const randomNumb = () => {
    if (rounds.current >= 3){
      stopHandler();
      return;
    }
    let nextActive;
    do {
      nextActive = getRndInt(0, levelsAmount)
    } while (nextActive === currentInst.current);

    setCurrent(nextActive);
    currentInst.current= nextActive;
    rounds.current++;
    pace *= 0.95;
    timeoutIdRef.current = setTimeout(randomNumb, pace);
    console.log(nextActive);
  };

  return (
    <>

      <h1>Catch the snowflake !</h1>

      {gameLaunch && <NewGame onclick={gameSetHandler} />}
      {/* < {circles.map(el => <Circle/>)}> */}
      {gameOn && <Game
        score={score}
        circles={circles}
        clickHandler={clickHandler}
        stopHandler={stopHandler} />}

      {gameOver && <GameOver closeHandler={closeHandler} {...player} score={score} />}
    </>
  )
}

export default App;
