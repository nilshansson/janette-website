import Image from "next/image";
const AboutusDetail = () => {
  return (
    <section className="py-10 md:py-20 xl:py-40 dark:bg-secondary">
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="max-w-xl w-full">
            {/* <h2 className="text-56">Janette Lévan</h2> */}
            <Image
              src="images/about-us/image-section/nils-bild-lowquality.jpg"
              alt="picture of Janette Lévan"
            />
          </div>
          <div className="flex flex-col gap-12">
            <p className="text-secondary dark:text-white">
              I’m a self-taught painter working mainly with acrylics, and for
              me, painting is a way to express something that I can’t always put
              into words. I’m drawn to strong colors and shapes, and I often
              build a kind of dream world in each piece — something that feels
              clear in its theme, but still holds a bit of mystery. I’ve always
              been interested in the unconscious, and that’s a big part of what
              drives my creative process.
            </p>
            <p className="text-secondary dark:text-white">
              I tend to work on larger canvases, and I like when a painting
              feels like a statement — something bold, something that takes up
              space. The journey of creating is just as important as the final
              result. I spend a lot of time searching for the right color
              combinations, the right mood, the right rhythm in the composition.
              Early in my painting journey, some private collectors discovered
              my work and bought a few pieces, which gave me the confidence to
              keep going. Since then, I’ve kept following that same instinct —
              painting my way into new worlds, one color at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusDetail;
