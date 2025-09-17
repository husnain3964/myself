import React from "react";
import Navber from "./components/navber/Navber.jsx";
import Hero from "./components/hero/hero.jsx";
import About from "./components/about/About.jsx";
import "./app.css";
import Services from "./components/services/services.jsx";
import Mywork from "./components/mywork/Mywork.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
function App() {
  return (
    <div>
      {" "}
      <Navber />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
