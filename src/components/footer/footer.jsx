import "./footer.css";

export function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Samriddha Malla. All rights reserved.</p>
          <div className="footer-links">
            <a href="mailto:your-email@example.com" aria-label="Email">
              <img
                src="https://freepngimg.com/download/email_marketing/140771-symbol-email-free-clipart-hd.png"
                alt="Email"
                className="footer-icon"
              />
            </a>

            <a
              href="https://github.com/Samr990"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="footer-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/samriddha-malla/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="footer-icon"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
