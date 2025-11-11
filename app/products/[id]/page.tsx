"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import Navigation from "@/components/navigation"
import { PRODUCTS } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Truck, Shield, RotateCcw } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const productId = params.id as string
  const product = PRODUCTS.find((p) => p.id === productId)
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
          <Link href="/products">
            <Button className="mt-4">Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.priceInCents,
      quantity,
      image: product.image,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const relatedProducts = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-green-600 hover:text-green-700">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/products" className="text-green-600 hover:text-green-700">
            Products
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Product Info */}
          <div>
            <span className="text-green-600 font-semibold text-sm bg-green-50 px-3 py-1 rounded-full inline-block">
              {product.category}
            </span>

            <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-2">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-6">{product.description}</p>

            {/* Price */}
            <div className="mb-8">
              <p className="text-4xl font-bold text-green-600">${(product.priceInCents / 100).toFixed(2)}</p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-2">About this product</h3>
              <p className="text-gray-600 leading-relaxed">{product.longDescription}</p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                  className="w-12 text-center py-2 border-x border-gray-300"
                  min="1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  +
                </button>
              </div>

              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3"
                size="lg"
              >
                {addedToCart ? "Added to Cart!" : "Add to Cart"}
              </Button>

              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition"
              >
                <Heart className={`w-6 h-6 ${isFavorite ? "fill-red-600 text-red-600" : "text-gray-400"}`} />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Truck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">Fast Shipping</p>
                <p className="text-xs text-gray-600">Delivered quickly</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">Secure Payment</p>
                <p className="text-xs text-gray-600">100% protected</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-900">Easy Returns</p>
                <p className="text-xs text-gray-600">30-day guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                  <Card className="h-full hover:shadow-lg transition-all cursor-pointer">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden bg-gray-100 rounded-t-lg">
                        <img
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900">{relatedProduct.name}</h3>
                        <p className="text-2xl font-bold text-green-600 mt-2">
                          ${(relatedProduct.priceInCents / 100).toFixed(2)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
