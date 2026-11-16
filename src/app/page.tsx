import { Metadata } from "next";
import Contact from "./components/home/contact";
import HeroSection from "./components/home/hero";
import Biography from "./components/home/testimonial";

export const metadata: Metadata = {
  title: "Janette Lévan",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Biography />
      <Contact />
    </>
  );
}
