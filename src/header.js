// import ChBackground from "./ChBackground";
import "./header.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUi } from "./ui/UiProvider";

export default function Header({ scrollToAbout,scrollToContact }) {
  const [isstyled, setisstyled] = useState(false);
  const { t, toggleTheme, toggleLang, theme, lang } = useUi();

  function handelClickToggol() {
    if (isstyled === true) {
      setisstyled(false);
    } else {
      setisstyled(true);
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <div className="logo">
          Mohamed <span style={{ color: "#3aa39a" }}>Nabil</span>
        </div>
        <div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "10px",
            }}
            className="none"
          >
              <Link to="/">
            <li className="btn" >{t("nav.home")}</li></Link>
        <li className="btn" onClick={scrollToAbout}>{t("nav.about")}</li>
  <Link to="/projectcard">
        <li className="btn">{t("nav.projects")}</li></Link>
      <li className="btn" onClick={scrollToContact}>{t("nav.contact")}</li>
      <li className="btn" onClick={toggleTheme}>
        {theme === "dark" ? t("actions.light") : t("actions.dark")}
      </li>
      <li className="btn" onClick={toggleLang}>
        {lang === "ar" ? t("actions.langEn") : t("actions.langAr")}
      </li>
            {/* <li>
            <ChBackground />
          </li> */}
          </ul>
        </div>
        <div className="toggol" style={{ color: "var(--text)" }}>
          <DehazeIcon
            style={{ fontSize: "25px" }}
            onClick={handelClickToggol}
          />
        </div>
      </div>
      <ul
        className="show"
        style={isstyled ? { display: "block" } : { display: "none" }}
      >
         <Link to="/">
            <li className="btn" >{t("nav.home")}</li></Link>
        <li className="btn" onClick={scrollToAbout}>{t("nav.about")}</li>
  <Link to="/projectcard">
        <li className="btn">{t("nav.projects")}</li></Link>
      <li className="btn" onClick={scrollToContact}>{t("nav.contact")}</li>
      <li className="btn" onClick={toggleTheme}>
        {theme === "dark" ? t("actions.light") : t("actions.dark")}
      </li>
      <li className="btn" onClick={toggleLang}>
        {lang === "ar" ? t("actions.langEn") : t("actions.langAr")}
      </li>
      </ul>
    </div>
  );
}
