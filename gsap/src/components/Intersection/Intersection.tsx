import gsap, { Power2 } from 'gsap'
import { useEffect, useState } from 'react'
import './Intersection.scss'

export const Intersection = () => {
  useEffect(() => {
    // define the options for the observer
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8
    }
    // defint the target for the observer
    const target = document.querySelector('.content')?.querySelectorAll('section') as NodeListOf<HTMLElement>

    // define the observer
    const ActiveSection = (target: HTMLElement) => {
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const tl = gsap.timeline()
          const pElement = entry.target.querySelector('p')
          tl.fromTo(
            pElement,
            {
              opacity: 0,
              y: 20
            },
            {
              opacity: 1,
              y: 0,
              duration: 2,
              ease: Power2.easeOut
            }
          )

          if (entry.isIntersecting) {
            console.log(entry.target.className)
            tl.play()
          } else {
            tl.reverse(0)
          }
        })
      }, options)
      sectionObserver.observe(target)
    }
    // loop through the sections and observe each one
    target.forEach((section) => {
      ActiveSection(section)
    })
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
            1111Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu
            bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
            consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu cursus euismod
            quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas pretium.
          </p>
        </section>
        <section className='sectionSecond'>
          <div className='inner'>
            {/* <h3 className='fadeIn'>The talk of what makes a champion.</h3> */}
            <p className='fadeIn'>
              222222Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu
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
            333Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu
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
