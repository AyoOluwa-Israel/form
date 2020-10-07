import React from 'react'

const Hero = ({handleLogOut}) => {
  return (
    <div className= "hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogOut}>Logout</button>
      </nav>
    </div>
  )
}

export default Hero
