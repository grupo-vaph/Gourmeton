import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Sobre from './sections/Sobre';
import Cardapio from './sections/Cardapio';
import Depoimento from './sections/Depoimento';

function App() {
  return (
    <div className="font-['Inter']">
      <Navbar />
      <Hero />
      <Sobre />
      <Cardapio />
      <Depoimento />
      <Footer />
    </div>
  );
}

export default App;