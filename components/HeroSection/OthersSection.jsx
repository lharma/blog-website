import Button from "./Button";
export default function OthersSection() {
  
  return (
    <div className="w-full h-[60vh] bg-[#e67400]">
      {/* image background */}
      <div className="w-full h-full bg-[url('/hero/world.png')] bg-center bg-cover bg-no-repeat">
        <div className="w-full h-full flex justify-center items-center">
          {/* Text Section */}
          <div className=" flex flex-col justify-center items-center text-center">
            <p className="text-5xl mb-8">Join millions of others </p>
            <p className="text-lg font-semibold w-md">
              Whether sharing your expertise, breaking news, or whatever’s on
              your mind, you’re in good company on Blogger. Sign up to discover
              why millions of people have published their passions here.
            </p>

            <Button  bgColor='bg-[#2f454f] '/>
          </div>
        </div>
      </div>
    </div>
  );
}
