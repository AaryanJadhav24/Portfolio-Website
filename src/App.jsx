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
          <div className="max-w-6xl mx-auto px-4">
            <Hero />
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <About />
          </div>
        </section>

        <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <Projects />
          </div>
        </section>

        <section id="skills" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <Skills />
          </div>
        </section>

        <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
