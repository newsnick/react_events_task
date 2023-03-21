import React, { useState } from 'react'

function RandomColor() {
  const [color, setColor] = useState('')

  const handleClick = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    setColor(randomColor)
  }

  const style = {
    backgroundColor: color,
    height: '100px',
    width: '100px',
    borderRadius: '25%',
    margin: '1%',
  }
  return (
    <div>
      <button onClick={handleClick}>Get random color!</button>
      <div style={style}></div>
    </div>
  )
}

export default RandomColor
