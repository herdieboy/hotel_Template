import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-[calc(100svh-2rem)] m-[1rem] bg-black">
      <Image className="opacity-90" src="/nature.jpg" alt="Hero Image" fill={true} style={{ objectFit: "cover" }} />
      <div className="absolute flex gap-[1rem] items-end bottom-0 p-[1rem] text-background">
        <h1 className="uppercase">
          Glen Clan
        </h1>
        <p className="mb-[0.75rem]">Getaway in the Scottish Highlands</p>
      </div>

    </div>
  )
}
