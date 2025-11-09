import HeroButton from "./HeroButton";
import HeroText from "./HeroText";

export default function MemoriesSection() {
  return (
    <div className="w-full h-[50vh] lg:h-[80vh] justify-items-end text-left bg-[#bc382e]">
      <div className="w-[90%] h-full grid grid-cols-1 grid-rows-[0.7fr_1fr] md:grid-rows-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[0.7fr_1fr] lg:gap-10">
        {/* Left (text) */}
        <div className="flex flex-col justify-end md:justify-center">
          <HeroText
            title="Hang onto your memories"
            desc="Save the moments that matter. Blogger lets you safely store
            thousands of posts, photos, and more with Google."
            descClassName="max-w-xs md:max-w-fit"
          />
        </div>

        {/* Right (image) */}
        <div className="w-full h-full bg-[url('/hero/memories.png')] bg-center bg-contain bg-no-repeat"></div>
      </div>
    </div>
  );
}
