import { FaStar } from 'react-icons/fa';

function Depoimentos() {
  const depoimentos = [
    { nome: 'Marina Costa', cidade: 'São Paulo, SP', nota: 5, texto: 'Peço pelo GourmetOn quase todo dia. O app avisa cada etapa da entrega e nunca errou um pedido.' },
    { nome: 'Rafael Souza', cidade: 'Belo Horizonte, MG', nota: 5, texto: 'A variedade de restaurantes é impressionante. Achei até lugares que eu não conhecia no meu bairro.' },
    { nome: 'Juliana Pires', cidade: 'Curitiba, PR', nota: 4, texto: 'Pagamento no Pix é super rápido e o suporte resolveu um problema meu em minutos.' },
  ];

  return (
    <section id="depoimentos" className="bg-[#FDF6EC] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-3xl text-[#2B2621] mb-10">Quem já pediu, recomenda</h2>

        <div className="grid md:grid-cols-3 gap-5">
          {depoimentos.map((item) => (
            <div key={item.nome} className="border border-[#2B2621]/10 rounded p-5 bg-white">
              <div className="flex gap-0.5 text-[#C1502E] mb-3 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < item.nota ? 'opacity-100' : 'opacity-20'} />
                ))}
              </div>

              <p className="text-sm text-[#2B2621]/80 mb-4">{item.texto}</p>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-[#6B7A4F] text-[#FDF6EC] text-sm font-semibold flex items-center justify-center">
                  {item.nome.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-sm text-[#2B2621]">{item.nome}</p>
                  <p className="text-xs text-[#2B2621]/50">{item.cidade}</p>
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