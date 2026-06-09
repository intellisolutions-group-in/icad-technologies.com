import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { blogArticles } from "@/data/blog";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/ui/Button";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(blogArticles).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const article = blogArticles[slug];

  if (!article) {
    return {
      title: "Article Not Found | ICAD Technologies",
    };
  }

  return {
    title: `${article.title} | ICAD Technologies`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | ICAD Technologies`,
      description: article.excerpt,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const article = blogArticles[slug];

  if (!article) {
    notFound();
  }

  // Load related articles
  const relatedArticles = (article.relatedSlugs || [])
    .map((s) => blogArticles[s])
    .filter(Boolean);

  return (
    <>
      <Navbar />
      <main className="flex-1 mt-20">
        {/* Back link */}
        <section className="px-margin-mobile md:px-margin-desktop pt-lg">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-xs text-label-md font-bold uppercase tracking-wider text-on-surface-variant hover:text-secondary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </section>

        {/* Blog Post Header / Hero */}
        <section className="px-margin-mobile md:px-margin-desktop py-lg">
          <div className="max-w-4xl mx-auto space-y-md">
            <span className="inline-block bg-secondary text-on-secondary text-label-sm px-3 py-1 rounded-full uppercase font-bold tracking-wider">
              {article.category}
            </span>

            <h1 className="text-primary dark:text-on-primary font-display-lg text-display-lg-mobile md:text-display-lg leading-tight">
              {article.title}
            </h1>

            <p className="text-on-surface-variant dark:text-on-primary-container/85 text-body-lg md:text-xl leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-md border-y border-outline/30 py-md mt-lg">
              <div className="flex items-center gap-sm">
                <img
                  src={article.authorImage}
                  alt={article.authorName}
                  className="w-12 h-12 rounded-full object-cover border border-outline-variant"
                />
                <div>
                  <div className="font-bold text-primary dark:text-on-primary text-body-md">
                    {article.authorName}
                  </div>
                  <div className="text-label-sm text-on-surface-variant dark:text-on-primary-container/85">
                    {article.authorTitle}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-lg ml-auto text-label-sm text-on-surface-variant dark:text-on-primary-container/85 font-mono">
                <div className="flex items-center gap-xs">
                  <Calendar className="w-4 h-4 text-secondary" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-xs">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <section className="px-margin-mobile md:px-margin-desktop py-sm">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden aspect-[21/9] border border-outline shadow-sm bg-surface-container-low">
            <img
              src={article.coverImage}
              alt={article.coverImageAlt || article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Detailed HTML Content */}
        <section className="px-margin-mobile md:px-margin-desktop py-xl">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-zinc dark:prose-invert max-w-none text-body-md md:text-body-lg text-on-surface-variant dark:text-on-primary-container/90 leading-relaxed space-y-md"
              dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
          </div>
        </section>

        {/* Author Bio Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-lg border-t border-outline/30 bg-surface-container-low dark:bg-primary-container/20">
          <div className="max-w-3xl mx-auto p-lg bg-surface border border-outline-variant rounded-2xl flex flex-col md:flex-row items-center gap-md dark:bg-primary-container dark:border-primary-fixed-dim/20">
            <img
              src={article.authorImage}
              alt={article.authorName}
              className="w-20 h-20 rounded-full object-cover border border-outline-variant shrink-0"
            />
            <div className="space-y-xs text-center md:text-left">
              <h4 className="font-bold text-primary dark:text-on-primary text-body-lg">
                About the Author: {article.authorName}
              </h4>
              <p className="text-on-surface-variant dark:text-on-primary-container/85 text-body-md">
                {article.authorBio}
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="px-margin-mobile md:px-margin-desktop py-xl border-t border-outline/30 bg-surface">
            <div className="max-w-4xl mx-auto space-y-lg">
              <h2 className="text-primary dark:text-on-primary font-headline-lg text-headline-lg text-center md:text-left">
                Related Insights
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                {relatedArticles.map((art, idx) => (
                  <article
                    key={idx}
                    className="flex flex-col group space-y-sm bg-surface-container-lowest p-md rounded-2xl border border-outline-variant hover:border-secondary dark:bg-primary-container/20 dark:border-primary-fixed-dim/20 transition-all duration-300"
                  >
                    <div className="overflow-hidden rounded-xl aspect-[16/10] relative shadow-sm w-full">
                      <img
                        src={art.coverImage}
                        alt={art.coverImageAlt || art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center gap-base text-label-sm text-on-surface-variant dark:text-on-primary-container/85 font-semibold mt-xs">
                      <span>{art.category}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h3 className="text-headline-md font-headline-md text-primary dark:text-on-primary group-hover:text-secondary dark:group-hover:text-secondary-fixed transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-on-surface-variant dark:text-on-primary-container/85 line-clamp-2 text-body-md">
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
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
