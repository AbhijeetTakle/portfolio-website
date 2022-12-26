import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import SocialMediaStrip from "./components/socialmedia/SocialMediaStrip";

function App() {
  return (
    <div className="App">
      <SocialMediaStrip />
      <Navbar />
      <Header />
      <Projects />
    </div>
  );
}

export default App;
