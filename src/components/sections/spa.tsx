import Image from 'next/image'
import Link from 'next/link'

export default function Spa() {
  return (
    <div className='flex w-full flex-col gap-[2rem] px-[1rem] md:flex-row'>
      <div className='relative aspect-16/11 grow'>
        <Image
          src='/pool2.jpg'
          alt='room'
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className='flex w-full flex-col gap-[2rem] md:max-w-[300px] xl:max-w-[500px]'>
        <h2 className='font-serif uppercase'>The Spa</h2>
        <p>
          Escape to a sanctuary of serenity at the Glen Clan spa. Surrender to
          the healing touch of our expert therapists, indulge in rejuvenating
          treatments using local botanicals, and emerge balanced and renewed
          amidst the tranquil beauty of the Highlands.
        </p>

        <Link
          className='bg-text text-center text-background mt-auto rounded-[0.5rem] p-[1rem] transition-opacity hover:opacity-60'
          href='/spa'
        >
          Read More
        </Link>
      </div>
    </div>
  )
}
