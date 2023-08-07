import React from 'react'

function Fetch() {


  const apiGet = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then( response => response.json())
    .then((json) => console.log(json))

  };
    
  return (
    <div>Fetch
      <br/>
      <button onClick={apiGet}>Fetch API</button>
    </div>
  )
}

export default Fetch