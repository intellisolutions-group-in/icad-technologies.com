import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { industriesData } from "@/data/industries";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BentoGrid from "@/components/sections/BentoGrid";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    return {
      title: "Industry Not Found | ICAD Technologies",
    };
  }

  return {
    title: `${industry.title} | ICAD Technologies`,
    description: industry.description,
    openGraph: {
      title: `${industry.title} | ICAD Technologies`,
      description: industry.description,
    },
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industriesData[slug];

  if (!industry) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 mt-20">
        {/* Hero Section */}
        <HeroSection
          title={industry.title}
          tagline={industry.tagline}
          description={industry.description}
          heroImage={industry.heroImage}
          heroImageAlt={industry.heroImageAlt}
          primaryBtnText="Request Strategic Assessment"
          primaryBtnLink="/contact"
          secondaryBtnText="Explore Highlights"
          secondaryBtnLink="#details"
          isDark={true}
          metrics={industry.metrics}
        />

        {/* Detailed highlights / Problem statement */}
        <section id="details" className="py-xl bg-surface-container-low border-b border-outline-variant/30">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
              <ScrollReveal animation="slide-right" className="space-y-md">
                <span className="text-secondary dark:text-secondary-fixed font-label-sm uppercase tracking-widest block font-bold">
                  The Operational Gap
                </span>
                <h2 className="text-headline-lg font-headline-lg text-primary dark:text-on-primary">
                  {industry.detailsTitle}
                </h2>
                <p className="text-on-surface-variant dark:text-on-primary-container/85 text-body-lg leading-relaxed">
                  {industry.detailsDesc}
                </p>
              </ScrollReveal>

              <ScrollReveal animation="slide-left" selector=".highlight-item" stagger={0.15} className="space-y-sm">
                {industry.highlights.map((highlight, idx) => {
                  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[highlight.icon] || LucideIcons.Compass;
                  return (
                    <div
                      key={idx}
                      className="highlight-item bg-surface p-md rounded-xl shadow-sm border border-outline-variant flex gap-md items-start dark:bg-primary-container dark:border-primary-fixed-dim/20"
                    >
                      <Icon className="w-8 h-8 text-secondary dark:text-secondary-fixed shrink-0 mt-1" />
                      <div>
                        <h4 className="font-headline-md text-headline-md text-primary dark:text-on-primary mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-on-surface-variant dark:text-on-primary-container/85 text-body-md leading-relaxed">
                          {highlight.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <BentoGrid
          title={industry.bentoTitle}
          items={industry.bentoItems}
          className="bg-surface border-b border-outline-variant/30"
        />

        {/* CTA */}
        <CTASection
          title={`Ready to Optimize Your ${industry.slug.toUpperCase()} Operation?`}
          description="Speak with our Solutions Architects to outline a formal statement of work mapping to your timeline."
        />
      </main>
      <Footer />
    </>
  );
}
