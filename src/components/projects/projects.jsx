import "./projects.css";

const images = {
  taskmaster:
    "https://images.squarespace-cdn.com/content/v1/5f95a2988b73fb2d14874ce3/1628545212710-X8BUBW4U2WTL36719HLM/Prod+Apps+Collage.png",
  shopease:
    "https://media.licdn.com/dms/image/v2/C5612AQGRF21aLs2uOw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1620724020150?e=2147483647&v=beta&t=l9apWCKikwHXy3fOSZi6vdLMuRJ4J0lu9MqeEEhL_04",
  socialconnect:
    "https://imgproxy.epicpxls.com/Wgb1qH1PIdCMp0DQ7B0TBuPJOmYMR3FG-Vqvm6occjQ/rs:fill:409:307:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by83YjAwOWI4/NDQ3NDc1ZjYwMTBl/YzExMzIxNjIyYjQ1/OQ.jpg",
  samAnimate:
    "https://img.freepik.com/premium-vector/guy-developer-character-thinking-work-laptop-create-debugging-code-with-flat-cartoon-style_197170-380.jpg",
  foodiefinder:
    "https://www.plantoeat.com/wp-content/uploads/2023/03/mobile-and-laptop-screenshot-devices-dark-1.png",
  fittrack:
    "https://i.pinimg.com/originals/7b/5d/ff/7b5dffb7138b3e9a904dda4ac8ac8497.png",
  quizify:
    "https://cdn.dribbble.com/users/1690831/screenshots/17726071/media/c6bb2f10e14adf6346d08c5b4c82764a.png",
};

export function Projects() {
  return (
    <div>
      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="project-cards">
            {/* Project 1 */}
            <div className="project-card">
              <p className="project-title">TaskMaster</p>
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
              <p className="project-title">ShopEase</p>
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
              <p className="project-title">SocialConnect</p>
              <img src={images.socialconnect} alt="SocialConnect Project" />
              <div className="description">
                <p>
                  SocialConnect is a social media platform where users can
                  create profiles, follow others, and post updates.
                </p>
              </div>
            </div>
            {/* Project 4 */}
            <div className="project-card">
              <p className="project-title">FoodieFinder</p>
              <img src={images.foodiefinder} alt="FoodieFinder Project" />
              <div className="description">
                <p>
                  FoodieFinder is a full-stack app built with React and Node.js,
                  allowing users to search for recipes, get restaurant
                  recommendations based on their location, and save their
                  favorite recipes.
                </p>
              </div>
            </div>
            {/* Project 5 */}
            <div className="project-card">
              <p className="project-title">FitTrack</p>
              <img src={images.fittrack} alt="FitTrack Project" />
              <div className="description">
                <p>
                  FitTrack is a fitness tracker built with Next.js and Django.
                  Users can log their workouts, set goals, and visualize their
                  progress through interactive charts.
                </p>
              </div>
            </div>
            {/* Project 6 */}
            <div className="project-card">
              <p className="project-title">Quizify</p>
              <img src={images.quizify} alt="Quizify Project" />
              <div className="description">
                <p>
                  Quizify is a customizable quiz platform built with Angular and
                  Express.js. It allows users to create, play, and share
                  quizzes, with a leaderboard to track scores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
