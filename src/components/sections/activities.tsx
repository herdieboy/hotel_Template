import GridItem from '@/components/gridItem'

export default function Activities() {
  return (
    <div className='px-[1rem]'>
      <h2 className='font-serif uppercase'>Activities</h2>
      <div className='relative flex gap-[2rem] py-[1rem] overflow-x-scroll'>
        <GridItem
          src='/sauna.jpg'
          alt='Sauna'
          title='Spa'
          description='Indulge in tranquility at our spa. Rejuvenate with bespoke treatments, drawing on ancient Scottish traditions, and emerge refreshed, surrounded by Highland serenity.'
        />
        <GridItem
          src='/nature2.jpg'
          alt='Grounds'
          title='Grounds'
          description='Explore acres of pristine Highland beauty. Wander through heather-clad hills, discover hidden lochs, and breathe in the invigorating air of the Scottish countryside.'
        />
        <GridItem
          src='/dining.jpg'
          alt='Dining'
          title='Dining'
          description='Savor the taste of Scotland. Our chefs craft exquisite dishes from locally sourced ingredients, offering a culinary journey as breathtaking as the views.'
        />
      </div>
    </div>
  )
}
