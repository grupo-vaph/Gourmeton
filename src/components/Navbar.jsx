import { useState, useEffect } from 'react';
import { FaUtensils, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-200 ${
        scrolled ? 'bg-[#4A5638] border-[#4A5638]' : 'bg-[#4A5638]/0 border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 text-[#FDF6EC] font-bold text-xl">
          <FaUtensils className="text-[#C1502E]" />
          GourmetOn
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-[#FDF6EC] hover:text-[#E8987A]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contato" className="hidden md:inline-block bg-[#C1502E] text-[#FDF6EC] text-sm font-medium px-4 py-2 rounded hover:bg-[#8F3A20]">
          Baixar app
        </a>

        <button className="md:hidden text-[#FDF6EC] text-xl" onClick={() => setMenuAberto(!menuAberto)} aria-label="Abrir menu">
          {menuAberto ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuAberto && (
        <ul className="md:hidden flex flex-col items-center gap-4 bg-[#4A5638] py-5 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuAberto(false)} className="text-[#FDF6EC]">
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