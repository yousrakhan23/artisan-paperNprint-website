"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { PRODUCTS } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart } from "lucide-react"

export default function ProductsPage() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))]

  const filteredProducts =
    selectedCategory === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === selectedCategory)

  const toggleFavorite = (productId: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    setFavorites(newFavorites)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Our Collections</h1>
          <p className="text-gray-600 mt-2">Handcrafted plantable seed paper for every occasion</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar - Categories */}
          <div className="mb-8 lg:mb-0">
            <div className="bg-white rounded-lg p-6 h-fit">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded transition ${
                      selectedCategory === category
                        ? "bg-green-600 text-white font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <Card className="h-full hover:shadow-lg transition-all cursor-pointer hover:border-green-300">
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-t-lg">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            toggleFavorite(product.id)
                          }}
                          className="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-gray-100 transition"
                        >
                          <Heart
                            className={`w-5 h-5 ${
                              favorites.has(product.id) ? "fill-red-600 text-red-600" : "text-gray-400"
                            }`}
                          />
                        </button>
                      </div>

                      <div className="p-4">
                        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                          {product.category}
                        </span>
                        <h3 className="mt-3 font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-2xl font-bold text-green-600">
                            ${(product.priceInCents / 100).toFixed(2)}
                          </span>
                          <Button className="bg-green-600 hover:bg-green-700 text-white">View</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
