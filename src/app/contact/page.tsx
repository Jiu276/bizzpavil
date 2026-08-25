import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SocialWidget } from "@/components/ui/SocialWidget";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the BizzPavil team for partnerships, feedback, or inquiries.",
};

/**
 * Contact page with form and contact information.
 */
export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Get in Touch
            </span>
            <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Have a question, partnership proposal, or product suggestion?
              We&apos;d love to hear from you.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="text-xl font-semibold text-foreground">
                Send a Message
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150} className="lg:col-span-2">
            <div className="space-y-8">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-semibold text-foreground">Email</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block text-accent transition-colors hover:text-accent-dark"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-semibold text-foreground">Response Time</h3>
                <p className="mt-2 text-sm text-muted">
                  We typically respond within 24 hours on business days.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-semibold text-foreground">Follow Us</h3>
                <div className="mt-4">
                  <SocialWidget links={siteConfig.socialLinks} />
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-semibold text-foreground">Partnerships</h3>
                <p className="mt-2 text-sm text-muted">
                  Interested in collaborating? Reach out with details about your
                  product or platform and we&apos;ll review it for potential coverage.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
