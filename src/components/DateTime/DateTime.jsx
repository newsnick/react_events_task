import React, { useState } from 'react'
import styles from './DateTime.module.css'

function DateTime() {
  const [dateTime, setDateTime] = useState(new Date())

  const handleClick = () => {
    setDateTime(new Date())
  }

  return (
    <div>
      <p className={styles.p}>{dateTime.toLocaleString()}</p>
      <button onClick={handleClick}>Refresh</button>
    </div>
  )
}

export default DateTime
