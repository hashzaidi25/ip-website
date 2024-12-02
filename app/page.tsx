import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ContactFaqSection } from "@/components/contact-faq-section"
import { LanguageProvider } from "@/components/language-provider"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <HeroSection />
          <FeaturesSection />
          <ServicesSection />
          <AboutSection />
          <WhyChooseUs />
          <TestimonialsSection />
          <ContactFaqSection />
        </main>
      </div>
    </LanguageProvider>
  )
}

