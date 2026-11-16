import Image from "next/image";

// Full-screen bio hero: Janette on the right, bio text on the left (desktop).
// On mobile the photo sits on top and the text follows below it.
const BioHero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row lg:items-center bg-black text-white overflow-hidden lg:h-screen lg:min-h-[640px]">
      <div className="relative h-[75vh] w-full lg:absolute lg:inset-0 lg:h-full">
        <Image
          src="/images/about-us/bio/janette-bio-hero.jpg"
          alt="Janette Lévan with her flute"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[88%_center] lg:object-[85%_center]"
        />
        {/* Desktop: darken the left side so the text stays readable */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
        {/* Mobile: fade the photo into the text section below */}
        <div className="lg:hidden absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 container py-12 lg:py-0 lg:pt-24">
        <div className="max-w-xl lg:max-w-md xl:max-w-xl">
          <h1 className="large-heading font-[Times_New_Roman,Times,serif] font-extralight mb-8">
            Bio
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-white/80">
            Janette Lévan is a Finnish flutist known for her sensitive and
            expressive playing style. Born and raised in Helsinki, she has
            performed as a soloist and chamber musician throughout Scandinavia
            and Europe. Janette studied at the Sibelius Academy and has
            collaborated with several contemporary composers, premiering new
            works for flute. Her passion for sharing music extends to teaching
            and community outreach, where she inspires the next generation of
            musicians. Currently based in Turku, she continues to perform,
            record, and develop projects that explore the boundaries between
            classical and modern repertoire.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BioHero;
