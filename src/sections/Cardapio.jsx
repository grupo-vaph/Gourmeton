import { useState } from 'react';
import { useCardapio } from '../hooks/useCardapio';

function Cardapio() {
  const [categoria, setCategoria] = useState('Seafood');
  const { pratos, carregando, erro } = useCardapio(categoria);

  // label = o que aparece no botão; valor = o nome que a API entende
  const categorias = [
    { label: 'Frutos do mar', valor: 'Seafood' },
    { label: 'Carne', valor: 'Beef' },
    { label: 'Frango', valor: 'Chicken' },
    { label: 'Massas', valor: 'Pasta' },
    { label: 'Vegetariano', valor: 'Vegetarian' },
    { label: 'Sobremesas', valor: 'Dessert' },
  ];

  return (
    <section id="cardapio" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-3xl text-[#2B2621] mb-6">Pratos em destaque agora</h2>

        <div className="flex flex-wrap gap-2 mb-8">
          {categorias.map((item) => (
            <button
              key={item.valor}
              onClick={() => setCategoria(item.valor)}
              className={`text-sm px-4 py-2 rounded border ${
                categoria === item.valor
                  ? 'bg-[#C1502E] border-[#C1502E] text-[#FDF6EC]'
                  : 'border-[#2B2621]/20 text-[#2B2621] hover:border-[#C1502E]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {carregando && <p className="text-[#2B2621]/70 mb-6">Carregando...</p>}
        {erro && <p className="text-[#C1502E] mb-6">{erro}</p>}

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