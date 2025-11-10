import AudienceSection from "@/components/HeroSection/AudienceSection";
import DesignSection from "@/components/HeroSection/DesignSection";
import DomainSection from "@/components/HeroSection/DomainSection";
import Footer from "@/components/HeroSection/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import MemoriesSection from "@/components/HeroSection/MemoriesSection";
import MoneySection from "@/components/HeroSection/MoneySection";
import OthersSection from "@/components/HeroSection/OthersSection";
// import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <section className="w-full h-fit flex flex-col items-center justify-center text-white overflow-hidden">
      <HeroSection />
      <DesignSection />
      <DomainSection />
      <MoneySection />
      <AudienceSection />
      <MemoriesSection />
      <OthersSection />
          {/* <Footer /> */}

      <Footer />
    </section>
  );
}
