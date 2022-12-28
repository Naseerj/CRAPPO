import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Index/LandingPage";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage />
    </div>
  );
}

export default App;
