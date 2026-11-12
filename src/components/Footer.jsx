
const sectionContent = {
  label: "THE FINAL DECISION MATRIX",
  heading: "Adds up every scorecard and gives you an answer.",
  quote:
    "Running through all four phases is the Nervous System Check, so you can tell in the moment whether what you’re feeling is calm and steady or anxious and chasing.",
  quoteHighlight: "Nervous System Check,",
  subHeading:
    "No promise of a relationship. Just a decision you can stand behind.",
};

const decisionCards = [
  {
    title: "Proceed",
    image: "/images/arrow-white.svg",
    className: "bg-[#0D7135] text-white",
  },
  {
    title: "Slow down",
    image: "/images/pause-icn.svg",
    className: "bg-[#FFB8A4] text-[#3C2720]",
  },
  {
    title: "Walk away",
    image: "/images/green-cross-icn.svg",
    className: "bg-[#ffffff] text-[#0D7135]",
  },
];

const timelineItems = [
  {
    image: "images/count-1.svg",
    title: "You feel calm",
    description:
      "In Phase 1, most women don’t feel a big revelation. They feel calm. Having something to do on a date besides performing shifts you from auditioning to evaluating.",
    showLine: true,
  },
  {
    image: "images/count-2.svg",
    title: "Patterns show up on paper",
    description:
      "By Phase 2, the scorecards show patterns your feelings would have smoothed over.",
    showLine: true,
  },
  {
    image: "images/count-check.svg",
    title: "A decision you made",
    description:
      "And at the end, whatever the matrix says, the decision feels like one you made, not one that happened to you.",
    showLine: false,
  },
];

export default function Footer() {
  return (
    <section className="pt-[50px] md:pt-[95px]">
      <div className="mx-auto max-w-[1452px] px-[20px]">

        <div className="mb-[50px] grid grid-cols-1 gap-[25px] md:mb-[85px] md:gap-[66px] lg:grid-cols-[1fr_1.6fr]">

          <div>
            <p className="mb-[10px] font-['Montserrat'] text-[10px] leading-none font-bold text-[#0D7135] uppercase sm:mb-[20px] sm:text-[16px]">
              {sectionContent.label}
            </p>

            <h3 className="font-['DM_Sans'] text-[22px] leading-[1.4] font-bold text-[#3C2720] sm:text-[40px]">
              {sectionContent.heading}
            </h3>
          </div>

          <div className="grid grid-cols-3 gap-[8px] sm:gap-[20px]">

            {decisionCards.map((card, index) => (
              <div
                key={index}
                className={`${card.className} flex flex-col items-center justify-center gap-[4px] rounded-[8px] border-[2px] border-[#3C2720] px-[24px] py-[24px] sm:rounded-[15px] sm:py-[36px]`}
              >
                <img
                  className="max-w-[10px] sm:max-w-[20px]"
                  src={card.image}
                  alt=""
                />

                <p className="text-center font-['Playfair_Display'] text-[16px] leading-[1.1] font-bold italic sm:text-[24px] lg:text-[32px]">
                  {card.title}
                </p>
              </div>
            ))}

          </div>
        </div>

        <p className="mx-auto mb-[50px] max-w-[1250px] border-x-[2px] border-[#0D7135] px-[13px] text-center font-['Playfair_Display'] text-[16px] leading-[1.1] text-[#3C2720] italic sm:mb-[85px] sm:border-x-[4px] sm:px-[28px] sm:text-[24px] lg:text-[32px]">
          Running through all four phases is the{" "}
          <b>{sectionContent.quoteHighlight}</b>{" "}
          so you can tell in the moment whether what you’re feeling is calm and steady or anxious and chasing.
        </p>

        <div className="rounded-[16px] border-[1.5px] border-[#0D7135] px-[16px] py-[36px] sm:rounded-[24px] sm:border-[2px] sm:px-[100px] sm:py-[64px]">

          <div className="grid grid-cols-1 items-center gap-[24px] md:gap-[32px] lg:grid-cols-[1fr_1.3fr] lg:gap-[120px]">

            <div>
              <p className="mb-[10px] font-['Montserrat'] text-[10px] leading-none font-bold text-[#0D7135] uppercase sm:mb-[20px] sm:text-[16px]">
                {sectionContent.label}
              </p>

              <h3 className="mb-[20px] font-['DM_Sans'] text-[22px] leading-[1.4] font-bold text-[#3C2720] sm:mb-[32px] sm:text-[40px]">
                {sectionContent.heading}
              </h3>

              <p className="font-['Playfair_Display'] text-[16px] leading-[1.1] text-[#3C2720] italic sm:text-[24px]">
                {sectionContent.subHeading}
              </p>
            </div>

            <div>

              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-[16px] sm:gap-[20px] ${
                    index !== timelineItems.length - 1
                      ? "mb-[14px] sm:mb-[30px]"
                      : ""
                  }`}
                >

                  <div>
                    <img
                      className="max-w-[40px] sm:max-w-[60px]"
                      src={item.image}
                      alt=""
                    />

                    {item.showLine && (
                      <div className="mx-auto mt-[20px] h-[75px] w-[2px] bg-[#3C2720]" />
                    )}
                  </div>

                  <div>
                    <p className="font-['DM_Sans'] text-[16px] font-bold text-[#3C2720] sm:text-[24px]">
                      {item.title}
                    </p>

                    <p className="font-['Nunito'] text-[14px] text-[#3C2720] sm:text-[20px]">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
