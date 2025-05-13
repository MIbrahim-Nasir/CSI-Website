import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StarBackground from '@/components/StarBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cosmic - Elevate Sales With Seamless Management',
  description: 'Cosmic helps you manage your sales seamlessly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark text-white`}>
        <StarBackground />
        {children}
      </body>
    </html>
  )
}
