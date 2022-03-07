
import './App.css';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

const App = () : JSX.Element =>{
  return (
    <div className="App">
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar/>
       <About />
       <Projects />
       <Skills />
      <Testimonials/>
      <Contact />
      </main>
    </div>
  );
}

export default App;
