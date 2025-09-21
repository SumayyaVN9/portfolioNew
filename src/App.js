// import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import { Education } from './components/Education';
import { About } from './components/About';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact />
      
    </div>
  );
}

export default App;
