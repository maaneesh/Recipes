import React, { useState } from 'react'


const recommendationsStyle = {

  backgroundColor: "#F9F1F0",
  padding: '20px 20px',

}

const imageStyle = {

  padding:'5px 5px',  
}
const nameStyle = {
  fontSize: '2em',
  color: '#5F093D',
  fontStyle: 'italic',
  fontWeight: 'bold',
  padding:'5px 5px',


}
const descriptionStyle = {
  fontFamily: "Lato",
  fontSize: '1.2rem',
  color: '#B21368',
  fontStyle: 'italic',
  padding:'5px 5px',  
}
const priceStyle = {
  fontFamily: "Lato",
  fontSize: '1.8em',
  fontWeight:'bold',
  color: '#5F093D',
  padding:'5px 5px',
  
}
const ratingStyle = {
  fontFamily: "Lato",
  fontSize: '1.5rem',
  fontWeight:'normal',
  color: '#5F093D',
  padding:'5px 5px',

}

function WineDisplay({wine}) {
  return (
    wine.map((wine)=> {
      return(
        <div style={recommendationsStyle}>
        <img style={imageStyle} src={wine.imageUrl}/>
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