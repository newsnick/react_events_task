import React, { useState } from 'react'
import styles from './Checkbox.module.css'

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
    setIsChecked(!isChecked)
    console.log(`Checkbox ${isChecked ? 'unchecked' : 'checked'}`)
  }

  return (
    <label>
      <input
        className={styles.label}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      Check me
    </label>
  )
}

export default Checkbox
