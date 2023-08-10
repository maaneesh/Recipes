import React from 'react'

const headerStyle = {
    fontFamily: 'Lato',
    width: '100%',
    fontSize: '1.5rem',
}

function Header() {
  return (
    <div style={headerStyle}>
        <h1>Wine Search</h1>
    </div>
  )
}

export default Header