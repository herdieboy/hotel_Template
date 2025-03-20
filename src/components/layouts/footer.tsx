import Link from 'next/link'
import { menuItems } from '@/components/lib/navItems'

export default function Footer() {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <footer
      className='mt-auto uppercase flex flex-col gap-[2rem] bg-accent text-background p-[2rem]'
      suppressHydrationWarning
    >
      <div className='flex flex-col gap-[0.5rem] text-right'>
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} className='hover:underline'>
            {item.label}
          </Link>
        ))}
      </div>
      <div className='border-t'></div>
      <h2 className='font-serif'>Glen Clan {!year ? '2025' : year}</h2>
      <div className='font-medium flex gap-[1rem]'>
        <Link href='/contact'>Terms</Link>
        <Link href='/contact'>Privacy Policy</Link>
      </div>
    </footer>
  )
}
