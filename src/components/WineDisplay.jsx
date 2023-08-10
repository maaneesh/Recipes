import React from 'react'


const recommendationsStyle = {

  backgroundColor: "#F9F1F0",
  padding: '20px 20px',


}
const nameStyle = {
  fontSize: '2em',
  fontStyle: 'italic',

}
const descriptionStyle = {
  fontWeight:'normal' ,
  
}
const priceStyle = {
  fontSize: '2em',
  fontWeight:'normal' ,
  
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
      <div style={descriptionStyle}>{wine.description}</div>
      <div style={priceStyle}>{wine.price}</div>
      <div>{wine.averageRating}</div>

    </div>
  )

}


export default WineDisplay