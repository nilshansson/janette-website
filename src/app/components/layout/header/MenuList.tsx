"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const MenuList = ({
  item,
  closeMenu,
  sticky,
}: {
  item: any;
  closeMenu: any;
  sticky: boolean;
}) => {
  const { title, path, newTab } = item;
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <li className="group flex items-center gap-3 transition-all duration-500 ease-in-out">
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out 
          ${isActive ? "max-w-6 opacity-100" : "max-w-0 opacity-0"} 
          group-hover:max-w-6 group-hover:opacity-100`}
      ></div>
      <Link
        href={path}
        onClick={closeMenu}
        className={`text-2xl font-extralight transition-all duration-300 
          ${sticky ? "text-white" : "text-secondary"} dark:text-white`}
        target={newTab ? "_blank" : "_self"}
      >
        {title}
      </Link>
    </li>
  );
};

export default MenuList;
