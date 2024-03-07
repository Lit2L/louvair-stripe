'use client'

import { Button } from '@/components/ui/button'
import './Hero.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef, useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  //Opening animation

  // Specify the type of elements for useRef
  const backgroundWrapper = useRef<HTMLDivElement>(null)
  const topSpans = [
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null)
  ]
  const headings = [
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null)
  ]
  const backgroundImage = useRef<HTMLImageElement>(null)

  useEffect(() => {
    setTimeout(() => {
      //background
      if (backgroundWrapper.current) backgroundWrapper.current.style.transform = 'translateY(0)'

      //top spans
      topSpans.forEach((span, i) => {
        const currentSpan = span.current
        if (currentSpan) {
          gsap.fromTo(
            currentSpan,
            {
              rotation: 10,
              opacity: 0,
              y: () => currentSpan.clientHeight * 0.5
            },
            {
              rotation: 0,
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'power4.easeOut',
              delay: 0.6 + i / 20
            }
          )
        }
      })

      //headings
      headings.forEach((heading, i) => {
        if (heading.current) {
          const currentHeading = heading.current
          gsap.fromTo(
            currentHeading,
            {
              rotation: 10,
              opacity: 0,
              y: () => currentHeading.clientHeight * 0.5
            },
            {
              rotation: 0,
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'power4.easeOut',
              delay: 0.8 + i / 10
            }
          )
        }
      })
    }, 2300)
  }, [])

  // Scroll Parallax
  useEffect(() => {
    if (backgroundImage.current) {
      gsap.to(backgroundImage.current, {
        y: () => window.innerHeight * 2,
        opacity: 0.3,
        scrollTrigger: {
          start: 'top',
          end: 'bottom',
          scrub: true
        }
      })
    }
  }, [])
  return (
    <div
      id='hero-container'
      className='border-4 w-full min-h-screen overflow-hidden  relative flex flex-col justify-center text-white'
    >
      <div className='mb-16 hidden sm:block p-[5vw] smooth-transition'>
        <p className='text-xs font-semibold '>
          Lorem ipsum dolor sit amet consectetur
          <br /> possimus veniam asperiores pariatur
          <br />
          dolorem nisi architecto, explicabo necessit
        </p>
      </div>
      <div className='w-full'>
        <div className='hero-background loading-transition' ref={backgroundWrapper}>
          <Image fill src='/hero.webp' alt=' hero' ref={backgroundImage} className='hero-image' />
        </div>

        <div className='h-[60vh] flex flex-col justify-between  items-center sm:items-start p-[5vw] smooth-transition'>
          <div className=''>
            <p
              className='font-syncopate text-6xl sm:text-7xl md:text-8xl lg:text-9xl smooth-transition'
              ref={headings[0]}
            >
              L'ouvair
            </p>
          </div>
          <div className='font-syncopate flex flex-col items-center mt-12 sm:items-start'>
            <p
              ref={headings[1]}
              className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl smooth-transition'
            >
              Air
            </p>

            <p
              ref={headings[2]}
              className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter  mt-3 smooth-transition'
            >
              Ambience
            </p>
          </div>
          <div className='flex w-full justify-evenly gap-6 px-6'>
            <Button className='py-2 w-full flex justify-center items-center text-xs whitespace-nowrap'>
              Explore Now
            </Button>
            <Button className='py-2 w-full flex justify-center items-center text-xs'>Start</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
