import { useUi } from "./ui/UiProvider";
import { Link } from "react-router-dom";
import img1 from "./img/screencapture-file-D-index-html-2025-07-17-23_35_02.png";
import img2 from "./img/screencapture-piockio-vercel-app-2026-01-22-02_35_44.png";
import img4 from "./img/screencapture-monabill211-github-io-menuu-2025-11-23-15_45_56.png";

const projectsStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

  .projects {
    position: relative;
    padding: 120px 80px;
    background: var(--bg);
    overflow: hidden;
    transition: background 0.3s;
  }

  .projects-glow {
    position: absolute;
    top: -80px;
    right: -80px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
    pointer-events: none;
  }

  /* ─── Header ─── */
  .projects-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 56px;
    gap: 24px;
    flex-wrap: wrap;
  }

  .projects-eyebrow {
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

  .projects-eyebrow::before {
    content: '';
    display: block;
    width: 24px;
    height: 1px;
    background: var(--accent);
  }

  .projects-heading {
    font-family: 'Syne', sans-serif;
    font-size: clamp(32px, 4.5vw, 52px);
    font-weight: 800;
    color: var(--text);
    line-height: 1.05;
    letter-spacing: -1.5px;
    margin: 0;
    transition: color 0.3s;
  }

  .projects-heading span { color: var(--accent); }

  .projects-all-link {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--accent);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid var(--accent-border);
    padding: 10px 20px;
    border-radius: 8px;
    white-space: nowrap;
    transition: background 0.2s, color 0.2s;
    flex-shrink: 0;
    align-self: flex-end;
    margin-bottom: 4px;
  }

  .projects-all-link:hover {
    background: var(--accent-bg);
  }

  .projects-all-link::after {
    content: '→';
    transition: transform 0.2s;
  }

  .projects-all-link:hover::after {
    transform: translateX(3px);
  }

  /* ─── Grid ─── */
  .projects-grid-new {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  /* ─── Card ─── */
  .pcard {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    transition: border-color 0.3s, transform 0.3s;
    display: flex;
    flex-direction: column;
  }

  .pcard:hover {
    border-color: var(--border-hover);
    transform: translateY(-4px);
  }

  /* Image wrapper */
  .pcard-img-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: var(--bg-secondary);
  }

  .pcard-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.5s ease;
  }

  .pcard:hover .pcard-img-wrap img {
    transform: scale(1.04);
  }

  /* Overlay on hover */
  .pcard-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 200, 150, 0.08);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .pcard:hover .pcard-overlay { opacity: 1; }

  /* Number badge */
  .pcard-num {
    position: absolute;
    top: 12px;
    left: 12px;
    font-family: 'Syne', sans-serif;
    font-size: 11px;
    font-weight: 700;
    color: var(--accent);
    background: var(--bg);
    border: 1px solid var(--accent-border);
    padding: 3px 10px;
    border-radius: 20px;
    letter-spacing: 1px;
  }

  /* Body */
  .pcard-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 10px;
  }

  .pcard-tags {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  .pcard-tag {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    color: var(--accent);
    background: var(--accent-bg);
    border: 1px solid var(--accent-border);
    padding: 3px 10px;
    border-radius: 20px;
    letter-spacing: 0.3px;
  }

  .pcard-title {
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: var(--text);
    margin: 0;
    letter-spacing: -0.3px;
    line-height: 1.2;
    transition: color 0.3s;
  }

  .pcard-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    color: var(--text-muted);
    line-height: 1.7;
    margin: 0;
    flex: 1;
    transition: color 0.3s;
  }

  .pcard-footer {
    padding: 0 24px 24px;
  }

  .pcard-btn {
    display: block;
    width: 100%;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-align: center;
    color: var(--bg);
    background: var(--accent);
    padding: 11px 0;
    border-radius: 8px;
    text-decoration: none;
    transition: opacity 0.2s, transform 0.2s;
    letter-spacing: 0.2px;
  }

  .pcard-btn:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  /* ─── Responsive ─── */
  @media (max-width: 1000px) {
    .projects-grid-new { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 640px) {
    .projects { padding: 80px 24px; }
    .projects-grid-new { grid-template-columns: 1fr; }
    .projects-header { flex-direction: column; align-items: flex-start; }
    .projects-all-link { align-self: flex-start; }
  }

  @media (max-width: 480px) {
    .projects { padding: 60px 20px; }
  }
`;

const PROJECTS = [
  {
    id: "01",
    img: img1,
    title: "موقع تعريفي",
    titleEn: "Company Showcase",
    desc: "موقع تعريفي لشركة توريد أدوات فندقية — صور وصف منتجات وتواصل مباشر.",
    descEn: "Corporate showcase site for a hotel supplies company — product gallery and direct contact.",
    tags: ["HTML", "CSS", "JS"],
    href: "https://monabill211.github.io/matel-line/",
  },
  {
    id: "02",
    img: img2,
    title: "متجر إلكتروني",
    titleEn: "E-Commerce Store",
    desc: "متجر أثاث مكتبي متكامل — صفحات المنتجات، سلة الشراء، وطلب عبر واتساب.",
    descEn: "Full office furniture store — product pages, cart, and WhatsApp order integration.",
    tags: ["React", "Node.js", "WhatsApp API"],
    href: "https://piockio.vercel.app/",
  },
  {
    id: "03",
    img: img4,
    title: "منيو مطعم",
    titleEn: "Restaurant Menu",
    desc: "منيو تفاعلي للمطعم — طلبات مباشرة عبر رسائل واتساب.",
    descEn: "Interactive restaurant menu with direct WhatsApp ordering system.",
    tags: ["React", "WhatsApp"],
    href: "https://monabill211.github.io/menuu/#/",
  },
];

export default function Projects({ sectionRef }) {
  const { t, lang } = useUi();

  return (
    <>
      <style>{projectsStyles}</style>
      <section className="projects" ref={sectionRef}>
        <div className="projects-glow" aria-hidden="true" />

        {/* Header */}
        <div className="projects-header">
          <div>
            <p className="projects-eyebrow">{t("sections.projects")}</p>
            <h2 className="projects-heading">
              {lang === "ar" ? (
                <>{t("sections.myProjects")} <span>المختارة</span></>
              ) : (
                <>Selected <span>Work</span></>
              )}
            </h2>
          </div>
          <Link to="/projectcard" className="projects-all-link">
            {lang === "ar" ? "كل المشاريع" : "All Projects"}
          </Link>
        </div>

        {/* Cards */}
        <div className="projects-grid-new">
          {PROJECTS.map((p) => (
            <div className="pcard" key={p.id}>
              <div className="pcard-img-wrap">
                <img src={p.img} alt={lang === "ar" ? p.title : p.titleEn} />
                <div className="pcard-overlay" aria-hidden="true" />
                <span className="pcard-num">{p.id}</span>
              </div>

              <div className="pcard-body">
                <div className="pcard-tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="pcard-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="pcard-title">
                  {lang === "ar" ? p.title : p.titleEn}
                </h3>
                <p className="pcard-desc">
                  {lang === "ar" ? p.desc : p.descEn}
                </p>
              </div>

              <div className="pcard-footer">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pcard-btn"
                >
                  {t("common.seeProject")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}