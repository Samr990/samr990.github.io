import { Navigation } from "./components/navigation/navigation";
import { About } from "./components/about/about";
import { Footer } from "./components/footer/footer";
import { Contact } from "./components/contact/contact";
import { Projects } from "./components/projects/projects";

function Home() {
  return (
    <div>
      <Navigation />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
