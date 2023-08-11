import React from 'react'

const headerStyle = {
    
    width: '100%',
    padding: '10px 0',
    backgroundColor: "#E3E8E9",
  
}
const titleStyle = {
    fontFamily: 'Lato',
    padding: '0 10px',
    color: '#B21368',
    fontSize: '4rem',
    fontWeight:'bold',
   
}
const subtitleStyle = {
    margin:'-35px 10px',
    padding: '0 10px',
    fontSize: '1.2rem',
    color: '#5F093D',
    fontStyle: 'oblique 10deg',
    
}

function Header() {
  return (
    <div style={headerStyle}>
        <h1 style={titleStyle}>City Winery</h1>
        <div style={subtitleStyle}><p>Serving New York since 1947.</p>
        </div>
    </div>

  )
}

export default Header