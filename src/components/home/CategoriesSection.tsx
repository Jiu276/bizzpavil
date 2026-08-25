import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { categories } from "@/data/categories";

/**
 * Category grid section for the homepage.
 */
export function CategoriesSection() {
  return (
    <section className="border-y border-border bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Browse by Topic
            </span>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              Explore Categories
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              From product picks to platform comparisons — find the insights that
              matter most to your business.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, index) => (
            <AnimatedSection key={cat.slug} delay={index * 80}>
              <Link
                href={`/blog?category=${cat.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-500 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1"
              >
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                  {cat.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {cat.description}
                </p>
                <span className="mt-4 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Browse articles →
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
