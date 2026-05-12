import img1 from "./img/screencapture-file-D-index-html-2025-07-17-23_35_02.png";
import img2 from "./img/screencapture-piockio-vercel-app-2026-01-22-02_35_44.png";
import img4 from "./img/screencapture-monabill211-github-io-menuu-2025-11-23-15_45_56.png"
import Button from "./allprojects";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {  useEffect } from "react";

import Card from "./projectdetiles";
import { useUi } from "./ui/UiProvider";
export default function Project() {
  const { t } = useUi();
  const style = {
    color: "var(--text)",
    padding: "10px",
    marginTop: "10px",
    background: "var(--accent)",
    borderRadius: "10px",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
    boxSizing: "border-box",
  };
  useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
        });
      }, []);
    
  return (
    <div>
      <div className="projects-grid">
        <div data-aos="fade-up">
          <Card
            title="موقع تعريفي"
            detiles="موقع تعريفي للشركة توريد ادوات فنديقة فيه صور و وصف للمنتجات و التواصل من خلال الموقع"
            img={img1}
          />
          <a
            href="https://monabill211.github.io/matel-line/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <h5 className="project-cta" style={style}>
              {t("common.seeProject")}
            </h5>
          </a>
        </div>

        <div data-aos="fade-down">
          <Card
            title="موقع تجارة الكترونية"
            detiles="موقع تجارة الاثاث المكتبي فيه كل امكانيات و صفحات المتجر الاكتروني و كمان عند طلب المنتج يرسل رسالة علي الوتساب"
            img={img2}
          />
          <a
            href="https://piockio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <h5 className="project-cta" style={style}>
              {t("common.seeProject")}
            </h5>
          </a>
        </div>

        <div data-aos="fade-up">
          <Card
            title="منيو مطعم"
            detiles="منيو مطعم للطلب الوارادت من خلال الرسائل "
            img={img4}
          />
          <a
            href="https://monabill211.github.io/menuu/#/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <h5 className="project-cta" style={style}>
              {t("common.seeProject")}
            </h5>
          </a>
        </div>
      </div>
      <Link to="/projectcard">
        <Button
          style={{
            margin: "40px",
            color: "#3aa39a",
          }}
        />
      </Link>


    </div>
  );
}
