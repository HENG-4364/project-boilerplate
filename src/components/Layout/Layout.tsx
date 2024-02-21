"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import AppNavbar from "./Navbar/Navbar";
import AppFooter from "./Footer/Footer";

const Empty = () => {
  return <></>;
};

export default function AppLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  let Navbar: any = AppNavbar;
  let Footer: any = AppFooter;

  if (pathname?.includes("/login") || pathname?.includes("/signup")) {
    Navbar = Empty;
    Footer = Empty;
  }

  return (
    <main>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
