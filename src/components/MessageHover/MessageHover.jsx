import React, { useState } from 'react'
import styles from './MessageHover.module.css'

function MessageHover() {
  const [isMouseOver, setIsMouseOver] = useState(false)

  const handleMouseEnter = () => {
    setIsMouseOver(true)
  }

  const handleMouseLeave = () => {
    setIsMouseOver(false)
  }

  const messageStyle = {
    opacity: isMouseOver ? 1 : 0,
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p className={styles.message}>Hover over me</p>
      <div style={messageStyle}>
        <p>This message appears when you hover over the above text</p>
      </div>
    </div>
  )
}

export default MessageHover
