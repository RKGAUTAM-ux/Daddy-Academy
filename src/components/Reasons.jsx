const sectionTitle = {
  highlight: "4 reasons",
  text: "knowing your pattern hasn’t stopped it",
};

const reasons = [
  {
    label: "INSIGHT VS ACTION",
    title: "Your insight works on the couch. It doesn’t work across the table.",
    paragraphs: [
      "Knowing and doing live in different places. Insight is what you use when you journal, reflect, or talk it through with your therapist. But the moment a man looks at you a certain way, or texts you at midnight, that thoughtful part of you isn’t in charge anymore. Something older and faster is.",
      "That’s why you can sit across from him thinking “I know exactly what this is” and still stay. Naming the wave doesn’t stop the current. What interrupts it is a checklist that doesn’t need your feelings to cooperate, something you can follow on a Tuesday night when the chemistry is running hot.",
    ],
  },
  {
    label: "INSIGHT VS ACTION",
    title: "Your insight works on the couch. It doesn’t work across the table.",
    paragraphs: [
      "Knowing and doing live in different places. Insight is what you use when you journal, reflect, or talk it through with your therapist. But the moment a man looks at you a certain way, or texts you at midnight, that thoughtful part of you isn’t in charge anymore. Something older and faster is.",
      "That’s why you can sit across from him thinking “I know exactly what this is” and still stay. Naming the wave doesn’t stop the current. What interrupts it is a checklist that doesn’t need your feelings to cooperate, something you can follow on a Tuesday night when the chemistry is running hot.",
    ],
  },
  {
    label: "INSIGHT VS ACTION",
    title: "Your insight works on the couch. It doesn’t work across the table.",
    paragraphs: [
      "Knowing and doing live in different places. Insight is what you use when you journal, reflect, or talk it through with your therapist. But the moment a man looks at you a certain way, or texts you at midnight, that thoughtful part of you isn’t in charge anymore. Something older and faster is.",
      "That’s why you can sit across from him thinking “I know exactly what this is” and still stay. Naming the wave doesn’t stop the current. What interrupts it is a checklist that doesn’t need your feelings to cooperate, something you can follow on a Tuesday night when the chemistry is running hot.",
    ],
  },
  {
    label: "INSIGHT VS ACTION",
    title: "Your insight works on the couch. It doesn’t work across the table.",
    paragraphs: [
      "Knowing and doing live in different places. Insight is what you use when you journal, reflect, or talk it through with your therapist. But the moment a man looks at you a certain way, or texts you at midnight, that thoughtful part of you isn’t in charge anymore. Something older and faster is.",
      "That’s why you can sit across from him thinking “I know exactly what this is” and still stay. Naming the wave doesn’t stop the current. What interrupts it is a checklist that doesn’t need your feelings to cooperate, something you can follow on a Tuesday night when the chemistry is running hot.",
    ],
  },
];

export default function Reasons() {
  return (
    <section>
      <div className="mx-auto max-w-[1452px] px-[20px]">
        <h2 className="mx-auto mb-[40px] max-w-[990px] text-center font-['DM_Sans'] text-[28px] font-bold text-[#3C2720] sm:mb-[80px] sm:text-[48px]">
          <span className="relative before:absolute before:bottom-0 before:-z-10 before:h-[15px] before:w-full before:rounded-[4px] before:bg-[#FFB8A4] before:content-[''] md:before:h-[20px] lg:before:h-[24px]">
            {sectionTitle.highlight}
          </span>{" "}
          {sectionTitle.text}
        </h2>

        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0
                ? "mb-[30px] max-w-[1100px] border-[#0D7135] pr-[0] md:border-r-[5px] md:pr-[104px] lg:pr-[140px]"
                : "ml-auto mb-[30px] max-w-[1100px] border-[#0D7135] pl-[0] md:border-l-[5px] md:pl-[104px] lg:pl-[140px]"
            } sm:mb-[75px]`}
          >
            <p className="mb-[10px] inline-block rounded-[3px] bg-[#0D7135] px-[10px] py-[4px] font-['Montserrat'] text-[8px] leading-none font-semibold tracking-[2px] text-white sm:mb-[20px] sm:rounded-[5px] sm:px-[24px] sm:py-[6px] sm:text-[16px] sm:tracking-[2.4px]">
              {reason.label} &nbsp; | &nbsp; {String(index + 1).padStart(2, "0")} of 04
            </p>

            <h3 className="mb-[10px] font-['DM_Sans'] text-[22px] leading-[1.4] font-bold text-[#3C2720] sm:mb-[20px] sm:text-[40px]">
              {reason.title}
            </h3>

            <p className="font-['Nunito'] text-[14px] text-[#3C2720] sm:text-[24px]">
              {reason.paragraphs[0]}
              <br />
              <br />
              {reason.paragraphs[1]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
