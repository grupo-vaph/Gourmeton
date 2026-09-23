import { useCardapio } from '../hooks/useCardapio';

function Cardapio() {
  const { pratos } = useCardapio();

  return (
    <section id="cardapio" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-3xl text-[#2B2621] mb-10">Pratos em destaque agora</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pratos.map((prato) => (
            <div key={prato.idMeal} className="border border-[#2B2621]/10 rounded overflow-hidden">
              <img src={prato.strMealThumb} alt={prato.strMeal} className="w-full h-44 object-cover" />
              <div className="p-4 flex items-center justify-between">
                <h3 className="font-semibold text-[#2B2621]">{prato.strMeal}</h3>
                <button className="bg-[#C1502E] text-[#FDF6EC] text-sm px-3 py-1.5 rounded hover:bg-[#8F3A20]">
                  Pedir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cardapio;