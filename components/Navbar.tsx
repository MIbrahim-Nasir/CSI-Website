import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <div className="sticky top-[5px] z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
      <nav className="nav-glassmorphism flex items-center justify-between py-4 px-6">
        <div className="text-3xl font-light tracking-wide text-gray-200">cosmic</div>
        
        <div className="hidden md:flex space-x-10 items-center">
          <Link href="#" className="text-gray-200 hover:text-white">About</Link>
          <Link href="#" className="text-gray-200 hover:text-white">Features</Link>
          <Link href="#" className="text-gray-200 hover:text-white">Pricing</Link>
          <div className="flex items-center text-gray-200 hover:text-white cursor-pointer">
            <span>Pages</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <Link href="#" className="text-gray-200 hover:text-white">Blog</Link>
        </div>
        
        <div className="flex items-center space-x-5">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
          </div>
          <Button asChild className="flex items-center space-x-2 px-6 py-2.5 rounded-full bg-transparent">
            <Link href="#">
              <div className="icon-gradient rounded-full w-8 h-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <span>Contact us</span>
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  )
}
