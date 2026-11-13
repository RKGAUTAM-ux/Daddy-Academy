
const sectionContent = {
  label: "EVERYTHING YOU GET",
  heading: "Break The Pattern: The",
  highlight: "12-Date",
  headingEnd: "Vetting Guide™",
  image: "/images/FLP-Img.svg",
  currentPrice: "$149",
  originalPrice: "$199",
  description:
    "One payment. No subscription. Lifetime access and updates.",
  buttonText: "Start Breaking The Pattern",
  buttonLink: "#",
  footer: "Curious about him. Not invested yet.",
};

const features = [
  "The complete 4 phase vetting framework across 12 dates",
  "Dating scorecards for every phase",
  "The Nervous System Check",
  "Red Flag Recognition System (love bombing, trauma dumping, breadcrumbing, hot and cold behavior)",
  "The Final Decision Matrix",
  "Guided workbook for real time use while dating",
  "Pattern Rewire System",
  "120+ minutes of video training",
  "Lifetime access and updates. One payment, no subscription.",
];

export default function EverythingYouGet() {
  return (
    <section className="py-[48px] sm:py-[95px]">
      <div className="mx-auto max-w-[1452px] px-[20px]">

        <p className="mb-[10px] text-center font-['Montserrat'] text-[10px] leading-none font-bold text-[#0D7135] sm:mb-[20px] sm:text-[16px]">
          {sectionContent.label}
        </p>

        <h2 className="mx-auto mb-[16px] max-w-[800px] text-center font-['DM_Sans'] text-[28px] font-bold text-[#3C2720] sm:mb-[32px] sm:text-[48px]">
          {sectionContent.heading}{" "}
          <span className="relative before:absolute before:bottom-[0] before:-z-10 before:h-[15px] before:w-full before:rounded-[4px] before:bg-[#FFB8A4] before:content-[''] md:before:h-[20px] lg:before:h-[24px]">
            {sectionContent.highlight}
          </span>{" "}
          {sectionContent.headingEnd}
        </h2>

        <div className="relative mr-2 mb-[20px] sm:mb-[32px]">

          {/* Shadow / Back Layer */}
          <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[15px] bg-[#3C2720] sm:rounded-[25px]"></div>

          {/* Main Card */}
          <div className="relative grid grid-cols-1 rounded-[15px] border-[2px] border-[#3C2720] bg-white md:grid-cols-[1.5fr_1fr] sm:rounded-[25px]">

            <div className="flex items-center border-[#3C2720] border-r-[0] px-[32px] py-[32px] sm:px-[40px] sm:py-[40px] md:border-r-[4px] lg:px-[64px] lg:py-[80px]">

              <ul className="list-disc">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="font-['Nunito'] text-[14px] text-[#3C2720] sm:text-[24px]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

            </div>

            <div className="order-first border-[#3C2720] border-b-[1.5px] px-[16px] py-[32px] sm:px-[40px] sm:py-[40px] md:order-last md:border-b-[0] lg:px-[64px] lg:py-[80px]">

              <img
                className="mx-w-[150px] mb-[16px] inline-block sm:mx-w-[210px] sm:mb-[24px]"
                src={sectionContent.image}
                alt=""
              />

              <div className="mb-[16px] flex items-end gap-[11px] sm:mb-[24px]">

                <h2 className="font-['DM_Sans'] text-[64px] leading-none font-bold text-[#3C2720] md:text-[96px]">
                  {sectionContent.currentPrice}
                </h2>

                <h3 className="font-['DM_Sans'] text-[24px] font-bold text-[#676767] md:text-[40px]">
                  {sectionContent.originalPrice}
                </h3>

              </div>

              <p className="mb-[16px] font-['Nunito'] text-[14px] text-[#3C2720] sm:mb-[24px] sm:text-[24px]">
                {sectionContent.description}
              </p>

              <a
                className="inline-block rounded-[50px] bg-[#0D7135] px-[28px] py-[12px] text-center font-['DM_Sans'] text-[22px] leading-none font-bold text-white transition-all hover:bg-[#128741] sm:text-[30px]"
                href={sectionContent.buttonLink}
              >
                {sectionContent.buttonText}
              </a>

              <p className="mt-[16px] font-['Playfair_Display'] text-[16px] leading-[1.1] text-[#3C2720] italic sm:mt-[24px] sm:text-[24px]">
                {sectionContent.footer}
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
