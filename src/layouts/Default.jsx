import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import { Outlet } from "react-router-dom";
import React from "react";
import { useRef, useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";

const Default = () => {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);
  return (
    <>
      <div>
        <Navbar ref={navRef} />
        <section style={{ paddingTop: navHeight }}>
          <Outlet />
          <ScrollRestoration />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Default;
