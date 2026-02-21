import myImage from "./img/5472309857.png";
import "./landing.css";
import ImageWithCircle from "./img";
import Button from "./contcatMe";

export default function Landing() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "20px",
      }}
      className="conteiner"
    >
      <div
        className="text
      "
      style={{display:"flex",flexDirection:"column",alignItems:"center"}}
      >
        <h6 className="bg-red-500 text-4xl">Hallo,I AM</h6>
        <h1>Mohamed Nabil</h1>
        <h4 style={{ color: "#3aa39a" }}>I AM Front End Developer</h4>
        
        <a 
    href="https://wa.me/201110094460" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: "inherit",textDecoration: "none", }}
  >
        <Button
  title="Contact Me"
  onClick={() => {
    window.open("https://wa.me/201110094460", "_blank");
  }}
/>
</a>
      </div>

      <div>
        {/* <img src={myImage} alt="My Image" />
         */}
        <ImageWithCircle />
      </div>
    </div>
  );
}
