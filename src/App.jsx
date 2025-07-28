import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen  text-black dark:bg-gray-900 dark:text-white transition-all duration-300">
      <Nav />
      <Hero/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
      {/* other components here */}
    </div>
  );
}

export default App;
