import Image from 'next/image'
import Link from 'next/link'

export default function Rooms() {
  return (
    <div className='w-full px-[1rem] flex flex-col md:flex-row gap-[2rem]'>
      <div className='w-full md:max-w-[300px] xl:max-w-[500px] flex flex-col gap-[2rem] md:order-first order-last'>
        <h2 className='font-serif uppercase'>Rooms</h2>
        <p>
          Retreat to your cozy haven at Glen Clan. Our bedrooms blend rustic
          charm with modern luxury, offering plush furnishings, crackling
          fireplaces (in select rooms), and stunning views. Experience true
          Highland comfort.
        </p>
        <Link
          className='bg-text text-center text-background mt-auto rounded-[0.5rem] p-[1rem] transition-opacity hover:opacity-60'
          href='/rooms'
        >
          Read More
        </Link>
      </div>

      <div className='relative grow aspect-16/11'>
        <Image
          src='/room1.jpg'
          alt='room'
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}
