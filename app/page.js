import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Header/Profile";
import Intro from "./components/Home/Intro";
import Contact from "./components/Home/Contact";
import Education from "./components/Home/Education";
import Experience from "./components/Home/Experience";
import Awards from "./components/Home/Awards";

export default function Home() {
  return (
    <main>
      <Profile />
      <div className="sticky top-0 z-10 w-full">
        <Navbar />
      </div>
      <div className="bg-white">
        <Intro />
        <Contact />
        <Education />
        <Experience />
        <Awards />
      </div>
      <Header />
    </main>
  );
}
