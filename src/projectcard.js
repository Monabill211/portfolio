import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUi } from "./ui/UiProvider";
import img1 from "./img/screencapture-monabill211-github-io-menuu-2025-11-23-15_45_56.png";
import img2 from "./img/screencapture-monabill211-github-io-time-2026-01-22-02_36_01.png";
import img3 from "./img/screencapture-file-D-tempalet-js-indexd-html-2025-07-17-23_36_29.png";
import img4 from "./img/screencapture-monabill211-github-io-Tempalet-2-2026-01-22-02_36_30.png";
import img5 from "./img/screencapture-piockio-vercel-app-2026-01-22-02_35_44.png";
import img6 from "./img/screencapture-file-D-index-html-2025-07-17-23_35_02.png";
import img7 from "./img/screencapture-localhost-3000-2026-01-22-14_30_35.png";
import img8 from "./img/screencapture-monabill211-github-io-2026-01-22-14_44_13.png";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

  .pc-page {
    min-height: 100vh;
    background: var(--bg);
    padding: 80px 80px 120px;
    transition: background 0.3s;
  }

  /* ─── Header ─── */
  .pc-header {
    margin-bottom: 56px;
  }

  .pc-eyebrow {
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

  .pc-eyebrow::before {
    content: '';
    display: block;
    width: 24px;
    height: 1px;
    background: var(--accent);
  }

  .pc-heading {
    font-family: 'Syne', sans-serif;
    font-size: clamp(36px, 5vw, 60px);
    font-weight: 800;
    color: var(--text);
    letter-spacing: -2px;
    line-height: 1;
    margin: 0 0 6px;
    transition: color 0.3s;
  }

  .pc-heading span { color: var(--accent); }

  .pc-count {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: var(--text-faint);
    margin-top: 12px;
    transition: color 0.3s;
  }

  /* ─── Filters ─── */
  .pc-filters {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }

  .pc-filter-btn {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 7px 16px;
    border-radius: 20px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.2s;
  }

  .pc-filter-btn:hover {
    border-color: var(--accent-border);
    color: var(--accent);
  }

  .pc-filter-btn.active {
    background: var(--accent);
    border-color: var(--accent);
    color: var(--bg);
  }

  /* ─── Grid ─── */
  .pc-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  /* ─── Card ─── */
  .pc-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: border-color 0.3s, background 0.3s;
    position: relative;
  }

  .pc-card:hover {
    border-color: var(--border-hover);
  }

  /* Image */
  .pc-card-img {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: var(--bg-secondary);
  }

  .pc-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.5s ease;
    display: block;
  }

  .pc-card:hover .pc-card-img img {
    transform: scale(1.05);
  }

  .pc-card-no-img {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: var(--bg-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: var(--accent);
    opacity: 0.3;
  }

  /* Type badge */
  .pc-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 20px;
  }

  .pc-badge-freelance {
    background: rgba(0,200,150,0.15);
    color: #00c896;
    border: 1px solid rgba(0,200,150,0.3);
  }

  .pc-badge-training {
    background: rgba(100,130,255,0.15);
    color: #7b9fff;
    border: 1px solid rgba(100,130,255,0.3);
  }

  /* Body */
  .pc-card-body {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .pc-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
  }

  .pc-card-title {
    font-family: 'Syne', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--text);
    margin: 0;
    line-height: 1.25;
    letter-spacing: -0.3px;
    transition: color 0.3s;
  }

  .pc-card-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.65;
    margin: 0;
    flex: 1;
    transition: color 0.3s;
  }

  /* Stack tags */
  .pc-card-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
  }

  .pc-stack-tag {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    color: var(--accent);
    background: var(--accent-bg);
    border: 1px solid var(--accent-border);
    padding: 2px 9px;
    border-radius: 20px;
  }

  /* Footer */
  .pc-card-footer {
    padding: 0 20px 20px;
  }

  .pc-card-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 100%;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--bg);
    background: var(--accent);
    padding: 10px 0;
    border-radius: 8px;
    text-decoration: none;
    transition: opacity 0.2s, transform 0.2s;
  }

  .pc-card-link:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  .pc-card-link::after { content: ' ↗'; }

  /* ─── Responsive ─── */
  @media (max-width: 1024px) {
    .pc-grid { grid-template-columns: repeat(2, 1fr); }
    .pc-page { padding: 80px 40px 100px; }
  }

  @media (max-width: 640px) {
    .pc-grid { grid-template-columns: 1fr; }
    .pc-page { padding: 60px 20px 80px; }
    .pc-heading { letter-spacing: -1px; }
  }
`;

const PROJECTS = [
  {
    title: "Restaurant Menu",
    titleAr: "منيو مطعم",
    desc: "A modern restaurant menu UI with categories and WhatsApp ordering.",
    descAr: "منيو مطعم تفاعلي مع نظام طلب عبر واتساب.",
    img: img1,
    link: "https://monabill211.github.io/menuu/#/",
    type: "freelance",
    stack: ["React", "CSS"],
  },
  {
    title: "Developer Portfolio",
    titleAr: "بورتفوليو",
    desc: "Animated portfolio with smooth scroll and responsive UI.",
    descAr: "بورتفوليو بانيميشن وتصميم متجاوب.",
    img: img7,
    link: "https://monabill211.github.io/portfolio/",
    type: "training",
    stack: ["React", "CSS"],
  },
  {
    title: "E-Commerce Store",
    titleAr: "متجر إلكتروني",
    desc: "Full e-commerce shop with cart, favorites, filtering, and WhatsApp checkout.",
    descAr: "متجر أثاث متكامل — سلة، مفضلة، فلترة، وطلب عبر واتساب.",
    img: img5,
    link: "https://pickio-test.vercel.app/",
    type: "freelance",
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Prayer Times App",
    titleAr: "مواقيت الصلاة",
    desc: "Dynamic prayer times app using location-based API.",
    descAr: "تطبيق مواقيت الصلاة بناءً على الموقع الجغرافي.",
    img: img2,
    link: "https://monabill211.github.io/time/",
    type: "training",
    stack: ["JavaScript", "API", "CSS"],
  },
  {
    title: "Matel Line",
    titleAr: "ماتل لاين — تجهيزات فندقية",
    desc: "Corporate showcase site for a hotel supplies company.",
    descAr: "موقع تعريفي لشركة تجهيزات فندقية.",
    img: img6,
    link: "https://monabill211.github.io/matel-line/",
    type: "freelance",
    stack: ["HTML", "CSS", "JS"],
  },
  {
    title: "Landing Page – Tempalet JS",
    titleAr: "لاندينج بيج — Tempalet JS",
    desc: "Clean landing page built with vanilla HTML/CSS/JS.",
    descAr: "لاندينج بيج نظيفة بـ HTML/CSS/JS.",
    img: img3,
    link: "https://monabill211.github.io/Tempalet-js/",
    type: "training",
    stack: ["HTML", "CSS", "JS"],
  },
  {
    title: "Landing Page – Tempalet 2",
    titleAr: "لاندينج بيج — Tempalet 2",
    desc: "Marketing landing page for a service/product.",
    descAr: "لاندينج بيج تسويقية لخدمة أو منتج.",
    img: img4,
    link: "https://monabill211.github.io/Tempalet-2/",
    type: "training",
    stack: ["HTML", "CSS", "JS"],
  },
  {
    title: "Cura – Massage Center",
    titleAr: "كيورا — مركز مساج نسائي",
    desc: "Saudi women's massage center — home visit booking service.",
    descAr: "مركز مساج نسائي سعودي يقدم خدمة زيارة منزلية.",
    img: img8,
    link: "https://monabill211.github.io/cura/",
    type: "freelance",
    stack: ["HTML", "CSS", "JS"],
  },
  {
    title: "Bella Vita",
    titleAr: "بيلا فيتا — متجر تجميل",
    desc: "Beauty and cosmetics e-commerce store.",
    descAr: "متجر مستحضرات تجميل إلكتروني.",
    img: null,
    link: "https://bella-veta.vercel.app/",
    type: "freelance",
    stack: ["React", "Tailwind"],
  },
  {
    title: "Al-Motairy Real Estate",
    titleAr: "المطيري للعقارات",
    desc: "Real estate company site showcasing projects and available units.",
    descAr: "موقع شركة عقارات يعرض المشاريع والوحدات المتاحة للبيع.",
    img: null,
    link: "https://almotairy.org/",
    type: "freelance",
    stack: ["WordPress"],
  },
  {
    title: "Dusour",
    titleAr: "دسور — شركة برمجة",
    desc: "Software company showcasing innovative development solutions.",
    descAr: "شركة برمجية تعرض الحلول البرمجية والتطوير المبتكرة.",
    img: null,
    link: "https://dusour.com/",
    type: "freelance",
    stack: ["WordPress"],
  },
  {
    title: "Admin Dashboard",
    titleAr: "داشبورد إداري",
    desc: "Full admin dashboard with stats, salesman tracking, revenue reports, and real-time car service management.",
    descAr: "داشبورد إداري متكامل — إحصائيات، متابعة مندوبين، تقارير إيرادات، وإدارة طلبات الخدمة.",
    img: null,
    link: "#",
    type: "freelance",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind", "MUI"],
  },
  {
    title: "Memar Al-Ghad",
    titleAr: "معمار الغد — مقاولات",
    desc: "Landing page for a construction and contracting company.",
    descAr: "صفحة هبوط لشركة مقاولات.",
    img: null,
    link: "https://www.mimaralghad.com/",
    type: "freelance",
    stack: ["WordPress"],
  },
];

const FILTERS = [
  { key: "all",       labelAr: "الكل",      labelEn: "All"       },
  { key: "freelance", labelAr: "فري لانس",  labelEn: "Freelance" },
  { key: "training",  labelAr: "تدريبي",    labelEn: "Training"  },
];

export default function Projectcard() {
  const { lang } = useUi();
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.type === active);

  return (
    <>
      <style>{styles}</style>
      <div className="pc-page">

        {/* Header */}
        <div className="pc-header">
          <p className="pc-eyebrow">
            {lang === "ar" ? "الأعمال" : "Portfolio"}
          </p>
          <h1 className="pc-heading">
            {lang === "ar" ? <>كل <span>مشاريعي</span></> : <>All <span>Projects</span></>}
          </h1>
          <p className="pc-count">
            {filtered.length} {lang === "ar" ? "مشروع" : "projects"}
          </p>
        </div>

        {/* Filters */}
        <div className="pc-filters">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`pc-filter-btn${active === f.key ? " active" : ""}`}
              onClick={() => setActive(f.key)}
            >
              {lang === "ar" ? f.labelAr : f.labelEn}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="pc-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                className="pc-card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                layout
              >
                {/* Image */}
                {p.img ? (
                  <div className="pc-card-img">
                    <img src={p.img} alt={lang === "ar" ? p.titleAr : p.title} />
                    <span className={`pc-badge pc-badge-${p.type}`}>
                      {p.type === "freelance"
                        ? (lang === "ar" ? "فري لانس" : "Freelance")
                        : (lang === "ar" ? "تدريبي" : "Training")}
                    </span>
                  </div>
                ) : (
                  <div className="pc-card-no-img">
                    <span className={`pc-badge pc-badge-${p.type}`} style={{ position: "static", marginBottom: 0 }}>
                      {p.type === "freelance"
                        ? (lang === "ar" ? "فري لانس" : "Freelance")
                        : (lang === "ar" ? "تدريبي" : "Training")}
                    </span>
                  </div>
                )}

                {/* Body */}
                <div className="pc-card-body">
                  <h2 className="pc-card-title">
                    {lang === "ar" ? p.titleAr : p.title}
                  </h2>
                  <p className="pc-card-desc">
                    {lang === "ar" ? p.descAr : p.desc}
                  </p>
                  <div className="pc-card-stack">
                    {p.stack.map((s) => (
                      <span key={s} className="pc-stack-tag">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <div className="pc-card-footer">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pc-card-link"
                  >
                    {lang === "ar" ? "عرض المشروع" : "View Project"}
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}