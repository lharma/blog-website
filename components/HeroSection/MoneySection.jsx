import HeroButton from "./HeroButton";
import HeroText from "./HeroText";

export default function MoneySection() {
  return (
    <div className="w-full h-[50vh] lg:h-[80vh] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between text-left bg-[#388d80]">
      <div className="hidden md:block w-[45%] h-[520px] bg-[url('/hero/board.png')] bg-left bg-contain bg-no-repeat"></div>
      {/* text section */}
      <div className="h-full md:w-[55%] flex flex-col justify-end ">
        <div className="w-full flex flex-col justify-center mb-14 md:mb-0">
          <HeroText
            title="Earn money"
            desc="Get paid for your hard work. Google AdSense can automatically
            display relevant targeted ads on your blog so that you can earn
            income by posting about your passion."
            descClassName="max-w-xs md:max-w-xl"
          />
        </div>
        <div className="flex self-end w-full md:w-2/3 aspect-video bg-[url('/hero/calculator.png')] md:bg-right bg-contain bg-no-repeat"></div>
      </div>
    </div>
  );
}
