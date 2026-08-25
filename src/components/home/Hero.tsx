import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

/**
 * Full-width hero section with background image for the landing page.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <Image
        src={siteConfig.heroImage}
        alt={siteConfig.heroImageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/90 backdrop-blur-sm">
            Trusted Business Insights
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Make Smarter
            <span className="block text-accent-light">Business Decisions</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent-dark hover:scale-105 hover:shadow-xl"
            >
              Explore Articles
              <svg
                className="ml-2"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
