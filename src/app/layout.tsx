import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/navbar/Navbar'
import { Josefin_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Everybody Loves Pizza',
  description: 'Fake clothing website',
}

const primaryFont = Josefin_Sans({
  subsets: ['latin'],
  weight: ['200', '400', '700']
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body id='app' className={`bg-stone-900 relative ${primaryFont.className} font-extralight`}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
