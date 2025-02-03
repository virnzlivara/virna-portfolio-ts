
import './App.css';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { JSX } from 'react';

const App = () : JSX.Element =>{
  return (
    <div className="App">
      <main className="text-gray-900    body-font bg-gradient-to-r from-blue-500 to-transparent">
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
