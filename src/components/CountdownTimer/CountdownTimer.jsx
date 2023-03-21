import React, { useState, useEffect } from 'react'
import styles from './CountdownTimer.module.css'

function CountdownTimer() {
  const [timeLeft, setSecondsLeft] = useState(10)

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setSecondsLeft(timeLeft - 1)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [timeLeft])

  const handleClick = () => {
    setSecondsLeft(10)
  }

  return (
    <div>
      <p className={styles.p}>{timeLeft} seconds left</p>
      <button onClick={handleClick}>Reset</button>
    </div>
  )
}

export default CountdownTimer
