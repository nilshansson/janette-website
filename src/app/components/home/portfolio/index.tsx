import "swiper/css";
import Projectswiper from "./projectswiper";

function Portfolio() {
  return (
    <section className="bg-lightgray dark:bg-darkblack py-20 md:py-40">
      <div className="flex flex-col gap-24">
        <div className="container">
          <div className="flex flex-col gap-24">
            <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
              <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
              </div>
              <div className="flex flex-col gap-11">
                <div className="flex flex-col gap-5 ">
                  <div className="py-5"></div>
                  <h2 className="max-w-3xl text-green dark:text-white">
                    Media
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3.5">
          <Projectswiper />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
