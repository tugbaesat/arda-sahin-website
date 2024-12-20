import React from "react";
import Image from "next/image";
import profile from "@/public/images/Arda.jpeg";
import Navbar from "../Navbar/Navbar";
import Header from "./Header";
import Socials from "./Socials";

const Profile = () => {
  return (
    <section className="header-bg flex flex-col justify-between items-center relative h-screen">
      <Header />
      <div className="bg-light-bg w-full flex flex-col justify-between items-center py-10 text-center absolute bottom-0">
        <Image
          src={profile}
          width={200}
          height={200}
          alt="profile image"
          className="rounded-full absolute -top-36"
        />
        <h1 className="text-3xl pt-4">Arda Şahin</h1>
        <ul className="text-lg font-light text-center flex flex-col justify-center items-center">
          <li>University of California, Los Angeles</li>
          <li>Ph.D. Candidate</li>
          <li>Geotechnical Earthquake Engineering Researcher</li>
        </ul>
        <Socials />
      </div>
   
    </section>
  );
};

export default Profile;
