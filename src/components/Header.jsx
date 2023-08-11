import React from 'react'

const headerStyle = {
    fontFamily: 'Lato',
    width: '100%',
    backgroundColor: "#F9F1F0",
    color: '#50006C',
    fontSize: '1.5rem',
}
const subHeaderStyle = {
    backgroundColor: "#F9F1F0",
    margin:'10px 10px',
    pading: '10px 10px',
    fontSize: '0.8rem',


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