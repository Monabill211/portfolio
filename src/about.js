import Card from "./aboutDetils";
import AOS from "aos";
import "aos/dist/aos.css";
import {  useEffect } from "react";

export default function About({ sectionRef }) {
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
        color: "white",
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
        title="Front-End Developer
"
        detiles="I build interactive and responsive user interfaces using HTML, CSS, JavaScript, and React.
I focus on clean code and user-friendly design.

"
    />
     </div>
           <div data-aos="fade-right" >
      <Card
        title="Back-End Developer
"
        detiles="I create back-end solutions with Node.js and Express,
focusing on clean architecture and efficient, user-ready APIs

"
    />
     </div>
           <div data-aos="fade-right" >

          

      <Card
        title=" WordPress Developer
"
        detiles="I create dynamic, easy-to-manage websites with WordPress.
I customize themes and plugins to match each client's unique needs.
"
    /> </div>
         <div data-aos="fade-left" >

          <Card
        title=" UI/UX Designer
"
        detiles="I design attractive and intuitive user experiences using tools like Figma.
My goal is to deliver smooth and visually appealing interfaces.
"
      />
         </div>

      
             <div data-aos="fade-right" >
                 <Card
        title=" My Experience
"
        detiles="I have 2 years of hands-on experience in front-end development.
During this time, I have completed over 20 successful projects for various clients.

"
     data-aos="fade-left"  />
             </div>

   
    </div>
  );
}
