import React, { useState, useEffect } from 'react'

function PageScroll() {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowMessage(true)
      } else {
        setShowMessage(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <div>{showMessage && <p>Page has been scrolled!</p>}</div>
}

export default PageScroll
