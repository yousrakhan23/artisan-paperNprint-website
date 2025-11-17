"use client"

import Link from "next/link"
import Navigation from "@/components/Navigation"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2, ArrowLeft } from "lucide-react"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total } = useCart()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <Link href="/products" className="flex items-center text-green-600 hover:text-green-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        {items.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-gray-600 text-lg mb-6">Your cart is empty</p>
              <Link href="/products">
                <Button className="bg-green-600 hover:bg-green-700">Start Shopping</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map((item) => (
                  <Card key={item.productId}>
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-2xl font-bold text-green-600 mt-2">${(item.price / 100).toFixed(2)}</p>

                          <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center border border-gray-300 rounded">
                              <button
                                onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                                className="px-3 py-1 text-gray-600 hover:text-gray-900"
                              >
                                -
                              </button>
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                  updateQuantity(item.productId, Math.max(1, Number.parseInt(e.target.value) || 1))
                                }
                                className="w-12 text-center py-1 border-x border-gray-300"
                                min="1"
                              />
                              <button
                                onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                className="px-3 py-1 text-gray-600 hover:text-gray-900"
                              >
                                +
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.productId)}
                              className="text-red-600 hover:text-red-700 ml-auto"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-gray-600 mb-2">Subtotal</p>
                          <p className="text-xl font-bold text-gray-900">
                            ${((item.price * item.quantity) / 100).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="h-fit sticky top-20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-6">Order Summary</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${(total / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>FREE</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax</span>
                      <span>Calculated at checkout</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-gray-900">
                      <span>Total</span>
                      <span>${(total / 100).toFixed(2)}</span>
                    </div>
                  </div>

                  <Link href="/checkout">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 mb-3">
                      Proceed to Checkout
                    </Button>
                  </Link>

                  <Button variant="outline" className="w-full bg-transparent">
                    <Link href="/products" className="w-full">
                      Continue Shopping
                    </Link>
                  </Button>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-3">We offer:</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>✓ Eco-friendly packaging</li>
                      <li>✓ Fast shipping worldwide</li>
                      <li>✓ Secure Stripe payment</li>
                      <li>✓ 30-day returns</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
