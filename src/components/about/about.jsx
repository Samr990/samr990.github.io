import "./about.css";

export function About() {
  return (
    <div>
      {/* Intro Section */}
      <section id="home" className="intro">
        <div className="intro-content">
          <div className="left-side">
            <h1>Samriddha Malla</h1>
            <h2>Full Stack Developer</h2>
          </div>
          <div className="right-side">
            <p className="welcome-message">
              Hi, I'm Samriddha Malla, a Full Stack Developer dedicated to
              creating efficient, scalable, and user-friendly web applications.
            </p>
            <a href="#projects" className="btn">
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="about-me">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hi! I'm a passionate developer with a love for technology and a
                strong foundation in full stack development. My goal is to
                become a full-stack developer and build impactful applications.
              </p>
              <p>
                Outside of coding, I’m a huge soccer fan—whether playing or
                watching, it’s a sport that keeps me active and motivated.
              </p>
              <p>
                I also love hiking and exploring the outdoors, as well as diving
                into graphic design, where I enjoy creating and experimenting
                with visuals.
              </p>
              <p>
                I’m always learning and excited to take on the next challenge!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>My Skills</h2>
          <div className="skills-list">
            <div className="skill-card">
              <div className="skill-logo html"></div>
              <div className="skill-name">HTML</div>
            </div>
            <div className="skill-card">
              <div className="skill-logo css"></div>
              <div className="skill-name">CSS</div>
            </div>
            <div className="skill-card">
              <div className="skill-logo javascript"></div>
              <div className="skill-name">JavaScript</div>
            </div>
            <div className="skill-card">
              <div className="skill-logo java"></div>
              <div className="skill-name">Java</div>
            </div>
            <div className="skill-card">
              <div className="skill-logo react"></div>
              <div className="skill-name">React</div>
            </div>
            <div className="skill-card">
              <div className="skill-logo nodejs"></div>
              <div className="skill-name">Node.js</div>
            </div>
            <div className="skill-card">
              <div className="skill-logo express"></div>
              <div className="skill-name">Express.js</div>
            </div>
            <div className="skill-card">
              <div className="skill-logo mongodb"></div>
              <div className="skill-name">MongoDB</div>
            </div>
            <div className="skill-card">
              <div className="skill-logo sql"></div>
              <div className="skill-name">SQL</div>
            </div>
            <div className="skill-card">
              <div className="skill-logo git"></div>
              <div className="skill-name">Git</div>
            </div>
            <div className="skill-card">
              <div className="skill-logo docker"></div>
              <div className="skill-name">Docker</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2>Experience</h2>
          <div className="experience-list">
            <div className="experience-item">
              <h3>Full-Stack Developer</h3>
              <p>Tech Solutions Inc. | Jan 2023 - June 2023</p>
              <ul>
                <li>
                  Developed and maintained full-stack web applications using
                  React, Node.js, and MongoDB.
                </li>
                <li>
                  Designed and implemented RESTful APIs to support scalable
                  front-end solutions.
                </li>
                <li>
                  Optimized application performance, reducing page load time by
                  40%.
                </li>
                <li>
                  Collaborated with cross-functional teams, including designers
                  and project managers, to ensure user-centered design and
                  functionality.
                </li>
                <li>
                  Implemented unit and integration tests to ensure code
                  reliability and maintainability.
                </li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>Full-Stack Web Developer</h3>
              <p>Innovate Labs | July 2023 - Dec 2023</p>
              <ul>
                <li>
                  Designed and built responsive web applications using modern
                  frameworks like Next.js and Tailwind CSS.
                </li>
                <li>
                  Integrated third-party APIs for real-time data updates and
                  enhanced user experience.
                </li>
                <li>
                  Migrated legacy codebases to modern technologies, improving
                  maintainability and scalability.
                </li>
                <li>
                  Automated deployment pipelines using Docker and CI/CD tools to
                  streamline production workflows.
                </li>
                <li>
                  Mentored junior developers on coding best practices and
                  conducted code reviews.
                </li>
              </ul>
            </div>
            <div className="experience-item">
              <h3>Open Source Contributor</h3>
              <p>Various Projects | Ongoing</p>
              <ul>
                <li>
                  Contributed to high-impact open-source projects, resolving
                  complex bugs and adding new features.
                </li>
                <li>
                  Developed reusable front-end components and optimized
                  JavaScript libraries for better performance.
                </li>
                <li>
                  Collaborated with a global community of developers through
                  code reviews and issue discussions.
                </li>
                <li>
                  Authored documentation and tutorials to help new contributors
                  onboard and understand projects.
                </li>
                <li>
                  Focused on improving accessibility and localization support
                  across multiple applications.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
