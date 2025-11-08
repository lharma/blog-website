import AudienceSection from "@/components/HeroSection/AudienceSection";
import DesignSection from "@/components/HeroSection/DesignSection";
import DomainSection from "@/components/HeroSection/DomainSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import MemoriesSection from "@/components/HeroSection/MemoriesSection";
import MoneySection from "@/components/HeroSection/MoneySection";
import OthersSection from "@/components/HeroSection/OthersSection";

export default function LandingPage() {
  return (
    <section className="w-full h-fit flex flex-col items-center justify-center text-white">
      <HeroSection />
      <DesignSection />
      <DomainSection />
      <MoneySection />
      <AudienceSection />
      <MemoriesSection />
      <OthersSection />
    </section>
  );
}
