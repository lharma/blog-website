import HeroButton from "./HeroButton";
import HeroText from "./HeroText";

export default function OthersSection() {
  
  return (
    <div className="w-full h-[65vh] bg-[#e67400]">
      {/* image background */}
      <div className="w-full h-full bg-[url('/hero/world.png')] bg-center bg-cover bg-no-repeat">
        <div className="w-full h-full flex justify-center items-center">
          {/* Text Section */}
          <div className="flex flex-col justify-center items-center text-center">
            <HeroText
              className=""
              title="Join millions of others"
              desc="Whether sharing your expertise, breaking news, or whatever’s on
              your mind, you’re in good company on Blogger. Sign up to discover
              why millions of people have published their passions here."
              descClassName="max-w-sm md:max-w-md"
            />
            <HeroButton className="mt-10 md:mt-20" />
          </div>
        </div>
      </div>
    </div>
  );
}
