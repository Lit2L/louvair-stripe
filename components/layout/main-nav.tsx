'use client'

import * as React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { MainNavItem } from 'types'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/shared/icons'
import { MobileNav } from '@/components/layout/mobile-nav'
import Logo from '../icons/Logo'

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  React.useEffect(() => {
    const closeMobileMenuOnClickOutside = (event: MouseEvent) => {
      if (showMobileMenu) {
        setShowMobileMenu(false)
      }
    }

    document.addEventListener('click', closeMobileMenuOnClickOutside)

    return () => {
      document.removeEventListener('click', closeMobileMenuOnClickOutside)
    }
  }, [showMobileMenu])

  return (
    <div className='flex gap-16 border border-black w-full'>
      <Link href='/' className='h-10 w-10 hidden items-center  space-x-2 md:flex'>
        <Logo />
        <p className='hidden text-sm font-syncopate  lg:inline-block'>{siteConfig.name}</p>
      </Link>

      {items?.length ? (
        <nav className='hidden gap-6 md:flex border-4 border-blue-50 ml-16 '>
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                item.href.startsWith(`/${segment}`) ? 'text-foreground' : 'text-foreground/60',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button className='flex items-center space-x-2 md:hidden' onClick={toggleMobileMenu}>
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className='font-bold'>Menu</span>
      </button>
      {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
    </div>
  )
}
