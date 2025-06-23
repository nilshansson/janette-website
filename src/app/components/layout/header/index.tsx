import { useEffect, useState } from "react";
import Image from "next/image";
import MenuList from "./MenuList";
import Link from "next/link";
import ThemeToggler from "./ThemeToggle";
import { usePathname } from "next/navigation";
import Logo from "../logo";

const Header = () => {
  const [user, setUser] = useState<{ user: any } | null>(null);
  const [menuData, setMenuData] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/layout-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setMenuData(data?.MenuData);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    fetchData();
  }, []);

  // Handle closing the mobile menu with animation
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById("mobileMenu");
      if (menu && !menu.contains(event.target as Node)) {
        setIsClosing(true);
        setTimeout(() => {
          setMenuOpen(false);
          setIsClosing(false);
        }, 300);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-t-4 border-primary transition-all duration-500 ease-in-out before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:bg-primary before:transition-all before:duration-500 before:ease-in-out ${
        sticky ? "before:h-full" : "before:h-0"
      }`}
    >
      <div className="container">
        <nav
          className={`relative flex items-center justify-between ${
            sticky ? "py-5" : "py-7"
          }`}
        >
          {/* Logo */}
          <Logo sticky={sticky} />

          <div className="flex items-center gap-7">
            {/* Inline Menu for desktop */}
            <ul className="hidden lg:flex items-center gap-6">
              {menuData?.map((menuItem: any, index: number) => (
                <MenuList key={index} item={menuItem} closeMenu={() => {}} />
              ))}
            </ul>
            {/* Theme Toggler */}
            <ThemeToggler />

            {/* Mobile Hamburger */}
            <div className="lg:hidden relative flex items-center">
              {menuOpen === false ? (
                <button onClick={() => setMenuOpen(true)}>
                  <Image
                    src={
                      sticky
                        ? "/images/Icon/menu-button-sticky.svg"
                        : "/images/Icon/menu-button.svg"
                    }
                    alt="Menu Icon"
                    width={45}
                    height={45}
                    className="cursor-pointer"
                  />
                </button>
              ) : (
                <div
                  id="mobileMenu"
                  className={`absolute -top-5 right-0 flex flex-col gap-5 min-w-80 sm:min-w-96 bg-white dark:bg-twilliteblack p-6 rounded-3xl shadow-lg transition-all duration-300 ease-in-out z-10 ${
                    isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
                  }`}
                >
                  <div className="flex items-center justify-between pb-5 border-b border-secondary/15 dark:border-white/15">
                    <p className="text-secondary dark:text-white">Menu</p>
                    <div
                      onClick={() => setMenuOpen(false)}
                      className="p-2 cursor-pointer"
                    >
                      <Image
                        src="/images/Icon/close-icon.svg"
                        alt="Close"
                        width={16}
                        height={16}
                        className="dark:hidden"
                      />
                      <Image
                        src="/images/Icon/close-icon-dark.svg"
                        alt="Close"
                        width={16}
                        height={16}
                        className="hidden dark:block"
                      />
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2 pb-4">
                    {menuData?.map((menuItem: any, index: number) => (
                      <MenuList
                        key={index}
                        item={menuItem}
                        closeMenu={() => setMenuOpen(false)}
                      />
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
