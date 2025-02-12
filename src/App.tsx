import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Admission from './pages/Admission';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admission" element={<Admission />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;