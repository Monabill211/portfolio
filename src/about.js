import { useUi } from "./ui/UiProvider";

const aboutStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

  .about {
    position: relative;
    padding: 120px 80px;
    background: var(--bg-secondary);
    overflow: hidden;
    transition: background 0.3s;
  }

  .about-glow {
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
    pointer-events: none;
  }

  .about-header {
    margin-bottom: 64px;
  }

  .about-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 16px;
  }

  .about-eyebrow::before {
    content: '';
    display: block;
    width: 24px;
    height: 1px;
    background: var(--accent);
  }

  .about-heading {
    font-family: 'Syne', sans-serif;
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 800;
    color: var(--text);
    line-height: 1.05;
    letter-spacing: -1.5px;
    margin: 0 0 20px;
    max-width: 520px;
    transition: color 0.3s;
  }

  .about-heading span { color: var(--accent); }

  .about-intro {
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    color: var(--text-muted);
    line-height: 1.8;
    max-width: 460px;
    transition: color 0.3s;
  }

  /* ─── Grid ─── */
  .about-cards-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 14px;
  }

  .acard {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 28px;
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s, background 0.3s;
  }

  .acard::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .acard:hover { border-color: var(--border-hover); }
  .acard:hover::before { opacity: 1; }

  .acard-fe   { grid-column: span 3; }
  .acard-be   { grid-column: span 3; }
  .acard-wp   { grid-column: span 3; }
  .acard-uiux { grid-column: span 3; }
  .acard-exp  { grid-column: span 8; }
  .acard-stack { grid-column: span 4; }

  .acard-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: var(--accent-bg);
    border: 1px solid var(--accent-border);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
    font-size: 17px;
  }

  .acard-title {
    font-family: 'Syne', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: var(--text);
    margin: 0 0 10px;
    letter-spacing: -0.3px;
    transition: color 0.3s;
  }

  .acard-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    color: var(--text-muted);
    line-height: 1.7;
    margin: 0;
    transition: color 0.3s;
  }

  /* Exp card */
  .exp-stats-row {
    display: flex;
    align-items: center;
    gap: 36px;
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px solid var(--border);
  }

  .exp-stat-num {
    font-family: 'Syne', sans-serif;
    font-size: 30px;
    font-weight: 800;
    color: var(--accent);
    line-height: 1;
    display: block;
  }

  .exp-stat-lbl {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: var(--text-faint);
    margin-top: 4px;
    display: block;
    letter-spacing: 0.3px;
    transition: color 0.3s;
  }

  /* Stack card */
  .stack-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 18px;
  }

  .stack-tag {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: var(--accent);
    background: var(--accent-bg);
    border: 1px solid var(--accent-border);
    padding: 4px 11px;
    border-radius: 20px;
    letter-spacing: 0.2px;
    transition: background 0.3s, color 0.3s;
  }

  /* ─── Responsive ─── */
  @media (max-width: 1100px) {
    .acard-fe, .acard-be, .acard-wp, .acard-uiux { grid-column: span 6; }
    .acard-exp   { grid-column: span 12; }
    .acard-stack { grid-column: span 12; }
  }

  @media (max-width: 768px) {
    .about { padding: 80px 32px; }
    .about-cards-grid { grid-template-columns: 1fr; }
    .acard-fe, .acard-be, .acard-wp, .acard-uiux,
    .acard-exp, .acard-stack { grid-column: span 1; }
  }

  @media (max-width: 480px) {
    .about { padding: 60px 20px; }
    .about-heading { letter-spacing: -1px; }
  }
`;

const stack = [
  "React", "Next.js", "Node.js", "Express",
  "JavaScript", "TypeScript", "Figma", "WordPress",
  "MongoDB", "MySQL", "Tailwind", "Git",
];

export default function About({ sectionRef }) {
  const { t, lang } = useUi();

  const services = [
    { cls: "acard-fe",   icon: "⚡", titleKey: "aboutCards.feTitle",   descKey: "aboutCards.feDetails" },
    { cls: "acard-be",   icon: "🛠", titleKey: "aboutCards.beTitle",   descKey: "aboutCards.beDetails" },
    { cls: "acard-wp",   icon: "🌐", titleKey: "aboutCards.wpTitle",   descKey: "aboutCards.wpDetails" },
    { cls: "acard-uiux", icon: "🎨", titleKey: "aboutCards.uiuxTitle", descKey: "aboutCards.uiuxDetails" },
  ];

  return (
    <>
      <style>{aboutStyles}</style>
      <section className="about" ref={sectionRef}>
        <div className="about-glow" aria-hidden="true" />

        {/* Header */}
        <div className="about-header">
          <p className="about-eyebrow">{t("nav.about")}</p>
          <h2 className="about-heading">
            {lang === "ar" ? (
              <>{t("sections.whatIDo")} & <span>كيف</span> أعمله</>
            ) : (
              <>What I <span>do</span> & how I do it</>
            )}
          </h2>
          <p className="about-intro">
            {lang === "ar"
              ? "سنتان من الخبرة العملية في بناء منتجات ويب — من الفكرة للنشر. أهتم بكل تفصيلة."
              : "2 years of hands-on experience building full-stack web products — from concept to deployment. I care about every detail."}
          </p>
        </div>

        {/* Cards */}
        <div className="about-cards-grid">

          {/* Service Cards */}
          {services.map((s) => (
            <div key={s.cls} className={`acard ${s.cls}`}>
              <div className="acard-icon">{s.icon}</div>
              <h3 className="acard-title">{t(s.titleKey)}</h3>
              <p className="acard-desc">{t(s.descKey)}</p>
            </div>
          ))}

          {/* Experience Card */}
          <div className="acard acard-exp">
            <div className="acard-icon">🚀</div>
            <h3 className="acard-title">{t("aboutCards.expTitle")}</h3>
            <p className="acard-desc">{t("aboutCards.expDetails")}</p>
            <div className="exp-stats-row">
              <div>
                <span className="exp-stat-num">20+</span>
                <span className="exp-stat-lbl">{t("sections.projects")}</span>
              </div>
              <div>
                <span className="exp-stat-num">2</span>
                <span className="exp-stat-lbl">
                  {lang === "ar" ? "سنوات خبرة" : "Years Exp."}
                </span>
              </div>
              <div>
                <span className="exp-stat-num">4</span>
                <span className="exp-stat-lbl">{t("sections.services")}</span>
              </div>
            </div>
          </div>

          {/* Stack Card */}
          <div className="acard acard-stack">
            <div className="acard-icon">🧰</div>
            <h3 className="acard-title">
              {lang === "ar" ? "التقنيات" : "My Stack"}
            </h3>
            <p className="acard-desc">
              {lang === "ar" ? "الأدوات والتقنيات اللي بشتغل بيها يومياً." : "Tools & technologies I work with daily."}
            </p>
            <div className="stack-tags">
              {stack.map((item) => (
                <span key={item} className="stack-tag">{item}</span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}