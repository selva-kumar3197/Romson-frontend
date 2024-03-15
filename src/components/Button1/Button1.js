import React, { useState } from 'react'

const Button1 = ({ text, classes}) => {
  const [hover, setHover] = useState(false)
  return (
    <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`ctaButton1 ${classes} ${hover ? "hover" : ""} `}>
      <span>{text}</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M0.5 7.5L14.5 7.5M14.5 7.5L8.5 1.5M14.5 7.5L8.5 13.5" stroke="#006C68" strokeWidth="1.5" />
      </svg>
    </button>
  )
}

export default Button1
