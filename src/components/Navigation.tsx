'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="bg-primary text-black">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-200">FunSCADA</Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/" 
                className={`hover:text-gray-200 transition-colors ${isActive('/') ? 'font-bold border-b-2 border-white pb-1' : ''}`}
              >
                首页
              </Link>
            </li>
            <li>
              <Link 
                href="/features" 
                className={`hover:text-gray-200 transition-colors ${isActive('/features') ? 'font-bold border-b-2 border-white pb-1' : ''}`}
              >
                功能
              </Link>
            </li>
            <li>
              <Link 
                href="/solutions" 
                className={`hover:text-gray-200 transition-colors ${isActive('/solutions') ? 'font-bold border-b-2 border-white pb-1' : ''}`}
              >
                解决方案
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`hover:text-gray-200 transition-colors ${isActive('/about') ? 'font-bold border-b-2 border-white pb-1' : ''}`}
              >
                关于我们
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`hover:text-gray-200 transition-colors ${isActive('/contact') ? 'font-bold border-b-2 border-white pb-1' : ''}`}
              >
                联系我们
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-primary-dark">
          <ul className="flex flex-col px-4 py-2 space-y-3">
            <li>
              <Link 
                href="/" 
                className={`block py-2 ${isActive('/') ? 'font-bold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                首页
              </Link>
            </li>
            <li>
              <Link 
                href="/features" 
                className={`block py-2 ${isActive('/features') ? 'font-bold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                功能
              </Link>
            </li>
            <li>
              <Link 
                href="/solutions" 
                className={`block py-2 ${isActive('/solutions') ? 'font-bold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                解决方案
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`block py-2 ${isActive('/about') ? 'font-bold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                关于我们
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`block py-2 ${isActive('/contact') ? 'font-bold' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                联系我们
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
} 