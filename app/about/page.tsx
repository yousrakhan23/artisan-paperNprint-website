import { Leaf, Sprout, Recycle, Heart } from 'lucide-react'
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Navigation from "@/components/Navigation"

export const metadata = {
  title: "About Us | Artisan Paper N Print",
  description: "Learn about Artisan Paper N Print - handmade eco-friendly plantable seed paper products crafted with sustainability and care.",
}

export default function About() {
  const values = [
    {
      icon: Recycle,
      title: "100% Recyclable",
      description: "Our paper is made from 100% recycled materials, reducing waste and promoting a circular economy.",
    },
    {
      icon: Sprout,
      title: "Plantable Seeds",
      description: "Every piece of paper contains real seeds. Plant it and watch your message grow into beautiful flowers.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "We are committed to sustainable practices throughout our entire production process.",
    },
    {
      icon: Heart,
      title: "Handmade Quality",
      description: "Each product is carefully crafted by hand, ensuring premium quality and unique character.",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Source & Collect",
      description: "We gather high-quality recycled paper and organic seeds from sustainable sources worldwide.",
    },
    {
      step: "2",
      title: "Design & Create",
      description: "Our artisans hand-craft each piece, embedding seeds carefully into the recycled paper.",
    },
    {
      step: "3",
      title: "Package with Care",
      description: "Every product is packaged in eco-friendly materials to ensure safe delivery.",
    },
    {
      step: "4",
      title: "Deliver & Grow",
      description: "Your order arrives ready to share. Recipients plant them to grow flowers and herbs.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-balance">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance">
              Where creativity meets sustainability. Artisan Paper N Print creates beautiful, handmade plantable seed paper products that leave a positive impact on the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700">
                We believe that every communication should matter. That's why we create handmade plantable seed paper products that don't just deliver a message—they create something beautiful.
              </p>
              <p className="text-lg text-gray-700">
                Founded with a passion for sustainability and artisanal craftsmanship, Artisan Paper N Print combines the beauty of handmade paper with the power of nature. Each product is a testament to our commitment to the environment and quality.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-green-600 mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Every piece is crafted by hand with attention to detail</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-green-600 mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Using only recycled and eco-friendly materials</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1 h-1 bg-green-600 mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Embedding real, viable seeds in every product</p>
                </div>
              </div>
            </div>
            <div className="bg-green-100 rounded-lg h-96 flex items-center justify-center text-gray-400 overflow-hidden">
              <img 
                src="/images/design-mode/Handmade%20Paper%20%28handmade%20plantable%20seed%20paper%20cards%29(2).jpeg"
                alt="Handmade plantable seed paper products"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">What drives us to create exceptional plantable paper products</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <Card key={i} className="border border-gray-200 hover:border-green-600 hover:shadow-md transition-all">
                  <CardHeader>
                    <Icon className="w-10 h-10 text-green-600 mb-3" />
                    <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Our thoughtful process from creation to growth</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Crafted with Passion</h2>
            <p className="text-lg text-gray-600">Behind every product is a commitment to quality and sustainability</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainable Sourcing",
                description: "We partner with ethical suppliers who share our commitment to environmental responsibility.",
              },
              {
                title: "Artisanal Craftsmanship",
                description: "Each piece is handmade with precision and care, ensuring unique character in every product.",
              },
              {
                title: "Community Impact",
                description: "A portion of every sale goes towards environmental conservation and community planting initiatives.",
              },
            ].map((item, i) => (
              <Card key={i} className="border border-green-200 bg-white">
                <CardHeader>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl text-green-50 mb-8">
            Explore our collection of handmade plantable seed paper products today.
          </p>
          <a
            href="/products"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded font-bold hover:bg-gray-100 transition"
          >
            Shop Now
          </a>
        </div>
      </section>
    </main>
  )
}
