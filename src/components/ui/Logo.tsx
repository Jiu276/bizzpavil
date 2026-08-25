import Link from "next/link";

interface LogoProps {
  /** Whether to show the tagline below the logo */
  showTagline?: boolean;
  /** Size variant */
  size?: "sm" | "md" | "lg";
}

/**
 * BizzPavil brand logo with link to homepage.
 */
export function Logo({ showTagline = false, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <Link href="/" className="group inline-flex flex-col transition-opacity hover:opacity-90">
      <span className={`${sizeClasses[size]} font-bold tracking-tight`}>
        <span className="text-accent">Bizz</span>
        <span className="text-foreground">Pavil</span>
      </span>
      {showTagline && (
        <span className="mt-0.5 text-xs font-medium tracking-widest text-muted uppercase">
          Smart Business Insights
        </span>
      )}
    </Link>
  );
}
