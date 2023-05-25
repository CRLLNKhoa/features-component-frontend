import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useState } from 'react'
import '../Intersection/Intersection.scss'
gsap.registerPlugin(ScrollTrigger)

export const Intersection = () => {
  // let sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState('sectionFirst')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.square', {
        x: 500,
        duration: 3,
        scrollTrigger: {
          trigger: '.square',
          // start: 'top 60%',
          // end: 'center 30%',
          markers: true,
          toggleClass: 'red',
          toggleActions: 'restart  pause  resume      reset'
          // play pause resume reverse restart reset complete none
          //             onEnter   onLeave  onEnterBack  onLeaveBack
          // scrub: 1,
          // pin: '.square',
          // pinSpacing: true,
          // onEnter: () => {
          //   console.log('Enter');
          // },
          // onLeave: () => {
          //   console.log('Leave');
          // },
          // onEnterBack: () => {
          //   console.log('EnterBack');
          // },
          // onLeaveBack: () => {
          //   console.log('LeaveBack');
          // },
        }
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className='header'>
        <div className='sm-btn'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-chevron-left'
          >
            <polyline points='15 18 9 12 15 6'></polyline>
          </svg>
        </div>
        <h5>About</h5>
        <div className='sm-btn'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-send'
          >
            <line x1='22' y1='2' x2='11' y2='13'></line>
            <polygon points='22 2 15 22 11 13 2 9 22 2'></polygon>
          </svg>
        </div>
      </div>
      <div className='content'>
        <section className='sectionFirst'>
          <div className='pic'>
            <img
              src='https://cdn.dribbble.com/users/997665/screenshots/9634478/media/8ad68f67fdbfb09bc054937edecf2d27.png'
              alt=''
            />
          </div>
          <h3>Alara Frank</h3>
          <p className='fadeIn'>
            Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu
            bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
            consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu cursus euismod
            quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas pretium.
          </p>
        </section>

        <section className='sectionSecond'>
          <div className='square'></div>
          <div className='square2'></div>
          <div className='inner'>
            <h3 className='fadeIn'>The talk of what makes a champion.</h3>
            <p className='fadeIn'>
              Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu
              bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
              consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu cursus euismod
              quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas pretium.
              Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim
              diam quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum velit laoreet id. Ac
              odio tempor orci dapibus. Et ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non arcu
              risus quis. Lectus sit amet est placerat in egestas erat imperdiet. Cum sociis natoque penatibus et magnis
              dis.
            </p>
            <div className='btn-row fadeIn'>
              <a href='/'>Click here bruh</a>
            </div>
          </div>
        </section>
        <section className='sectionThird'>
          <h3>New Section</h3>
          <p className='fadeIn'>
            Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu
            bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
            consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu cursus euismod
            quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas pretium.
            Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim diam
            quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum velit laoreet id. Ac odio
            tempor orci dapibus. Et ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non arcu risus
            quis. Lectus sit amet est placerat in egestas erat imperdiet. Cum sociis natoque penatibus et magnis dis.
            Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu
            bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
            consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu cursus euismod
            quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas pretium.
            Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim diam
            quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum velit laoreet id. Ac odio
            tempor orci dapibus. Et ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non arcu risus
            quis. Lectus sit amet est placerat in
          </p>
        </section>
      </div>
    </>
  )
}

export default Intersection
