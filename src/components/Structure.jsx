import { promises } from '../data/content.js'

const sectionContent = {
  label: "SO WHAT ACTUALLY WORKS?",
  heading: "You have the self awareness. What you’re missing is",
  highlight: "structure.",
  description:
    "Without it, chemistry will always move faster than insight. To finally break the pattern, a system has to do five things.",
};

const checkIcon = "/images/da-check-icn.svg";

const promises = [
  "Start on date one, before attachment forms",
  "Start on date one, before attachment forms",
  "Start on date one, before attachment forms",
  "Start on date one, before attachment forms",
  "Work every time, with every man",
];

export default function Structure() {
  return (
    <section className="bg-[#3C2720] py-[40px] sm:py-[80px]">
      <div className="mx-auto max-w-[1452px] px-[20px]">

        <div className="mb-[40px] grid grid-cols-1 gap-[20px] sm:gap-[24px] md:mb-[80px] md:grid-cols-2 md:gap-[48px] lg:gap-[100px] sm:items-end">
          <div>
            <p className="mb-[10px] font-['Montserrat'] text-[10px] leading-none font-bold text-[#FFB8A4] sm:mb-[20px] sm:text-[16px]">
              {sectionContent.label}
            </p>

            <h2 className="font-['DM_Sans'] text-[28px] leading-[1.3] font-bold text-white sm:text-[48px]">
              {sectionContent.heading}{" "}
              <span className="text-[#FFB8A4]">
                {sectionContent.highlight}
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-[500px] font-['Nunito'] text-[14px] text-white sm:text-[24px] lg:mb-[10px]">
              {sectionContent.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[40px] sm:grid-cols-2 sm:gap-[24px] md:grid-cols-3 lg:grid-cols-5">

          {promises.map((text, index) => (
            <div
              key={index}
              className="relative rounded-[15px] border-[2px] border-[#FFB8A4] px-[24px] py-[44px] sm:rounded-[20px] sm:py-[64px]"
            >
              <div className="absolute top-[-18px] left-[0] w-full text-center">
                <img
                  className="inline-block max-w-[32px] sm:max-w-[45px]"
                  src={checkIcon}
                  alt=""
                />
              </div>

              <p className="max-w-[500px] text-center font-['Nunito'] text-[16px] text-white lg:mb-[10px] lg:text-[24px]">
                {text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
