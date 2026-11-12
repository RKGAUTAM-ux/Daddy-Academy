
export default function Hero() {
  const heading = "The Real Reason Smart, Self-Aware Women Keep Falling For The";
  const highlightText = "Wrong Men";
  const subHeading = "(It's Not What The Therapy Books Told You)";
  const bannerImage = "/images/DA_lp_hero.png";

  return (
    <section>
      <div className="mx-auto grid max-w-[1452px] grid-cols-1 gap-[28px] px-[20px] sm:items-center sm:gap-[48px] md:grid-cols-2 lg:gap-[100px]">
        <div>
          <h1 className="mb-[24px] font-['DM_Sans'] text-[32px] leading-[1.1] font-bold text-[#3C2720] sm:mb-[32px] sm:text-[40px] lg:text-[64px]">
            {heading}{" "}
            <span className="relative before:absolute before:bottom-0 before:-z-10 before:h-[20px] before:w-full before:rounded-[4px] before:bg-[#FFB8A4] before:content-[''] md:before:h-[26px] lg:before:h-[36px]">
              {highlightText}
            </span>
          </h1>

          <p className="font-['Playfair_Display'] text-[16px] leading-[1.1] text-[#3C2720] italic sm:text-[24px] lg:text-[32px]">
            {subHeading}
          </p>
        </div>

        <div>
          <img src={bannerImage} alt="" />
        </div>
      </div>
    </section>
  );
}
