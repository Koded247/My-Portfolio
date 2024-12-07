import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" ">
      <Navbar />
      <Intro />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
