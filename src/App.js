import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [activeComponent, setActiveComponent] = useState("home"); // Initialize with the "home" component

  return (
    <div className="">
      <Navbar setActiveComponent={setActiveComponent} />
      {activeComponent === "home" && <Hero setActiveComponent={setActiveComponent} />} {/* Render Hero component when "home" is active */}
      {activeComponent === "skills" && <Skills />} {/* Render Skills component when "skills" is active */}
      {activeComponent === "about" && <About />} {/* Render About component when "about" is active */}
      {activeComponent === "contact" && <Contact />} {/* Render Contact component when "contact" is active */}
    </div>
  );
}

export default App;
