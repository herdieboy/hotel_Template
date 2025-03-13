"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    if (window.scrollY > 300) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  return (
    <nav className={`${scrolled ? 'top-[-6rem]' : 'top-[2rem]'} transition-[top] font-medium fixed right-[2rem] z-50 text-right flex flex-col gap-[0.5rem] text-background uppercase`}>
      <Link href="/" className='nav-item'>Home</Link>
      <Link href="/the-house" className='nav-item'>The House</Link>
      <Link href="/contact" className='nav-item'>Contact</Link>
      <Link href="/contact" className='nav-item'>Book Now</Link>
    </nav>
  );
}
