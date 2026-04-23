import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEYS = {
  theme: "ui.theme",
  lang: "ui.lang",
};

const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عني",
      projects: "المشاريع",
      contact: "تواصل معي",
    },
    actions: {
      light: "لايت",
      dark: "دراك",
      langAr: "عربي",
      langEn: "English",
    },
    sections: {
      whatIDo: "ماذا أقدم",
      services: "خدماتي",
      projects: "المشاريع",
      myProjects: "مشاريعي",
      contact: "تواصل",
      contactMe: "تواصل معي",
    },
    contact: {
      name: "الاسم",
      message: "رسالتك",
      send: "إرسال",
    },
    aboutCards: {
      feTitle: "مطور واجهات أمامية",
      feDetails:
        "أبني واجهات تفاعلية ومتجاوبة باستخدام HTML وCSS وJavaScript وReact.\nأهتم بكود نظيف وتجربة مستخدم سهلة.",
      beTitle: "مطور خلفية",
      beDetails:
        "أطوّر حلول Back‑End بـ Node.js وExpress مع التركيز على هيكلة نظيفة وواجهات API فعّالة وجاهزة للاستخدام.",
      wpTitle: "مطور ووردبريس",
      wpDetails:
        "أنشئ مواقع ديناميكية سهلة الإدارة باستخدام WordPress، مع تخصيص القوالب والإضافات حسب احتياج كل عميل.",
      uiuxTitle: "مصمم UI/UX",
      uiuxDetails:
        "أصمم تجارب مستخدم جذابة وبديهية باستخدام أدوات مثل Figma بهدف تقديم واجهات سلسة وجميلة.",
      expTitle: "خبرتي",
      expDetails:
        "لدي خبرة عملية لمدة سنتين في تطوير الواجهات الأمامية، وخلالها أنجزت أكثر من 20 مشروعًا ناجحًا لعملاء مختلفين.",
    },
    common: {
      seeProject: "عرض المشروع",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
      projects: "Projects",
      contact: "Contact Me",
    },
    actions: {
      light: "Light",
      dark: "Dark",
      langAr: "Arabic",
      langEn: "English",
    },
    sections: {
      whatIDo: "What I do",
      services: "My services",
      projects: "Projects",
      myProjects: "My projects",
      contact: "Contact",
      contactMe: "Contact me",
    },
    contact: {
      name: "Name",
      message: "Message",
      send: "Send",
    },
    aboutCards: {
      feTitle: "Front‑End Developer",
      feDetails:
        "I build interactive and responsive user interfaces using HTML, CSS, JavaScript, and React.\nI focus on clean code and user‑friendly design.",
      beTitle: "Back‑End Developer",
      beDetails:
        "I create back‑end solutions with Node.js and Express, focusing on clean architecture and efficient, user‑ready APIs.",
      wpTitle: "WordPress Developer",
      wpDetails:
        "I create dynamic, easy‑to‑manage websites with WordPress. I customize themes and plugins to match each client's unique needs.",
      uiuxTitle: "UI/UX Designer",
      uiuxDetails:
        "I design attractive and intuitive user experiences using tools like Figma. My goal is to deliver smooth and visually appealing interfaces.",
      expTitle: "My Experience",
      expDetails:
        "I have 2 years of hands‑on experience in front‑end development. During this time, I have completed over 20 successful projects for various clients.",
    },
    common: {
      seeProject: "See Project",
    },
  },
};

function safeGetItem(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ?? fallback;
  } catch {
    return fallback;
  }
}

function safeSetItem(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore
  }
}

const UiContext = createContext(null);

export function UiProvider({ children }) {
  const [theme, setTheme] = useState(() => safeGetItem(STORAGE_KEYS.theme, "dark"));
  const [lang, setLang] = useState(() => safeGetItem(STORAGE_KEYS.lang, "ar"));

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.theme, theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    safeSetItem(STORAGE_KEYS.lang, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const value = useMemo(() => {
    const dict = translations[lang] ?? translations.en;
    const t = (path) => {
      const parts = String(path).split(".");
      let cur = dict;
      for (const p of parts) cur = cur?.[p];
      return typeof cur === "string" ? cur : path;
    };

    const toggleTheme = () => setTheme((v) => (v === "dark" ? "light" : "dark"));
    const toggleLang = () => setLang((v) => (v === "ar" ? "en" : "ar"));

    return { theme, setTheme, toggleTheme, lang, setLang, toggleLang, dir, t };
  }, [lang, dir, theme]);

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export function useUi() {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error("useUi must be used within UiProvider");
  return ctx;
}

