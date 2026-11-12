export default function Intro() {
  const image = "/images/Y-Shape.svg";

  const paragraph = (
    <>
      ou can probably describe him before you meet him. The intensity that moves a little too fast. The
      small thing that doesn’t add up, so you file it away. The flutter in your stomach you call
      excitement but have started to suspect is something else.
      <br />
      <br />
      You’ve read the books. You’ve done the therapy. You can define love bombing in your sleep. And
      still, six months in, the man you chose so carefully turns out to be a new version of the same
      man.
    </>
  );

  const highlightedText =
    "This isn’t about spotting the pattern. You already can.";

  const boldText =
    "It’s about why knowing it has never been enough to stop it, and what actually does.";

  return (
    <section className="py-[48px] sm:py-[90px]">
      <div className="mx-auto max-w-[1452px] px-[20px]">
        <div className="rounded-[16px] border border-[#0D7135] px-[16px] py-[36px] sm:rounded-[24px] sm:px-[100px] sm:py-[64px]">
          <div className="mb-[40px] flex items-start gap-[0] sm:mb-[64px]">
            <img
              className="relative top-[4px] left-[8px] max-w-[40px] sm:top-[10px] sm:max-w-[60px] md:left-[0] lg:left-[22px]"
              src={image}
              alt=""
            />

            <p className="text-center font-['Nunito'] text-[14px] text-[#3C2720] sm:text-[24px]">
              {paragraph}
            </p>
          </div>

          <p className="mx-auto max-w-[1042px] border-x-[2px] border-[#0D7135] px-[13px] text-center font-['Playfair_Display'] text-[16px] leading-[1.1] text-[#3C2720] italic sm:border-x-[4px] sm:px-[28px] sm:text-[24px] lg:text-[32px]">
            {highlightedText}{" "}
            <b>{boldText}</b>
          </p>
        </div>
      </div>
    </section>
  );
}
