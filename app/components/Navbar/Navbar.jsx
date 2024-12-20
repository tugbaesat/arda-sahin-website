"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: "home", title: "home", path: "/" },
  { id: "research", title: "research", path: "/research" },
  { id: "publications", title: "publications", path: "/publications" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-center items-center">
      <ul className="flex justify-center items-center gap-16 px-4 text-dark-primary-text bg-ucla-blue w-full z-20 h-36">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.path}
            scroll={false} // Prevent scrolling to the top
            className={`pb-2 ${
              pathname === link.path
                ? "border-ucla-gold font-bold border-b-4"
                : "border-white font-light border-b-2"
            }`}
          >
            <p className="text-xl capitalize">{link.title}</p>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;