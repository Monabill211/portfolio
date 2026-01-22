// import ChBackground from "./ChBackground";
import "./header.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ scrollToAbout,scrollToContact }) {
  const [isstyled, setisstyled] = useState(false);

  function handelClickToggol() {
    if (isstyled === true) {
      setisstyled(false);
    } else {
      setisstyled(true);
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <div className="logo">
          Mohamed <span style={{ color: "#3aa39a" }}>Nabil</span>
        </div>
        <div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "10px",
            }}
            className="none"
          >
              <Link to="/">
            <li className="btn" >Home</li></Link>
        <li className="btn" onClick={scrollToAbout}>About Me</li>
  <Link to="/Projectcard">

        <li className="btn">Projects</li></Link>
      <li className="btn" onClick={scrollToContact}>Contact Me</li>
            {/* <li>
            <ChBackground />
          </li> */}
          </ul>
        </div>
        <div className="toggol" style={{ color: "white" }}>
          <DehazeIcon
            style={{ fontSize: "25px" }}
            onClick={handelClickToggol}
          />
        </div>
      </div>
      <ul
        className="show"
        style={isstyled ? { display: "block" } : { display: "none" }}
      >
         <Link to="/">
            <li className="btn" >Home</li></Link>
        <li className="btn" onClick={scrollToAbout}>About Me</li>
  <Link to="/Projectcard">

        <li className="btn">Projects</li></Link>
      <li className="btn" onClick={scrollToContact}>Contact Me</li>
      </ul>
    </div>
  );
}
