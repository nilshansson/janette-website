import AboutusDetail from "@/app/components/about/aboutus-detail";
import AboutusFullimg from "@/app/components/about/aboutus-fullimg";
import AboutusStats from "@/app/components/about/aboutus-stats";
import Team from "@/app/components/home/team";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About | Janette Lévan",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/about-us/banner/aboutus-banner.png"
        heading="About"
        desc="We craft <span>innovative digital</span> designs that amplify brand identity and drive meaningful results"
      />
      <AboutusDetail />
      <AboutusStats />
      <AboutusFullimg />
      <Team teamdataNumber="01" />
    </main>
  );
}
