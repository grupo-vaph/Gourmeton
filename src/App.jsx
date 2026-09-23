import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Sobre from './sections/Sobre';

function App() {
  return (
    <div className="font-['Inter']">
      <Navbar />
      <Hero />
      <Sobre />
      <Footer />
    </div>
  );
}

export default App;