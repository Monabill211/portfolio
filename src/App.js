import "./App.css";
import Header from "./header";
import About from "./about";
import Project from "./project";
import Conact from "./concat";
import Footer from "./footer";
import Projectcard from "./projectcard";
import { Routes, Route } from "react-router-dom";
import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./home3d";
import { useUi } from "./ui/UiProvider";

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const { t } = useUi();

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
              <div data-aos="fade-down" className="hero-3d-wrap">
                <Home />
              </div>

              <div className="page-wrap" style={{ paddingTop: "clamp(48px, 12vw, 100px)" }}>
                <div className="section-headings">
                  <h1 style={{ color: "var(--text)" }}>{t("sections.whatIDo")}</h1>
                  <h5 style={{ color: "var(--accent)", paddingTop: "7px" }}>
                    {t("sections.services")}
                  </h5>
                </div>

                <div data-aos="fade-up">
                  <About sectionRef={aboutRef} />
                </div>
              </div>

              <div className="page-wrap" style={{ paddingTop: "clamp(48px, 12vw, 100px)" }}>
                <div className="section-headings">
                  <h1 style={{ color: "var(--text)" }}>{t("sections.projects")}</h1>
                  <h5 style={{ color: "var(--accent)", paddingTop: "7px" }}>
                    {t("sections.myProjects")}
                  </h5>
                </div>

                <div data-aos="fade-down">
                  <Project />
                </div>
              </div>

              <div className="page-wrap" style={{ paddingTop: "clamp(48px, 12vw, 100px)" }}>
                <div className="section-headings">
                  <h1 style={{ color: "var(--text)" }}>{t("sections.contact")}</h1>
                  <h5 style={{ color: "var(--accent)", paddingTop: "7px" }}>
                    {t("sections.contactMe")}
                  </h5>
                </div>

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
