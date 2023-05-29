import React, { useRef, useEffect, useState } from 'react'
import './ScrollTriggers.scss'

import gsap, { Power2 } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollTriggers = () => {
  const squareRef = useRef<HTMLDivElement | null>(null)
  const tl = gsap.timeline()
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.panel', {
        scrollTrigger: {
          markers: true,
          trigger: '.panel',
          start: 'top 6%',
          toggleClass: {
            targets: 'nav',
            className: 'nav-active'
          }
        }
      })
      // USE SCROLLTRIGGER TO ANIMATE THE SQUARE
      // gsap.fromTo(
      //   '.square',
      //   {
      //     x: 1000,
      //     opacity: 0,
      //   },
      //   {
      //     x: 0,
      //     opacity: 1,
      //     duration: 3,
      //     rotation: 360,
      //     scrollTrigger: {
      //       trigger: '.square',
      //       start: 'top 30%',
      //       end: 'top 15%',
      //       markers: true,
      //       toggleActions: 'restart pause resume ',
      //       //           onEnter   onLeave  onLeaveBack  onEnterBack
      //       onEnter: () => {
      //         console.log('Enter');
      //       },
      //       onLeave: () => {
      //         console.log('Leave');
      //       },
      //       onEnterBack: () => {
      //         console.log('EnterBack');
      //       },
      //       onLeaveBack: () => {
      //         console.log('LeaveBack');
      //       },
      //     },
      //   }
      // )
      // LABELS
      // tl.to('.square', {
      //   x: 300,
      //   duration: 3,
      // })
      //   .to('.square', {
      //     y: 300,
      //     duration: 3,
      //   })
      //   .to('.square', {
      //     rotate: 360,
      //     repeat: 2,
      //     ease: Power2.easeInOut,
      //   })
      //   // explain: after add label 'rotate' we can use it in play() method. arg first is label name, second is time
      //   .addLabel('rotate', 0);
      // tl.play('rotate');
      // tl.to('.squareRed', {
      //   x: 300,
      //   duration: 3,
      //   delay: -6,
      // });
    })
    tl.to('.square', {
      x: 500,
      duration: 5,
      rotate: 360,
      scrollTrigger: {
        trigger: '.square',
        start: 'top center',
        end: 'bottom 30%',
        markers: true,
        scrub: true,
        toggleActions: 'restart pause resume reverse'
      }
    })

    const spansElement = gsap.utils.toArray('span') as HTMLElement[]
    spansElement.forEach((span) => {
      console.log('span', span)
      gsap.set(span, {
        color: 'red',
        height: '30px'
      })
      ScrollTrigger.create({
        trigger: span,
        start: 'bottom center',
        end: 'bottom 30%',
        markers: true,
        scrub: true,
        onEnter: () => {
          span.classList.add('span-active')
        },
        onLeave: () => {
          span.classList.remove('span-active')
        },
        onEnterBack: () => {
          span.classList.add('span-active')
        }
      })
    })
    return () => ctx.revert()
  }, [tl])
  // trigger span active

  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
        </ul>
      </nav>
      <div className='hung'>
        <p className='name'>namesnamesdadasdadas</p>
        <p className='user hi'>namesnamesdadasdadas</p>
      </div>
      <div className='panel'>
        <div className='squareRed'></div>
        <p>
          lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum velit laoreet id. Ac odio tempor orci
          dapibus. Et ultrices neque ornare aenean euismod elementum nis Massa id neque aliquam vestibulum. Nibh
          praesent tristique magna sit. Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam sem et tortor
          consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu consequat ac felis donec et. Vivamus arcu felis
          <span>hahuyhung bibendum ut tristique. Egestas diam in arcu cursus euismod quis viverra nibh hahuyhung.</span>
          sed nisi lacus sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Enim sit amet venenatis urna
          cursus eget. Tellus id interdum velit laoreet id. Ac odio tempor orci dapibus. Et ultrices neque ornare aenean
          euismod elementum nisi. Dolor morbi non arcu risus quis. Lectus sit amet est placerat in egestas erat
        </p>
        <p>
          Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu bibendum
          at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu consequat ac
          felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu cursus euismod quis viverra
          nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas pretium. Tortor vitae
          purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim diam quis enim
          <span>Nunc mi ipsum faucibus vitae aliquet nec. Eu consequat ac</span>
          felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu cursus euismod quis viverra
          nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas pretium. Tortor vitae
          purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim diam quis enim
          imperdiet. Cum sociis natoque penatibus
          <span>Nunc mi ipsum faucibus vitae aliquet nec. Eu consequat ac</span>
          et magnis dis. Massa id neque Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu
          augue ut lectus arcu bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae
          aliquet nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu
          cursus euismod quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis
          egestas pretium. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi etiam
          dignissim diam quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum velit laoreet
          id. Ac odio tempor orci dapibus. Et ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non arcu
          risus quis. Lectus sit amet est placerat in egestas erat imperdiet. Cum sociis natoque penatibus et magnis
          dis. Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu
          bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
          consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique.
          <div className='square' ref={squareRef}></div>
          <span>Nunc mi ipsum faucibus vitae aliquet nec. Eu consequat ac</span>
          Egestas diam in arcu cursus euismod quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis.
          Enim eu turpis egestas pretium. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla
          facilisi etiam dignissim diam quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum
          velit laoreet id. Ac odio tempor orci dapibus. Et ultrices neque ornare aenean euismod elementum nisi. Dolor
          morbi non arcu risus quis. Lectus sit amet est placerat in Massa id neque aliquam vestibulum. Nibh praesent
          tristique magna sit. Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam sem et tortor consequat
          id. Nunc mi ipsum faucibus vitae aliquet nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut
          tristique. Egestas diam in arcu cursus euismod quis viverra nibh. Donec ac odio tempor orci dapibus ultrices
          in iaculis. Enim eu turpis egestas pretium. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed.
          Eget nulla facilisi etiam dignissim diam quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus
          id interdum velit laoreet id. Ac odio tempor orci dapibus. Et ultrices neque ornare aenean euismod elementum
          nisi. Dolor morbi non arcu risus quis. Lectus sit amet est placerat in egestas erat imperdiet. Cum sociis
          natoque penatibus et magnis dis. Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor
          eu augue ut lectus arcu bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus
          vitae aliquet nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in
          arcu cursus euismod quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis
          egestas pretium. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi etiam
          dignissim diam quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum velit laoreet
          id. Ac odio tempor orci dapibus. Et ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non arcu
          risus quis. Lectus sit amet est placerat in aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu
          augue ut lectus arcu bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae
          aliquet nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu
          cursus euismod quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis
          egestas pretium. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi etiam
          dignissim diam quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum velit laoreet
          id. Ac odio tempor orci dapibus. Et ult Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit.
          Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum
          faucibus vitae aliquet nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas
          diam in arcu cursus euismod quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu
          turpis egestas pretium. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi
          etiam dignissim diam quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum velit
          laoreet id. Ac odio tempor orci dapibus. Et ultrices neque ornare aenean euismod elementum nisi. Dolor morbi
        </p>

        <p>
          non arcu risus quis. Lectus sit amet est placerat in egestas erat imperdiet. Cum sociis natoque penatibus et
          magnis dis. Massa id neque Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu
          augue ut lectus arcu bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae
          aliquet nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu
          cursus euismod quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis
          egestas pretium. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi
          <span>Nunc mi ipsum faucibus vitae aliquet nec. Eu consequat ac</span>
          etiam dignissim diam quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum velit
          laoreet id. Ac odio tempor orci dapibus. Et ultrices neque ornare aenean euismod elementum nisi. Dolor morbi
          non arcu risus quis. Lectus sit amet est placerat in egestas erat imperdiet. Cum sociis natoque penatibus et
          magnis
        </p>
        <p>
          dis. Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu
          bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
          consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu cursus euismod
          quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas pretium.
          Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim diam
          quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum velit laoreet id. Ac odio
          tempor orci dapibus. Et ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non arcu risus quis.
          Lectus sit amet est placerat in Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor
          eu augue ut lectus arcu bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus
          vitae aliquet nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in
          arcu cursus euismod quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis
          egestas pretium. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi etiam
          dignissim diam quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum velit laoreet
          id. Ac odio tempor orci dapibus. Et ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non arcu
          risus quis. Lectus sit amet est placerat in egestas erat imperdiet. Cum sociis natoque penatibus et magnis
          dis. Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu
          bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
          consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu cursus euismod
          quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas pretium.
          Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim diam
          quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum velit laoreet id. Ac odio
          tempor orci dapibus. Et ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non arcu risus quis.
          Lectus sit amet est placerat in aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut
          lectus arcu bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet
          nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu cursus
          euismod quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas
          pretium. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi etiam
          dignissim diam quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum velit laoreet
          id. Ac odio tempor orci dapibus. Et ulti. Dolor morbi non arcu risus quis. Lectus sit amet est placerat in
          egestas erat imperdiet. Cum sociis natoque penatibus et magnis dis. Massa id neque aliquam vestibulum. Nibh
          praesent tristique magna sit. Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam sem et tortor
          consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu consequat ac felis donec et. Vivamus arcu felis
          bibendum ut tristique. Egestas diam in arcu cursus euismod quis viverra nibh. Donec ac odio tempor orci
          dapibus ultrices in iaculis. Enim eu turpis egestas pretium. Tortor vitae purus faucibus ornare suspendisse
          sed nisi lacus sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Enim sit amet venenatis urna
          cursus eget. Tellus id interdum velit laoreet id. Ac odio tempor orci dapibus. Et ultrices neque ornare aenean
          euismod elementum nisi. Dolor morbi non arcu risus quis. Lectus sit amet est placerat in Massa id neque
          aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu bibendum at varius. Nam
          aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu consequat ac felis donec et.
          Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu cursus euismod quis viverra nibh. Donec ac odio
          tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas pretium. Tortor vitae purus faucibus ornare
          suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Enim sit amet
          venenatis urna cursus eget. Tellus id interdum velit laoreet id. Ac odio tempor orci dapibus. Et ultrices
          neque ornare aenean euismod elementum nisi. Dolor morbi non arcu risus quis. Lectus sit amet est placerat in
          egestas erat imperdiet. Cum sociis natoque penatibus et magnis dis. Massa id neque aliquam vestibulum. Nibh
          praesent tristique magna sit. Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam sem et tortor
          consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu consequat ac felis donec et. Vivamus arcu felis
          bibendum ut tristique. Egestas diam in arcu cursus euismod quis viverra nibh. Donec ac odio tempor orci
          dapibus ultrices in iaculis. Enim eu turpis egestas pretium. Tortor vitae purus faucibus ornare suspendisse
          sed nisi lacus sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Enim sit amet venenatis urna
          cursus eget. Tellus id interdum velit laoreet id. Ac odio tempor orci dapibus. Et ultrices neque ornare aenean
          euismod elementum nisi. Dolor morbi non arcu risus quis. Lectus sit amet est placerat in aliquam vestibulum.
          Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam sem et
          tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu consequat ac felis donec et. Vivamus arcu
          felis bibendum ut tristique. Egestas diam in arcu cursus euismod quis viverra nibh. Donec ac odio tempor orci
          dapibus ultrices in iaculis. Enim eu turpis egestas pretium. Tortor vitae purus faucibus ornare suspendisse
          sed nisi lacus sed. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Enim sit amet venenatis urna
          cursus eget. Tellus id interdum velit laoreet id. Ac odio tempor orci dapibus. Et ultrices neque ornare aenean
          euismod elementum nisi. Dolor morbi non arcu risus quis. Lectus sit amet est placerat in
        </p>
      </div>
    </div>
  )
}

export default ScrollTriggers
