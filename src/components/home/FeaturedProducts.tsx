import Link from "next/link";
import { ProductCard } from "@/components/products/ProductCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getAllProducts } from "@/data/products";

/**
 * Featured products section for the homepage.
 */
export function FeaturedProducts() {
  const products = getAllProducts().slice(0, 3);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-end justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                Top Picks
              </span>
              <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
                Recommended Products
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden text-sm font-medium text-accent transition-colors hover:text-accent-dark sm:block"
            >
              View all products →
            </Link>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
