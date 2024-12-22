import "./intro.css";

export function Intro() {
  return (
    <div>
      {/* Intro Section */}
      <section id="home" className="intro">
        <div className="intro-content">
          <div className="text-content">
            <h1>Samriddha Malla</h1>
            <p>Welcome to my personal portfolio</p>
            <a href="#projects" className="btn">
              View My Work
            </a>
            {/* Social Links */}
            <div className="social-links">
              <a
                href="https://github.com/Samr990"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/samriddha-malla/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
