import React, { useState } from 'react'

function PopupDisplay() {
  const [isShown, setIsShown] = useState(false)

  const handleClick = () => {
    setIsShown(true)
  }

  const handleHide = () => {
    setIsShown(false)
  }

  const popupStyle = {
    maxWidth: '50%',
    padding: '20px',
    backgroundColor: 'lightgray',
    borderRadius: '5px',
    boxShadow: '2px 2px 10px gray',
    cursor: 'pointer',
  }

  return (
    <div>
      <button onClick={handleClick}>Click me to show a popup message</button>
      {isShown && (
        <div style={popupStyle}>
          <p>popup message!</p>
          <button onClick={handleHide}>Close</button>
        </div>
      )}
    </div>
  )
}

export default PopupDisplay
