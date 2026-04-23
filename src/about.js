import Card from "./aboutDetils";
import AOS from "aos";
import "aos/dist/aos.css";
import {  useEffect } from "react";
import { useUi } from "./ui/UiProvider";

export default function About({ sectionRef }) {
  const { t } = useUi();
   useEffect(() => {
      AOS.init({
        duration: 800,
        once: true,
      });
    }, []);
  
  return (

    <div
      style={{
        display: "flex",
        color: "var(--text)",
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "10px",
        paddingTop: "50px",

      }}
     ref={sectionRef} 
    >
      <div data-aos="fade-left" >

     
      <Card
        title={`${t("aboutCards.feTitle")}\n`}
        detiles={`${t("aboutCards.feDetails")}\n`}
    />
     </div>
           <div data-aos="fade-right" >
      <Card
        title={`${t("aboutCards.beTitle")}\n`}
        detiles={`${t("aboutCards.beDetails")}\n`}
    />
     </div>
           <div data-aos="fade-right" >

          

      <Card
        title={`${t("aboutCards.wpTitle")}\n`}
        detiles={`${t("aboutCards.wpDetails")}\n`}
    /> </div>
         <div data-aos="fade-left" >

          <Card
        title={`${t("aboutCards.uiuxTitle")}\n`}
        detiles={`${t("aboutCards.uiuxDetails")}\n`}
      />
         </div>

      
             <div data-aos="fade-right" >
                 <Card
        title={`${t("aboutCards.expTitle")}\n`}
        detiles={`${t("aboutCards.expDetails")}\n`}
     data-aos="fade-left"  />
             </div>

   
    </div>
  );
}
