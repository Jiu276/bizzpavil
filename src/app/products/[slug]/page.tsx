import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/products/ProductCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import { getPostBySlug } from "@/data/posts";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Generates static paths for all products.
 */
export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

/**
 * Generates metadata for a product detail page.
 */
export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.description,
  };
}

/**
 * Individual product detail and review page.
 */
export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product);
  const relatedPost = product.relatedPostSlug
    ? getPostBySlug(product.relatedPostSlug)
    : null;

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <Link
            href="/products"
            className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-accent-dark"
          >
            ← Back to Products
          </Link>
        </AnimatedSection>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-white">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              {product.category}
            </span>
            <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-lg text-muted">{product.tagline}</p>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${
                      i < Math.floor(product.rating)
                        ? "text-accent"
                        : "text-border"
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-sm font-semibold text-foreground">
                  {product.rating}/5
                </span>
              </div>
              <span className="rounded-full bg-accent/10 px-4 py-1 text-sm font-semibold text-accent">
                {product.price}
              </span>
            </div>

            <p className="mt-6 leading-relaxed text-muted">
              {product.description}
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Key Features
              </h3>
              <ul className="mt-3 space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-0.5 text-accent">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={300}>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-semibold text-green-600">Pros</h3>
              <ul className="mt-4 space-y-2">
                {product.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-green-500">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-semibold text-red-500">Cons</h3>
              <ul className="mt-4 space-y-2">
                {product.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-red-400">−</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 lg:col-span-1">
              <h3 className="font-semibold text-foreground">Our Verdict</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted whitespace-pre-line">
                {product.longDescription}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {relatedPost && (
          <AnimatedSection delay={400}>
            <div className="mt-16 rounded-2xl border border-accent/20 bg-accent/5 p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Read the Full Review
              </h3>
              <p className="mt-2 text-sm text-muted">{relatedPost.excerpt}</p>
              <Link
                href={`/blog/${relatedPost.slug}`}
                className="mt-4 inline-flex items-center text-sm font-medium text-accent hover:text-accent-dark"
              >
                Read article: {relatedPost.title} →
              </Link>
            </div>
          </AnimatedSection>
        )}
      </div>

      {relatedProducts.length > 0 && (
        <section className="mt-16 border-t border-border bg-surface py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground">Similar Products</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((related, index) => (
                <ProductCard key={related.slug} product={related} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
