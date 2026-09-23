import { useState, useEffect } from 'react';

// TheMealDB: API gratuita, sem necessidade de chave.
// filter.php?c=Seafood retorna uma lista de pratos da categoria "frutos do mar"
const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

export function useCardapio() {
  const [pratos, setPratos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarPratos = async () => {
      try {
        setCarregando(true);
        setErro(null);

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error('Não foi possível carregar o cardápio agora.');
        }

        const data = await response.json();
        // A API retorna { meals: [ { idMeal, strMeal, strMealThumb }, ... ] }
        setPratos(data.meals.slice(0, 6)); // pega só os 6 primeiros
      } catch (err) {
        setErro(err.message);
      } finally {
        setCarregando(false); // roda sempre, deu certo ou não
      }
    };

    buscarPratos();
  }, []); // array vazio = roda só uma vez, quando o componente monta

  return { pratos, carregando, erro };
}