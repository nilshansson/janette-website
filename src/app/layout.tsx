"use client";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/scroll-to-top";

const manrope = Manrope({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    fetch(pathname, { method: "HEAD" }).then((res) => {
      if (res.status === 404) {
        setIs404(true);
      } else {
        setIs404(false);
      }
    });
  }, [pathname]);

  const excludedRoutes = [
    "/signin",
    "/signup",
    "/forgot-password",
    "/documentation",
  ];
  const hideLayout = excludedRoutes.includes(pathname) || is404;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          {!hideLayout && <Header />}
          {children}
          {!hideLayout && <Footer />}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
