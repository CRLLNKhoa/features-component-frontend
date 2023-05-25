import React, { useEffect, useRef } from 'react'
import gsap, { Power3 } from 'gsap'
import imgGirl from './images/girl.webp'
import imgBoy from './images/boy.webp'
import arrow from './images/arrow-right.svg'
import './Hero.scss'
export const Hero = () => {
  const app = useRef<HTMLDivElement | null>(null)
  const images = useRef<HTMLDivElement | null>(null)
  const content = useRef<HTMLDivElement | null>(null)
  const tl = gsap.timeline({ repeat: 0, repeatDelay: 1 })
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Images Vars
      const girlImage = images.current?.firstElementChild as HTMLElement

      const boyImage = images.current?.lastElementChild as HTMLElement

      //content vars
      const headlineFirst = content.current?.children[0].children[0] as HTMLElement
      const headlineSecond = headlineFirst?.nextSibling as HTMLElement
      const headlineThird = headlineSecond?.nextSibling as HTMLElement
      const contentP = content.current?.children[1] as HTMLElement
      const contentButton = content.current?.children[2] as HTMLElement

      //Remove initial flash
      gsap.to(app.current, { css: { visibility: 'visible' }, duration: 0.1 })

      //Images Animation
      tl.from(girlImage, { y: 1280, ease: Power3.easeOut, duration: 1.2 }, 'Start')
        .from(girlImage.firstElementChild, { scale: 1.6, ease: Power3.easeOut, duration: 2 }, 0.2)
        .from(boyImage, { y: 1280, ease: Power3.easeOut, duration: 1.4 }, 0.2)
        .from(boyImage.firstElementChild, { scale: 1.6, ease: Power3.easeOut, duration: 2 }, 0.2)

      //Content Animation
      tl.from(
        [headlineFirst.children, headlineSecond.children, headlineThird.children],
        {
          y: 44,
          ease: Power3.easeOut,
          delay: 0.8,
          duration: 1
        },
        0.15
      )
        .from(contentP, { y: 20, opacity: 0, ease: Power3.easeOut, duration: 1 }, 1.4)
        .from(contentButton, { y: 20, opacity: 0, ease: Power3.easeOut, duration: 1 }, 1.6)
    })
    return () => ctx.revert()
  }, [tl])
  return (
    <div className='hero' ref={app}>
      <div className='container'>
        <div className='hero-inner'>
          <div className='hero-content'>
            <div className='hero-content-inner' ref={content}>
              <h1>
                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>Relieving the burden</div>
                </div>
                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>of disease caused</div>
                </div>
                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>by behaviors.</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform lives and reduce healthcare utilization
                through the use of digital therapeutics.
              </p>
              <div className='btn-row'>
                <button className='explore-button'>
                  Explore
                  <div className='arrow-icon'>
                    <img src={arrow} alt='row' />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className='hero-images'>
            <div ref={images} className='hero-images-inner'>
              <div className='hero-image girl'>
                <img src={imgGirl} alt='girl' />
              </div>
              <div className='hero-image boy'>
                <img src={imgBoy} alt='boy' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
