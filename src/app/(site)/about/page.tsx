import AboutusDetail from "@/app/components/about/aboutus-detail";
import AboutusFullimg from "@/app/components/about/aboutus-fullimg";
import AboutusStats from "@/app/components/about/aboutus-stats";
import Team from "@/app/components/home/team";
import BioHero from "@/app/components/about/bio-hero";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About | Janette Lévan",
};

export default function Page() {
  return (
    <main>
      <BioHero />
      <AboutusDetail />
      <AboutusStats />
      <AboutusFullimg />
      <Team teamdataNumber="01" />
    </main>
  );
}
