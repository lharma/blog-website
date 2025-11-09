export default function Footer() {
  const helpLinks = ["Help Center", "Help Forum", "Video Tutorials"];
  const devLinks = ["Blogger API", "Developer Forum"];
  const terms = ["Terms of Service", "Privacy", "Content Policy"];

  return (
    <div className="w-full h-[60vh] md:h-[44vh] flex flex-col items-center justify-center gap-12 bg-[#1d2b34] text-white text-lg">
      {/* links */}
      <div className="flex flex-row flex-wrap gap-10 md:gap-20 lg:gap-30 xl:gap-40 w-[80%]">
        <div>
          <p className="text-xl mb-6 font-semibold">Help</p>
          <ul className="">
            {helpLinks.map((helpLink, i) => (
              <li
                key={i}
                className="text-base md:text-lg pb-1">
                {helpLink}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xl mb-6 font-semibold">Community</p>
          <p className="text-base md:text-lg">Blogger Buzz</p>
        </div>

        <div>
          <p className="text-xl mb-6 font-semibold">Developers</p>
          <ul className="">
            {devLinks.map((devLink, i) => (
              <li
                key={i}
                className="text-base md:text-lg pb-1">
                {devLink}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Border */}
      <span className="w-[80%] h-[1px] bg-[#2f4857] "></span>

      {/* Terms Section */}
      <div className="flex flex-col md:flex-row justify-between w-[80%] mx-auto">
        <ul className="w-full flex self-start gap-10">
          {terms.map((term, i) => (
            <li
              key={i}
              className="text-sm md:text-lg">
              {term}
            </li>
          ))}
        </ul>

        <form>
          <select className="pl-3 pr-10 lg:pr-30 mt-10 md:mt-0 py-2 rounded-sm bg-white/10">
            <option value="">English</option>
          </select>
        </form>
      </div>
    </div>
  );
}
