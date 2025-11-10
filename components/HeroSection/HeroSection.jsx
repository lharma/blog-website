"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HeroText from "@/components/HeroSection/HeroText";
import HeroButton from "./HeroButton";

const heroSlides = [
  {
    id: 1,
    bgColor: "#bc382e",
    leftImg: "/hero/redleft.png",
    centerImg: "/hero/redcut.png",
    rightImg: "/hero/redright.png",
    alt: "Cake Slide",
  },
  {
    id: 2,
    bgColor: "#388d80",
    leftImg: "/hero/famleft.png",
    centerImg: "/hero/family.png",
    rightImg: "/hero/famright.png",
    alt: "Family Slide",
  },
  {
    id: 3,
    bgColor: "#4583aa",
    leftImg: "/hero/technoleft1.png",
    centerImg: "/hero/tech.png",
    rightImg: "/hero/technoright.png",
    alt: "Tech Slide",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
        setAnimate(false);
      }, 700);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[currentIndex];

  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-end transition-colors duration-700 ease-in-out overflow-hidden"
      style={{ backgroundColor: currentSlide.bgColor }}>
      {/* Image row */}
      <div
        className={`w-full grid grid-cols-2 md:grid-cols-[0.7fr_1.6fr_0.7fr] items-end h-[700px] transition-transform duration-700 ease-out ${
          animate ? "translate-y-100" : "translate-y-0"
        }`}>
        {/* Left image */}
        <div className="relative w-full h-[50%] md:h-full opacity-70 hover:opacity-100 transition duration-500">
          <Image
            src={currentSlide.leftImg}
            alt={`${currentSlide.alt} left`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Center image */}
        <div className="hidden md:flex relative w-full h-full justify-center items-end">
          <Image
            src={currentSlide.centerImg}
            alt={`${currentSlide.alt} center`}
            width={1200}
            height={600}
            className="object-cover"
            priority
          />
        </div>
        {/* Right image */}
        <div className="relative w-full h-[50%] md:h-full opacity-70 hover:opacity-100 transition duration-500">
          <Image
            src={currentSlide.rightImg}
            alt={`${currentSlide.alt} right`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center w-full">
        <HeroText
          title="Publish your passions, your way"
          desc="Create a unique and beautiful blog easily."
        />
        <HeroButton className="mt-6 md:mt-10" />
      </div>
    </section>
  );
}
