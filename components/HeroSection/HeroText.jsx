import Link from "next/link";

export default function HeroText() {
  return (
    <div className="w-fit flex flex-col gap-10 items-center justify-center text-center">
      <div className="">
        <p className="text-5xl mb-4">Publish your passions, your way</p>
        <p className="text-2xl">Create a unique and beautiful blog easily</p>
      </div>
      <button className="w-fit bg-[#ff8000] px-6 py-4 rounded-sm text-white text-sm font-semibold">
        CREATE YOUR BLOG
      </button>
    </div>
  );
}
