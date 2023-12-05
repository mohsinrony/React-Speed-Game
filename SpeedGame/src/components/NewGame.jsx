import { useState } from "react";







function NewGame( { onclick } ) {
  const [name, setName] = useState('')

  const inputHandler = (e) => {
    setName(e.target.value)
  }
  return (<div className="gameBoard">
    <h2>Enter your name! </h2>
    <input type="text" onChange={inputHandler} placeholder="Type your name"/>
    <p>Choose difficulty level to start!</p>
    <div className="buttons">
      <button onClick={()=> onclick('easy', name)}>Easy</button>
      <button onClick={()=> onclick('medium', name)}>Medium</button>
      <button onClick={()=> onclick('hard', name)}>Hard</button>
    </div>
  </div>
  );
}

export default NewGame;