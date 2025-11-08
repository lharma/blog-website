import Image from "next/image";

export default function MoneySection() {
  return (
    <div className="w-full h-[80vh] flex items-center justify-between text-left bg-[#388d80]">
      <div className="w-[45%] h-[520px] bg-[url('/hero/board.png')] bg-left bg-contain bg-no-repeat"></div>

      {/* text section */}
      <div className="h-full w-[55%] flex flex-col justify-end">
        <div className="w-full flex flex-col justify-center">
          <p className="text-5xl mb-10">Earn money</p>
          <p className="text-lg max-w-xl">
            Get paid for your hard work. Google AdSense can automatically
            display relevant targeted ads on your blog so that you can earn
            income by posting about your passion.
          </p>
        </div>
        <div className="flex self-end w-2/3 aspect-video bg-[url('/hero/calculator.png')] bg-right bg-contain bg-no-repeat"></div>
      </div>
    </div>
  );
}
