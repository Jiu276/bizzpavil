import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

/**
 * Call-to-action banner for the homepage.
 */
export function CtaSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-accent-dark px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggIGQ9Ik0zNiAzNGg0djJoLTR6bTAtNGg0djJoLTR6bTAtNGg0djJoLTR6bTAtNGg0djJoLTR6bS00IDBoNHYyaC00em0wIDRoNHYyaC00em0wIDRoNHYyaC00em0wIDRoNHYyaC00em0tNCAwaDR2MmgtNHptMCA0aDR2MmgtNHptMCA0aDR2MmgtNHptMCA0aDR2MmgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to Level Up Your Business?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                Join thousands of entrepreneurs who rely on BizzPavil for
                honest reviews and actionable recommendations.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-accent shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Start Reading
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
