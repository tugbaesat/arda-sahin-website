import React from "react";
import Header from "../components/Header/Header";
import Profile from "../components/Header/Profile";
import Publications from "../components/Publications/Publications";
import Navbar from "../components/Navbar/Navbar";

export default function ResearchPage() {
  return (
    <main>
      {/* <Header /> */}
      <Profile />
      <div className="sticky top-0 z-10 w-full">
        <Navbar/>
      </div>
      <Publications />
      <Header />
    </main>
  );
}
