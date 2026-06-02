import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useUi } from "./ui/UiProvider";

const footerStyles = `
  .footer {
    background: var(--bg);
    border-top: 1px solid var(--border);
    padding: 48px 80px 32px;
    transition: background 0.3s;
  }

  .footer-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
    margin-bottom: 32px;
  }

  .footer-logo {
    font-family: 'Syne', sans-serif;
    font-size: 22px;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.5px;
    transition: color 0.3s;
  }

  .footer-logo span { color: var(--accent); }

  .footer-socials {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .footer-social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    color: var(--text-muted);
    text-decoration: none;
    transition: border-color 0.2s, background 0.2s, color 0.2s, transform 0.2s;
  }

  .footer-social-btn:hover {
    border-color: var(--accent-border);
    background: var(--accent-bg);
    color: var(--accent);
    transform: translateY(-2px);
  }

  .footer-social-btn svg { font-size: 18px !important; }

  .footer-divider {
    width: 100%;
    height: 1px;
    background: var(--border);
    margin-bottom: 24px;
  }

  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }

  .footer-copy {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: var(--text-faint);
    transition: color 0.3s;
  }

  .footer-copy span { color: var(--accent); }

  .footer-tag {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: var(--text-faint);
    background: var(--bg-card);
    border: 1px solid var(--border);
    padding: 4px 12px;
    border-radius: 20px;
    transition: color 0.3s;
  }

  @media (max-width: 640px) {
    .footer { padding: 40px 24px 24px; }
    .footer-inner { justify-content: center; text-align: center; }
    .footer-bottom { justify-content: center; text-align: center; }
  }
`;

const SOCIALS = [
  { href: "https://www.linkedin.com/in/mohamed-nabil-99a498282/", icon: <LinkedInIcon />, label: "LinkedIn" },
  { href: "https://www.facebook.com/profile.php?id=61586594875907", icon: <FacebookIcon />, label: "Facebook" },
  { href: "https://wa.me/201110094460", icon: <WhatsAppIcon />, label: "WhatsApp" },
  { href: "https://www.instagram.com/mmsalah_7/", icon: <InstagramIcon />, label: "Instagram" },
  { href: "https://github.com/Monabill211", icon: <GitHubIcon />, label: "GitHub" },
];

export default function Footer() {
  const { lang } = useUi();

  return (
    <>
      <style>{footerStyles}</style>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            Mo<span>Salah</span>
          </div>
          <div className="footer-socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2025 <span>MoSalah</span> — Mohamed Nabil.{" "}
            {lang === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
      
        </div>
      </footer>
    </>
  );
}