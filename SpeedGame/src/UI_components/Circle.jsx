function Circle({id, clickHandler}) {
  return (<div className="circle" onClick={() => clickHandler(id)}>
    <p><img src="./src/assets/snowflake.png" alt="snowflake" /></p>
    <p>{id}</p>
  </div>);
}

export default Circle;