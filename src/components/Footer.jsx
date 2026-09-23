import { FaInstagram, FaFacebook, FaTwitter, FaUtensils } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#2B2621] text-[#FDF6EC]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 border-b border-[#FDF6EC]/10">
        <div>
          <div className="flex items-center gap-2 font-bold text-xl mb-2">
            <FaUtensils className="text-[#C1502E]" />
            GourmetOn
          </div>
          <p className="text-sm text-[#FDF6EC]/70">
            Comida boa, de restaurantes de verdade, na porta da sua casa em minutos.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contato</h3>
          <ul className="space-y-1 text-sm text-[#FDF6EC]/70">
            <li>contato@gourmeton.com.br</li>
            <li>(11) 4002-8922</li>
            <li>São Paulo, SP</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Redes sociais</h3>
          <div className="flex gap-4 text-lg">
            <a href="#" aria-label="Instagram" className="hover:text-[#C1502E]"><FaInstagram /></a>
            <a href="#" aria-label="Facebook" className="hover:text-[#C1502E]"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#C1502E]"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-[#FDF6EC]/50 py-4">
        © {new Date().getFullYear()} GourmetOn. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;