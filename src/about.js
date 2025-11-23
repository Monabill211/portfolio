import Card from "./aboutDetils";
export default function About({ sectionRef }) {
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
      <Card
        title="Front-End Developer
"
        detiles="I build interactive and responsive user interfaces using HTML, CSS, JavaScript, and React.
I focus on clean code and user-friendly design.

"
      />
      <Card
        title=" WordPress Developer
"
        detiles="I create dynamic, easy-to-manage websites with WordPress.
I customize themes and plugins to match each client's unique needs.
"
      />
      <Card
        title=" UI/UX Designer
"
        detiles="I design attractive and intuitive user experiences using tools like Figma.
My goal is to deliver smooth and visually appealing interfaces.
"
      />
      <Card
        title=" My Experience
"
        detiles="I have 2 years of hands-on experience in front-end development.
During this time, I have completed over 20 successful projects for various clients.

"
      />
    </div>
  );
}
