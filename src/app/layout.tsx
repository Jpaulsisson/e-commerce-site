import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: 'Everybody Loves Pizza',
  description: 'Fake clothing website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id='app' className='bg-black relative'>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
