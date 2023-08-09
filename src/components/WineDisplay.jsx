import React from 'react'


function WineDisplay({wine}) {

  const apiGet = (e) => {
    console.log('Click Event');
  }

  console.log(wine);


  return (
    <div>
     
      {/* <h2>{wine.title}</h2> */}
      <p>description</p>
      <p>price</p>

    </div>
  )
}

export default WineDisplay