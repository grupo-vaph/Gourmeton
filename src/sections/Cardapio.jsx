import { useCardapio } from '../hooks/useCardapio';

function Cardapio() {
  const { pratos, carregando, erro } = useCardapio();

  return (
    <section id="cardapio" className="bg-[#4A5638]/5 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#6B7A4F] font-['Inter'] font-semibold uppercase text-sm tracking-wide">Cardápio</span>
          <h2 className="font-['Fraunces'] font-bold text-3xl md:text-4xl text-[#2B2621] mt-3">Pratos em destaque agora</h2>
        </div>

        {carregando && (
          <p className="text-center font-['Inter'] text-[#2B2621]/60">Carregando pratos...</p>
        )}

        {erro && (
          <p className="text-center font-['Inter'] text-[#C1502E]">{erro}</p>
        )}

        {!carregando && !erro && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pratos.map((prato) => (
              <div key={prato.idMeal} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={prato.strMealThumb} alt={prato.strMeal} className="w-full h-48 object-cover" />
                <div className="p-5 flex items-center justify-between">
                  <h3 className="font-['Fraunces'] font-bold text-lg text-[#2B2621]">{prato.strMeal}</h3>
                  <button className="bg-[#C1502E] hover:bg-[#8F3A20] text-[#FDF6EC] text-sm font-['Inter'] font-semibold px-4 py-2 rounded-lg transition-colors">
                    Pedir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Cardapio;