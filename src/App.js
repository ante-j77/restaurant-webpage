import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./container/AboutUs/AboutUs";
import Header from "./container/Header/Header";
import Menu from "./container/Menu/Menu";
import Intro from "./container/Intro/Intro";
import Gallery from "./container/Gallery/Gallery";
import FindUs from "./container/FindUs/FindUs";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Intro />
      <Gallery />
      <FindUs />
    </div>
  );
}

export default App;
