export default function AudienceSection() {
  return (
    <div className="w-full h-[80vh] justify-items-end text-left bg-[#577783]">
      <div className="w-[90%] h-full grid grid-cols-1 md:grid-cols-[0.7fr_1fr] gap-10">
        {/* Left (text) */}
        <div className="flex flex-col justify-center">
          <p className="text-5xl mb-10">Know your audience</p>
          <p className="text-lg">
            Find out which posts are a hit with Blogger’s built-in analytics.
            You’ll see where your audience is coming from and what they’re
            interested in. You can even connect your blog directly to Google
            Analytics for a more detailed look.
          </p>
        </div>

        {/* Right (image) */}
        <div className="w-full h-full bg-[url('/hero/globecut.png')] bg-center bg-contain bg-no-repeat"></div>
      </div>
    </div>
  );
}
