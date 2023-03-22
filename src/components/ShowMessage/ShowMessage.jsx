import React, { useState, useEffect } from 'react'
import styles from './ShowMessage.module.css'

function ShowMessage() {
  const [keyPressed, setKeyPressed] = useState('')

  useEffect(() => {
    const handleKeyPress = (event) => {
      setKeyPressed(event.key)
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <div>
      <p>Press any key here</p>
      {keyPressed && <p>You pressed the "{keyPressed}" key</p>}
    </div>
  )
}

export default ShowMessage
