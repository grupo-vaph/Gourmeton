import { FaBolt, FaStore, FaCreditCard, FaShieldAlt } from 'react-icons/fa';

function Sobre() {
  const beneficios = [
    { icone: <FaBolt />, titulo: 'Entrega rápida', descricao: 'Pedidos chegam em até 30 minutos, com rastreamento em tempo real.' },
    { icone: <FaStore />, titulo: 'Variedade de restaurantes', descricao: 'Mais de 500 parceiros, de lanchonetes a restaurantes premiados.' },
    { icone: <FaCreditCard />, titulo: 'Pagamento fácil', descricao: 'Cartão, Pix ou saldo no app — escolha como pagar em 2 toques.' },
    { icone: <FaShieldAlt />, titulo: 'Compra protegida', descricao: 'Reembolso automático se o pedido chegar errado ou atrasado.' },
  ];

  return (
    <section id="sobre" className="bg-[#FDF6EC] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#C1502E] font-['Inter'] font-semibold uppercase text-sm tracking-wide">Por que GourmetOn</span>
          <h2 className="font-['Fraunces'] font-bold text-3xl md:text-4xl text-[#2B2621] mt-3">
            Tudo o que você precisa pra matar a fome, sem complicação
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-[#6B7A4F]/10">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#C1502E]/10 text-[#C1502E] text-xl mb-4">
                {item.icone}
              </div>
              <h3 className="font-['Fraunces'] font-bold text-lg text-[#2B2621] mb-2">{item.titulo}</h3>
              <p className="font-['Inter'] text-sm text-[#2B2621]/70">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sobre;