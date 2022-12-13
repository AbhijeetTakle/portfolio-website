import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects/Project";
import SocialMediaStrip from "./components/socialmedia/SocialMediaStrip";

function App() {
  return (
    <div className="App">
      <SocialMediaStrip />
      <Navbar />
      <Header />
      <Project />
      <Project />
    </div>
  );
}

export default App;
