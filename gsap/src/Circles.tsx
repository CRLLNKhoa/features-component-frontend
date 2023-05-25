import gsap, { Power3 } from 'gsap'
import { useEffect, useRef } from 'react'
import './App.scss'

function Circles() {
  const circleYellow = useRef<HTMLDivElement | null>(null)
  const circleRed = useRef<HTMLDivElement | null>(null)
  const circleBlue = useRef<HTMLDivElement | null>(null)
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
  useEffect(() => {
    const ctx = gsap.context(() => {
      // gsap.from(circleYellow.current, { x: 100, duration: 2, ease: Power3.easeOut });
      // gsap.from(circleRed.current, { x: 40, duration: 1, ease: Power3.easeOut, delay: 0.2 });
      // gsap.from(circleBlue.current, { x: 40, duration: 1, ease: Power3.easeOut, delay: 0.4 });
      tl.from([circleYellow.current, circleRed.current, circleBlue.current], {
        x: 100,
        duration: 0.8,
        ease: Power3.easeOut,
        cursor: 'pointer',
        stagger: {
          amount: 1.5,
          // from: 'center',
          grid: 'auto',
          ease: 'power3.inOut',
          repeat: 1,
          yoyo: true,
          each: 0.2
        }
      })
    })
    return () => ctx.revert() // <-- CLEANUP!
  }, [tl])

  const handleExpand = (name: React.MutableRefObject<HTMLDivElement | null>) => {
    gsap.to(name.current, { height: 200, width: 200, duration: 1, ease: Power3.easeOut })
  }
  const handleShrink = (name: React.MutableRefObject<HTMLDivElement | null>) => {
    gsap.to(name.current, { height: 75, width: 75, duration: 1, ease: Power3.easeOut })
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='cirle-container'>
          <div
            ref={circleYellow}
            className='circle yellow'
            onMouseEnter={() => handleExpand(circleYellow)}
            onMouseLeave={() => handleShrink(circleYellow)}
          ></div>
          <div
            ref={circleRed}
            onMouseEnter={() => handleExpand(circleRed)}
            onMouseLeave={() => handleShrink(circleRed)}
            className='circle red'
          ></div>
          <div
            ref={circleBlue}
            className='circle blue'
            onMouseEnter={() => handleExpand(circleBlue)}
            onMouseLeave={() => handleShrink(circleBlue)}
          ></div>
        </div>
      </header>
    </div>
  )
}

export default Circles
