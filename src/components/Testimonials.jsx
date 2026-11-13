
const sectionContent = {
  label: "WHAT WOMEN ARE SAYING",
  heading: "Straight from the",
  highlight: "DMs",
  clientCount: "500+",
  clientLabel: "Private clients",
  footer:
    "The same framework Niko uses with 500+ private clients, without the private coaching price.",
};

const testimonialsLeft = [
  {
    text: "“Thank you for everything — seriously could not have stayed sane and understood his wild wild west moves without you!! You have been such a game changer.”",
  },
  {
    text: "“He asked me to be his girlfriend!”",
  },
];

const testimonialsRight = [
  {
    text: "“I revisited and applied your advice and it worked like magic. He and I are so happy and fulfilled, honest with each other, mature, and secure. Getting to each other is easy because of the tools you gave me. You are a diamond with a wealth of knowledge.”",
  },
];

export default function Testimonials() {
  return (
    <section className="pt-[50px] md:pt-[95px]">
      <div className="mx-auto max-w-[1452px] px-[20px]">

        <div className="mb-[32px] grid grid-cols-1 gap-[0] sm:grid-cols-[1fr_1fr] sm:gap-[25px] md:mb-[55px] md:gap-[66px]">

          <div>
            <p className="mb-[10px] text-center font-['Montserrat'] text-[10px] leading-none font-bold text-[#0D7135] uppercase sm:mb-[20px] sm:text-left sm:text-[16px]">
              {sectionContent.label}
            </p>

            <h2 className="mx-auto mb-[20px] max-w-[990px] text-center font-['DM_Sans'] text-[28px] font-bold text-[#3C2720] sm:mb-[0] sm:text-left sm:text-[48px]">
              {sectionContent.heading}{" "}
              <span className="highlight-text">
                {sectionContent.highlight}
              </span>
            </h2>
          </div>

          <div className="text-center sm:text-right">
            <div className="relative mb-[20px] inline-block sm:mb-[32px]">

              {/* Shadow / Back Layer */}
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[7px] bg-[#3C2720] sm:rounded-[15px]"></div>

              {/* Main Card */}
              <div className="relative flex items-end gap-[2px] rounded-[7px] border-[2px] border-[#3C2720] bg-white px-[10px] py-[10px] sm:gap-[10px] sm:rounded-[15px] sm:px-[24px] sm:py-[24px]">

                <p className="font-['Playfair_Display'] text-[24px] leading-[1] font-bold text-[#3C2720] italic sm:text-[36px]">
                  {sectionContent.clientCount}
                </p>

                <p className="font-['Playfair_Display'] text-[16px] leading-[1] text-[#3C2720] italic">
                  {sectionContent.clientLabel}
                </p>

              </div>
            </div>
          </div>
        </div>

        <div className="grid max-w-[1200px] grid-cols-1 gap-[16px] md:grid-cols-2 md:gap-[40px] lg:gap-[100px]">

          {/* Left Column */}
          <div>

            {testimonialsLeft.map((item, index) => (
              <div
                key={index}
                className={`relative mr-2 ${
                  index === 0
                    ? "mb-[36px] sm:mb-[48px]"
                    : "mb-[20px] sm:mb-[32px]"
                }`}
              >

                {/* Shadow / Back Layer */}
                <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[15px] rounded-bl-[2px] bg-[#3C2720] sm:rounded-[25px] sm:rounded-bl-[5px]"></div>

                {/* Main Card */}
                <div className="relative rounded-[15px] rounded-bl-[2px] border-[2px] border-[#3C2720] bg-white px-[16px] py-[16px] sm:rounded-[25px] sm:rounded-bl-[5px] sm:px-[45px] sm:py-[56px]">

                  <p className="max-w-[1130px] font-['Nunito'] text-[14px] text-[#3C2720] italic sm:text-[24px]">
                    {item.text}
                  </p>

                </div>
              </div>
            ))}

          </div>

          {/* Right Column */}
          <div>

            {testimonialsRight.map((item, index) => (
              <div
                key={index}
                className="relative mr-2 mb-[20px] sm:mb-[32px]"
              >

                {/* Shadow / Back Layer */}
                <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[15px] rounded-bl-[2px] bg-[#3C2720] sm:rounded-[25px] sm:rounded-bl-[5px]"></div>

                {/* Main Card */}
                <div className="relative rounded-[15px] rounded-bl-[2px] border-[2px] border-[#3C2720] bg-white px-[16px] py-[16px] sm:rounded-[25px] sm:rounded-bl-[5px] sm:px-[45px] sm:py-[56px]">

                  <p className="max-w-[1130px] font-['Nunito'] text-[14px] text-[#3C2720] italic sm:text-[24px]">
                    {item.text}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>

        <p className="mt-[24px] font-['Playfair_Display'] text-[16px] leading-[1.1] text-[#3C2720] italic sm:mt-[40px] sm:text-[24px]">
          {sectionContent.footer}
        </p>

      </div>
    </section>
  );
}
