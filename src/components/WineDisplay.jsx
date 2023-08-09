import React from 'react'


function WineDisplay({wine}) {

  // console.log(wine);
  return (
    <div>
     
    <img src={wine.imageUrl}/>
      <p>{wine.title}</p>
      <p>{wine.description}</p>
      <p>{wine.price}</p>
      <p>{wine.averageRating}</p>

    </div>
  )

}


export default WineDisplay