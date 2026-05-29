import "./App.css";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import { useRef, useEffect, useState } from "react";
import About from "./sections/About";
import Choose from "./sections/Choose";
import Contact from "./sections/Contact";
import Service from "./sections/Sevice"
import Footer from "./sections/Footer";
import Cards from "./components/ui/Cards"

function App() {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <Navbar ref={navRef} />
      <section style={{ paddingTop: navHeight }}>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Choose />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Service />
      </section>
      <section>
        <Footer />
      </section>
      <Cards />
    </>
  );
}

export default App;
