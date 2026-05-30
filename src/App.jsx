import "./App.css";
import Hero from "@/sections/Hero";
import About from "./sections/About";
import Choose from "./sections/Choose";
import Contact from "./sections/Contact";
import Sevice from "./sections/Sevice";

function App() {

  return (
    <>
      <section>
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
        <Sevice />
      </section>
    </>
  );
}

export default App;
