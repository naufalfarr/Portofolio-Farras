import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Techstack } from "./components/Techstack/Techstack";

import "@fontsource/outfit";
import "@fontsource/roboto";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Techstack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
