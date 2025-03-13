import Link from 'next/link';

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="uppercase flex flex-col gap-[2rem] bg-accent text-background p-[2rem]">
      <div className="flex flex-col gap-[0.5rem] text-right">
        <Link href="/">Home</Link>
        <Link href="/the-house">The House</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/contact">Book Now</Link>
      </div>
      <div className="border-t"></div>
      <h2 className="font-serif">Glen Clan {!year ? "2025" : year}</h2>
      <div className="font-medium flex gap-[1rem]">
        <Link href="/contact">Terms</Link>
        <Link href="/contact">Privacy Policy</Link>
      </div>
    </footer>
  );
}
