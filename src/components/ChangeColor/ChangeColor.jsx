import React, { useState } from 'react'
import styles from './ChangeColor.module.css'

function ChangeColor() {
  const [isClicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!isClicked)
  }

  const textColor = {
    color: isClicked ? 'green' : 'black',
    cursor: 'pointer',
  }

  return (
    <p onClick={handleClick} style={textColor} className={styles.pcolor}>
      Click here to change text color!
    </p>
  )
}

export default ChangeColor
