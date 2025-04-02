'use client'
import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Navbar from '@/components/layouts/navbar'
import Footer from '@/components/layouts/footer'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function BookingForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [checkIn, setCheckIn] = useState<Date | null>(
    searchParams.get('checkIn') ? new Date(searchParams.get('checkIn')!) : null,
  )
  const [checkOut, setCheckOut] = useState<Date | null>(
    searchParams.get('checkOut')
      ? new Date(searchParams.get('checkOut')!)
      : null,
  )
  const [adults, setAdults] = useState(
    parseInt(searchParams.get('adults') || '1'),
  )
  const [children, setChildren] = useState(
    parseInt(searchParams.get('children') || '0'),
  )
  const [roomType, setRoomType] = useState(searchParams.get('roomType') || '')

  const rooms = [
    {
      type: 'Classic Room',
      description: 'Comfortable room with mountain views',
      price: 200,
      capacity: 2,
    },
    {
      type: 'Deluxe Suite',
      description: 'Spacious suite with separate living area',
      price: 350,
      capacity: 3,
    },
    {
      type: 'Family Room',
      description: 'Perfect for families, with extra beds',
      price: 400,
      capacity: 4,
    },
  ]

  useEffect(() => {
    const params = new URLSearchParams()

    if (checkIn) params.set('checkIn', checkIn.toISOString())
    if (checkOut) params.set('checkOut', checkOut.toISOString())
    params.set('adults', adults.toString())
    params.set('children', children.toString())
    if (roomType) params.set('roomType', roomType)

    router.replace(`/booking?${params.toString()}`)
  }, [checkIn, checkOut, adults, children, roomType, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      checkIn,
      checkOut,
      adults,
      children,
      roomType,
    })
  }

  return (
    <div className='w-full px-[1rem] flex flex-col items-center mt-[10rem]'>
      <h1 className='font-serif text-3xl mb-8'>Book Your Stay</h1>

      <form
        onSubmit={handleSubmit}
        className='w-full max-w-[800px] flex flex-col gap-6'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col gap-2'>
            <label className='font-serif'>Check-in Date</label>
            <DatePicker
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              minDate={new Date()}
              className='w-full p-2 border rounded'
              placeholderText='Select check-in date'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='font-serif'>Check-out Date</label>
            <DatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              minDate={checkIn || new Date()}
              className='w-full p-2 border rounded'
              placeholderText='Select check-out date'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='font-serif'>Adults</label>
            <select
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              className='p-2 border rounded'
            >
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className='flex flex-col gap-2'>
            <label className='font-serif'>Children</label>
            <select
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
              className='p-2 border rounded'
            >
              {[0, 1, 2, 3].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='flex flex-col gap-4 mt-6'>
          <h2 className='font-serif text-xl'>Select Room Type</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {rooms.map((room) => (
              <div
                key={room.type}
                onClick={() => setRoomType(room.type)}
                className={`
                      cursor-pointer p-4 rounded-[0.5rem] transition-all bg-foreground
                      ${roomType === room.type ? 'border' : 'border border-background'}
                    `}
              >
                <input
                  type='radio'
                  name='roomType'
                  value={room.type}
                  checked={roomType === room.type}
                  onChange={(e) => setRoomType(e.target.value)}
                  className='hidden'
                />
                <h3 className='font-serif text-lg'>{room.type}</h3>
                <p className='text-sm text-gray-600 mt-2'>{room.description}</p>
                <p className='mt-4 font-semibold'>£{room.price} per night</p>
                <p className='text-sm text-gray-600'>
                  Max capacity: {room.capacity} guests
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          type='submit'
          disabled={!roomType || !checkIn || !checkOut}
          className={`
                bg-text text-center text-background mt-auto rounded-[0.5rem] p-[1rem] transition-opacity
                ${
                  roomType && checkIn && checkOut
                    ? 'hover:opacity-60'
                    : 'opacity-30 cursor-not-allowed'
                }
              `}
        >
          Continue to Book
        </button>
      </form>
    </div>
  )
}

export default function Booking() {
  return (
    <div className='min-h-svh flex flex-col gap-[5rem]'>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <BookingForm />
      </Suspense>
      <Footer />
    </div>
  )
}
