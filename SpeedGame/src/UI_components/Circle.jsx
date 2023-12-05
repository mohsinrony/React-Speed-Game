function Circle({id, clickHandler, current}) {
  return (<div className={`circle ${current ? 'active' : ''}`} 
  onClick={() => clickHandler(id)}>
    <p><img src="./src/assets/snowflake.png" alt="snowflake" /></p>
    <p>{id}</p>
  </div>);
}

export default Circle;