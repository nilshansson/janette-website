import Image from "next/image";
import Link from "next/link";

const Logo = (props: { sticky: boolean }) => {
  const { sticky } = props;
  return (
    <Link href="/">
      <Image
        src={
          sticky
            ? "/images/logo/signatur-utan-bakgrund.png"
            : "/images/logo/signatur-black.png"
        }
        alt="logo"
        width={190}
        height={34}
        style={{ width: "80px", height: "auto" }}
        quality={100}
        priority={true}
        className="hidden xsm:block"
      />
      <Image
        src={
          sticky ? "/images/logo/favicondark.svg" : "/images/logo/favicon.svg"
        }
        alt="logo"
        width={120} // increased from 100
        height={50} // increased from 40
        className="block xsm:hidden"
      />
    </Link>
  );
};

export default Logo;
