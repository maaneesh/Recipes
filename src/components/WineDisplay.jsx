import React, { useState } from 'react'


const recommendationsStyle = {

  backgroundColor: "#F9F1F0",
  padding: '20px 20px',


}
const nameStyle = {
  fontSize: '2em',
  fontStyle: 'italic',
  padding:'5px 5px',


}
const descriptionStyle = {
  fontFamily: "Lato",
  fontSize: '1.2rem',
  fontStyle: 'italic',

  padding:'5px 5px',

  
}
const priceStyle = {
  fontFamily: "Lato",
  fontSize: '1.8em',
  fontWeight:'normal' ,
  padding:'5px 5px',
  
}
const ratingStyle = {
  fontFamily: "Lato",
  fontSize: '1.5rem',
  fontWeight:'normal' ,
  padding:'5px 5px',

}

function WineDisplay({wine}) {
  return (
    wine.map((wine)=> {
      return(
        <div style={recommendationsStyle}>
        <img src={wine.imageUrl}/>
        <div style={nameStyle}>{wine.title}</div>
        <div style={descriptionStyle}>{wine.description}</div>
        <div style={priceStyle}>{wine.price}</div>
        <div style={ratingStyle}>{wine.averageRating}</div>
  
      </div>
      )
    })
   
  )

}


export default WineDisplay