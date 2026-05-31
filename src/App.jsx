import "./App.css";
import Hero from "@/sections/Hero";
import About from "./sections/About";
import Choose from "./sections/Choose";
import Contact from "./sections/Contact";
import Sevice from "./sections/Sevice";

function App() {

  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="choose">
        <Choose />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="service">
        <Sevice />
      </section>
    </>
  );
}

export default App;
