import myImage from "./img/5472309857.png";

function ImageWithCircle() {
  const size = "min(200px, 70vw)";
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        maxWidth: 220,
        maxHeight: 220,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "12% 8% auto 8%",
          aspectRatio: "1",
          width: "auto",
          height: "78%",
          maxHeight: "100%",
          borderRadius: "50%",
          backgroundColor: "#3aa39a",
          zIndex: 1,
        }}
      />
      <img
        src={myImage}
        alt="Profile"
        style={{
          position: "absolute",
          inset: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
          zIndex: 2,
          border: "3px solid rgba(255,255,255,0.15)",
        }}
      />
    </div>
  );
}

export default ImageWithCircle;
