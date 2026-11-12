
export default function Header() {
  const logo = "/images/daddy-academy-logo.png";
  const logoAlt = "Daddy Academy Logo";

  return (
    <header className="mx-auto max-w-[1452px] px-[20px] py-[24px] sm:py-[34px]">
      <a href="#">
        <img
          src={logo}
          alt={logoAlt}
          className="max-w-[128px] sm:max-w-[178px]"
        />
      </a>
    </header>
  );
}
