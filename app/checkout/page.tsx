"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Truck, Shield, Leaf } from "lucide-react"

const Checkout = dynamic(() => import("@/components/checkout"), { ssr: false })

export default function CheckoutPage() {
  const { items, total } = useCart()

  // For multi-item cart, we'll create a combined checkout session
  // For now, we'll use the first product as the main checkout
  const firstProduct = items[0]

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <Link href="/products">
              <Button className="bg-green-600 hover:bg-green-700">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/cart" className="flex items-center text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cart
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <Card className="p-6">{firstProduct && <Checkout productId={firstProduct.productId} />}</Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="p-6 h-fit sticky top-20">
              <h3 className="font-bold text-lg text-gray-900 mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.productId} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-semibold text-gray-900">
                      ${((item.price * item.quantity) / 100).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between mb-2 text-gray-600">
                  <span>Subtotal</span>
                  <span>${(total / 100).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>${(total / 100).toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Truck className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Free Shipping</p>
                    <p className="text-xs text-gray-600">Standard delivery 5-7 days</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Secure Payment</p>
                    <p className="text-xs text-gray-600">Stripe secure checkout</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Leaf className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Eco-Friendly</p>
                    <p className="text-xs text-gray-600">100% sustainable packaging</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
