export default function Card({ title, detiles }) {
  return (
    <div
      style={{
        width: "305px",
        background: "#222a41",
        padding: "20px",
        borderRadius: "30px",
        textAlign: "left",
      }}
    >
      <h1 style={{ paddingBottom: "10px", color: "#3aa39a" }}>{title}</h1>
      <p style={{ fontWeight: "bold" }}>{detiles}</p>
    </div>
  );
}
