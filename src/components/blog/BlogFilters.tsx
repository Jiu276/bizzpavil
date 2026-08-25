"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useTransition } from "react";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";
import type { CategorySlug } from "@/types";

interface BlogFiltersProps {
  /** Current search query */
  currentQuery: string;
  /** Current category filter */
  currentCategory: CategorySlug | "all";
}

/**
 * Search bar and category filter controls for the blog listing page.
 */
export function BlogFilters({ currentQuery, currentCategory }: BlogFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const updateFilters = useCallback(
    (updates: { q?: string; category?: string; page?: string }) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value && value !== "all") {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      if (!updates.page) {
        params.delete("page");
      }

      startTransition(() => {
        router.push(`/blog?${params.toString()}`);
      });
    },
    [router, searchParams]
  );

  return (
    <div className={`space-y-6 ${isPending ? "opacity-70" : ""}`}>
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="search"
          placeholder="Search articles..."
          defaultValue={currentQuery}
          onChange={(e) => updateFilters({ q: e.target.value })}
          className="w-full rounded-xl border border-border bg-surface py-3 pl-12 pr-4 text-sm transition-all duration-300 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => updateFilters({ category: "all" })}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
            currentCategory === "all"
              ? "bg-accent text-white shadow-md"
              : "border border-border bg-surface text-muted hover:border-accent/30 hover:text-foreground"
          )}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => updateFilters({ category: cat.slug })}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
              currentCategory === cat.slug
                ? "bg-accent text-white shadow-md"
                : "border border-border bg-surface text-muted hover:border-accent/30 hover:text-foreground"
            )}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
