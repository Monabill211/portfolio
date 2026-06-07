import "./header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUi } from "./ui/UiProvider";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import TranslateIcon from "@mui/icons-material/Translate";

export default function Header({ scrollToAbout, scrollToContact }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, toggleTheme, toggleLang, theme, lang } = useUi();

  const navLinks = [
    { label: t("nav.home"), to: "/", type: "link" },
    { label: t("nav.about"), onClick: scrollToAbout, type: "btn" },
    { label: t("nav.projects"), to: "/projectcard", type: "link" },
    { label: t("nav.contact"), onClick: scrollToContact, type: "btn" },
  ];

  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      top: 0,
      zIndex: 100,
      background: "var(--header-bg, rgba(10,10,10,0.85))",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>

        {/* Logo */}
        <div style={{
          fontWeight: 900,
          fontSize: "1.4rem",
          letterSpacing: "1px",
          color: "var(--text)",
        }}>
          Mohamed <span style={{ color: "#3aa39a" }}>Nabil</span>
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "6px" }} className="desktop-nav">
          {navLinks.map((item, i) =>
            item.type === "link" ? (
              <Link key={i} to={item.to} style={{ textDecoration: "none" }}>
                <span className="nav-btn">{item.label}</span>
              </Link>
            ) : (
              <button key={i} className="nav-btn" onClick={item.onClick}>
                {item.label}
              </button>
            )
          )}

          {/* Divider */}
          <div style={{ width: "1px", height: "22px", background: "rgba(255,255,255,0.15)", margin: "0 6px" }} />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="icon-btn"
            title={theme === "dark" ? t("actions.light") : t("actions.dark")}
          >
            {theme === "dark" ? <LightModeIcon style={{ fontSize: "20px" }} /> : <DarkModeIcon style={{ fontSize: "20px" }} />}
          </button>

          {/* Lang toggle */}
          <button
            onClick={toggleLang}
            className="icon-btn"
            title={lang === "ar" ? t("actions.langEn") : t("actions.langAr")}
            style={{ display: "flex", alignItems: "center", gap: "5px", padding: "8px 12px", borderRadius: "10px" }}
          >
            <TranslateIcon style={{ fontSize: "18px" }} />
            <span style={{ fontSize: "0.8rem", fontWeight: 700 }}>
              {lang === "ar" ? "EN" : "AR"}
            </span>
          </button>
        </nav>

        {/* Mobile: icons + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="mobile-controls">
          <button onClick={toggleTheme} className="icon-btn">
            {theme === "dark" ? <LightModeIcon style={{ fontSize: "20px" }} /> : <DarkModeIcon style={{ fontSize: "20px" }} />}
          </button>
          <button onClick={toggleLang} className="icon-btn" style={{ display: "flex", alignItems: "center", gap: "4px", padding: "7px 10px", borderRadius: "10px" }}>
            <TranslateIcon style={{ fontSize: "17px" }} />
            <span style={{ fontSize: "0.75rem", fontWeight: 700 }}>{lang === "ar" ? "EN" : "AR"}</span>
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="icon-btn"
            style={{ padding: "8px" }}
          >
            {menuOpen ? <CloseIcon style={{ fontSize: "22px" }} /> : <MenuIcon style={{ fontSize: "22px" }} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{
          background: "var(--header-bg, rgba(10,10,10,0.95))",
          backdropFilter: "blur(14px)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "16px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }} className="mobile-menu">
          {navLinks.map((item, i) =>
            item.type === "link" ? (
              <Link key={i} to={item.to} style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
                <span className="nav-btn mobile">{item.label}</span>
              </Link>
            ) : (
              <button key={i} className="nav-btn mobile" onClick={() => { item.onClick?.(); setMenuOpen(false); }}>
                {item.label}
              </button>
            )
          )}
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-controls { display: none; }
        .mobile-menu { display: none; }

        .nav-btn {
          background: transparent;
          border: none;
          color: var(--text);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 8px 14px;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .nav-btn:hover {
          background: rgba(58,163,154,0.15);
          color: #3aa39a;
        }
        .nav-btn.mobile {
          display: block;
          width: 100%;
          text-align: right;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 1rem;
        }
        .icon-btn {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text);
          border-radius: 10px;
          padding: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: background 0.2s;
        }
        .icon-btn:hover {
          background: rgba(58,163,154,0.2);
          color: #3aa39a;
          border-color: #3aa39a;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; }
          .mobile-menu { display: flex !important; }
        }
      `}</style>
    </header>
  );
}