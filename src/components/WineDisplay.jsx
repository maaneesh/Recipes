import React from 'react'


const recommendationsStyle = {

  backgroundColor: "red",
  padding: '20px 20px',


}


function WineDisplay({wine}) {

  // console.log(wine);
  return (
    <div style={recommendationsStyle}>
     
    <img src={wine.imageUrl}/>
      <p>{wine.title}</p>
      <p>{wine.description}</p>
      <p>{wine.price}</p>
      <p>{wine.averageRating}</p>

    </div>
  )

}


export default WineDisplay