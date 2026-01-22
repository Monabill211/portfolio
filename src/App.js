import "./App.css";
import Header from "./header";
import Landing from "./landing";
import About from "./about";
import Project from "./project";
import Conact from "./concat";
import Footer from "./footer";
import Projectcard from "./projectcard";

import { Routes, Route } from "react-router-dom";
import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Header scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} />

      <Routes>
        {/* صفحة الهوم — الصفحة الرئيسية */}
        <Route
          path="/"
          element={
            <>
              <div data-aos="fade-down">
                <Landing />
              </div>

              <div style={{ paddingTop: "100px" }}>
                <h1 style={{ color: "white" }}>waht I do</h1>
                <h5 style={{ color: "#3aa39a", paddingTop: "7px" }}>
                  My services
                </h5>

                <div data-aos="fade-up">
                  <About sectionRef={aboutRef} />
                </div>
              </div>

              <div style={{ paddingTop: "100px" }}>
                <h1 style={{ color: "white" }}>projects</h1>
                <h5 style={{ color: "#3aa39a", paddingTop: "7px" }}>
                  My projects
                </h5>

                <div data-aos="fade-down">
                  <Project />
                </div>
              </div>

              <div style={{ paddingTop: "100px" }}>
                <h1 style={{ color: "white" }}>Contact</h1>
                <h5 style={{ color: "#3aa39a", paddingTop: "7px" }}>
                  Contact Me
                </h5>

                <div data-aos="zoom-in">
                  <Conact sectionRef={contactRef} />
                </div>
              </div>

              <Footer />
            </>
          }
        />

        {/* صفحة الكارد */}
        <Route path="/projectcard" element={<Projectcard />} />
 



      </Routes>
    </div>
  );
}

export default App;
