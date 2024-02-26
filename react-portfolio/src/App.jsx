
import Navigation from './components/navigation/navbar.jsx';
import { Home } from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Skills from './components/skills/skills.jsx';
import Projects from './components/Projects/project.jsx';
import Contact from './components/contact/contact.jsx';
import '@fortawesome/fontawesome-free/css/all.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom';  // Corrected import

import './index.css'
import 'react-waypoint';


function App() {
  return (
    <Router>
      <><Navigation />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />  
      </>
    </Router>
  )
}

export default App
