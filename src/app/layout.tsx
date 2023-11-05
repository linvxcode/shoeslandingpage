import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../common/styles/globals.css'
import Navbar from '@/common/component/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shoes Sport',
  description: 'Shoes Sport Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex justify-center'>
        <Navbar/>
        </div>
        {children}
        </body>
    </html>
  )
}
