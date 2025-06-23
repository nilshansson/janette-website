"use client";

import Link from "next/link";

export default function Biography() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-lightgray dark:bg-twilliteblack px-5">
      <div className="max-w-6xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary dark:text-white underline">
          Bio
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-secondary/80 dark:text-white/80 mb-10">
          Janette Levan is a Finnish flutist known for her sensitive and
          expressive playing style. Born and raised in Helsinki, she has
          performed as a soloist and chamber musician throughout Scandinavia and
          Europe. Janette studied at the Sibelius Academy and has collaborated
          with several contemporary composers, premiering new works for flute.
          Her passion for sharing music extends to teaching and community
          outreach, where she inspires the next generation of musicians.
          Currently based in Turku, she continues to perform, record, and
          develop projects that explore the boundaries between classical and
          modern repertoire.
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary dark:text-white underline">
          Upcoming Concerts
        </h1>
        <Link
          href="/Events"
          className="flex justify-center items-center w-full bg-primary hover:bg-secondary rounded-full transition-all duration-300 ease-in-out"
        >
          <span className="py-4 px-2 text-lg font-bold text-secondary hover:text-white transition-all duration-300 ease-in-out">
            Full Calendar
          </span>
        </Link>
      </div>
    </section>
  );
}
