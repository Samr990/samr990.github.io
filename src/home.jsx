import { Portfolio } from "./components/portfolio/portfolio";
import { Navigation } from "./components/navigation/navigation";
import { Intro } from "./components/intro/intro";
import { Footer } from "./components/footer/footer";
import { Contact } from "./components/contact/contact";

function Home() {
  return (
    <div>
      <Navigation />
      <Intro />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <Trail /> */}
    </div>
  );
}

export default Home;
