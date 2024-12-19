import "./portfolio.css";

export function Portfolio() {
  // return (
  //   <div>
  //     <h1>Samriddha Malla</h1>
  //     <p>
  //       Hi, this is Samriddha Malla. I am currently learning frontend
  //       development using React.
  //     </p>
  //     <h3>My Skills</h3>
  //     <div>
  //       <li>Java.</li>
  //       <li>html</li>
  //       <li>C++</li>
  //       <img src="https://live.staticflickr.com/65535/52746154672_1e6ae2e478_w.jpg"></img>
  //     </div>
  //     <a href="https://github.com/Samr990">Samriddha's github</a>
  //   </div>
  // );
  return (
    <div>
      <section id="home" class="intro">
        <div class="container">
          <h1>Samriddha Malla</h1>
          <p>Welcome to my personal portfolio</p>
          <a href="#projects" class="btn">
            View My Work
          </a>
        </div>
      </section>

      <section id="skills" class="skills">
        <div class="container">
          <h2>My Skills</h2>
          <div class="skills-list">
            <div class="skill">JavaScript</div>
            <div class="skill">React</div>
            <div class="skill">Spring Boot</div>
            <div class="skill">CSS</div>
          </div>
        </div>
      </section>

      <section id="projects" class="projects">
        <div class="container">
          <h2>My Projects</h2>
          <div class="project-cards">
            {/* <!-- Example project cards --> */}
            <div class="project-card">
              <h3>Project 1</h3>
              <p>Short description of your project.</p>
            </div>
            <div class="project-card">
              <h3>Project 2</h3>
              <p>Short description of your project.</p>
            </div>
            {/* <!-- Add more project cards as needed --> */}
          </div>
        </div>
      </section>

      <section id="contact" class="contact">
        <div class="container">
          <h2>Contact Me</h2>
          <form action="#">
            <input type="text" placeholder="Your Name" required></input>
            <input type="email" placeholder="Your Email" required></input>
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" class="btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Samriddha Malla. All rights reserved.</p>
      </footer>
    </div>
  );
}
