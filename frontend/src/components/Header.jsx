import React, { useState, useEffect } from "react";
import "../assets/styles/header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Khadija Al-Maqbali</div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="mailto:khadijalmaqbali@gmail.com" className="cta-pill">
        Get In Touch
      </a>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

     {menuOpen && (
  <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
    
    <div className="drawer" onClick={(e) => e.stopPropagation()}>
      <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
      <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
      <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
      <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
    </div>

  </div>
)}
    </header>
  );
}