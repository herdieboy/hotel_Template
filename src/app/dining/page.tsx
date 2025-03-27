import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Dining() {
  return (
    <div className='min-h-svh flex flex-col gap-[5rem]'>
      <Navbar />

      <div className='w-full px-[1rem] flex flex-col justify-center md:flex-row gap-[2rem] mt-[10rem]'>
        <div className='w-full md:max-w-[300px] xl:max-w-[500px] flex flex-col gap-[2rem]'>
          <h2 className='font-serif uppercase'>Food & Drink</h2>
          <p>
            Experience exceptional Scottish cuisine at Highland Haven. Our
            culinary team creates memorable dining experiences using the finest
            local ingredients, from hearty breakfasts to elegant evening meals.
            Choose from our main restaurant, casual spa café, or intimate bar
            setting.
          </p>

          <div className='flex flex-col gap-[1rem] mt-[2rem]'>
            <h3 className='font-serif text-lg'>The Highland Restaurant</h3>
            <p className='text-sm'>Open daily for breakfast and dinner</p>
            <ul className='list-disc pl-[1.5rem]'>
              <li>Scottish breakfast buffet</li>
              <li>À la carte dinner menu</li>
              <li>Local seafood specialties</li>
              <li>Seasonal tasting menus</li>
              <li>Wine pairing options</li>
              <li>Private dining available</li>
            </ul>
          </div>

          <div className='flex flex-col gap-[1rem] mt-[2rem]'>
            <h3 className='font-serif text-lg'>The Haven Bar</h3>
            <p className='text-sm'>Open from noon until late</p>
            <ul className='list-disc pl-[1.5rem]'>
              <li>Craft cocktails</li>
              <li>Premium whisky selection</li>
              <li>Bar snacks and light meals</li>
              <li>Afternoon tea service</li>
              <li>Evening entertainment</li>
              <li>Outdoor terrace seating</li>
            </ul>
          </div>
        </div>

        <div className='w-full md:max-w-[300px] xl:max-w-[500px] flex flex-col gap-[1rem]'>
          <div className='relative grow aspect-16/11'>
            <Image
              src='/dining.jpg'
              alt='main restaurant interior'
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='relative grow aspect-16/11'>
            <Image
              src='/bar.jpg'
              alt='hotel bar'
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
