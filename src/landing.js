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
        gap: "24px",
        flexWrap: "wrap",
      }}
      className="conteiner"
    >
      <div
        className="text"
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <h6 className="landing-greeting">Hello, I am</h6>
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
