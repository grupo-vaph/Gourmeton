import { useState } from 'react';
import { FaEnvelope, FaCheckCircle } from 'react-icons/fa';

function Contato() {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    setErro('');

    if (!email.includes('@') || !email.includes('.')) {
      setErro('Digite um e-mail válido.');
      return;
    }

    setEnviado(true);
    setEmail('');
  };

  return (
    <section id="contato" className="bg-gradient-to-br from-[#4A5638] to-[#2B2621] py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <FaEnvelope className="text-[#E8987A] text-4xl mx-auto mb-4" />
        <h2 className="font-['Fraunces'] font-bold text-3xl md:text-4xl text-[#FDF6EC] mb-3">
          Seja o primeiro a saber das novidades
        </h2>
        <p className="font-['Inter'] text-[#FDF6EC]/70 mb-8">
          Deixe seu e-mail e receba cupons exclusivos e lançamentos de restaurantes parceiros.
        </p>

        {enviado ? (
          <div className="flex items-center justify-center gap-2 bg-[#FDF6EC]/10 text-[#FDF6EC] font-['Inter'] py-4 rounded-xl">
            <FaCheckCircle className="text-[#8B9A6B]" />
            Inscrito com sucesso! Fique de olho no seu e-mail.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@exemplo.com"
              required
              className="flex-1 px-5 py-3 rounded-lg font-['Inter'] text-[#2B2621] focus:outline-none focus:ring-2 focus:ring-[#C1502E]"
            />
            <button type="submit" className="bg-[#C1502E] hover:bg-[#8F3A20] text-[#FDF6EC] font-['Inter'] font-semibold px-6 py-3 rounded-lg transition-colors">
              Quero receber
            </button>
          </form>
        )}

        {erro && <p className="text-[#E8987A] font-['Inter'] text-sm mt-3">{erro}</p>}
      </div>
    </section>
  );
}

export default Contato;