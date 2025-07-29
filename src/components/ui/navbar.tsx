
"use client" 

import * as React from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="flex justify-center w-full py-4 px-6 fixed top-4 z-40">
      <div className="flex items-center justify-between px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-100 w-full max-w-3xl relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2 cursor-pointer" onClick={scrollToTop}>
            <img 
              src="/lovable-uploads/fe26917a-a6d1-4a53-bea0-f26ac34227c4.png" 
              alt="Logo" 
              className="w-6 h-6 rounded-full hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5">
          {["Skills", "Experience", "Projects"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-gray-700 hover:text-gray-900 transition-colors font-medium">
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 text-sm text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <Menu className="h-5 w-5 text-gray-900" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 pt-20 px-6 md:hidden">
          <button
            className="absolute top-5 right-6 p-2"
            onClick={toggleMenu}
          >
            <X className="h-5 w-5 text-gray-900" />
          </button>
          <div className="flex flex-col space-y-6">
            {["Skills", "Experience", "Projects"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-base text-gray-900 font-medium" onClick={toggleMenu}>
                {item}
              </a>
            ))}

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-colors"
                onClick={toggleMenu}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export { Navbar }
