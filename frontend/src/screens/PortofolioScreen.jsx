import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/portfolio.css";

export default function PortfolioSections() {
  const counters = useRef([]);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.current.forEach((el) => {
              if (!el) return;
              const target = +el.dataset.target;
              let start = 0;

              const animate = () => {
                start += (target - start) * 0.1;
                el.textContent = Math.floor(start);
                if (start < target - 1) requestAnimationFrame(animate);
              };

              animate();
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    const el = document.querySelector(".stats-band");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-meta">PORTFOLIO · 2026</div>

        <h1 className="hero-title">
          <span>Building Modern Web</span>
          <span className="gradient-text">Development &</span>
          <span className="italic">AI Experiences</span>
        </h1>

        <p className="tagline">Educator • Developer • Innovator</p>

        <div className="hero-buttons">
          <a href="#work" className="primary-btn">
            Explore My Work
          </a>

          <a href="mailto:khadijalmaqbali@gmail.com" className="secondary-btn">
            Let's Connect
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="glass-card about">

          <div className="about-photo">
            <img src="/images/me.png" alt="About me" />
          </div>

          <div className="about-text">
            <h4 className="section-title">ABOUT ME</h4>
            <h2>Full-Stack Developer & Technology Educator</h2>

            <p>
              I am a technology educator and web developer passionate about
              creating engaging learning experiences through programming,
              artificial intelligence, electronics, and digital innovation.
            </p>

            <p>
              Over the years, I have designed and delivered workshops,
              developed educational projects, and helped students transform
              their ideas into real-world solutions.
            </p>

            <button
              onClick={() => setAboutOpen(true)}
              className="glass-btn"
            >
              My Journey →
            </button>
          </div>

        </div>
      </section>

      {/* STATS BAND */}
      <section className="stats-band glass-card">
        {[
          ["1001", "Students"],
          ["27", "Workshops"],
          ["4", "Years"],
          ["6", "Technologies"]
        ].map((s, i) => (
          <div key={i} className="counter">
            <div
              ref={(el) => (counters.current[i] = el)}
              data-target={s[0]}
              className="num"
            >
              0
            </div>
            <div>{s[1]}</div>
          </div>
        ))}
      </section>

      {/* WORK */}
      <section id="work" className="work">
        <h2 className="section-title">
          Educational, Web Development & IoT Projects
        </h2>

        <div className="projects">
          <div className="project-card glass-card">
            <div className="project-img">Web Development</div>
            <h3>MERN E-Commerce</h3>
            <p>Full-stack e-commerce platform using MERN.</p>
          </div>

          <div className="project-card glass-card">
            <div className="project-img">Flutter Development</div>
            <h3>Flutter & Mobile Apps</h3>
            <p>
              Designing and developing high-performance mobile applications with
              Flutter, delivering beautiful UI, smooth functionality, and
              cross-platform solutions for Android and iOS.
            </p>
          </div>

          <div className="project-card glass-card">
            <div className="project-img">Artificial Intelligence</div>
            <h3>AI & Smart Applications</h3>
            <p>
              Developing educational AI projects and interactive smart assistants
              using modern AI tools and platforms.
            </p>
          </div>

          <div className="project-card glass-card">
            <div className="project-img">Arduino & Drones</div>
            <h3>Arduino & Drone Programming</h3>
            <p>
              Creating electronics projects, automation systems, and drone
              programming workshops for students.
            </p>
          </div>

          <div className="project-card glass-card">
            <div className="project-img">3D Design</div>
            <h3>3D Design & Printing</h3>
            <p>
              Designing 3D models with Tinkercad and preparing them for 3D
              printing and prototyping.
            </p>
          </div>

          <div className="project-card glass-card">
            <div className="project-img">Photography</div>
            <h3>Photography & Videography</h3>
            <p>
              Professional photography, videography, and visual storytelling for
              events, workshops, and digital content.
            </p>
          </div>

          <div className="project-card glass-card">
            <div className="project-img">Editing</div>
            <h3>Video Editing & Content Creation</h3>
            <p>
              Editing videos and creating engaging digital content for educational,
              marketing, and social media purposes.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills">
        <h2 className="section-title">
          Skills & Technologies I Work With
        </h2>

        <div className="skills-wrap">
          {[
            "React", "JS", "UI/UX", "AI", "Arduino", "3D", "Node",
            "Design", "Video Editing", "Content Creation",
            "Photography", "Drones", "Tinkercad", "MERN",
            "Python", "Git", "IoT"
          ].map((s, i) => (
            <span key={i} className="pill glass-card">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h1>Let’s create</h1>
        <h1 className="gradient-text">something</h1>
        <h1>amazing together ✦</h1>

        <p className="contact-text">
          I’m always open to new opportunities, collaborations, and exciting projects.
          Feel free to reach out — let’s build something meaningful together.
        </p>

        <button
          className="primary-btn"
          onClick={() =>
            (window.location.href = "mailto:khadijalmaqbali@gmail.com")
          }
        >
          Get In Touch
        </button>

        <div className="email">
          khadijalmaqbali@gmail.com
        </div>
      </section>

      {/* ABOUT MODAL (UPDATED) */}
      {aboutOpen && (
        <div
          className="modal-overlay"
          onClick={() => setAboutOpen(false)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setAboutOpen(false)}
            >
              ✕
            </button>

            <h2>My Journey</h2>

<p>
I am a Full-Stack Developer and Technology Educator with a background in
Physics and Computer Science, passionate about building practical digital solutions.
</p>

<p>
I build modern web and mobile applications using technologies like React and Flutter,
with a focus on clean UI, performance, and user experience.
</p>

<p>
Alongside development, I lead workshops in programming, AI, and digital innovation,
helping students turn ideas into real projects.
</p>

<p>
I am currently open to <strong>remote opportunities</strong> and
<strong> freelance projects</strong>.
</p>

<p>
Let’s connect and build something impactful together.
</p>
          </div>
        </div>
      )}
    </>
  );
}