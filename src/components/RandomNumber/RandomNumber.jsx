import React, { useState } from 'react'
import styles from './RandomNumber.module.css'

function RandomNumber() {
  const [number, setNumber] = useState(null)

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    setNumber(randomNumber)
  }

  return (
    <div>
      <button className={styles.button} onClick={handleClick}>
        Get random number!
      </button>
      {number && <p>{number}</p>}
    </div>
  )
}

export default RandomNumber
