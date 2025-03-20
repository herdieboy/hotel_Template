import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Glen Clan',
  description: 'A getaway in the Scottish Highlands',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
