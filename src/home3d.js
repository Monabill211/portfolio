import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { useUi } from "./ui/UiProvider";

const heroStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

  .hero {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    padding: 0 80px;
    background: var(--bg);
    gap: 40px;
    overflow: hidden;
    transition: background 0.3s;
  }

  .hero-glow {
    position: absolute;
    top: -120px;
    right: -120px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, var(--glow) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .hero-left {
    flex: 1;
    max-width: 580px;
    z-index: 1;
  }

  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--accent);
    border: 1px solid var(--accent-border);
    padding: 5px 14px;
    border-radius: 20px;
    margin-bottom: 24px;
  }

  .hero-tag::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    animation: hero-pulse 2s ease-in-out infinite;
  }

  @keyframes hero-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.4; transform: scale(0.7); }
  }

  .hero-name {
    font-family: 'Syne', sans-serif;
    font-size: clamp(52px, 7vw, 80px);
    font-weight: 800;
    color: var(--text);
    line-height: 1;
    margin: 0 0 6px;
    letter-spacing: -2px;
    transition: color 0.3s;
  }

  .hero-name span { color: var(--accent); }

  .hero-fullname {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: var(--text-faint);
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0 0 16px;
    transition: color 0.3s;
  }

  .hero-title {
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: var(--text-muted);
    margin: 0 0 16px;
    transition: color 0.3s;
  }

  .hero-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    color: var(--text-faint);
    line-height: 1.75;
    margin: 0 0 40px;
    max-width: 420px;
    transition: color 0.3s;
  }

  .hero-btns {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 44px;
  }

  .hero-btn-primary {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    background: var(--accent);
    color: var(--bg);
    padding: 13px 32px;
    border-radius: 8px;
    text-decoration: none;
    transition: opacity 0.2s, transform 0.2s;
    border: none;
    cursor: pointer;
  }

  .hero-btn-primary:hover {
    opacity: 0.88;
    transform: translateY(-1px);
  }

  .hero-btn-ghost {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    background: transparent;
    color: var(--text-muted);
    padding: 13px 32px;
    border-radius: 8px;
    border: 1px solid var(--tag-border);
    text-decoration: none;
    transition: border-color 0.2s, color 0.2s;
    cursor: pointer;
  }

  .hero-btn-ghost:hover {
    border-color: var(--accent-border);
    color: var(--accent);
  }

  .hero-stats {
    display: flex;
    align-items: center;
    gap: 28px;
    padding-top: 28px;
    border-top: 1px solid var(--border);
  }

  .hero-stat {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .hero-stat-num {
    font-family: 'Syne', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: var(--text);
    line-height: 1;
    transition: color 0.3s;
  }

  .hero-stat-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: var(--text-faint);
    letter-spacing: 0.5px;
  }

  .hero-stat-divider {
    width: 1px;
    height: 32px;
    background: var(--border);
  }

  /* ─── Spline container ─── */
  .hero-right {
    position: relative;
    width: 46%;
    height: 100vh;
    flex-shrink: 0;
    z-index: 1;
  }

  .hero-right > .spline-wrapper {
    width: 100%;
    height: 100%;
    transition: opacity 0.5s ease;
  }

  .hero-right > .spline-wrapper.loading {
    opacity: 0;
  }

  /* Skeleton placeholder shown while Spline loads */
  .hero-spline-skeleton {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    transition: opacity 0.4s ease;
  }

  .hero-spline-skeleton.hidden {
    opacity: 0;
  }

  .hero-spline-skeleton-inner {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    border: 1px solid var(--accent-border);
    animation: skeleton-spin 3s linear infinite;
    opacity: 0.3;
  }

  @keyframes skeleton-spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  /* No-WebGL fallback */
  .hero-spline-fallback {
    display: none;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .hero-spline-fallback.visible {
    display: flex;
  }

  .hero-spline-fallback-circle {
    width: 320px;
    height: 320px;
    border-radius: 50%;
    border: 1px solid var(--accent-border);
    background: radial-gradient(circle at 35% 35%, var(--glow) 0%, transparent 60%);
    opacity: 0.5;
  }

  @media (max-width: 900px) {
    .hero {
      flex-direction: column;
      justify-content: center;
      padding: 100px 32px 40px;
      min-height: 100svh;
      text-align: center;
    }
    .hero-left  { max-width: 100%; }
    .hero-tag   { margin-inline: auto; }
    .hero-desc  { max-width: 100%; margin-inline: auto; }
    .hero-btns  { justify-content: center; }
    .hero-stats { justify-content: center; }

    .hero-right {
      width: 100%;
      height: 320px;        /* explicit height on mobile */
      flex-shrink: 0;
    }

    .hero-right > .spline-wrapper,
    .hero-right > .spline-wrapper canvas {
      width: 100% !important;
      height: 320px !important;
      display: block;
    }

    .hero-spline-skeleton-inner {
      width: 180px;
      height: 180px;
    }

    .hero-spline-fallback-circle {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 480px) {
    .hero { padding: 90px 20px 40px; }
    .hero-name { letter-spacing: -1px; }
    .hero-btn-primary,
    .hero-btn-ghost { padding: 12px 22px; font-size: 13px; }
  }
`;

// Detect WebGL support once
function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

export default function Hero({ sectionRef }) {
  const { t, lang } = useUi();

  const [splineLoaded, setSplineLoaded] = useState(false);
  const [splineError, setSplineError]   = useState(false);
  const [webglOk]                       = useState(() => hasWebGL());

  // Safety timeout — if Spline hasn't fired onLoad in 12 s, treat as error
  useEffect(() => {
    if (!webglOk) return;
    const timer = setTimeout(() => {
      if (!splineLoaded) setSplineError(true);
    }, 12000);
    return () => clearTimeout(timer);
  }, [webglOk, splineLoaded]);

  const handleLoad = () => setSplineLoaded(true);
  const handleError = () => setSplineError(true);

  const showSkeleton  = webglOk && !splineLoaded && !splineError;
  const showFallback  = !webglOk || splineError;
  const showSpline    = webglOk && !splineError;

  return (
    <>
      <style>{heroStyles}</style>
      <section className="hero" ref={sectionRef}>
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-left">
          <span className="hero-tag">Available for work</span>

          <h1 className="hero-name">
            Mo<span>Salah</span>
          </h1>
          <p className="hero-fullname">Mohamed Nabil</p>
          <p className="hero-title">Full-Stack Developer & UI/UX Designer</p>
          <p className="hero-desc">
            {lang === "ar"
              ? "أبني تجارب ويب سريعة ونظيفة — من واجهات pixel-perfect لـ back-ends جاهزة للإنتاج."
              : "I build fast, clean web experiences — from pixel-perfect interfaces to production-ready back-ends."}
          </p>

          <div className="hero-btns">
            <a href="#projects" className="hero-btn-primary">
              {t("nav.projects")}
            </a>
            <a href="/cv.pdf" className="hero-btn-ghost" download>
              Download CV
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">20+</span>
              <span className="hero-stat-label">{t("sections.projects")}</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true" />
            <div className="hero-stat">
              <span className="hero-stat-num">2 yrs</span>
              <span className="hero-stat-label">Experience</span>
            </div>
            <div className="hero-stat-divider" aria-hidden="true" />
            <div className="hero-stat">
              <span className="hero-stat-num">4</span>
              <span className="hero-stat-label">{t("sections.services")}</span>
            </div>
          </div>
        </div>

        {/* ─── 3-D panel ─── */}
        <div className="hero-right">

          {/* Spinning ring shown while Spline loads */}
          {showSkeleton && (
            <div className="hero-spline-skeleton" aria-hidden="true">
              <div className="hero-spline-skeleton-inner" />
            </div>
          )}

          {/* Spline scene */}
          {showSpline && (
            <div
              className={`spline-wrapper${splineLoaded ? "" : " loading"}`}
            >
              <Spline
                scene="https://prod.spline.design/1SJJNl1By5Xd5cqL/scene.splinecode"
                onLoad={handleLoad}
                onError={handleError}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          )}

          {/* Fallback for no-WebGL or load error */}
          {showFallback && (
            <div className="hero-spline-fallback visible" aria-hidden="true">
              <div className="hero-spline-fallback-circle" />
            </div>
          )}
        </div>
      </section>
    </>
  );
}