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
        bannerimage="/images/contact/banner/contact-banner.png"
        heading="Contact"
        desc="Ready to <span>create something</span> unique? Reach out — I’d love to hear your ideas."
      />
      <Contact contactdataNumber="01" />
    </main>
  );
}
