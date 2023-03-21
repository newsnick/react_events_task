import React, { useState } from 'react'

function RandomWord() {
  const [word, setWord] = useState('')

  const handleClick = () => {
    const words = [
      'cherry',
      'strawberry',
      'watermelon',
      'papaya',
      'apple',
      'orange',
    ]
    const randomWord = words[Math.floor(Math.random() * words.length)]
    setWord(randomWord)
  }

  return (
    <div>
      <button onClick={handleClick}>Get random word!</button>
      {word && <p>{word}</p>}
    </div>
  )
}

export default RandomWord
