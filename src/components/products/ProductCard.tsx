import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  /** Animation delay index for staggered entrance */
  index?: number;
}

/**
 * Product recommendation card with image, rating, and summary.
 */
export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <AnimatedSection delay={index * 100}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:-translate-y-1">
        <Link
          href={`/products/${product.slug}`}
          className="relative block aspect-square overflow-hidden bg-white"
        >
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>

        <div className="flex flex-1 flex-col p-6">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            {product.category}
          </span>

          <Link href={`/products/${product.slug}`}>
            <h3 className="mt-2 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">
              {product.name}
            </h3>
          </Link>

          <p className="mt-1 text-sm text-muted">{product.tagline}</p>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-2">
            {product.description}
          </p>

          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-accent">
                {product.rating}
              </span>
              <span className="text-accent">★</span>
            </div>
            <span className="text-sm font-medium text-foreground">
              {product.price}
            </span>
          </div>
        </div>
      </article>
    </AnimatedSection>
  );
}

/**
 * Compact product card variant for detail page sidebars.
 */
export function ProductCardCompact({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group flex gap-4 rounded-xl border border-border p-4 transition-all duration-300",
        "hover:border-accent/30 hover:bg-surface"
      )}
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>
      <div>
        <h4 className="text-sm font-semibold group-hover:text-accent">{product.name}</h4>
        <p className="text-xs text-muted">{product.price}</p>
      </div>
    </Link>
  );
}
