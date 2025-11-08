export default function MemoriesSection() {
  return (
    <div className="w-full h-[80vh] justify-items-end text-left bg-[#bc382e]">
      <div className="w-[90%] h-full grid grid-cols-1 md:grid-cols-[0.7fr_1fr] gap-10">
        {/* Left (text) */}
        <div className="flex flex-col justify-center">
          <p className="text-5xl mb-10">Hang onto your memories</p>
          <p className="text-lg font-semibold">
            Save the moments that matter. Blogger lets you safely store
            thousands of posts, photos, and more with Google.
          </p>
        </div>

        {/* Right (image) */}
        <div className="w-full h-full bg-[url('/hero/memories.png')] bg-center bg-contain bg-no-repeat"></div>
      </div>
    </div>
  );
}
