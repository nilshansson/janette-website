"use client";
import Image from "next/image";
import StarRating from "../../shared/star-rating";
import { useEffect, useState } from "react";

function Testimonial() {
  const [testimonialData, setTestimonialData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setTestimonialData(data?.testimonialData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="bg-lightgray dark:bg-green py-20 md:py-40">
      <div className="flex flex-col gap-24">
        <div className="container">
          <div className="flex flex-col gap-14 xl:gap-24">
            <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
              <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl"></div>
              <div className="flex flex-col gap-11">
                <div className="flex flex-col gap-5 ">
                  <h2 className="max-w-3xl dark:text-lightgray">
                    Words from Those Who’ve Acquired My Work
                  </h2>
                  <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                    Here you’ll find words from those who have acquired my work
                    — sharing their experience both with the artwork itself and
                    the process of working with me. These reflections mean a
                    great deal, as each piece finds a new home and a new
                    context.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">
              <div className="bg-primary p-4 lg:p-7 flex flex-col gap-32">
                <div className="flex flex-col gap-6">
                  <p className="text-base text-secondary/40">
                    {testimonialData?.data_1?.preTitle}
                  </p>
                  <p className="dark:text-secondary">
                    {testimonialData?.data_1?.title}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src={"/images/testimonial/anna.jpg"}
                    alt="Image"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="dark:text-secondary">
                      {testimonialData?.data_1?.author}
                    </p>
                    {/* <p className="text-secondary/70 text-base font-normal">
                      {testimonialData?.data_1?.company}
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="xl:col-span-2 bg-secondary dark:bg-lightgray/10 p-4 lg:p-7 flex flex-col justify-between gap-14">
                <div className="flex flex-col gap-6">
                  <p className="text-base text-white/70">
                    {testimonialData?.data_2?.preTitle}
                  </p>
                  <p className="text-white">{testimonialData?.data_2?.title}</p>
                  <div className="flex items-center gap-2.5"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={"/images/testimonial/arian.jpg"}
                      alt="Image"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-white">
                        {testimonialData?.data_2?.author}
                      </p>
                      <p className="text-white/70 text-base font-normal">
                        {testimonialData?.data_2?.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-black/20 p-4 lg:p-7 flex flex-col justify-between gap-32">
                <div className="flex flex-col gap-6">
                  <p className="text-base text-secondary/70 dark:text-white/70">
                    {testimonialData?.data_3?.preTitle}
                  </p>
                  <p>{testimonialData?.data_3?.title}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src={"/images/testimonial/jonas.jpg"}
                    alt="Image"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p>{testimonialData?.data_3?.author}</p>
                    <p className="text-secondary/70 dark:text-white/70 text-base font-normal">
                      {testimonialData?.data_3?.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
