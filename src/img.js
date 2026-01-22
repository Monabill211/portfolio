import myImage from "./img/5472309857.png";
function ImageWithCircle() {
  return (
    <div style={{ position: "relative", width: 200, height: 200 }}>
      <div
        style={{
          position: "absolute",
          width: 250,
          height: 250,
          borderRadius: "50%",
          backgroundColor: "#3aa39a",
          top: 10,
          left: -12,
          zIndex: 1,
        }}
      />
      <img
        src={myImage}
        alt="Profile"
        style={{
          position: "absolute",

          borderRadius: "50%",
          objectFit: "cover",
          top: -64,
          zIndex: 2,
            // left: -100,
          right:-132
        }}
      />
    </div>
  );
}

export default ImageWithCircle;
