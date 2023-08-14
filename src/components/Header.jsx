import React from 'react'

const headerStyle = {
    
    width: '100%',
    padding: '5px 0',
    backgroundColor: "#E3E8E9",
  
}
const titleStyle = {
    fontFamily: 'Lato',
    fontStyle: 'italic',
    padding: '0 10px',
    color: '#B21368',
    fontSize: '4rem',
    fontWeight:'bold',
    textShadow: '2px 2px 5px #750075',

   
}
const subtitleStyle = {
    margin:'-35px 10px',
    padding: '0 10px',
    fontSize: '1.2rem',
    color: '#750075',
    fontStyle: 'oblique 10deg',
    
}

function Header() {
  return (
    <div style={headerStyle}>
        <h1 style={titleStyle}>City Wineshop</h1>
        <div style={subtitleStyle}><p>Serving New York since 1947.</p>
        </div>
    </div>

  )
}

export default Header