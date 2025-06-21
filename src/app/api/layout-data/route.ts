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
    title: "Artworks",
    path: "/projects",
    newTab: false,
  },
  {
    id: 4,
    title: "Events",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Comission A Work",
    path: "/#comission-a-work",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

const footerData = {
  name: "Janette Lévan",
  tagline: "Let's put some color on your walls",

  links: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Comission A Work", href: "/#comission-a-work" },
    { name: "Artwork", href: "/projects" },
    { name: "Terms", href: "/terms-and-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Error 404", href: "/not-found" },
  ],
  socialLinks: [
    { name: "Facebook", href: "https://www.facebook.com/" },
    { name: "Instagram", href: "https://www.instagram.com/nilshanssonmeng" },
  ],
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
    MenuData,
  });
};
