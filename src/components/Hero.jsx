
export default function Hero() {
  const heading = "The Real Reason Smart, Self-Aware Women Keep Falling For The";
  const highlightText = "Wrong Men";
  const subHeading = "(It's Not What The Therapy Books Told You)";
  const bannerImage = "/images/DA_lp_hero.png";

  return (
    <section>
      <div className="max-w-[1452px] px-[20px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[28px] sm:gap-[48px] lg:gap-[100px] sm:items-center">
        <div>
          <h1 className="font-['DM_Sans'] text-[32px] sm:text-[40px] lg:text-[64px] leading-[1.1] text-[#3C2720] font-bold mb-[24px] sm:mb-[32px]">
            {heading}{" "}
            <span className="highlight-text">
              {highlightText}
            </span>
          </h1>

          <p className="font-['Playfair_Display'] text-[16px] sm:text-[24px] lg:text-[32px] leading-[1.1] text-[#3C2720] italic">
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
