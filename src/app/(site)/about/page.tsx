import BioHero from "@/app/components/about/bio-hero";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About | Janette Lévan",
};

export default function Page() {
  return (
    <main>
      <BioHero />
    </main>
  );
}
