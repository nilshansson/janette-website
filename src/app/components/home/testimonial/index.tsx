"use client";

export default function Biography() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-lightgray dark:bg-twilliteblack px-5">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary dark:text-white underline">
          bio
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-secondary/80 dark:text-white/80">
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
      </div>
    </section>
  );
}
