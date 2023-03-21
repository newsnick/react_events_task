import React from 'react'
import styles from './MessageLog.module.css'

function MessageLog() {
  const handleClick = () => {
    console.log('Message logged!')
  }
  return (
    <div className={styles.button}>
      <button onClick={handleClick}>click for log</button>
    </div>
  )
}

export default MessageLog
