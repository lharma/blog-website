

export default function HeroText({
  title,
  desc,
  className = "",
  descClassName = "",
}) {
  return (
    <div className={`${className}`}>
      <p className="text-2xl lg:text-[44px] 2xl:text-5xl mb-4 md:mb-8">
        {title}
      </p>
      <p className={`text-base lg:text-lg font-semibold ${descClassName}`}>
        {desc}
      </p>
    </div>
  );
}
