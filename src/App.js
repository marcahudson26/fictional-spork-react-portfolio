import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Skills from "./pages/Skills";

function App() {
  const location = useLocation()
  let className = "page"
  if (location.pathname === "/") {
    className += " home"
  }


  return (
    <div className={className}>

      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;


