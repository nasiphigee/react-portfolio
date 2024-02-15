
import Navigation from './components/navigation/navbar.jsx';
import { Home } from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Skills from './components/skills/skills.jsx';



function App() {
  return (
    <><Navigation />
      <Home />  <About />
      <Skills />
    </>

  )
}

export default App
