import React from 'react'

const headerStyle = {
    fontFamily: 'Lato',
    width: '100%',
    padding: '10px 0',
    backgroundColor: "#E3E8E9",
    color: '#00735C',
    fontSize: '1.5rem',
}
const subHeaderStyle = {
    backgroundColor: "#E3E8E9",
    margin:'-35px 10px',
    fontSize: '1rem',


}

function Header() {
  return (
    <div style={headerStyle}>
        <h1>City Winery</h1>
        <div style={subHeaderStyle}><p>New York's finest since 1947.</p>
        </div>
    </div>

  )
}

export default Header