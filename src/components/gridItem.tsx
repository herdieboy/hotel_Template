import Image from 'next/image'

interface GridItemProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function GridItem({ src, alt, title, description }: GridItemProps) {
  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="relative h-[20rem] aspect-16/20">
        <Image src={src} alt={alt} fill={true} style={{ objectFit: "cover" }} />
      </div>
      <h4 className="font-serif">{title}</h4>
      <p>{description}</p>
    </div>
  );
}
