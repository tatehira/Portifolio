import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import GoldManagement from './pages/GoldManagement';

const MainContent = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Projects />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router basename="/Portifolio">
      <div className="App">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/gold-management" element={<GoldManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
