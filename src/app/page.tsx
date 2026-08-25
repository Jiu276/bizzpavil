import { Hero } from "@/components/home/Hero";
import { FeaturedPosts } from "@/components/home/FeaturedPosts";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CtaSection } from "@/components/home/CtaSection";
import { getFeaturedPosts, getAllPosts } from "@/data/posts";

/**
 * Landing page with hero, featured content, and category overview.
 */
export default function HomePage() {
  const featuredPosts = getFeaturedPosts();
  const allPosts = getAllPosts();
  const displayPosts = featuredPosts.length >= 3 ? featuredPosts : allPosts;

  return (
    <>
      <Hero />
      <FeaturedPosts posts={displayPosts} />
      <CategoriesSection />
      <FeaturedProducts />
      <CtaSection />
    </>
  );
}
