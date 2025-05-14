import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StarBackground from '@/components/StarBackground'
import Script from 'next/script'

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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add meta to help with hydration issues */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-dark text-white`} suppressHydrationWarning>
        <StarBackground />
        {children}
        
        {/* Script to remove Grammarly attributes that cause hydration errors */}
        <Script id="remove-attributes" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', () => {
              const body = document.body;
              if (body.hasAttribute('data-new-gr-c-s-check-loaded')) {
                body.removeAttribute('data-new-gr-c-s-check-loaded');
              }
              if (body.hasAttribute('data-gr-ext-installed')) {
                body.removeAttribute('data-gr-ext-installed');
              }
            });
          `}
        </Script>
      </body>
    </html>
  )
}
