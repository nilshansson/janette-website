import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Events | Janette Lévan",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/home/portfolio/janette.png"
        heading="Events"
        desc="Upcoming <span>concerts</span> with Janette Lévan"
      />
      <section className="py-20 md:py-40 dark:bg-darkblack">
        <div className="container">
          <div className="flex flex-col gap-8 max-w-2xl">
            <h2>Upcoming concerts</h2>
            <p className="text-secondary/70 dark:text-white/70">
              New concert dates will be announced here soon.
            </p>
            <Link
              href="/contact"
              className="w-fit bg-primary hover:bg-secondary rounded-full transition-all duration-300 ease-in-out py-4 px-8 text-lg font-bold text-secondary hover:text-white"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
