"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
}

/**
 * Pagination controls for blog listing.
 */
export function BlogPagination({ currentPage, totalPages }: BlogPaginationProps) {
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const buildHref = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }
    const query = params.toString();
    return `/blog${query ? `?${query}` : ""}`;
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Blog pagination"
      className="flex items-center justify-center gap-2 pt-8"
    >
      <Link
        href={buildHref(currentPage - 1)}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-lg border border-border text-sm transition-all duration-300 hover:border-accent hover:text-accent",
          currentPage <= 1 && "pointer-events-none opacity-40"
        )}
        aria-disabled={currentPage <= 1}
      >
        ←
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={buildHref(page)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-all duration-300",
            page === currentPage
              ? "bg-accent text-white shadow-md"
              : "border border-border hover:border-accent hover:text-accent"
          )}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </Link>
      ))}

      <Link
        href={buildHref(currentPage + 1)}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-lg border border-border text-sm transition-all duration-300 hover:border-accent hover:text-accent",
          currentPage >= totalPages && "pointer-events-none opacity-40"
        )}
        aria-disabled={currentPage >= totalPages}
      >
        →
      </Link>
    </nav>
  );
}
