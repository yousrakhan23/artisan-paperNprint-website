"use client"

import Link from "next/link"
import Navigation from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-2xl mx-auto px-4 py-12">
        <Card>
          <CardContent className="py-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-gray-600 text-lg mb-2">Your order has been successfully placed.</p>
            <p className="text-gray-600 mb-8">
              You will receive a confirmation email shortly with tracking information.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-semibold text-gray-900 mb-4">What's Next?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Order confirmation sent to your email</li>
                <li>✓ Your eco-friendly package will ship within 1-2 business days</li>
                <li>✓ You'll receive tracking information via email</li>
                <li>✓ Expected delivery: 5-7 business days</li>
                <li>✓ Check your email for planting instructions</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="flex-1">
                <Button className="w-full bg-green-600 hover:bg-green-700">Continue Shopping</Button>
              </Link>
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Back to Home
                </Button>
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-600">
              <p>Questions? Contact us at support@artisanpaper.com or call 1-800-PAPER-01</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
