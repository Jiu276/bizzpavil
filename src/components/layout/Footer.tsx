import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SocialWidget } from "@/components/ui/SocialWidget";
import { siteConfig } from "@/data/site";

/**
 * Site footer with navigation, social links, and copyright.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo size="md" showTagline />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6">
              <SocialWidget links={siteConfig.socialLinks} />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/blog", label: "Blog" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Categories
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/blog?category=product-recommendations", label: "Product Picks" },
                { href: "/blog?category=platform-recommendations", label: "Platforms" },
                { href: "/blog?category=tech-reviews", label: "Tech Reviews" },
                { href: "/blog?category=business-tools", label: "Business Tools" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Built with care for modern entrepreneurs.
          </p>
        </div>
      </div>
    </footer>
  );
}
