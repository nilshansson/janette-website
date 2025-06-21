"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Team = (props: { teamdataNumber: string }) => {
  const { teamdataNumber } = props;
  const [teamData, setTeamData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setTeamData(data?.teamData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="dark:bg-darkblack py-20 md:py-40">
      <div className="flex flex-col gap-24">
        <div className="container">
          <div className="flex flex-col gap-14 xl:gap-24">
            <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
              <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl"></div>
              <div className="flex flex-col gap-11">
                <div className="flex flex-col gap-5">
                  <h2 className="max-w-3xl">I paint. I perform.</h2>
                  <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                    I’m also a classically trained concert pianist with a deep
                    love for performing on stage. Music has always been a
                    parallel form of expression for me—one that informs my
                    visual art and vice versa.
                  </p>
                </div>
              </div>
            </div>

            {/* ✅ Updated Grid Section */}
            <div
              className={`grid gap-7 ${
                teamData?.data?.length === 3
                  ? "grid-cols-3 justify-items-center"
                  : "sm:grid-cols-2 xl:grid-cols-4"
              }`}
            >
              {teamData?.data?.map((data: any, index: any) => {
                return (
                  <div key={index} className="group flex flex-col gap-6">
                    <div className="relative">
                      <Image
                        src={data?.image}
                        alt="image"
                        width={390}
                        height={470}
                        style={{ width: "100%" }}
                      />
                      <div className="absolute hidden bg-secondary/40 bottom-0 left-0 w-full h-full group-hover:flex items-end justify-end p-8">
                        <div className="flex gap-3">
                          {data?.socialLinks?.map(
                            (socialdata: any, index: any) => {
                              return (
                                <a
                                  key={index}
                                  href={socialdata.link}
                                  className="block w-fit bg-white hover:bg-primary p-3 rounded-full"
                                >
                                  <Image
                                    src={socialdata.icon}
                                    alt="icon"
                                    width={20}
                                    height={20}
                                  />
                                </a>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
