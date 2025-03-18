import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='min-h-svh flex flex-col gap-[5rem]'>
      <Navbar />

      <div className='w-full px-[1rem] flex flex-col items-center justify-center md:flex-row gap-[2rem] mt-[10rem]'>
        <div className='w-full md:max-w-[300px] xl:max-w-[500px] flex flex-col gap-[2rem]'>
          <h2 className='font-serif uppercase'>Rooms</h2>
          <p>
            Retreat to your cozy haven at Glen Clan. Our bedrooms blend rustic
            charm with modern luxury, offering plush furnishings, crackling
            fireplaces (in select rooms), and stunning views. Experience true
            Highland comfort.
          </p>
          <Link
            className='bg-text text-center text-background mt-auto rounded-[0.5rem] p-[1rem] transition-opacity hover:opacity-60'
            href='/booking'
          >
            Book Now
          </Link>
        </div>

        <div className='w-full md:w-1/2 flex flex-col gap-[1rem]'>
          <div className='relative grow aspect-16/11'>
            <Image
              src='/room1.jpg'
              alt='room'
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='relative grow aspect-16/11'>
            <Image
              src='/room2.jpg'
              alt='room'
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
