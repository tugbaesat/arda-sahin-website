import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/Logo.png";
import Socials from "./Socials";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <section className="bg-ucla-blue h-36 flex items-center w-full">
      <Link href="/">
        <Image
          src={logo}
          width={308}
          height={144}
          alt="UCLA Logo"
          className=""
        />
      </Link>
    </section>
  );
};

export default Header;
