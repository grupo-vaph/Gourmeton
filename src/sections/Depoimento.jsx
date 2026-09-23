import { FaStar, FaQuoteLeft } from 'react-icons/fa';

function Depoimentos() {
  const depoimentos = [
    { nome: 'Marina Costa', cidade: 'São Paulo, SP', nota: 5, texto: 'Peço pelo GourmetOn quase todo dia. O app avisa cada etapa da entrega e nunca errou um pedido.' },
    { nome: 'Rafael Souza', cidade: 'Belo Horizonte, MG', nota: 5, texto: 'A variedade de restaurantes é impressionante. Achei até lugares que eu não conhecia no meu bairro.' },
    { nome: 'Juliana Pires', cidade: 'Curitiba, PR', nota: 4, texto: 'Pagamento no Pix é super rápido e o suporte resolveu um problema meu em minutos.' },
  ];

  return (
    <section id="depoimentos" className="bg-[#FDF6EC] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#C1502E] font-['Inter'] font-semibold uppercase text-sm tracking-wide">Depoimentos</span>
          <h2 className="font-['Fraunces'] font-bold text-3xl md:text-4xl text-[#2B2621] mt-3">Quem já pediu, recomenda</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((item) => (
            <div key={item.nome} className="bg-white rounded-2xl p-6 shadow-sm border border-[#6B7A4F]/10 flex flex-col">
              <FaQuoteLeft className="text-[#C1502E]/30 text-2xl mb-4" />
              <p className="font-['Inter'] text-[#2B2621]/80 text-sm mb-6 flex-1">"{item.texto}"</p>

              <div className="flex gap-1 mb-4 text-[#E8987A]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < item.nota ? 'opacity-100' : 'opacity-20'} />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6B7A4F] text-[#FDF6EC] font-['Inter'] font-semibold flex items-center justify-center">
                  {item.nome.charAt(0)}
                </div>
                <div>
                  <p className="font-['Inter'] font-semibold text-sm text-[#2B2621]">{item.nome}</p>
                  <p className="font-['Inter'] text-xs text-[#2B2621]/50">{item.cidade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Depoimentos; 