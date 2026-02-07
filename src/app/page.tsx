import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { CaseStudies } from "@/components/sections/case-studies";
import { Process } from "@/components/sections/process";
import { TechStack } from "@/components/sections/tech-stack";
import { WhyChooseMe } from "@/components/sections/why-choose-me";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <WhyChooseMe />
      <CaseStudies />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
