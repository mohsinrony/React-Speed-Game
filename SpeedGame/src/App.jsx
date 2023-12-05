import { useState, useRef } from 'react'
import NewGame from './components/NewGame'
import { levels } from './levels'
import './App.css'
import Circle from './UI_components/Circle'
import Game from './components/Game'
import GameOver from './components/GameOver'


function App() {
  const [player, setPlayer]= useState()
  const [circles, setCircles] = useState([])
  const [score, setScore] = useState(0)
  const [gameOn, setGameOn] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [gameLaunch, setGameLaunch] = useState(true)
  const [current, setCurrent] = useState(-1);

 
  /* const timeoutIdRef = useRef(null)
  function randomNumb() {
    timoutIdRef.current = setTimeout(randomNumb, pace)
    function stopHandler(){
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null
    }
  }
  */
  let timer;
  let pace = 1000;
   
  const getRndInt = (min, max) =>  {Math.floor(Math.random() * (max - min + 1) ) + min};
  
   const gameSetHandler = (level,name) => {
  
    const levelIndex = levels.findIndex(el => el.name === level);
    const levelAmount = levels[levelIndex].amount
    const criclesArray = Array.from({ length: levelAmount }, (_, i)=> i);
  

    setCircles(criclesArray)
    setPlayer({
    level: level,
    name: name
    })
    setGameLaunch(!gameLaunch)
    setGameOn(!gameOn)
    randomNumb();
    
    }
      const stopHandler = () => {
        setGameOn(!gameOn)
        setGameOver(!gameOver)
        clearTimeout(timer)
      }

      const closeHandler = () => {
        setGameOver(!gameOver)
        setGameLaunch(!gameLaunch)
        setScore(0)
      }
      const clickHandler = (id) => {
        setScore(score + 10);
      };
     
      const randomNumb = () => {
        let nextActive;
        do {
          nextActive = getRndInt(0, circles.length)
        } while(nextActive === current );

        setCurrent(nextActive)
        timer = setTimeout(randomNumb, pace)
      };

  return (
    <>
      
       <h1>Catch the snowflake !</h1>
       
    {gameLaunch && <NewGame onclick={gameSetHandler}/>}
     {/* < {circles.map(el => <Circle/>)}> */}
     {gameOn && <Game 
     score={score} 
     circles= {circles}
     clickHandler = {clickHandler} 
     stopHandler={stopHandler}/>}
   
    {gameOver && <GameOver closeHandler={closeHandler} {...player} score={score}/>}
    </>
  )
}

export default App;
