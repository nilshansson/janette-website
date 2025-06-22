"use client";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Swiper as SwiperCore } from "swiper";

type Project = {
  title: string;
  slug: string;
  medium: string[];
  size?: string;
  coverImage: string;
};

const Projectswiper = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        // Delay to ensure Swiper is mounted before restarting autoplay
        setTimeout(() => {
          swiperRef.current?.autoplay?.start();
        }, 100);
      });
  }, []);

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      loop
      speed={6000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      slidesPerView={"auto"}
      breakpoints={{
        320: { spaceBetween: 0 },
        640: { spaceBetween: 10 },
        768: { spaceBetween: 20 },
        1024: { spaceBetween: 20 },
        1920: { spaceBetween: 30 },
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {projects.map((value, index) => (
        <SwiperSlide key={index}>
          <div className="relative group flex flex-col gap-3 lg:gap-5">
            <div className="relative">
              <div className="w-auto h-80">
                <Image
                  src={value.coverImage}
                  alt={value.title}
                  width={530}
                  height={350}
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <Link
                href={`/projects/${value.slug}`}
                className="absolute top-0 left-0 backdrop-blur-xs bg-black/70 w-full h-full hidden group-hover:flex"
              >
                <span className="flex justify-center items-center p-5 w-full">
                  <svg
                    width="65"
                    height="64"
                    viewBox="0 0 65 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.333374"
                      width="64"
                      height="64"
                      rx="32"
                      fill="#C1FF72"
                    />
                    <path
                      d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                      stroke="#1F2A2E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-2 lg:gap-4"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Projectswiper;
