"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Sprout, Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">
                  100% Eco-Friendly
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-green-600">Handmade</span> Plantable Seed Paper
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Give gifts that grow. Our artisan-crafted seed paper products turn moments into memories and memories
                into blooming gardens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
                    Explore Products
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/artisan-plantable-seed-paper-products.jpg"
                alt="Plantable seed paper products"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Artisan Paper N Print?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Leaf className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>100% Sustainable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Made from recycled materials with seeds embedded within. Plant them after use and watch them bloom
                  into beautiful wildflowers and herbs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Sprout className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Handcrafted Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Each product is carefully handmade with attention to detail. Supporting artisans and traditional
                  papermaking techniques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Perfect for Any Occasion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From weddings to thank you notes, business cards to gifts. Make every occasion memorable with a
                  product that grows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Featured Collections</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Greeting Cards",
                description: "Beautiful cards that become gardens",
                price: "$24.99",
              },
              {
                title: "Bookmarks",
                description: "Plant your bookmark when you finish reading",
                price: "$16.99",
              },
              {
                title: "Business Cards",
                description: "Make lasting impressions",
                price: "$34.99",
              },
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src="/images/design-mode/Handmade%20Paper%20%28handmade%20plantable%20seed%20paper%20cards%29.jpeg"
                    alt={item.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-600 mb-4">{item.price}</p>
                  <Link href="/products">
                    <Button className="w-full bg-green-600 hover:bg-green-700">View Collection</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Purchase", desc: "Choose your perfect gift" },
              { step: "2", title: "Receive", desc: "Beautiful packaging arrives" },
              { step: "3", title: "Enjoy", desc: "Use and share with loved ones" },
              { step: "4", title: "Plant", desc: "Watch your memory grow" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Plant Good Intentions?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of customers creating meaningful, eco-friendly memories.
          </p>
          <Link href="/products">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 bg-popover-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Artisan Paper N Print</h3>
              <p className="text-gray-400">Handmade plantable seed paper for meaningful moments.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/products" className="hover:text-white">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white">
                    Gift Sets
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white">
                    Collections
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Planting Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-popover">
            <p className="text-secondary">&copy; 2025 Artisan Paper N Print. All rights reserved. Handmade with love for the plant.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
