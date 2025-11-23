import img1 from "./img/screencapture-file-D-index-html-2025-07-17-23_35_02.png";
import img2 from "./img/screencapture-file-D-pikio-index-html-2025-07-17-23_36_53.png";
import img3 from "./img/screencapture-file-D-tempalet-js-indexd-html-2025-07-17-23_36_29.png";
import img4 from "./img/screencapture-monabill211-github-io-menuu-2025-11-23-15_45_56.png"
import Button from "./allprojects";
import { Link } from "react-router-dom";

import Card from "./projectdetiles";
import { Margin } from "@mui/icons-material";
export default function Project() {
  const style = {
    color: "white",
    padding: "10px",
    marginTop: "10px",
    background: "#3aa39a",
    // marginBottom: "100px",
    borderRadius: "10px",
    alignItems: "center",
    textAlign: "center",
    width: "300px",
    cursor: "pointer",
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          paddingTop: "50px",
        }}
        id
      >
        <div>
          <Card
            title="موقع تعريفي"
            detiles="موقع تعريفي للشركة توريد ادوات فنديقة فيه صور و وصف للمنتجات و التواصل من خلال الموقع"
            img={img1}
          />
   <a
  href="https://monabill211.github.io/matel-line/"
  target="_blank"
  style={{ textDecoration: "none" }}
>
  <h5 style={style}>See Project</h5>
</a>

        </div>
        <div style={{ marginTop: "30px" }}>
          <Card
            title="موقع تجارة الكترونية"
            detiles="موقع تجارة الاثاث المكتبي فيه كل امكانيات و صفحات المتجر الاكتروني و كمان عند طلب المنتج يرسل رسالة علي الوتساب"
            img={img2}
          />
          <a
  href="https://piockio.vercel.app/"
  target="_blank"
  style={{ textDecoration: "none" }}
>
  <h5 style={style}>See Project</h5>
</a>
        </div>
        <div style={{ marginTop: "30px" }}>
          <Card title="منيو مطعم" detiles="منيو مطعم للطلب الوارادت من خلال الرسائل " img={img4} />
        <a
  href="https://monabill211.github.io/menuu/#/"
  target="_blank"
  style={{ textDecoration: "none" }}
>
  <h5 style={style}>See Project</h5>
</a>

        </div>
      </div>
        <Link to="/Projectcard">      <Button
        style={{
          margin: "40px",
          color: "#3aa39a",
        }}
      /></Link>

    </div>
  );
}
