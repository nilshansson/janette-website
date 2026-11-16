import Contact from "@/app/components/home/contact";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | Janette Lévan",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/about-us/bio/janette-bio-hero.jpg"
        imagePosition="object-[85%_center]"
        heading="Contact"
        desc="For <span>concert bookings</span> and other enquiries, get in touch."
      />
      <Contact />
    </main>
  );
}
