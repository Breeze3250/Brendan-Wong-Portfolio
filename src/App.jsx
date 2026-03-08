import { useState, useEffect } from "react";
import { NAV_ITEMS, EXPERIENCE, PROJECTS, SKILLS } from "./data/portfolioData";
import { FadeIn, SectionLabel } from "./components/UI";
import Particles from './components/particles';
import profilePic from './assets/profile.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState("About");
  const [scrolled, setScrolled] = useState(false);

  // Scroll Listener
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_ITEMS.map(n => document.getElementById(n.toLowerCase()));
      const current = sections.filter(s => s && s.getBoundingClientRect().top < 160);
      if (current.length) {
        const last = current[current.length - 1];
        setActiveSection(last.id.charAt(0).toUpperCase() + last.id.slice(1));
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Particles */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Particles
          particleCount={150}
          particleSpread={10}
          speed={0.08}
          particleColors={["#4af0b8", "#2d9eff"]}
          moveParticlesOnHover
          particleHoverFactor={1}
          alphaParticles={false}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1.25rem 2rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: scrolled ? "rgba(8,11,16,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span className="glow-dot" />
          <span style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.05em" }}>
            BW
          </span>
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          {NAV_ITEMS.map(item => (
            <button
              key={item}
              className={`nav-link ${activeSection === item ? "active" : ""}`}
              onClick={() => scrollTo(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      <main style={{ position: "relative", zIndex: 1 }}>

        {/* HERO / ABOUT */}
        <section id="about" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "8rem 2rem 6rem", maxWidth: "1100px", margin: "0 auto" }}>
          <div className="hero-layout">

            {/* Left side — text content */}
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
                <span className="glow-dot" />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.25em", color: "var(--accent)", textTransform: "uppercase" }}>
                  Seeking Fall 8 month co-op · 2025
                </span>
              </div>

              <h1 className="hero-name" style={{ marginBottom: "1.5rem" }}>
                Brendan<br /><span>Wong.</span>
              </h1>

              {/* BIO */}
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.88rem", color: "var(--muted)", maxWidth: "520px", lineHeight: 1.8, marginBottom: "1rem" }}>
                I am a Computer Science student specializing in Bioinformatics at the University of Waterloo. 
                My professional background includes engineering full-stack features at Adentro, developing embedded C++ device drivers at Christie Digital, and building automated genomic pipelines at Sinai Health. 
                Outside of tech, I am an accomplished pianist with Licentiate and Associate Diplomas from the Royal Conservatory of Music. 
                When I am not coding or at the piano, I love spending my free time gaming, reading, playing hockey, and enjoying sports in general. Go Leafs Go!
                Or well, maybe not this year...
              </p>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
                <span style={{ fontFamily: "'DM Mono'", fontSize: "0.72rem", color: "var(--muted)" }}>
                  University of Waterloo · Computer Science, Bioinformatics Specialziation
                </span>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a href="https://github.com/Breeze3250" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
                <a href="https://linkedin.com/in/b7wong" target="_blank" rel="noopener noreferrer" className="social-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
                <a href="mailto:b24wong@uwaterloo.ca" className="social-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
                  Email
                </a>
              </div>
            </div>

            {/* Right side — photo */}
            <div style={{ flexShrink: 0 }}>
              <img
                src={profilePic}
                alt="Brendan Wong"
                style={{
                  width: "500px",
                  height: "500px",
                  objectFit: "cover",
                  borderRadius: "16px",
                  border: "1px solid var(--border)",
                  filter: "grayscale(20%)",
                }}
              />
            </div>

          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="section-heading" style={{ marginBottom: "3rem" }}>Where I've Worked</h2>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {EXPERIENCE.map((job, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="exp-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <div>
                      <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", marginBottom: "0.2rem" }}>{job.company}</div>
                      <div style={{ color: "var(--accent)", fontSize: "0.78rem", letterSpacing: "0.05em" }}>{job.role}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "'DM Mono'", fontSize: "0.72rem", color: "var(--muted)" }}>{job.period}</div>
                      <div style={{ fontFamily: "'DM Mono'", fontSize: "0.7rem", color: "var(--muted)", opacity: 0.7 }}>{job.location}</div>
                    </div>
                  </div>
                  <div style={{ width: "100%", height: "1px", background: "var(--line)", margin: "1rem 0" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {job.bullets.map((b, j) => (
                      <p key={j} className="bullet-item">{b}</p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <SectionLabel>Projects</SectionLabel>
            <h2 className="section-heading" style={{ marginBottom: "3rem" }}>Things I've Built</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {PROJECTS.map((proj, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="proj-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "var(--text)" }}>{proj.name}</div>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--muted)", transition: "color 0.2s" }}
                      onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                      onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "var(--muted)", fontFamily: "'DM Mono'" }}>{proj.period}</div>
                  <p style={{ color: "var(--muted)", fontSize: "0.82rem", lineHeight: 1.7 }}>{proj.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "auto" }}>
                    {proj.tech.map((t, j) => <span key={j} className="tag">{t}</span>)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
          <FadeIn>
            <SectionLabel>Skills</SectionLabel>
            <h2 className="section-heading" style={{ marginBottom: "3rem" }}>My Toolkit</h2>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {Object.entries(SKILLS).map(([cat, items], i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "1rem" }}>{cat}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {items.map((skill, j) => <span key={j} className="skill-pill">{skill}</span>)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: "3rem 2rem", maxWidth: "1100px", margin: "0 auto", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span className="glow-dot" />
            <span style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>Brendan Wong</span>
          </div>
          <span style={{ fontFamily: "'DM Mono'", fontSize: "0.7rem", color: "var(--muted)" }}>
            b24wong@uwaterloo.ca
          </span>
        </footer>

      </main>
    </>
  );
}
