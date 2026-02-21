/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from "react";
import Lineskills from "./lineskills";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import Input from "./input";
import Button from "./contcatMe";

export default function Concat({ sectionRef }) {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const style = {
    fontSize: "30px",
    cursor: "pointer",
  };

  const sendToWhatsApp = () => {
    const phone = "201110094460";
    const text = `Name: ${name}%0AMessage: ${msg}`;
    const url = `https://wa.me/201110094460?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "30px",
      }}
      ref={sectionRef}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
        }}
      >
       <h2>
         <a 
    href="https://www.linkedin.com/in/mohamed-nabil-99a498282/" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: "inherit" }}
  >
  <LinkedInIcon style={style} />
  </a>
</h2>

<h2>
   <a 
    href="https://www.facebook.com/profile.php?id=61586594875907" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: "inherit" }}
  ></a>
  <FacebookIcon style={style} />
</h2>

<h2>
  <a 
    href="https://wa.me/201110094460" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: "inherit" }}
  >
    <WhatsAppIcon style={style} />
  </a>
</h2>

<h2>
 <a 
    href="https://www.instagram.com/mmsalah_7/" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: "inherit" }}
  ></a>
  <InstagramIcon style={style} />
</h2>

<h2>
   <a 
    href="https://github.com/Monabill211" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: "inherit" }}
  >
  <GitHubIcon style={style} /></a>
</h2>

      </div>

      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Input
        // style={{margin:"20px"}}
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          // style={{ marginTop: "50px"  }}
          name="Message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />

        <Button
          // style={{ marginTop: "50px" }}
          title="Send"
          onClick={sendToWhatsApp}
        />
      </div>
    </div>
  );
}
