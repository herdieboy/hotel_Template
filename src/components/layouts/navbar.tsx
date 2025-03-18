'use client'

import Link from 'next/link'
import { useState } from 'react'
import { menuItems } from '@/components/lib/navItems'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

  const burgerIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='size-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
      />
    </svg>
  )
  const closeIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='size-6'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18 18 6M6 6l12 12'
      />
    </svg>
  )

  return (
    <>
      <div
        className={`${menuOpen ? 'h-svh' : 'h-[5rem]'} transition-[top,height] duration-500 bg-background text-text fixed z-50 w-full flex border-b border-accent uppercase items-center gap-[1rem] overflow-hidden`}
      >
        <div className='h-[5rem] px-[2rem] flex items-center justify-between w-full mb-auto'>
          <div className='font-serif mr-auto text-[1.5rem]'>GLEN CLAN</div>
          <div
            className='z-50 cursor-pointer'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? closeIcon : burgerIcon}
          </div>
        </div>

        <div
          className={`absolute top-0 left-0 w-svw h-svh flex flex-col justify-center items-center text-[2rem] font-medium`}
        >
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`${hovered ? 'text-accent' : 'text-text'} transition-colors duration-500 font-serif group-hover:text-accent hover:text-text py-[0.5rem]`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
