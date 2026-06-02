import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useUi } from "./ui/UiProvider";

const contactStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

  .contact {
    position: relative;
    padding: 120px 80px;
    background: var(--bg-secondary);
    overflow: hidden;
    transition: background 0.3s;
  }

  .contact-glow {
    position: absolute;
    bottom: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
    pointer-events: none;
  }

  /* ─── Header ─── */
  .contact-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 14px;
  }

  .contact-eyebrow::before {
    content: '';
    display: block;
    width: 24px;
    height: 1px;
    background: var(--accent);
  }

  .contact-heading {
    font-family: 'Syne', sans-serif;
    font-size: clamp(32px, 4.5vw, 52px);
    font-weight: 800;
    color: var(--text);
    line-height: 1.05;
    letter-spacing: -1.5px;
    margin: 0 0 14px;
    transition: color 0.3s;
  }

  .contact-heading span { color: var(--accent); }

  .contact-subtext {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    color: var(--text-muted);
    line-height: 1.7;
    max-width: 400px;
    margin: 0 0 48px;
    transition: color 0.3s;
  }

  /* ─── Layout ─── */
  .contact-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: start;
  }

  /* ─── Socials ─── */
  .contact-socials-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--text-faint);
    margin-bottom: 20px;
    transition: color 0.3s;
  }

  .contact-socials-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .social-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 18px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 12px;
    text-decoration: none;
    color: var(--text);
    transition: border-color 0.25s, background 0.25s, transform 0.25s, color 0.3s;
  }

  .social-card:hover {
    border-color: var(--border-hover);
    background: var(--accent-bg);
    transform: translateY(-2px);
    color: var(--accent);
  }

  .social-card svg {
    font-size: 22px !important;
    flex-shrink: 0;
    transition: color 0.25s;
  }

  .social-card:hover svg { color: var(--accent); }

  .social-name {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
  }

  /* GitHub full width */
  .social-card-wide {
    grid-column: span 2;
  }

  /* ─── Form ─── */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .cform-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--text-faint);
    margin-bottom: 20px;
    transition: color 0.3s;
  }

  .cform-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .cform-field label {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: var(--text-muted);
    letter-spacing: 0.3px;
    transition: color 0.3s;
  }

  .cform-input,
  .cform-textarea {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: var(--text);
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 12px 16px;
    outline: none;
    transition: border-color 0.2s, background 0.3s, color 0.3s;
    width: 100%;
    box-sizing: border-box;
    resize: none;
  }

  .cform-input::placeholder,
  .cform-textarea::placeholder {
    color: var(--text-faint);
  }

  .cform-input:focus,
  .cform-textarea:focus {
    border-color: var(--accent-border);
    background: var(--accent-bg);
  }

  .cform-textarea { min-height: 120px; }

  .cform-btn {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--bg);
    background: var(--accent);
    border: none;
    border-radius: 10px;
    padding: 14px 0;
    width: 100%;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 4px;
  }

  .cform-btn:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  .cform-btn::after {
    content: '↗';
    font-size: 16px;
  }

  /* ─── Responsive ─── */
  @media (max-width: 860px) {
    .contact-body { grid-template-columns: 1fr; gap: 40px; }
  }

  @media (max-width: 640px) {
    .contact { padding: 80px 24px; }
    .contact-socials-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 480px) {
    .contact { padding: 60px 20px; }
    .contact-socials-grid { grid-template-columns: 1fr; }
    .social-card-wide { grid-column: span 1; }
  }
`;

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-nabil-99a498282/",
    icon: <LinkedInIcon />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61586594875907",
    icon: <FacebookIcon />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/201110094460",
    icon: <WhatsAppIcon />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mmsalah_7/",
    icon: <InstagramIcon />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Monabill211",
    icon: <GitHubIcon />,
    wide: true,
  },
];

export default function Contact({ sectionRef }) {
  const { t, lang } = useUi();
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const sendToWhatsApp = () => {
    const text = `Name: ${name}%0AMessage: ${msg}`;
    window.open(`https://wa.me/201110094460?text=${text}`, "_blank");
  };

  return (
    <>
      <style>{contactStyles}</style>
      <section className="contact" ref={sectionRef}>
        <div className="contact-glow" aria-hidden="true" />

        {/* Header */}
        <p className="contact-eyebrow">{t("sections.contact")}</p>
        <h2 className="contact-heading">
          {lang === "ar" ? (
            <>{t("sections.contactMe")} <span>الآن</span></>
          ) : (
            <>Let's <span>Work</span> Together</>
          )}
        </h2>
        <p className="contact-subtext">
          {lang === "ar"
            ? "سواء عندك مشروع، سؤال، أو بس عاوز تقول أهلاً — أنا هنا."
            : "Got a project in mind, a question, or just want to say hi — I'm here."}
        </p>

        <div className="contact-body">
          {/* Socials */}
          <div>
            <p className="contact-socials-label">
              {lang === "ar" ? "تواصل عبر" : "Find me on"}
            </p>
            <div className="contact-socials-grid">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-card${s.wide ? " social-card-wide" : ""}`}
                >
                  {s.icon}
                  <span className="social-name">{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact-form">
            <p className="cform-label">
              {lang === "ar" ? "أو ابعتلي رسالة" : "Or send a message"}
            </p>

            <div className="cform-field">
              <label htmlFor="contact-name">{t("contact.name")}</label>
              <input
                id="contact-name"
                className="cform-input"
                placeholder={lang === "ar" ? "اسمك هنا..." : "Your name..."}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="cform-field">
              <label htmlFor="contact-msg">{t("contact.message")}</label>
              <textarea
                id="contact-msg"
                className="cform-textarea"
                placeholder={lang === "ar" ? "رسالتك هنا..." : "Your message..."}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
            </div>

            <button className="cform-btn" onClick={sendToWhatsApp}>
              {t("contact.send")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}