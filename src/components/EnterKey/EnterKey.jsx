import React, { useState } from 'react'
import styles from './EnterKey.module.css'

function EnterKey() {
  const [inputValue, setInputValue] = useState('')

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log(`You entered: ${inputValue}`)
      setInputValue('')
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <input
      className={styles.input}
      type="text"
      value={inputValue}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  )
}

export default EnterKey
