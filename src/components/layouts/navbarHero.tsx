'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { menuItems } from '@/components/lib/navItems'
import Navbar from '@/components/layouts/navbar'

export default function NavbarHero() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleScroll() {
    if (window.scrollY > window.innerHeight * 0.6) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  return (
    <>
      <nav
        className={`${scrolled ? 'top-[-10rem]' : 'top-[2rem]'} transition-[top] duration-500 font-medium fixed right-[2rem] z-50 text-right flex flex-col gap-[0.5rem] text-background uppercase`}
      >
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} className='nav-item'>
            {item.label}
          </Link>
        ))}
      </nav>

      <div
        className={`${!scrolled ? 'top-[-8rem]' : 'top-[0rem]'} transition-[top] duration-500 fixed z-50`}
      >
        <Navbar />
      </div>
    </>
  )
}
