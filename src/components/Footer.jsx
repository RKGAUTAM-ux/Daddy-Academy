
const footerContent = {
  logo: "/images/daddy-academy-logo.png",
  logoAlt: "Daddy Academy Logo",
  logoLink: "#",
  heading: "Stop dating on hope.",
  description:
    "Track what he does, date by date, so your decision rests on evidence, not a feeling.",
  buttonText: "Break The Pattern $149",
  buttonLink: "#",
};

export default function Footer() {
  return (
    <footer className="bg-[#3C2720] py-[48px] sm:py-[95px]">
      <div className="mx-auto max-w-[1452px] px-[20px]">

        <div className="grid grid-cols-1 gap-[16px] md:grid-cols-2 md:gap-[64px] lg:gap-[115px]">

          <div>
            <a
              className="mb-[16px] inline-block sm:mb-[20px]"
              href={footerContent.logoLink}
            >
              <img
                className="max-w-[95px] sm:max-w-[132px]"
                src={footerContent.logo}
                alt={footerContent.logoAlt}
              />
            </a>

            <h2 className="font-['DM_Sans'] text-[36px] leading-[1.3] font-bold text-white md:text-[64px]">
              {footerContent.heading}
            </h2>
          </div>

          <div>
            <p className="mb-[16px] max-w-[500px] font-['Nunito'] text-[14px] text-white sm:mb-[24px] sm:text-[24px]">
              {footerContent.description}
            </p>

            <a
              className="inline-block rounded-[50px] bg-[#0D7135] px-[28px] py-[12px] text-center font-['DM_Sans'] text-[22px] leading-none font-bold text-white transition-all hover:bg-[#128741] sm:text-[30px] lg:px-[48px]"
              href={footerContent.buttonLink}
            >
              {footerContent.buttonText}
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
