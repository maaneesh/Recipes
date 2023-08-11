import React from 'react'

const headerStyle = {
    fontFamily: 'Lato',
    width: '100%',
    fontSize: '1.5rem',
}

function Header() {
  return (
    <div style={headerStyle}>
        <h1>City Winery</h1>
        {/* <p>New York's finest since 1947.</p> */}
    </div>

  )
}

export default Header