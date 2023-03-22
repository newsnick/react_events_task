import React, { useState } from 'react'

function MouseOver() {
  const [isMouseOver, setIsMouseOver] = useState(false)

  const handleMouseEnter = () => {
    setIsMouseOver(true)
  }

  const handleMouseLeave = () => {
    setIsMouseOver(false)
  }

  const boxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: isMouseOver ? 'dodgerblue' : 'red',
    margin: '1%',
    transition: 'background-color 0.5s ease-in-out',
  }

  return (
    <div
      style={boxStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></div>
  )
}

export default MouseOver
