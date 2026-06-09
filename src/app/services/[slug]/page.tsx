import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { servicesData } from "@/data/services";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BentoGrid from "@/components/sections/BentoGrid";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return {
      title: "Service Not Found | ICAD Technologies",
    };
  }

  return {
    title: `${service.title} | ICAD Technologies`,
    description: service.description,
    openGraph: {
      title: `${service.title} | ICAD Technologies`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const isEdgeHosting = slug === "hosting";

  return (
    <>
      <Navbar />
      <main className="flex-1 mt-20">
        {/* Hero Section */}
        <HeroSection
          title={service.title}
          tagline={service.tagline}
          description={service.description}
          heroImage={service.heroImage}
          heroImageAlt={service.heroImageAlt}
          primaryBtnText="Start Engineering"
          primaryBtnLink="/contact"
          secondaryBtnText="Explore Specifications"
          secondaryBtnLink="#challenges"
          isDark={isEdgeHosting ? false : true}
          metrics={service.metrics}
        />

        {/* Challenges / Problem Statement */}
        <section id="challenges" className="py-xl bg-surface-container-lowest border-b border-outline-variant/30">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-end mb-lg gap-md">
              <div className="max-w-2xl space-y-xs">
                <h2 className="text-primary dark:text-on-primary font-headline-lg text-headline-lg">
                  {service.challengesTitle}
                </h2>
                <p className="text-on-surface-variant dark:text-on-primary-container/85 text-body-lg">
                  {service.challengesDesc}
                </p>
              </div>
              <div className="text-secondary dark:text-secondary-fixed font-bold text-headline-md opacity-25 hidden md:block">
                01 // CHALLENGES
              </div>
            </div>

            <ScrollReveal animation="fade-up" selector=".challenge-item" stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {service.challenges.map((challenge, idx) => {
                const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[challenge.icon] || LucideIcons.AlertTriangle;
                return (
                  <div
                    key={idx}
                    className="challenge-item bg-surface p-lg rounded-xl shadow-sm border border-outline-variant dark:bg-primary-container dark:border-primary-fixed-dim/20 space-y-md"
                  >
                    <Icon className="w-10 h-10 text-secondary dark:text-secondary-fixed" />
                    <h3 className="text-primary dark:text-on-primary font-headline-md text-headline-md">
                      {challenge.title}
                    </h3>
                    <p className="text-on-surface-variant dark:text-on-primary-container/85 text-body-md leading-relaxed">
                      {challenge.desc}
                    </p>
                  </div>
                );
              })}
            </ScrollReveal>
          </div>
        </section>

        {/* Bento Grid representing full-stack approach */}
        <BentoGrid
          title={service.approachTitle}
          items={service.bentoItems}
          className="bg-primary text-on-primary"
        />

        {/* Core Competencies Cards */}
        <section className="py-xl bg-surface border-y border-outline-variant/30">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop space-y-lg">
            <h2 className="text-primary dark:text-on-primary font-headline-lg text-headline-lg">
              {service.competenciesTitle}
            </h2>

            <ScrollReveal animation="fade-up" selector=".competency-item" stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {service.competencies.map((comp, idx) => {
                const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[comp.icon] || LucideIcons.CheckSquare;
                return (
                  <div
                    key={idx}
                    className="competency-item group p-md border border-outline-variant rounded-xl hover:border-secondary transition-colors dark:border-primary-fixed-dim/20 dark:bg-primary-container"
                  >
                    <Icon className="w-8 h-8 text-secondary dark:text-secondary-fixed mb-md group-hover:scale-110 transition-transform origin-left" />
                    <h4 className="text-primary dark:text-on-primary font-bold mb-base text-body-md">
                      {comp.title}
                    </h4>
                    <p className="text-on-surface-variant dark:text-on-primary-container/85 text-label-sm leading-relaxed">
                      {comp.desc}
                    </p>
                  </div>
                );
              })}
            </ScrollReveal>
          </div>
        </section>

        {/* Tech Stack Badge Section */}
        <section className="py-xl bg-surface-container-low border-b border-outline-variant/30">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop text-center space-y-lg">
            <div className="max-w-2xl mx-auto space-y-xs">
              <h2 className="text-primary dark:text-on-primary font-headline-lg text-headline-lg">
                {service.techStackTitle}
              </h2>
              <p className="text-on-surface-variant dark:text-on-primary-container/85 text-body-md">
                We leverage industry-leading technologies to ensure longevity and performance.
              </p>
            </div>
            <ScrollReveal animation="scale-up" selector=".tech-badge" stagger={0.05} className="flex flex-wrap justify-center gap-lg md:gap-xl pt-md">
              {service.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="tech-badge flex flex-col items-center gap-xs px-lg py-sm bg-surface border border-outline-variant rounded-xl shadow-sm hover:border-secondary transition-colors dark:bg-primary-container dark:border-primary-fixed-dim/20"
                >
                  <span className="font-bold text-headline-md text-primary dark:text-on-primary">
                    {tech}
                  </span>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* Agile Process Timeline */}
        <ProcessTimeline
          steps={service.processSteps.map((ps) => ({
            ...ps,
            step: ps.step.toString(),
          }))}
          title={service.processTitle}
        />

        {/* FAQ Section */}
        <FAQSection items={service.faqs} title={service.faqTitle} />

        {/* Cross-Sell Promos Banner */}
        {service.crossSell && (
          <section className="py-xl bg-surface border-t border-outline-variant/30">
            <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
              <ScrollReveal animation="scale-up" className="bg-primary rounded-2xl p-xl flex flex-col md:flex-row items-center gap-xl">
                <div className="flex-1 space-y-md">
                  <h2 className="text-on-primary font-headline-lg text-headline-lg leading-tight">
                    {service.crossSell.title}
                  </h2>
                  <p className="text-on-primary/95 text-body-lg">
                    {service.crossSell.desc}
                  </p>
                  <Link href={service.crossSell.link}>
                    <Button variant="secondary" className="mt-sm">
                      {service.crossSell.btnText}
                    </Button>
                  </Link>
                </div>
                <div className="w-full md:w-1/3 grid grid-cols-2 gap-md shrink-0">
                  <div className="aspect-square bg-white/10 rounded-xl flex flex-col items-center justify-center p-md text-center border border-white/10">
                    <LucideIcons.Layers className="w-8 h-8 text-on-primary mb-base" />
                    <span className="text-on-primary font-bold text-label-sm">
                      System Scale
                    </span>
                  </div>
                  <div className="aspect-square bg-white/10 rounded-xl flex flex-col items-center justify-center p-md text-center border border-white/10 mt-lg">
                    <LucideIcons.LayoutTemplate className="w-8 h-8 text-on-primary mb-base" />
                    <span className="text-on-primary font-bold text-label-sm">
                      Interactive Flows
                    </span>
                  </div>
                </div>
              </ScrollReveal>
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
