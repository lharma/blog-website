import HeroButton from "./HeroButton";
import HeroText from "./HeroText";

export default function AudienceSection() {
  return (
    <div className="w-full h-[60vh] md:h-[50vh] lg:h-[80vh] justify-items-end text-left bg-[#577783]">
      <div className="w-[90%] h-full grid grid-cols-1 grid-rows-[0.8fr_1fr] md:grid-rows-1 md:grid-cols-[0.7fr_1fr] lg:gap-10">
        {/* Left (text) */}
        <div className="flex flex-col justify-end md:justify-center">
          <HeroText
            title="Know your audience"
            desc="Find out which posts are a hit with Blogger’s built-in analytics.
            You’ll see where your audience is coming from and what they’re
            interested in. You can even connect your blog directly to Google
            Analytics for a more detailed look."
            descClassName="max-w-xs md:max-w-fit"
          />
        </div>

        {/* Right (image) */}
        <div className="w-full h-full bg-[url('/hero/globecut.png')] bg-[length:110%_auto] bg-center md:bg-contain bg-no-repeat"></div>
      </div>
    </div>
  );
}
