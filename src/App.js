import './App.css';
import NavBar from './components/navbar';
import Progress from './components/progress';
import AboutPage from './pages/about';
import Contact from './pages/contact';
import Hero from './pages/hero';
import Projects from './pages/projects';

function App() {

  return (
    <>
      <NavBar />
      <Progress />
      <main className="content">
        <Hero />
        <AboutPage />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App;
