import {
  BadgeCheck,
  CreditCard,
  Headphones,
  PackageCheck,
  Truck
} from "lucide-react";

export type Category = {
  name: string;
  slug: string;
  image: string;
  description: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  sku: string;
  category: string;
  brand: string;
  price: number;
  salePrice?: number;
  rating: number;
  reviewCount: number;
  stock: number;
  image: string;
  badge?: string;
  description: string;
  specifications: string[];
  delivery: string;
  tags: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
};

export const phoneNumber = "0722924746";
export const whatsAppUrl = `https://wa.me/254722924746`;
export const locationName = "Kamukunji Trade Center";

export const categories: Category[] = [
  {
    name: "Pots & Pans",
    slug: "pots-pans",
    image: "/images/cookware.png",
    description: "Daily cookware, stock pots, saucepans, frying pans, and complete sets."
  },
  {
    name: "Knives",
    slug: "knives",
    image: "/images/tools.png",
    description: "Chef knives, knife blocks, boards, sharpeners, and prep essentials."
  },
  {
    name: "Plates",
    slug: "plates",
    image: "/images/tableware.png",
    description: "Dinner plates, bowls, serving sets, and durable restaurant tableware."
  },
  {
    name: "Cups & Mugs",
    slug: "cups-mugs",
    image: "/images/tableware.png",
    description: "Mugs, cups, glasses, tumblers, and drink service essentials."
  },
  {
    name: "Kitchen Tools",
    slug: "kitchen-tools",
    image: "/images/tools.png",
    description: "Utensils, spatulas, tongs, whisks, graters, and prep tools."
  },
  {
    name: "Storage",
    slug: "storage",
    image: "/images/appliances.png",
    description: "Airtight containers, jars, pantry storage, and fridge organizers."
  },
  {
    name: "Baking",
    slug: "baking",
    image: "/images/appliances.png",
    description: "Bakeware, trays, mixing bowls, measuring tools, and cooling racks."
  },
  {
    name: "Electrical Appliances",
    slug: "electrical-appliances",
    image: "/images/appliances.png",
    description: "Blenders, kettles, toasters, mixers, and useful counter appliances."
  },
  {
    name: "Restaurant Supplies",
    slug: "restaurant-supplies",
    image: "/images/cookware.png",
    description: "Bulk cookware, service ware, prep tools, and wholesale-ready supplies."
  }
];

export const products: Product[] = [
  {
    id: "prd-001",
    slug: "classic-stainless-cookware-set",
    name: "Classic Stainless Cookware Set",
    sku: "SPN-CW-001",
    category: "Pots & Pans",
    brand: "Spooner Select",
    price: 12800,
    salePrice: 11250,
    rating: 4.8,
    reviewCount: 64,
    stock: 18,
    image: "/images/cookware.png",
    badge: "Best Seller",
    description:
      "A durable stainless cookware set for busy home kitchens and light restaurant use.",
    specifications: [
      "Includes stock pot, saucepan, frying pan, and fitted lids",
      "Compatible with gas, electric, and ceramic cooktops",
      "Riveted handles and polished stainless finish"
    ],
    delivery: "Same-day dispatch in Nairobi for confirmed orders before 2 PM.",
    tags: ["cookware", "pots", "pans", "stainless"],
    isBestSeller: true
  },
  {
    id: "prd-002",
    slug: "nonstick-family-frying-pan",
    name: "Nonstick Family Frying Pan",
    sku: "SPN-CW-014",
    category: "Pots & Pans",
    brand: "HomePro",
    price: 3450,
    rating: 4.6,
    reviewCount: 41,
    stock: 34,
    image: "/images/cookware.png",
    description: "A generous nonstick pan for quick breakfasts, sauteing, and everyday cooking.",
    specifications: [
      "28 cm cooking surface",
      "Comfort-grip handle",
      "Easy-clean nonstick coating"
    ],
    delivery: "Delivery available across Nairobi and surrounding areas.",
    tags: ["pan", "nonstick", "cookware"],
    isBestSeller: true
  },
  {
    id: "prd-003",
    slug: "chef-knife-prep-set",
    name: "Chef Knife Prep Set",
    sku: "SPN-KN-018",
    category: "Knives",
    brand: "Spooner Select",
    price: 4950,
    salePrice: 4290,
    rating: 4.7,
    reviewCount: 38,
    stock: 22,
    image: "/images/tools.png",
    badge: "Save 13%",
    description: "Balanced knives and prep tools for clean chopping, slicing, and meal prep.",
    specifications: [
      "Chef knife, paring knife, peeler, and chopping board",
      "Stainless blades with ergonomic handles",
      "Suitable for home and professional prep stations"
    ],
    delivery: "Packed with blade guards for safe delivery.",
    tags: ["knives", "cutlery", "prep"],
    isBestSeller: true
  },
  {
    id: "prd-004",
    slug: "ceramic-dinner-plate-set",
    name: "Ceramic Dinner Plate Set",
    sku: "SPN-TW-027",
    category: "Plates",
    brand: "TableCraft",
    price: 6200,
    rating: 4.5,
    reviewCount: 29,
    stock: 12,
    image: "/images/tableware.png",
    description: "Clean ceramic dinner plates that suit daily family service and guest hosting.",
    specifications: [
      "Set of 12 dinner plates",
      "Dishwasher safe",
      "Stackable profile for compact storage"
    ],
    delivery: "Fragile items are double-packed before dispatch.",
    tags: ["plates", "tableware", "ceramic"],
    isNew: true
  },
  {
    id: "prd-005",
    slug: "stoneware-mug-pack",
    name: "Stoneware Mug Pack",
    sku: "SPN-MG-006",
    category: "Cups & Mugs",
    brand: "Spooner Home",
    price: 2850,
    rating: 4.4,
    reviewCount: 18,
    stock: 48,
    image: "/images/tableware.png",
    description: "Comfortable mugs for tea, coffee, cocoa, and everyday beverage service.",
    specifications: [
      "Pack of 6 mugs",
      "Microwave safe",
      "Durable glazed stoneware"
    ],
    delivery: "Available for pickup at Kamukunji Trade Center.",
    tags: ["mugs", "cups", "drinkware"],
    isNew: true
  },
  {
    id: "prd-006",
    slug: "multi-use-kitchen-tool-kit",
    name: "Multi-use Kitchen Tool Kit",
    sku: "SPN-UT-021",
    category: "Kitchen Tools",
    brand: "KitchenMate",
    price: 3750,
    rating: 4.6,
    reviewCount: 52,
    stock: 31,
    image: "/images/tools.png",
    badge: "Popular",
    description: "A practical utensil set covering stirring, serving, turning, and measuring.",
    specifications: [
      "Includes spatula, whisk, tongs, ladle, and measuring spoons",
      "Heat-resistant handles",
      "Hanging holes for tidy storage"
    ],
    delivery: "Ships in one compact package.",
    tags: ["utensils", "tools", "kitchen"],
    isBestSeller: true
  },
  {
    id: "prd-007",
    slug: "airtight-pantry-container-set",
    name: "Airtight Pantry Container Set",
    sku: "SPN-ST-032",
    category: "Storage",
    brand: "StoreWell",
    price: 5400,
    salePrice: 4890,
    rating: 4.7,
    reviewCount: 33,
    stock: 27,
    image: "/images/appliances.png",
    description: "Clear airtight containers for flour, cereals, spices, snacks, and leftovers.",
    specifications: [
      "Set of 10 assorted containers",
      "Stackable and transparent",
      "Airtight clip-lock lids"
    ],
    delivery: "Delivery cartons are labeled fragile where needed.",
    tags: ["storage", "containers", "pantry"],
    isNew: true
  },
  {
    id: "prd-008",
    slug: "nonstick-baking-tray-bundle",
    name: "Nonstick Baking Tray Bundle",
    sku: "SPN-BK-011",
    category: "Baking",
    brand: "BakePro",
    price: 4100,
    rating: 4.3,
    reviewCount: 22,
    stock: 15,
    image: "/images/appliances.png",
    description: "Reliable bakeware for pastries, roasted vegetables, cookies, and batch prep.",
    specifications: [
      "Three tray sizes",
      "Nonstick finish",
      "Reinforced edges reduce warping"
    ],
    delivery: "Same-day pickup available after confirmation.",
    tags: ["baking", "tray", "bakeware"],
    isNew: true
  },
  {
    id: "prd-009",
    slug: "compact-electric-blender",
    name: "Compact Electric Blender",
    sku: "SPN-AP-040",
    category: "Electrical Appliances",
    brand: "PowerPrep",
    price: 7600,
    rating: 4.6,
    reviewCount: 47,
    stock: 9,
    image: "/images/appliances.png",
    badge: "Low Stock",
    description: "A compact blender for smoothies, sauces, soups, and quick kitchen prep.",
    specifications: [
      "Two-speed motor",
      "Removable jar",
      "Overheat protection"
    ],
    delivery: "Electrical items are tested before dispatch where applicable.",
    tags: ["blender", "appliances", "electric"],
    isBestSeller: true
  },
  {
    id: "prd-010",
    slug: "restaurant-prep-stock-pot",
    name: "Restaurant Prep Stock Pot",
    sku: "SPN-RS-052",
    category: "Restaurant Supplies",
    brand: "Spooner Trade",
    price: 9400,
    rating: 4.8,
    reviewCount: 25,
    stock: 11,
    image: "/images/cookware.png",
    description: "A large-capacity stock pot for hotels, cafes, caterers, and busy households.",
    specifications: [
      "Heavy-gauge stainless body",
      "Large loop handles",
      "Designed for soups, stews, stocks, and bulk boiling"
    ],
    delivery: "Bulk orders can be arranged through WhatsApp support.",
    tags: ["restaurant", "stock pot", "bulk"],
    isBestSeller: true
  },
  {
    id: "prd-011",
    slug: "glass-storage-jar-set",
    name: "Glass Storage Jar Set",
    sku: "SPN-ST-037",
    category: "Storage",
    brand: "StoreWell",
    price: 3200,
    rating: 4.4,
    reviewCount: 16,
    stock: 39,
    image: "/images/appliances.png",
    description: "A neat glass jar set for counters, pantries, spices, and dry ingredients.",
    specifications: [
      "Set of 6 glass jars",
      "Reusable labels included",
      "Sealed lids for dry storage"
    ],
    delivery: "Fragile-safe packaging included.",
    tags: ["jars", "storage", "glass"],
    isNew: true
  },
  {
    id: "prd-012",
    slug: "everyday-cutlery-service-set",
    name: "Everyday Cutlery Service Set",
    sku: "SPN-CT-029",
    category: "Restaurant Supplies",
    brand: "TableCraft",
    price: 6850,
    rating: 4.5,
    reviewCount: 35,
    stock: 25,
    image: "/images/tools.png",
    description: "A polished cutlery service set for homes, restaurants, and catering tables.",
    specifications: [
      "Forks, spoons, teaspoons, and table knives",
      "Mirror-polished stainless steel",
      "Balanced weight for everyday service"
    ],
    delivery: "Trade quantities available on request.",
    tags: ["cutlery", "restaurant", "service"],
    isBestSeller: true
  }
];

export const heroSlides = [
  {
    eyebrow: "Cookware Deals",
    title: "Everything your kitchen needs, ready for pickup or delivery.",
    text: "Shop cookware, cutlery, appliances, bakeware, storage, and restaurant supplies from Kamukunji Trade Center.",
    image: "/images/hero-kitchenware.png"
  },
  {
    eyebrow: "Sharp Prep",
    title: "Knives, boards, and tools built for daily kitchen rhythm.",
    text: "Find sturdy prep essentials for home cooks, caterers, and restaurant teams.",
    image: "/images/tools.png"
  },
  {
    eyebrow: "Serve Better",
    title: "Tableware that looks clean and lasts through busy service.",
    text: "Choose plates, mugs, cups, and serving pieces for everyday meals and guest hosting.",
    image: "/images/tableware.png"
  },
  {
    eyebrow: "Bake & Store",
    title: "Bakeware and storage sets that keep the counter organized.",
    text: "Stock up on trays, bowls, containers, jars, and kitchen organizers.",
    image: "/images/appliances.png"
  },
  {
    eyebrow: "Appliances",
    title: "Useful small appliances for faster prep and smoother service.",
    text: "Explore blenders, kettles, mixers, and practical electrical essentials.",
    image: "/images/appliances.png"
  }
];

export const shopBenefits = [
  {
    title: "Genuine Products",
    text: "Catalog items are sourced for dependable quality.",
    icon: BadgeCheck
  },
  {
    title: "Affordable Prices",
    text: "Competitive pricing for households and trade buyers.",
    icon: PackageCheck
  },
  {
    title: "Secure Payments",
    text: "Card checkout prepared through Stripe integrations.",
    icon: CreditCard
  },
  {
    title: "Fast Delivery",
    text: "Delivery and pickup support from Kamukunji Trade Center.",
    icon: Truck
  },
  {
    title: "Excellent Customer Service",
    text: "Quick WhatsApp support for product and order questions.",
    icon: Headphones
  }
];

export const reviews = [
  {
    name: "Mercy N.",
    role: "Home kitchen customer",
    quote:
      "The cookware set arrived well packed, and the team helped me choose the right size for my cooker.",
    rating: 5
  },
  {
    name: "Brian K.",
    role: "Cafe owner",
    quote:
      "Fast response on WhatsApp and good pricing when I needed extra plates for the cafe.",
    rating: 5
  },
  {
    name: "Amina W.",
    role: "Baker",
    quote:
      "The baking trays feel strong, clean easily, and the delivery timing was exactly as promised.",
    rating: 4
  }
];

export const adminSections = [
  "Products",
  "Categories",
  "Inventory",
  "Orders",
  "Customers",
  "Discounts",
  "Reviews",
  "Coupons",
  "Shipping",
  "Analytics"
];

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0
  }).format(value);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product) {
  return products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .concat(products.filter((item) => item.id !== product.id))
    .slice(0, 4);
}

export function getProductSuggestions(query: string) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return [];
  }

  return products
    .filter((product) =>
      [product.name, product.category, product.brand, ...product.tags]
        .join(" ")
        .toLowerCase()
        .includes(normalized)
    )
    .slice(0, 6);
}
