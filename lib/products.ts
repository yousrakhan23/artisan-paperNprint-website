export interface Product {
  id: string
  name: string
  description: string
  longDescription: string
  priceInCents: number
  image: string
  category: string
  features: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: "greeting-cards-set",
    name: "Plantable Greeting Cards Set",
    description: "Beautiful handmade seed paper greeting cards",
    longDescription:
      "Set of 10 premium handmade plantable greeting cards made from 100% recycled seed paper. Each card contains wildflower seeds embedded within the fibers. Perfect for special occasions, wedding invitations, or eco-conscious gifting. When planted, these cards bloom into beautiful wildflowers.",
    priceInCents: 2499,
    image: "/handmade-plantable-greeting-cards.jpg",
    category: "Stationery",
    features: [
      "Contains wildflower seeds",
      "Handmade from recycled materials",
      "100% biodegradable",
      "Set of 10 cards",
      "Eco-friendly alternative to traditional cards",
    ],
  },
  {
    id: "bookmark-collection",
    name: "Eco Bookmarks Collection",
    description: "Plantable bookmarks with herb seeds",
    longDescription:
      "A charming collection of 8 handcrafted plantable bookmarks embedded with culinary herb seeds (basil, mint, thyme). Made from recycled seed paper with natural dyes and botanical designs. Each bookmark is a work of art that becomes a living garden.",
    priceInCents: 1699,
    image: "/plantable-herb-bookmarks.jpg",
    category: "Stationery",
    features: [
      "Contains herb seeds (basil, mint, thyme)",
      "Natural dyed designs",
      "Handmade and unique",
      "Set of 8 bookmarks",
      "Compostable packaging",
    ],
  },
  {
    id: "wedding-invitations",
    name: "Plantable Wedding Invitations",
    description: "Luxurious seed paper wedding invitations",
    longDescription:
      "Create an unforgettable first impression with our premium plantable wedding invitations. Each custom-designed invitation is handcrafted from 100% recycled seed paper containing wildflower seeds. Your guests can plant these beautiful invitations after the celebration and enjoy a living memory of your special day.",
    priceInCents: 4999,
    image: "/luxury-wedding-seed-paper-invitations.jpg",
    category: "Special Events",
    features: [
      "Customizable designs",
      "Handmade quality",
      "Premium seed paper",
      "Wildflower seeds included",
      "Minimum order of 25 cards",
      "Perfect eco-friendly wedding keepsake",
    ],
  },
  {
    id: "business-cards",
    name: "Eco Business Cards",
    description: "Sustainable plantable business cards",
    longDescription:
      "Make a lasting impression with plantable business cards crafted from recycled seed paper. These premium networking tools showcase your commitment to sustainability while leaving a living impression on your clients and contacts.",
    priceInCents: 3499,
    image: "/sustainable-business-cards-seeds.jpg",
    category: "Professional",
    features: [
      "Custom printing available",
      "250 cards per pack",
      "Wildflower or herb seeds",
      "Premium finish",
      "Perfect for eco-conscious businesses",
    ],
  },
  {
    id: "thank-you-cards",
    name: "Thank You Cards Bundle",
    description: "Appreciation cards with flowering seeds",
    longDescription:
      "Express gratitude with meaning. This bundle includes 12 beautifully designed thank you cards handmade from plantable seed paper. The perfect way to say thanks while gifting something that grows and blooms.",
    priceInCents: 1999,
    image: "/thank-you-seed-paper-cards.jpg",
    category: "Stationery",
    features: [
      "12 cards per bundle",
      "Multiple color options",
      "Flowering seeds",
      "Handwritten message possible",
      "Includes seed planting instructions",
    ],
  },
  {
    id: "gift-set-deluxe",
    name: "Deluxe Gift Set",
    description: "Complete plantable paper collection",
    longDescription:
      "The ultimate eco-conscious gift. This premium deluxe set includes a variety of our finest plantable seed paper products: greeting cards, bookmarks, thank you cards, and a small herb seed paper collection. Beautifully packaged in recycled materials.",
    priceInCents: 5999,
    image: "/deluxe-eco-gift-set-seed-paper.jpg",
    category: "Gift Sets",
    features: [
      "Includes 5 different product types",
      "Premium gift packaging",
      "40+ individual cards and items",
      "Multiple seed varieties",
      "Perfect for all occasions",
      "Includes planting guide",
    ],
  },
]
