import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { getCategoryBySlug } from "@/data/categories";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  /** Animation delay index for staggered entrance */
  index?: number;
}

/**
 * Blog article preview card with image, metadata, and excerpt.
 */
export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const category = getCategoryBySlug(post.category);

  return (
    <AnimatedSection delay={index * 100}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:-translate-y-1">
        <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full bg-accent/10 px-3 py-1 font-medium text-accent">
              {category?.icon} {category?.name}
            </span>
            <time dateTime={post.date} className="text-muted">
              {formatDate(post.date)}
            </time>
          </div>

          <Link href={`/blog/${post.slug}`}>
            <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-accent">
              {post.title}
            </h3>
          </Link>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
            <span className="text-xs text-muted">{post.author}</span>
            <span className="text-xs text-muted">{post.readTime} min read</span>
          </div>
        </div>
      </article>
    </AnimatedSection>
  );
}
