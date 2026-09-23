import { FaBolt, FaStore, FaCreditCard, FaShieldAlt } from 'react-icons/fa';

function Sobre() {
  const beneficios = [
    { icone: <FaBolt />, titulo: 'Entrega rápida', descricao: 'Pedidos chegam em até 30 minutos, com rastreamento em tempo real.' },
    { icone: <FaStore />, titulo: 'Variedade de restaurantes', descricao: 'Mais de 500 parceiros, de lanchonetes a restaurantes premiados.' },
    { icone: <FaCreditCard />, titulo: 'Pagamento fácil', descricao: 'Cartão, Pix ou saldo no app — escolha como pagar em 2 toques.' },
    { icone: <FaShieldAlt />, titulo: 'Compra protegida', descricao: 'Reembolso automático se o pedido chegar errado ou atrasado.' },
  ];

  return (
    <section id="sobre" className="bg-[#FDF6EC] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-3xl text-[#2B2621] mb-10">Por que escolher o GourmetOn</h2>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {beneficios.map((item) => (
            <div key={item.titulo} className="flex gap-4 border-l-2 border-[#C1502E] pl-4">
              <div className="text-[#C1502E] text-xl mt-1">{item.icone}</div>
              <div>
                <h3 className="font-semibold text-[#2B2621] mb-1">{item.titulo}</h3>
                <p className="text-sm text-[#2B2621]/70">{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sobre;