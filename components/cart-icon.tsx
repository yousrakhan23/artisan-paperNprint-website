"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"

export function CartIcon() {
  const { items } = useCart()

  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-green-600 transition" />
      {items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {items.length}
        </span>
      )}
    </Link>
  )
}
