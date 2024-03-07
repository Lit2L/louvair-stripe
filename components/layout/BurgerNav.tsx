'use client'

import React from 'react'
import Link from 'next/link'
import { TbBrandFacebookFilled } from 'react-icons/tb'
import { AiOutlineClose, AiOutlineInstagram, AiOutlineMenu, AiFillYoutube } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Logo from '@/components/icons/Logo'

const BurgerNav = () => {
  const [nav, setNav] = React.useState(false)
  const [dekstopMenu, setDesktopMenu] = React.useState(false)

  React.useEffect(() => {
    const handleNav2 = () => {
      if (window.scrollY >= 90) {
        setDesktopMenu(true)
      } else {
        setDesktopMenu(false)
      }
    }
    window.addEventListener('scroll', handleNav2)
  }, [])

  const handleNav = () => {
    setNav((prev) => !prev)
  }

  return (
    <div className='absolute top-0 w-full h-[100px] z-[200] '>
      <div className='flex justify-between items-center w-full h-full px-[20px] lg:px-[60px] font-semibold '>
        <div className='text-center w-full relative h-24'>
          <Link href='/'>
            <div className='fixed h-14 w-14 z-20 flex flex-col cursor-pointer top-6 left-6 shadow-xl rounded-full border-2 border-[#69696941] sm:border-none'>
              <Logo />

              <h3 className='text-[10px] tracking-widest text-center mt-1 w-full uppercase sm:text-neutral-900'>
                L&apos;ouvair
              </h3>
            </div>
          </Link>
        </div>
        <div className=''>
          <div
            onClick={handleNav}
            className='flex items-center gap-3 bg-transparent text-neutral-900 hover:cursor-pointer ease-in-out duration-300 transition-all hover:text-red-900 '
          >
            <span className='text-xs'>MENU</span>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={`${
          nav
            ? 'right-0 rounded-none opacity-100'
            : 'right-[-100%] md:right-[-60%] rounded-l-[500px] opacity-0'
        } fixed z-[2] top-0 w-[100%] h-screen flex flex-col justify-evenly bg-black/95 text-neutral-200 md:w-[60%] lg:w-[50%] px-7 sm:px-[40px] md:px-[80px] lg:px-[100px] py-10 ease-in-out duration-1000 border-y-2 border-r-2 rounded-lg`}
      >
        <div id='top' className='h-1/4 flex flex-col mt-24 w-full'>
          <div
            className={`${
              nav ? 'opacity-100 ' : 'opacity-0'
            } hidden sm:flex sm:flex-col w-full sm:items-end sm:justify-end cursor-pointer duration-1000 ease-in-out tracking-widest flex-col`}
          >
            <h3 className='whitespace-nowrap ml-0 h-full w-full font-bold red-hover text-5xl text-center'>
              <span className='text-6xl'>L&apos;</span>ouvair
            </h3>
          </div>
          {/* <div
            className={`${
              nav
                ? 'flex w-full mt-12 opacity-100'
                : 'translate-x-[200px] opacity-0'
            } lg:hidden w-[95px] lg:w-[105px] h-[40px] overflow-visible flex items-center cursor-pointer duration-1000 ease-in-out delay-[.5s]`}
          >
            <h3 className='whitespace-nowrap ml-0 text-4xl font-bold red-hover text-green-600 text-center w-full'>
              <span className='text-5xl font-bold'>L</span>'ouvairs
            </h3>
          </div> */}
          <div
            onClick={handleNav}
            className='absolute top-[20px] md:top-[40px] right-[20px] md:right-[40px] rounded-full p-4 cursor-pointer bg-neutral-200 text-neutral-900 hover:opacity-70 duration-300'
          >
            <AiOutlineClose size={20} />
          </div>

          <div
            className={`${
              nav ? 'translate-x-0 opacity-100' : 'translate-x-[200px] opacity-0'
            } border-b border-[#ba7339] duration-1000 ease-in-out delay-[.5s]`}
          >
            <p className='text-md text-center text-[#ba7339] my-6'>Aromatic Bliss</p>
          </div>
        </div>
        <div id='middle' className='h-1/4'>
          <ul className='flex flex-col gap-4 text-neutral-50 text-center'>
            <Link href='/'>
              <li
                onClick={() => setNav(false)}
                className={`${
                  nav ? 'translate-x-0 opacity-100 red-hover' : 'translate-x-[600px] opacity-0'
                } text-3xl tracking-wider font-medium hover:cursor-pointer duration-1000 ease-in-out delay-[.8s]`}
              >
                Home
              </li>
            </Link>
            <Link href='/products'>
              <li
                onClick={() => setNav(false)}
                className={`${
                  nav ? 'translate-x-0 opacity-100 red-hover' : 'translate-x-[600px] opacity-0'
                } text-3xl tracking-wider font-medium hover:cursor-pointer duration-1000 ease-in-out delay-[.9s]`}
              >
                Products
              </li>
            </Link>
            <Link href='/pricing'>
              <li
                onClick={() => setNav(false)}
                className={`${
                  nav
                    ? 'translate-x-0 opacity-100 red-hover tracking-wider red-hover'
                    : 'translate-x-[600px] opacity-0'
                } text-3xl duration-1000 `}
              >
                Pricing
              </li>
            </Link>
            <Link href='/about'>
              <li
                onClick={() => setNav(false)}
                className={`${
                  nav ? 'translate-x-0 opacity-100 red-hover' : 'translate-x-[600px] opacity-0'
                } text-3xl tracking-wider font-medium hover:cursor-pointer duration-1000 ease-in-out delay-[1s]`}
              >
                About
              </li>
            </Link>
            <Link href='/contact'>
              <li
                onClick={() => setNav(false)}
                className={`${
                  nav ? 'translate-x-0 opacity-100 red-hover' : 'translate-x-[600px] opacity-0'
                } text-3xl tracking-wider font-medium hover:cursor-pointer duration-1000 ease-in-out delay-[1.1s]`}
              >
                Contact
              </li>
            </Link>
            <Link href='/login'>
              <li
                onClick={() => setNav(false)}
                className={`${
                  nav ? 'translate-x-0 opacity-100 red-hover' : 'translate-x-[600px] opacity-0'
                } text-3xl tracking-wider font-medium hover:cursor-pointer duration-1000 ease-in-out delay-[1.1s]`}
              >
                Sign In
              </li>
            </Link>
          </ul>
        </div>
        <div
          id='bottom'
          className='h-1/4 flex flex-col justify-center items-center w-full text-center'
        >
          <p
            className={`${
              nav ? 'translate-x-0 opacity-100' : 'translate-x-[600px] opacity-0'
            } text-md text-neutral-500 py-4 duration-1000 ease-in-out delay-[1.6s]`}
          >
            Let&apos;s connect
          </p>
          <div
            className={`${
              nav ? 'translate-x-0 opacity-100' : 'translate-x-[600px] opacity-0'
            } flex items-center gap-10 text-xl duration-1000 ease-in-out delay-[1.7s]`}
          >
            <div className='h-12 w-12  flex items-center justify-center'>
              <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                <div className='rounded-full hover:py-3 py-1 cursor-pointer hover:scale-110 hover:bg-neutral-500 hover:text-neutral-900 duration-300 facebook-gradient'>
                  <TbBrandFacebookFilled />
                </div>
              </a>
            </div>
            <div className='h-12 w-12 flex items-center justify-center'>
              <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                <div className='rounded-full hover:py-3 cursor-pointer hover:scale-110 hover:bg-neutral-500 duration-300 instagram-gradient'>
                  <AiOutlineInstagram size={28} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={handleNav}
        className={`${dekstopMenu ? 'opacity-100' : 'opacity-0 z-[-2]'} fixed ${
          nav ? 'z-[-2]' : 'z-[-1]'
        } top-[20px] md:top-[40px] right-[20px] md:right-[40px] rounded-full p-6 cursor-pointer bg-neutral-900/80 text-neutral-50 hover:scale-110 duration-500`}
      >
        <AiOutlineMenu size={20} />
      </div>
    </div>
  )
}

export default BurgerNav