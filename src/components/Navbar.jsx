import { useState, useEffect } from 'react';
import { FaUtensils, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#4A5638]/95 shadow-lg backdrop-blur-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 text-[#FDF6EC] font-['Fraunces'] font-bold text-2xl">
          <FaUtensils className="text-[#C1502E]" />
          GourmetOn
        </a>

        <ul className="hidden md:flex items-center gap-8 font-['Inter'] font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-[#FDF6EC] hover:text-[#E8987A] transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a>
        href="#contato"
          className="hidden md:inline-block bg-[#C1502E] hover:bg-[#8F3A20] text-[#FDF6EC] font-['Inter'] font-semibold px-5 py-2 rounded-lg transition-colors"
        
          Baixar app
        </a>

        <button
          className="md:hidden text-[#FDF6EC] text-2xl"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          {menuAberto ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuAberto && (
        <ul className="md:hidden flex flex-col items-center gap-4 bg-[#4A5638] py-6 font-['Inter'] font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuAberto(false)} className="text-[#FDF6EC] hover:text-[#E8987A] transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;