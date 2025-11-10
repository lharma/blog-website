import Link from "next/link";

export default function HeroButton({ className = "" }) {
  return (
    <button
      className={`w-fit bg-[#2f454f] px-6 py-4  rounded-sm text-white text-sm font-semibold ${className}`}>
      Create your blog
    </button>
  );
}
