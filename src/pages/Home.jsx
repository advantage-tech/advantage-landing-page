import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import LogoMarquee from "../components/landing/LogoMarquee";
import ServiceMonoliths from "../components/landing/ServiceMonoliths";
import Testimonials from "../components/landing/Testimonials";
import ProjectGrid from "../components/landing/ProjectGrid";
import CaseStudies from "../components/landing/CaseStudies";
import Process from "../components/landing/Process";
import Team from "../components/landing/Team";
import FAQ from "../components/landing/FAQ";
import ContactSection from "../components/landing/ContactSection";
import ConversionForm from "../components/landing/ConversionForm";
import Footer from "../components/landing/Footer";
import PulseLines from "../components/landing/PulseLines";

export default function Home() {
  return (
    <div className="relative bg-background min-h-screen overflow-x-hidden">
      <PulseLines />
      <Navbar />
      <Hero />
      <LogoMarquee />
      <ServiceMonoliths />
      <Testimonials />
      <ProjectGrid />
      <CaseStudies />
      <Process />
      <Team />
      <FAQ />
      <ContactSection />
      <ConversionForm />
      <Footer />
    </div>
  );
}
