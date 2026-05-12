export default function Card({ title, detiles }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "305px",
        boxSizing: "border-box",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        padding: "20px",
        borderRadius: "30px",
        textAlign: "left",
      }}
    >
      <h2
        style={{
          margin: 0,
          paddingBottom: "10px",
          color: "var(--accent)",
          fontSize: "clamp(1.05rem, 3vw, 1.4rem)",
          lineHeight: 1.25,
        }}
      >
        {title}
      </h2>
      <p style={{ fontWeight: "bold", margin: 0, color: "var(--text)" }}>{detiles}</p>
    </div>
  );
}
