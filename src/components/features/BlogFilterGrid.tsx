"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { blogArticles } from "@/data/blog";
import Button from "@/components/ui/Button";
import ParallaxImage from "@/components/ui/ParallaxImage";

const categories = ["All Insights", "AI", "Cloud", "Security", "Infrastructure", "Business"];

export default function BlogFilterGrid() {
  const [activeCategory, setActiveCategory] = useState("All Insights");
  const [searchQuery, setSearchQuery] = useState("");

  const articles = Object.values(blogArticles);

  // Filtering logic
  const filteredArticles = articles.filter((art) => {
    const matchesCategory =
      activeCategory === "All Insights" ||
      art.category.toLowerCase().includes(activeCategory.toLowerCase());

    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Category Filters Bar */}
      <section 
        className="px-margin-mobile md:px-margin-desktop py-md border-y border-outline-variant/30 bg-surface-container-low sticky top-16 z-40"
        data-cursor-guide="Category Filters - Filter insights by technical topic"
      >
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-md">
          <div className="flex items-center gap-xs overflow-x-auto pb-2 md:pb-0 scrollbar-thin">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-md py-1.5 rounded-full font-label-md text-label-md transition-colors cursor-pointer shrink-0 ${
                  activeCategory === cat
                    ? "bg-primary text-on-primary"
                    : "hover:bg-surface-container-high text-on-surface-variant bg-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-full text-label-md focus:outline-none focus:border-primary dark:bg-primary-container dark:text-on-primary dark:border-primary-fixed-dim/20"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section 
        className="px-margin-mobile md:px-margin-desktop py-xl"
        data-cursor-guide="Articles - Read stories on enterprise software strategy"
      >
        <div className="max-w-[1440px] mx-auto">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-xl space-y-sm">
              <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary">
                No Articles Found
              </h3>
              <p className="text-on-surface-variant dark:text-on-primary-container/85">
                Try adjusting your search criteria or choosing a different category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {filteredArticles.map((art, idx) => (
                <article key={idx} className="flex flex-col group space-y-md">
                  <div className="overflow-hidden rounded-xl aspect-[16/10] relative shadow-sm w-full">
                    <ParallaxImage
                      src={art.coverImage}
                      alt={art.coverImageAlt || art.title}
                      className="w-full h-full"
                      imgClassName="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-primary/95 text-white text-label-sm px-3 py-1 rounded-full backdrop-blur-sm">
                        {art.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-base text-label-sm text-outline font-bold tracking-widest uppercase">
                    <span>{art.tagline}</span>
                    <span>•</span>
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary group-hover:text-secondary dark:group-hover:text-secondary-fixed transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-on-surface-variant dark:text-on-primary-container/85 line-clamp-3 text-body-md">
                    {art.excerpt}
                  </p>
                  <Link
                    href={`/blog/${art.slug}`}
                    className="mt-auto flex items-center gap-xs text-primary dark:text-on-primary font-bold hover:gap-sm transition-all"
                  >
                    Read Story <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}

              {/* Editorial Cross-Sell Box */}
              <div className="lg:col-span-2 bg-primary text-on-primary rounded-xl p-lg flex flex-col justify-between group hover:bg-zinc-900 dark:hover:bg-zinc-200 transition-colors min-h-[300px] mt-lg">
                <div>
                  <h2 className="text-display-lg-mobile md:text-display-lg font-display-lg mb-md">
                    Need a custom technical roadmap?
                  </h2>
                  <p className="text-on-primary/80 font-body-lg max-w-md">
                    Our consultants specialize in translating complex technological trends into actionable business strategies.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-md mt-xl">
                  <div className="flex -space-x-3">
                    <img
                      alt="Consultant 1"
                      className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                      src="/images/leader_ceo.png"
                    />
                    <img
                      alt="Consultant 2"
                      className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                      src="/images/leader_ai.png"
                    />
                    <img
                      alt="Consultant 3"
                      className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                      src="/images/leader_coo.png"
                    />
                    <div className="w-12 h-12 rounded-full border-2 border-primary bg-secondary flex items-center justify-center font-bold text-sm text-white">
                      +24
                    </div>
                  </div>
                  <Link href="/contact">
                    <Button variant="white">Speak with an Expert</Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
