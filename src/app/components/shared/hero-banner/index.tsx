"use client";
import Image from "next/image";

const Herobanner = ({
  bannerimage,
  heading,
  desc,
  headingClass = "large-heading",
}: {
  bannerimage: string;
  heading: string;
  desc: string;
  headingClass?: string;
}) => {
  const splitDesc = desc.split(/<\/?span>/);

  return (
    <section className="relative flex items-end text-white bg-black h-screen max-h-650px">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Image"
        src={bannerimage}
        height={694}
        width={1800}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-overlay"></div>

      {/* Content */}
      <div className="relative z-10 container text-left">
        <div className="flex flex-col gap-6  pb-16 xl:pb-20">
          <div className="flex items-start gap-2 md:gap-6">
            <div className="w-11 h-11 flex-shrink-0"></div>
            <p className="text-white/70 max-w-md">
              {splitDesc[0]}
              <span className="text-primary">{splitDesc[1]}</span>
              {splitDesc[2]}
            </p>
          </div>
          <div className="flex flex-row items-end lg:items-baseline gap-4">
            <h1 className={`${headingClass ? headingClass : "large-heading"}`}>
              {heading}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herobanner;
