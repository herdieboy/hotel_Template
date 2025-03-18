import NavbarHero from '@/components/layouts/navbarHero'
import Hero from '@/components/sections/hero'
import Footer from '@/components/layouts/footer'
import Activities from '@/components/sections/activities'
import Rooms from '@/components/sections/rooms'
import Spa from '@/components/sections/spa'

export default function Home() {
  return (
    <div className='flex flex-col gap-[5rem]'>
      <NavbarHero />
      <Hero />
      <div className='px-[1rem]'>
        <h3 className='max-w-[800px]'>
          Escape to the Scottish Highlands and unwind at the luxurious Glenclan
          hotel, nestled amidst breathtaking scenery, our hotel offers a
          tranquil retreat from the everyday. Indulge in lavish amenities, savor
          gourmet cuisine, and explore the serene countryside. Experience the
          peace and beauty of the Highlands in unparalleled comfort.
        </h3>
      </div>

      <div className='border-accent mx-[1rem] border-t'></div>

      <Activities />

      <div className='border-accent mx-[1rem] border-t'></div>

      <Rooms />

      <div className='border-accent mx-[1rem] border-t'></div>

      <Spa />

      <div className='border-accent mx-[1rem] border-t'></div>

      <Footer />
    </div>
  )
}
