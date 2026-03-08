import { useInView } from "../hooks/useInView";

export function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
      <span style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.7rem",
        letterSpacing: "0.25em",
        color: "var(--accent)",
        textTransform: "uppercase",
      }}>
        {children}
      </span>
      <div style={{ flex: 1, height: "1px", background: "var(--line)" }} />
    </div>
  );
}
