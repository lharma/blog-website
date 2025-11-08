import Image from "next/image";

export default function DomainSection() {
  return (
    <div className="w-full h-[80vh] justify-items-end text-left bg-[#bc382e] ">
      <div className="w-[90%] h-full grid grid-cols-1 md:grid-cols-[0.7fr_1fr] gap-10">
        {/* Left (text) */}
        <div className="flex flex-col justify-center">
          <p className="text-5xl mb-10">Get a domain</p>
          <p className="text-lg">
            Give your blog the perfect home. Get a blogspot.com domain or buy a
            custom domain with just a few clicks.
          </p>
        </div>

        {/* Right (image) */}
        <div className="flex items-end">
          <div className="w-full h-[80%] bg-[url('/hero/letterscut.png')] bg-center bg-contain bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
}
