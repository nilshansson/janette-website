import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Events",
    path: "/events",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

const footerData = {
  name: "Janette Lévan",
  tagline: "Janette Lévan — Flutist",

  links: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ],
  socialLinks: [],
  copyright: `© ${new Date().getFullYear()} Janette Lévan`,
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
    MenuData,
  });
};
