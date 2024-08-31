import Education from "./Components/Education/Education.jsx";
import ContactMe from "./Components/ContactMe/ContactMe.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Stack from "./Components/Stack/Stack.jsx";
import "./App.css";
import Loader from "./Components/Loader/Loader.jsx";
function App() {
  return (
    <main className="App">
      <Loader />
      <Hero />
      <Projects />
      <Stack />
      <Education />
      <ContactMe />
    </main>
  );
}

export default App;
