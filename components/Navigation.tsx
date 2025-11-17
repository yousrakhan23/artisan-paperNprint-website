"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCart()

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Artisan Paper N Print" width={40} height={40} className="object-contain" />
            <span className="font-bold text-lg text-gray-900 hidden sm:inline">Artisan Paper N Print</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-green-600 transition">
              Products
            </Link>
            <a href="/about" className="text-gray-700 hover:text-green-600 transition">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-green-600 transition">
              Contact
            </a>
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-green-600 transition" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {items.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex items-center space-x-4" onClick={() => setIsOpen(!isOpen)}>
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {items.length}
                </span>
              )}
            </Link>
            {isOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-green-600">
              Home
            </Link>
            <Link href="/products" className="block text-gray-700 hover:text-green-600">
              Products
            </Link>
            <a href="/about" className="block text-gray-700 hover:text-green-600">
              About
            </a>
            <a href="/contact" className="block text-gray-700 hover:text-green-600">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
