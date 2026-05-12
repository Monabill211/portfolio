import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import Input from "./input";
import Button from "./contcatMe";
import { useUi } from "./ui/UiProvider";

export default function Concat({ sectionRef }) {
  const { t } = useUi();
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const style = {
    fontSize: "30px",
    cursor: "pointer",
  };

  const sendToWhatsApp = () => {
    const text = `Name: ${name}%0AMessage: ${msg}`;
    const url = `https://wa.me/201110094460?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="contact-layout"
      ref={sectionRef}
    >
      <div className="contact-icons" style={{ color: "var(--text)" }}>
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
  >
  <FacebookIcon style={style} />
  </a>
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
  >
  <InstagramIcon style={style} />
  </a>
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

      <div className="contact-form-col">
        <Input
        // style={{margin:"20px"}}
          name={t("contact.name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          // style={{ marginTop: "50px"  }}
          name={t("contact.message")}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />

        <Button
          // style={{ marginTop: "50px" }}
          title={t("contact.send")}
          onClick={sendToWhatsApp}
        />
      </div>
    </div>
  );
}
