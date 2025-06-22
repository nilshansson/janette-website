import { Metadata } from "next";
import Contact from "./components/home/contact";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Portfolio from "./components/home/portfolio";
import Pricing from "./components/home/pricing";
import Resources from "./components/home/resources";

import Team from "./components/home/team";
import Testimonial from "./components/home/testimonial";

import ComissionAWork from "./components/home/comission-a-work";

export const metadata: Metadata = {
  title: "Janette Lévan",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Testimonial />
      <Portfolio />
      <Contact contactdataNumber="10" />
    </>
  );
}
