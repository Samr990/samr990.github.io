import "./portfolio.css";

const images = {
  taskmaster:
    "https://images.squarespace-cdn.com/content/v1/5f95a2988b73fb2d14874ce3/1628545212710-X8BUBW4U2WTL36719HLM/Prod+Apps+Collage.png",
  shopease:
    "https://media.licdn.com/dms/image/v2/C5612AQGRF21aLs2uOw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1620724020150?e=2147483647&v=beta&t=l9apWCKikwHXy3fOSZi6vdLMuRJ4J0lu9MqeEEhL_04",
  socialconnect:
    "https://imgproxy.epicpxls.com/Wgb1qH1PIdCMp0DQ7B0TBuPJOmYMR3FG-Vqvm6occjQ/rs:fill:409:307:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by83YjAwOWI4/NDQ3NDc1ZjYwMTBl/YzExMzIxNjIyYjQ1/OQ.jpg",
  samAnimate:
    "https://img.freepik.com/premium-vector/guy-developer-character-thinking-work-laptop-create-debugging-code-with-flat-cartoon-style_197170-380.jpg",
};
export function Portfolio() {
  return (
    <div>
      {/* Skills Section */}
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
              <div className="skill-logo springboot"></div>
              <div className="skill-name">Spring Boot</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>My Projects</h2>

          <div className="project-cards">
            {/* Project 1 */}
            <div className="project-card">
              <p className="prj-title">TaskMaster</p>
              <img src={images.taskmaster} alt="TaskMaster Project" />
              <div className="description">
                <p>
                  TaskMaster is a web application built with React and Spring
                  Boot. It helps users manage tasks, set deadlines, and track
                  their progress.
                </p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project-card">
              <p className="prj-title">ShopEase</p>
              <img src={images.shopease} alt="ShopEase Project" />
              <div className="description">
                <p>
                  ShopEase is a full-stack e-commerce platform where users can
                  browse products, add them to their cart, and complete their
                  orders.
                </p>
              </div>
            </div>
            {/* Project 3 */}
            <div className="project-card">
              <p className="prj-title">SocialConnect</p>
              <img src={images.socialconnect} alt="SocialConnect Project" />
              <div className="description">
                <p>
                  SocialConnect is a social media platform where users can
                  create profiles, follow others, and post updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
