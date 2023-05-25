import React, { useEffect, useRef } from 'react'
import gsap, { Power2 } from 'gsap'
import People from '../../imgs/people.jpg'
import './imageRevealEffect.scss'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'

export const ImageRevealEffect = () => {
  const image = useRef<HTMLImageElement | null>(null)
  const container = useRef<HTMLDivElement | null>(null)
  const imageReveal = CSSRulePlugin.getRule('.img-container:after')
  const tl = gsap.timeline({})
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.to(container.current, { css: { visibility: 'visible' }, duration: 0 })
      tl.to(imageReveal, { width: '0%', ease: Power2.easeInOut, duration: 1.4 })
      tl.from(image.current, {
        scale: 1.6,
        ease: Power2.easeInOut,
        delay: -1.4,
        duration: 1.4
      })
    })
    return () => ctx.revert() // <-- CLEANUP!
  }, [])
  const handleMouseEnter = () => {
    gsap.to(image.current, {
      scale: 1.8,
      duration: 0.5
    })
  }

  const handleMouseLeave = () => {
    gsap.to(image.current, {
      scale: 1,
      duration: 0.5
    })
  }
  return (
    <section className='main'>
      <p>GSAP IMAGE REVEAL</p>
      <div className='container' ref={container}>
        <>
          <div className='img-container'>
            <img ref={image} src={People} alt='' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          </div>
        </>
      </div>
    </section>
  )
}

export default ImageRevealEffect
