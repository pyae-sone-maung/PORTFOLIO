import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;
