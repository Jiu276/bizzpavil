import type { Metadata } from "next";
import { ProductCard } from "@/components/products/ProductCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getAllProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Curated product recommendations with detailed reviews, ratings, and buying guides.",
};

/**
 * Products listing page with all recommended products.
 */
export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Curated Picks
            </span>
            <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">
              Recommended Products
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Hand-picked tools and products we&apos;ve thoroughly tested and
              recommend for modern businesses and professionals.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
