import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Image from "next/image";
import GridItem from "@/components/gridItem";

export default function Home() {
  return (
    <div className="flex flex-col gap-[5rem]">
      <Navbar />
      <Hero />
      <div className="px-[1rem]">
        <h3 className='max-w-[800px]'>Escape to the Scottish Highlands and unwind at the luxurious Glenclan hotel, nestled amidst breathtaking scenery, our hotel offers a tranquil retreat from the everyday. Indulge in lavish amenities, savor gourmet cuisine, and explore the serene countryside. Experience the peace and beauty of the Highlands in unparalleled comfort.</h3>
      </div>

      <div className="border-t border-accent mx-[1rem]"></div>

      <div className="px-[1rem]">
        <h2 className="font-serif uppercase">Activities</h2>
        <div className="relative flex gap-[2rem] py-[1rem] overflow-x-scroll">
          <GridItem src="/sauna.jpg" alt="Sauna" title="Spa" description="Indulge in tranquility at our spa. Rejuvenate with bespoke treatments, drawing on ancient Scottish traditions, and emerge refreshed, surrounded by Highland serenity." />
          <GridItem src="/nature2.jpg" alt="Grounds" title="Grounds" description="Explore acres of pristine Highland beauty. Wander through heather-clad hills, discover hidden lochs, and breathe in the invigorating air of the Scottish countryside." />
          <GridItem src="/dining.jpg" alt="Dining" title="Dining" description="Savor the taste of Scotland. Our chefs craft exquisite dishes from locally sourced ingredients, offering a culinary journey as breathtaking as the views." />
        </div>
      </div>

      <div className="border-t border-accent mx-[1rem]"></div>

      <div className="w-full px-[1rem] flex flex-col md:flex-row gap-[2rem]">
        <div className="w-full md:max-w-[300px] xl:max-w-[500px] flex flex-col gap-[2rem] md:order-first order-last">
          <h2 className="font-serif uppercase">Rooms</h2>
          <p>Retreat to your cozy haven at Glen Clan. Our bedrooms blend rustic charm with modern luxury, offering plush furnishings, crackling fireplaces (in select rooms), and stunning views. Experience true Highland comfort.</p>
          <button className="mt-auto bg-text text-background p-[1rem] rounded-[0.5rem] transition-opacity hover:opacity-90">Read More</button>
        </div>

        <div className="relative grow aspect-16/11">
          <Image src="/room1.jpg" alt="room" fill={true} style={{ objectFit: "cover" }} />
        </div>
      </div>

      <div className="border-t border-accent mx-[1rem]"></div>

      <div className="w-full px-[1rem] flex flex-col md:flex-row gap-[2rem]">
        <div className="relative grow aspect-16/11">
          <Image src="/pool2.jpg" alt="room" fill={true} style={{ objectFit: "cover" }} />
        </div>

        <div className="w-full md:max-w-[300px] xl:max-w-[500px] flex flex-col gap-[2rem]">
          <h2 className="font-serif uppercase">The Spa</h2>
          <p>Escape to a sanctuary of serenity at the Glen Clan spa. Surrender to the healing touch of our expert therapists, indulge in rejuvenating treatments using local botanicals, and emerge balanced and renewed amidst the tranquil beauty of the Highlands.</p>
          <button className="mt-auto bg-text text-background p-[1rem] rounded-[0.5rem] transition-opacity hover:opacity-90">Read More</button>
        </div>
      </div>

      <div className="border-t border-accent mx-[1rem]"></div>

      <Footer />
    </div>
  );
}
