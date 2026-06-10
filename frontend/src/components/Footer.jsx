import "../assets/styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>Khadija Al-Maqbali</h3>
        <p>Soft, dreamy developer portfolio</p>
      </div>

     <nav className="footer-center">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
      </nav>

      <div className="footer-right">
        <p>Oman · GMT+4</p>
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}