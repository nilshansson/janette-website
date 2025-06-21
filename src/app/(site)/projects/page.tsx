import ProjectList from "@/app/components/artworks";
import Herobanner from "@/app/components/shared/hero-banner";
import { getAllProjects } from "@/lib/markdown";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects | Janette Lévan",
};

export default function Page() {
  const projects = getAllProjects();
  return (
    <main>
      <Herobanner
        bannerimage="/images/projects/banner/projects-banner.png"
        heading="Artworks"
        desc="?"
      />
      <ProjectList />
    </main>
  );
}
