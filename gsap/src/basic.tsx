import React, { useEffect, useRef } from 'react'
import logo from './logo.svg'
import './App.scss'
import gsap, { Power3 } from 'gsap'

function Basic() {
  const logoItem = useRef<HTMLImageElement | null>(null)
  const textItem = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    console.log(logoItem)
    gsap.to(logoItem.current, { opacity: 1, duration: 3, y: -50, ease: Power3.easeOut })
    gsap.to(textItem.current, { opacity: 1, delay: 0.2, y: -50, ease: Power3.easeOut })
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img ref={logoItem} src={logo} className='App-logo' alt='logo' />
        <p ref={textItem}>Edist src/App.tsx and save to reldoad.</p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  )
}

export default Basic
