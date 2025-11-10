import HeroButton from "./HeroButton";
import HeroText from "./HeroText";
import Image from "next/image";

export default function DesignSection() {
  return (
    <div className="w-full h-[50vh] lg:h-[80vh] justify-items-end text-left bg-[#e67400]">
      <div className="relative w-[90%] h-full grid grid-cols-1 grid-rows-[1fr_1fr] md:grid-rows-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[0.7fr_1fr]">
        {/* Left (text) */}
        <div className="flex flex-col justify-end md:justify-center">
          <HeroText
            title="Choose the perfect design"
            desc="Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new."
            descClassName="max-w-xs md:max-w-fit"
          />
        </div>
        {/* Right (image) */}
        <div className="flex flex-col justify-end w-fit">
          <div className="hidden md:flex justify-start relative w-full mx-auto">
            <Image
              src="/hero/pencil.png"
              alt="Pencil hero image"
              width={818} // your image’s natural width
              height={302} // your image’s natural height
              className="object-contain w-[60%] "
              priority
            />
          </div>
          <div className="flex self-end relative w-[80%] md:w-[90%] h-fit">
            <Image
              src="/hero/domain1.png"
              alt="Pencil hero image"
              width={951} // or your image’s actual width
              height={635} // or actual height
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
