import Link from "next/link";

const Logo = (props: { sticky: boolean }) => {
  const { sticky } = props;
  return (
    <Link
      href="/"
      className={`font-[Times_New_Roman,Times,serif] font-extralight tracking-wide text-xl md:text-2xl whitespace-nowrap ${
        sticky ? "text-black" : "text-white"
      } dark:text-white`}
    >
      <span className="hidden xsm:inline">Janette Lévan</span>
      <span className="xsm:hidden">JL</span>
    </Link>
  );
};

export default Logo;
