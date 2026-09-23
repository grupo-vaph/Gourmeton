import { FaInstagram, FaFacebook, FaTwitter, FaUtensils } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#2B2621] text-[#FDF6EC] font-['Inter']">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-['Fraunces'] font-bold text-2xl mb-3">
            <FaUtensils className="text-[#C1502E]" />
            GourmetOn
          </div>
          <p className="text-sm text-[#E8987A]">
            Comida boa, de restaurantes de verdade, na porta da sua casa em minutos.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Contato</h3>
          <ul className="space-y-2 text-sm text-[#FDF6EC]/80">
            <li>contato@gourmeton.com.br</li>
            <li>(11) 4002-8922</li>
            <li>São Paulo, SP</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Redes sociais</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-[#C1502E] transition-colors text-xl">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-[#C1502E] transition-colors text-xl">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#C1502E] transition-colors text-xl">
              <FaTwitter />
            </a>
          </div>
          <p className="text-xs text-[#FDF6EC]/50 mt-6">
            Termos de uso · Política de privacidade
          </p>
        </div>
      </div>

      <div className="border-t border-[#FDF6EC]/10 py-4 text-center text-xs text-[#FDF6EC]/50">
        © {new Date().getFullYear()} GourmetOn. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;