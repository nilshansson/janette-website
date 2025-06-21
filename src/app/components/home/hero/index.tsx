"use client";

import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function HeroSection() {
  return (
    <ParallaxProvider>
      <Parallax speed={-25}>
        <section className="relative flex items-end text-white bg-black h-full min-h-screen">
          <Image
            src="/images/home/portfolio/projectsbild-hemsida.JPEG"
            alt="Picture of art in exhibition"
            fill
            className="object-cover w-full h-full"
            priority // optional, improves loading
          />
          {/* Background Video */}
          {/* <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            loop
            autoPlay
            muted
            playsInline
          >
            <source src="/video/banner-video.mp4" type="video/mp4" />
          </video> */}

          {/* Overlay to improve text readability */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 container text-left">
            <div className="flex flex-col gap-6 Xxl:pb-20 pb-10">
              <div className="flex items-start gap-2 md:gap-6">
                <div className="w-11 h-11 flex-shrink-0"></div>
                <p className="text-white/70 max-w-md">
                  {" "}
                  <span className="text-primary">Abstract Painter</span> based
                  in Stockholm/Helsinki.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row items-start lg:items-end gap-4">
                <h1 className="large-heading">Janette Lévan</h1>
                <div></div>
              </div>
            </div>
          </div>
        </section>
      </Parallax>
    </ParallaxProvider>
  );
}

export default HeroSection;
