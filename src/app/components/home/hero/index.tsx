"use client";

import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function HeroSection() {
  return (
    <ParallaxProvider>
      <Parallax speed={-25}>
        <section className="relative flex items-end text-white bg-black h-full min-h-screen">
          <Image
            src="/images/home/portfolio/janette.png"
            alt="Picture of art in exhibition"
            fill
            className="object-cover w-full h-full"
            priority // optional, improves loading
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 container text-left">
            <div className="flex flex-col gap-6 Xxl:pb-20 pb-10">
              <div className="flex items-start gap-2 md:gap-6">
                <div className="w-11 h-11 flex-shrink-0"></div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <h1 className="large-heading font-[Times_New_Roman,Times,serif] font-extralight">
                  JANETTE LÉVAN
                </h1>
                <p className="text-white/70 text-lg">
                  <span className="text-primary">Flutist</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
    </ParallaxProvider>
  );
}

export default HeroSection;
