import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Spa() {
  return (
    <div className='min-h-svh flex flex-col gap-[5rem]'>
      <Navbar />

      <div className='w-full px-[1rem] flex flex-col justify-center md:flex-row gap-[2rem] mt-[10rem]'>
        <div className='w-full md:max-w-[300px] xl:max-w-[500px] flex flex-col gap-[2rem]'>
          <h2 className='font-serif uppercase'>Highland Haven Spa</h2>
          <p>
            Immerse yourself in pure relaxation at our Highland Haven Spa.
            Drawing inspiration from traditional Scottish healing practices and
            modern wellness techniques, our treatments are designed to
            rejuvenate both body and spirit.
          </p>

          <div className='flex flex-col gap-[1rem] mt-[2rem]'>
            <h3 className='font-serif text-lg'>Our Services</h3>
            <ul className='list-disc pl-[1.5rem]'>
              <li>Highland Hot Stone Massage</li>
              <li>Scottish Seaweed Body Wraps</li>
              <li>Traditional Swedish Massage</li>
              <li>Aromatherapy Treatments</li>
              <li>Facial Treatments</li>
              <li>Couples Massage</li>
            </ul>
          </div>

          <div className='flex flex-col gap-[1rem] mt-[2rem]'>
            <h3 className='font-serif text-lg'>Spa Amenities</h3>
            <ul className='list-disc pl-[1.5rem]'>
              <li>Thermal Suite with Steam Room</li>
              <li>Heated Indoor Pool</li>
              <li>Relaxation Lounge</li>
              <li>Outdoor Hot Tub</li>
              <li>Private Treatment Rooms</li>
              <li>Spa Café with Healthy Options</li>
            </ul>
          </div>
        </div>

        <div className='w-full md:max-w-[300px] xl:max-w-[500px] flex flex-col gap-[1rem]'>
          <div className='relative grow aspect-16/11'>
            <Image
              src='/pool1.jpg'
              alt='spa treatment room'
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='relative grow aspect-16/11'>
            <Image
              src='/pool2.jpg'
              alt='spa relaxation area'
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      <div className='w-full px-[1rem] flex flex-col items-center mt-[5rem]'>
        <div className='max-w-[800px] text-center'>
          <h3 className='font-serif text-xl mb-[1rem]'>Spa Packages</h3>
          <p className='mb-[2rem]'>
            Choose from our carefully curated spa packages designed to provide
            the ultimate relaxation experience. From half-day retreats to full
            wellness journeys, we have something for everyone.
          </p>
          <div className='grid md:grid-cols-3 gap-[2rem]'>
            <div className='p-[1rem] border border-text/20 rounded-[0.5rem]'>
              <h4 className='font-serif mb-[1rem]'>Highland Escape</h4>
              <p className='text-sm'>
                2-hour treatment including massage and facial
              </p>
            </div>
            <div className='p-[1rem] border border-text/20 rounded-[0.5rem]'>
              <h4 className='font-serif mb-[1rem]'>Celtic Wellness</h4>
              <p className='text-sm'>
                Half-day package with multiple treatments
              </p>
            </div>
            <div className='p-[1rem] border border-text/20 rounded-[0.5rem]'>
              <h4 className='font-serif mb-[1rem]'>Royal Indulgence</h4>
              <p className='text-sm'>Full-day luxury spa experience</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
