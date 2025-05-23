import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white scroll-smooth">
      <Navbar />
      <main>
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        <section id="about" className="py-16 px-4">
          <About />
        </section>
        <section id="projects" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
          <Projects />
        </section>
        <section id="skills" className="py-16 px-4">
          <Skills />
        </section>
        <section id="contact" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
