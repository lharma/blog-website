import HeroButton from "./HeroButton";
import HeroText from "./HeroText";

export default function DomainSection() {
  return (
    <div className="w-full h-[50vh] lg:h-[80vh] justify-items-end text-left bg-[#bc382e]">
      <div className="w-[90%] h-full grid grid-cols-1 grid-rows-[0.7fr_1fr] md:grid-rows-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[0.7fr_1fr] lg:gap-10">
        {/* Left (text) */}
        <div className="flex flex-col justify-end md:justify-center">
          <HeroText
            title="Get a domain"
            desc="            Give your blog the perfect home. Get a blogspot.com domain or buy a
            custom domain with just a few clicks."
            descClassName="max-w-xs md:max-w-fit"
          />
        </div>
        {/* Right (image) */}
        <div className="flex items-end">
          <div className="w-full h-[80%] bg-[url('/hero/letterscut.png')] bg-center bg-contain bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
}
