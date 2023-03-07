import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  const location = useLocation()
  const classNames = ["page"]
  if (location.pathname === "/") {
    classNames.push("home")
  } else {
    classNames.push(location.pathname.replace(/[^a-z-]+/, ""))
  }

  return (
    <div className={classNames.join(" ")}>

      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;


