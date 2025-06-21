"use client";

import Image from "next/image";
import NavigationLink from "../../shared/navigation-link";

function AboutusHero() {
  return (
    <section className="relative flex items-end text-white bg-black h-full min-h-70vh">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Image"
        src={"/images/about-us/banner/aboutus-banner.png"}
        height={694}
        width={1800}
      />

      {/* Content */}
      <div className="relative z-10 container text-left">
        <div className="flex flex-col gap-6 Xxl:pb-20 pb-10">
          <div className="flex items-start gap-2 md:gap-6">
            <div className="w-11 h-11 flex-shrink-0"></div>
            <p className="text-white/70 max-w-md">
              {" "}
              <span className="text-primary">
                Abstract Expressionism Painter
              </span>{" "}
              based in Stockholm/Helsinki.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-4">
            <h1 className="large-heading">Janette Lévan</h1>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutusHero;
