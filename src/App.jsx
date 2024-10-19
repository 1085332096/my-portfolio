import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./styles/main.css";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
