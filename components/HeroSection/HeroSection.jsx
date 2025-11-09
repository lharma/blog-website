"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HeroText from "@/components/HeroSection/HeroText";

const heroSlides = [
  { id: 1, src: "/hero/cake.png", alt: "Hero Image 1", bgColor: "#bc382e" },
  { id: 2, src: "/hero/family.png", alt: "Hero Image 2", bgColor: "#388d80" },
  { id: 3, src: "/hero/tech.png", alt: "Hero Image 3", bgColor: "#4583aa" },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); // start slide down
      setTimeout(() => {
        // update index after animation
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
        setAnimate(false); // reset animation
      }, 700); // match the CSS transition duration
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[currentIndex];

  return (
    <section
      className="w-full h-screen flex flex-col items-center   justify-end transition-colors duration-700 ease-in-out overflow-hidden"
      style={{ backgroundColor: currentSlide.bgColor }}>
      <HeroText />

      {/* image section */}
      <div
        className={`w-full max-w-4xl flex justify-center items-end h-[500px] transition-transform duration-700 ease-out transform
          ${animate ? "translate-y-100" : "translate-y-0 "}`}>
        <div className="w-full rounded-sm overflow-hidden transition-opacity duration-700">
          <Image
            src={currentSlide.src}
            alt={currentSlide.alt}
            width={1000}
            height={1000}
            priority
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
