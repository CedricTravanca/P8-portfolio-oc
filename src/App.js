import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/P8-portfolio-oc/" element={<Home />} />
        <Route path="/P8-portfolio-oc/about" element={<About />} />
        <Route path="/P8-portfolio-oc/contact" element={<Contact />} />
        <Route path="/P8-portfolio-oc/projects" element={<Projects />} />
        <Route path="/P8-portfolio-oc/technologies" element={<Technologies />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
