import React from 'react'


const recommendationsStyle = {

  backgroundColor: "red",
  padding: '20px 20px',


}
const nameStyle = {
  fontSize: '2em',

}
// const Title = styled.h1`
// 
// `

function WineDisplay({wine}) {

  // console.log(wine);
  return (
    <div style={recommendationsStyle}>
     
      <img src={wine.imageUrl}/>
      <div style={nameStyle}>{wine.title}</div>
      <div>{wine.description}</div>
      <div>{wine.price}</div>
      <div>{wine.averageRating}</div>

    </div>
  )

}


export default WineDisplay