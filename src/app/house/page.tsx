import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'
import Image from 'next/image'

export default function HouseHistory() {
  return (
    <div className='min-h-svh flex flex-col gap-[5rem]'>
      <Navbar />

      <div className='w-full px-[1rem] flex flex-col justify-center md:flex-row gap-[2rem] mt-[10rem]'>
        <div className='w-full md:max-w-[300px] xl:max-w-[500px] flex flex-col gap-[2rem]'>
          <h2 className='font-serif uppercase'>Glen Clan House History</h2>
          <p>
            Glen Clan has been the ancestral home of the MacHerd family for over
            400 years. What began as a modest hunting lodge in the early 17th
            century has evolved into one of Scotland's most distinguished
            country houses, while remaining a cherished family home through the
            generations.
          </p>

          <div className='flex flex-col gap-[1rem] mt-[2rem]'>
            <h3 className='font-serif text-lg'>The MacHerd Legacy</h3>
            <p className='text-sm'>
              Today, Glen Clan is owned and operated by the 12th generation of
              MacHerds, who continue their family's tradition of Highland
              hospitality while preserving the house's rich heritage for future
              generations. The MacHerd family's deep connection to the land and
              their commitment to Scottish traditions has shaped Glen Clan into
              what it is today.
            </p>
          </div>

          <div className='flex flex-col gap-[2rem] mt-[2rem]'>
            <h3 className='font-serif text-lg'>Historical Timeline</h3>
            <ul className='flex flex-col gap-[1rem]'>
              <li>
                <span className='font-bold'>1621:</span> Original hunting lodge
                built by Duncan MacHerd
              </li>
              <li>
                <span className='font-bold'>1689:</span> Main house constructed;
                establishment of MacHerd clan seat
              </li>
              <li>
                <span className='font-bold'>1742:</span> Extension of east wing
                and Highland gardens
              </li>
              <li>
                <span className='font-bold'>1815:</span> Significant expansion
                following the Napoleonic Wars
              </li>
              <li>
                <span className='font-bold'>1867:</span> Addition of the
                Victorian wing and grand hall
              </li>
              <li>
                <span className='font-bold'>1920:</span> First opened to
                distinguished guests
              </li>
              <li>
                <span className='font-bold'>1955:</span> Recognition as Category
                A historic building
              </li>
              <li>
                <span className='font-bold'>1985:</span> Extensive restoration
                of traditional features
              </li>
              <li>
                <span className='font-bold'>2010:</span> Transformation into
                luxury hotel under MacHerd stewardship
              </li>
              <li>
                <span className='font-bold'>2023:</span> Recent renovations
                preserving historical character
              </li>
            </ul>
          </div>
        </div>

        <div className='w-full md:max-w-[300px] xl:max-w-[500px] flex md:flex-col gap-[1rem]'>
          <div className='relative grow aspect-16/11'>
            <Image
              src='/house1.jpg'
              alt='Glen Clan in 1800s'
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='relative grow aspect-16/11'>
            <Image
              src='/house2.jpg'
              alt='Glen Clan today'
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className='text-sm italic text-center mt-[1rem]'>
            Above: Glen Clan in the 1800s and as it appears today
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
