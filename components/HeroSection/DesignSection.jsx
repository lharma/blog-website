import Image from "next/image";

export default function DesignSection() {
  return (
    <div className="w-full flex items-center justify-between text-left bg-[#e67400] overflow-x-hidden">
      {/* text section */}
      <div className="w-1/2 flex flex-col items-center justify-center">
        <p className="text-5xl mb-4">Choose the perfect design</p>
        <p className="text-lg max-w-xl">
          Create a beautiful blog that fits your style. Choose from a selection
          of easy-to-use templates – all with flexible layouts and hundreds of
          background images – or design something new.
        </p>
      </div>
      {/* Image section */}
      <div className="w-1/2 flex flex-col pt-20">
        {/* First child: stick left */}
        <div className="w-[540px] h-[200px] bg-[url('/hero/pencil.png')] bg-center bg-contain bg-no-repeat"></div>
        <div className="w-full h-[500px] bg-[url('/hero/domain1.png')] bg-right bg-contain bg-no-repeat m-0 overflow-hidden"></div>
      </div>
    </div>
  );
}
