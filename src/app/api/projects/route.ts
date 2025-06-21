import { getAllProjects } from "@/lib/markdown";
import { NextResponse } from "next/server";

export async function GET() {
  const projects = getAllProjects([
    "title",
    "slug",
    "medium",
    "size",
    "coverImage",
  ]);
  return NextResponse.json(projects);
}
