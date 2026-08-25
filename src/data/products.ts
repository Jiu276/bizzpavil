import type { Product } from "@/types";

/**
 * All product recommendations with detailed review content.
 */
export const products: Product[] = [
  {
    slug: "herman-miller-aeron",
    name: "Herman Miller Aeron",
    tagline: "The gold standard in ergonomic seating",
    description:
      "Industry-leading ergonomic chair with adaptive lumbar support and breathable mesh design for all-day comfort.",
    longDescription: `
The Herman Miller Aeron (Remastered) has defined ergonomic seating for over two decades. Its PostureFit SL technology provides targeted sacral and lumbar support that moves with your body, reducing fatigue during extended work sessions.

The 8Z Pellicle mesh suspension distributes weight evenly while maintaining airflow — a critical advantage during eight-hour workdays. Available in three sizes (A, B, C), the Aeron accommodates virtually every body type.

Build quality is exceptional. The graphite frame, aluminum base, and premium casters are designed for a 12-year warranty period. This isn't a chair you replace — it's furniture you invest in.

For remote professionals, freelancers, and anyone who treats their workspace seriously, the Aeron remains the benchmark against which all competitors are measured.
    `.trim(),
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    imageAlt: "Herman Miller style ergonomic office chair",
    category: "Office Furniture",
    rating: 4.9,
    price: "From $1,395",
    pros: [
      "Exceptional lumbar support",
      "Breathable mesh keeps you cool",
      "12-year warranty",
      "Three size options",
      "Highly adjustable armrests",
    ],
    cons: [
      "Premium price point",
      "No headrest on base model",
      "Assembly requires two people",
    ],
    features: [
      "PostureFit SL lumbar support",
      "8Z Pellicle mesh suspension",
      "Adjustable arms and tilt",
      "Forward tilt for active sitting",
      "Carpet and hard floor casters",
    ],
    relatedPostSlug: "premium-office-chairs-2026",
  },
  {
    slug: "shopify",
    name: "Shopify",
    tagline: "Launch and scale your online store",
    description:
      "The leading e-commerce platform trusted by millions of merchants worldwide for its ease of use and powerful growth tools.",
    longDescription: `
Shopify has democratized e-commerce by making store creation accessible to anyone, regardless of technical skill. From product listing to payment processing to shipping integration, Shopify handles the infrastructure so you focus on selling.

The platform's strength lies in its ecosystem. Over 8,000 apps extend functionality for email marketing, inventory management, customer reviews, and international selling. Shopify Payments eliminates the complexity of third-party payment gateways.

For small business owners, the Basic plan ($39/month) includes everything needed to launch: unlimited products, 24/7 support, discount codes, and abandoned cart recovery. As you grow, Shopify scales seamlessly to Plus for high-volume merchants.

Whether you're selling handmade crafts or building a seven-figure brand, Shopify provides the most reliable foundation for online commerce in 2025.
    `.trim(),
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80",
    imageAlt: "E-commerce store management on laptop",
    category: "E-Commerce Platform",
    rating: 4.8,
    price: "From $39/month",
    pros: [
      "Fastest time to launch",
      "Reliable hosting included",
      "Massive app ecosystem",
      "Excellent mobile admin",
      "Built-in payment processing",
    ],
    cons: [
      "Transaction fees without Shopify Payments",
      "Advanced customization needs Liquid",
      "App costs add up quickly",
    ],
    features: [
      "Drag-and-drop store builder",
      "Shopify Payments",
      "Multi-channel selling",
      "Inventory management",
      "Analytics dashboard",
    ],
    relatedPostSlug: "top-ecommerce-platforms-small-business",
  },
  {
    slug: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5",
    tagline: "Industry-leading noise cancellation",
    description:
      "Premium over-ear headphones with best-in-class ANC, exceptional sound quality, and 30-hour battery life.",
    longDescription: `
Sony's WH-1000XM5 represents the pinnacle of consumer noise-canceling headphones. The Integrated Processor V1 and HD Noise Canceling Processor QN1 work together to eliminate ambient noise across the full frequency spectrum — from airplane engines to office chatter.

Sound quality matches the noise cancellation prowess. Custom 30mm drivers deliver rich, detailed audio with deep bass and crisp highs. LDAC support ensures high-resolution audio over Bluetooth for supported devices.

Comfort receives equal attention. The lightweight design (250g) and soft-fit leather earpads allow hours of wear without fatigue. Multipoint connection lets you switch between laptop and phone seamlessly.

With 30 hours of battery life and quick charge (3 hours from 3 minutes), the XM5s are built for travelers, remote workers, and anyone who values immersive, distraction-free audio.
    `.trim(),
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80",
    imageAlt: "Sony premium wireless headphones",
    category: "Audio",
    rating: 4.7,
    price: "$349",
    pros: [
      "Best-in-class noise cancellation",
      "30-hour battery life",
      "Lightweight and comfortable",
      "Multipoint Bluetooth",
      "Excellent call quality",
    ],
    cons: [
      "No folding design",
      "Premium price",
      "Non-replaceable ear pads over time",
    ],
    features: [
      "Adaptive Sound Control",
      "Speak-to-Chat technology",
      "Quick Attention mode",
      "LDAC high-res audio",
      "Touch sensor controls",
    ],
    relatedPostSlug: "wireless-earbuds-airpods-vs-sony",
  },
  {
    slug: "hubspot-crm",
    name: "HubSpot CRM",
    tagline: "Free CRM that scales with your business",
    description:
      "Powerful customer relationship management platform with a genuinely useful free tier and seamless upgrade paths.",
    longDescription: `
HubSpot CRM disrupted the market by offering a truly capable free CRM — not a limited trial, but a permanent free tier that handles contact management, deal tracking, email scheduling, and live chat.

The visual deal pipeline makes sales forecasting intuitive. Drag deals between stages, set automatic reminders, and track every customer interaction in a unified timeline. Email integration logs conversations automatically, eliminating manual data entry.

For startups, the free tier covers up to 1,000,000 contacts with no time limit. As your team grows, HubSpot's paid tiers add marketing automation, advanced reporting, and custom objects without requiring a platform migration.

Integration with Gmail, Outlook, Slack, and 1,000+ apps ensures HubSpot fits into existing workflows rather than forcing new ones.
    `.trim(),
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    imageAlt: "CRM dashboard with analytics charts",
    category: "Business Software",
    rating: 4.6,
    price: "Free / From $20/month",
    pros: [
      "Generous free tier",
      "Intuitive deal pipeline",
      "Excellent email integration",
      "Scales to enterprise",
      "Large integration ecosystem",
    ],
    cons: [
      "Paid tiers get expensive quickly",
      "Marketing hub adds complexity",
      "Reporting limited on free plan",
    ],
    features: [
      "Contact & deal management",
      "Email tracking & scheduling",
      "Meeting scheduler",
      "Live chat widget",
      "Mobile CRM app",
    ],
    relatedPostSlug: "essential-crm-software-startups",
  },
  {
    slug: "notion",
    name: "Notion",
    tagline: "Your team's all-in-one workspace",
    description:
      "Flexible workspace combining notes, databases, wikis, and project management in one beautifully designed platform.",
    longDescription: `
Notion reimagined productivity software by making flexibility its core feature. Instead of forcing teams into rigid structures, Notion provides building blocks — pages, databases, boards, calendars — that you combine to match your exact workflow.

For remote teams, Notion serves as the single source of truth. Product roadmaps live alongside meeting notes, company wikis, and onboarding docs. Real-time collaboration with comments and mentions keeps distributed teams aligned without endless Slack threads.

The template gallery accelerates setup. Whether you need a sprint board, content calendar, or CRM database, community templates provide starting points you customize in minutes.

Notion's free plan supports unlimited pages for individuals and small teams. The Plus plan ($10/user/month) adds unlimited file uploads and 30-day version history — essential for growing organizations.
    `.trim(),
    image:
      "https://images.unsplash.com/photo-1611532736597-deb2f063739b?w=800&q=80",
    imageAlt: "Notion workspace on laptop screen",
    category: "Productivity",
    rating: 4.8,
    price: "Free / From $10/user/month",
    pros: [
      "Infinitely customizable",
      "Beautiful, clean interface",
      "Strong free tier",
      "Excellent template library",
      "Real-time collaboration",
    ],
    cons: [
      "Can become disorganized without rules",
      "Offline mode is limited",
      "Performance issues with large workspaces",
    ],
    features: [
      "Pages & nested databases",
      "Kanban, calendar & gallery views",
      "Wiki & documentation",
      "API & integrations",
      "AI writing assistant",
    ],
    relatedPostSlug: "best-project-management-tools-remote-teams",
  },
  {
    slug: "aws-cloud",
    name: "Amazon Web Services",
    tagline: "The world's most comprehensive cloud platform",
    description:
      "Enterprise-grade cloud infrastructure with 200+ services for compute, storage, databases, AI, and beyond.",
    longDescription: `
Amazon Web Services (AWS) is the cloud infrastructure backbone for millions of organizations, from two-person startups to Fortune 500 enterprises. Its breadth of services means virtually any technical requirement can be met within a single ecosystem.

For startups, AWS Activate provides up to $100,000 in credits, making initial infrastructure costs negligible. Core services like EC2 (compute), S3 (storage), RDS (databases), and Lambda (serverless) cover the foundation of most applications.

AWS's global infrastructure spans 33 geographic regions, ensuring low-latency access for users worldwide. Services like CloudFront CDN and Route 53 DNS integrate seamlessly for production-grade deployments.

The learning curve is real — AWS's complexity reflects its power. But with Infrastructure as Code tools like Terraform and comprehensive documentation, teams can build scalable, reliable systems that grow from prototype to millions of users.
    `.trim(),
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    imageAlt: "Cloud server infrastructure visualization",
    category: "Cloud Platform",
    rating: 4.7,
    price: "Pay-as-you-go / Free tier available",
    pros: [
      "Largest service catalog",
      "Global infrastructure",
      "Startup credit programs",
      "Mature ecosystem & talent pool",
      "Enterprise-grade security",
    ],
    cons: [
      "Complex pricing structure",
      "Steep learning curve",
      "Easy to overspend without monitoring",
    ],
    features: [
      "EC2 virtual servers",
      "S3 object storage",
      "RDS managed databases",
      "Lambda serverless computing",
      "CloudFront CDN",
    ],
    relatedPostSlug: "best-cloud-hosting-platforms-compared",
  },
];

/**
 * Returns all products.
 */
export function getAllProducts() {
  return products;
}

/**
 * Returns a single product by slug.
 * @param slug - Product URL slug
 */
export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

/**
 * Returns related products in the same category.
 * @param product - Current product
 * @param limit - Maximum number of related products
 */
export function getRelatedProducts(product: Product, limit = 3) {
  return products
    .filter((p) => p.slug !== product.slug)
    .filter((p) => p.category === product.category)
    .slice(0, limit);
}
