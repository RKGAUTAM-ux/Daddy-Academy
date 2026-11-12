const sectionContent = {
  label: "MEET THE SYSTEM, HOW IT WORKS",
  heading: "Break The Pattern: The",
  highlight: "12-Date",
  headingEnd: "Vetting Guide™",
  description:
    "Four phases. Twelve dates. One clear decision. Here’s exactly what you’ll learn inside each phase.",
};

const phases = [
  ["PHASE 1  |  DATES 1–3", "Safety & Baseline", "Before you invest anything, check the basics of a safe, honest relationship and learn to spot love bombing and fast intensity early."],
  ["PHASE 2  |  DATES 4–6", "Consistency & Character", "Track whether his effort matches his words, especially when there’s no reason to perform. Inconsistency isn’t a reason to try harder. It’s data."],
  ["PHASE 3  |  DATES 7–9", "Compatibility & Values", "Look past surface chemistry to how he handles friction, boundaries, and real conversations."],
  ["PHASE 4  |  DATES 10–12", "Direction & Decision", "One question: is he moving toward a committed relationship with you, on his own?"],
]

export default function Guide() {
  return (
    <section className="pt-[50px] md:pt-[95px]">
      <div className="mx-auto max-w-[1452px] px-[20px]">

        <p className="mb-[10px] text-center font-['Montserrat'] text-[10px] leading-none font-bold text-[#0D7135] sm:mb-[20px] sm:text-[16px]">
          {sectionContent.label}
        </p>

        <h2 className="mx-auto mb-[16px] max-w-[800px] text-center font-['DM_Sans'] text-[28px] font-bold text-[#3C2720] sm:mb-[32px] sm:text-[48px]">
          {sectionContent.heading}{" "}
          <span className="relative before:absolute before:bottom-0 before:-z-10 before:h-[15px] before:w-full before:rounded-[4px] before:bg-[#FFB8A4] before:content-[''] md:before:h-[20px] lg:before:h-[24px]">
            {sectionContent.highlight}
          </span>{" "}
          {sectionContent.headingEnd}
        </h2>

        <p className="mb-[38px] text-center font-['Nunito'] text-[14px] text-[#3C2720] sm:mb-[60px] sm:text-[24px]">
          {sectionContent.description}
        </p>

        {phases.map(([phaseInfo, title, description]) => (
          <div
            key={phaseInfo}
            className="relative mr-2 mb-[20px] sm:mb-[32px]"
          >
            {/* Shadow / Back Layer */}
            <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[15px] bg-[#3C2720] sm:rounded-[25px]"></div>

            {/* Main Card */}
            <div className="relative rounded-[15px] border-[2px] border-[#3C2720] bg-white px-[16px] py-[16px] sm:rounded-[25px] sm:px-[45px] sm:py-[56px]">

              <p className="mb-[10px] inline-block rounded-[3px] bg-[#0D7135] px-[10px] py-[4px] font-['Montserrat'] text-[8px] leading-none font-semibold tracking-[2px] text-white uppercase sm:mb-[20px] sm:rounded-[5px] sm:px-[24px] sm:py-[6px] sm:text-[16px] sm:tracking-[2.4px]">
                {phaseInfo}
              </p>

              <h3 className="mb-[10px] font-['DM_Sans'] text-[22px] leading-[1.4] font-bold text-[#3C2720] sm:mb-[20px] sm:text-[40px]">
                {title}
              </h3>

              <p className="max-w-[1130px] font-['Nunito'] text-[14px] text-[#3C2720] sm:text-[24px]">
                {description}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
