import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

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
    <section id="contato" className="bg-[#4A5638] py-16 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-bold text-3xl text-[#FDF6EC] mb-3">Seja o primeiro a saber das novidades</h2>
        <p className="text-[#FDF6EC]/80 mb-7">
          Deixe seu e-mail e receba cupons exclusivos e lançamentos de restaurantes parceiros.
        </p>

        {enviado ? (
          <div className="flex items-center justify-center gap-2 border border-[#FDF6EC]/30 text-[#FDF6EC] py-3 rounded">
            <FaCheckCircle />
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
              className="flex-1 px-4 py-2.5 rounded text-[#2B2621] focus:outline-none focus:ring-2 focus:ring-[#C1502E]"
            />
            <button type="submit" className="bg-[#C1502E] text-[#FDF6EC] font-medium px-5 py-2.5 rounded hover:bg-[#8F3A20]">
              Quero receber
            </button>
          </form>
        )}

        {erro && <p className="text-[#E8987A] text-sm mt-2">{erro}</p>}
      </div>
    </section>
  );
}

export default Contato;