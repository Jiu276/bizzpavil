import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SocialWidget } from "@/components/ui/SocialWidget";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BizzPavil — our mission to deliver honest, actionable business recommendations.",
};

/** Team member profiles. */
const team = [
  {
    name: "Sarah Chen",
    role: "Editor-in-Chief",
    bio: "Former product manager with 10+ years evaluating business tools and SaaS platforms.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Marcus Webb",
    role: "Senior Analyst",
    bio: "Business strategist specializing in startup tech stacks and operational efficiency.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Elena Rodriguez",
    role: "Tech Reviewer",
    bio: "Hardware enthusiast and smart home expert with a passion for practical technology.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

/**
 * About page with mission, team, and values.
 */
export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Our Story
            </span>
            <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">
              About BizzPavil
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              We help entrepreneurs and teams navigate the overwhelming world of
              business tools, platforms, and products with honest, thorough reviews.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="BizzPavil team collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Every day, thousands of new tools and platforms launch, each promising
                to transform your business. Cutting through the noise is exhausting —
                and costly when you choose wrong.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                BizzPavil exists to be your trusted filter. We rigorously test products,
                compare platforms head-to-head, and publish detailed guides so you can
                make confident decisions in minutes, not weeks.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { value: "10+", label: "In-Depth Reviews" },
                  { value: "50K+", label: "Monthly Readers" },
                  { value: "100%", label: "Independent" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-accent">{stat.value}</p>
                    <p className="mt-1 text-xs text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="mt-20">
            <h2 className="text-center text-2xl font-bold text-foreground">
              Meet Our Team
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-accent">{member.role}</p>
                  <p className="mt-2 text-sm text-muted">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="mt-20 rounded-2xl border border-border bg-surface p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold text-foreground">Connect With Us</h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              Follow BizzPavil on social media for the latest reviews, guides, and business insights.
            </p>
            <div className="mt-6 flex justify-center">
              <SocialWidget links={siteConfig.socialLinks} />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
