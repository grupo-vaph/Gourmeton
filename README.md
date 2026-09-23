# GourmetOn

Landing page para um app fictício de delivery de comida.

**Deploy:** https://gourmeton-wine.vercel.app/

**Repositório:** https://github.com/grupo-vaph/Gourmeton.git

## Sobre o projeto

Página de apresentação do GourmetOn, construída em React com Tailwind CSS,
que busca dados reais de uma API de comidas via `fetch` e exibe o resultado
na seção de Cardápio.

## Tecnologias

- React (Vite)
- Tailwind CSS v4
- React Icons
- Fetch API
- TheMealDB (API gratuita de comidas, sem necessidade de chave)

## Estrutura do projeto

src/
├── index.css → apenas o import do Tailwind
├── main.jsx → ponto de entrada do React
├── App.jsx → monta as seções na ordem em que aparecem
├── components/
│ ├── Navbar.jsx → menu fixo, muda de cor ao rolar a página
│ └── Footer.jsx
├── sections/
│ ├── Hero.jsx
│ ├── Sobre.jsx
│ ├── Cardapio.jsx → consome a API e filtra por categoria
│ ├── Depoimentos.jsx
│ └── Contato.jsx → formulário de captura de e-mail
└── hooks/
└── useCardapio.js → lógica do fetch, separada do componente visual


## Como rodar localmente

```bash
git clone [link do repositório]
cd gourmeton
npm install
npm run dev
```

## API utilizada

GET https://www.themealdb.com/api/json/v1/1/filter.php?c={categoria}


O `{categoria}` muda conforme o botão escolhido pelo usuário: `Seafood`,
`Beef`, `Chicken`, `Pasta`, `Vegetarian` ou `Dessert` (começa em `Seafood`).

Retorna uma lista de pratos; exibimos os 6 primeiros na seção de Cardápio,
usando `idMeal`, `strMeal` e `strMealThumb`.

## Estilo visual

Paleta "Terracota & Oliva", aplicada direto nas classes do Tailwind
(`bg-[#C1502E]`, sem arquivo de tema):

| Cor | Hex |
|---|---|
| Terracota | `#C1502E` |
| Terracota escuro (hover) | `#8F3A20` |
| Terracota claro | `#E8987A` |
| Oliva | `#6B7A4F` |
| Oliva escuro | `#4A5638` |
| Creme (fundo) | `#FDF6EC` |
| Carvão (texto) | `#2B2621` |

O visual é intencionalmente simples: cores sólidas (sem gradiente), bordas
finas em vez de sombra, cantos pouco arredondados.

## O que foi feito

- Menu fixo, muda de transparente para cor sólida depois de 20px de scroll
  (`useState` + `useEffect` com listener de `scroll`)
- Menu mobile com botão hambúrguer
- Scroll suave entre seções (`scroll-smooth` no HTML, sem JS)
- Seção Hero com título, CTA de download e avaliação em estrelas
- Seção Sobre com 4 benefícios do app, em lista de 2 colunas
- Seção Cardápio buscando dados reais da TheMealDB com `fetch`, com estados
  de carregando / erro / sucesso
- Filtro por categoria no Cardápio (Frutos do mar, Carne, Frango, Massas,
  Vegetariano e Sobremesas): o estado `categoria` é passado para o hook
  `useCardapio`, e o `useEffect` busca de novo sempre que ela muda
- Seção Depoimentos com avaliações fictícias e nota em estrelas
- Formulário de Contato controlado (`useState` por campo), com validação
  simples de e-mail e mensagem de sucesso
- Rodapé com contato e redes sociais
- Responsivo (breakpoints do Tailwind: `sm`, `md`, `lg`)

## O que não foi feito / limitações conhecidas

- O formulário de Contato **não envia o e-mail pra lugar nenhum de verdade**
  — só simula o sucesso no front-end. Não existe backend nesse projeto.
- Os depoimentos são fictícios, escritos à mão (não vêm de nenhuma API ou
  banco de dados).
- Sem testes automatizados.
- Sem dark mode.

## Decisões técnicas

- Trocamos a API sugerida no enunciado (Spoonacular) pela TheMealDB, que não
  exige cadastro nem chave de API — reduz o risco de a demonstração falhar
  por limite de requisições.
- A lógica de busca de dados fica isolada em um hook customizado
  (`useCardapio`), separando "buscar dados" de "exibir dados" — o componente
  `Cardapio.jsx` não sabe como os dados chegam, só os usa.
- Cores aplicadas direto via classes arbitrárias do Tailwind
  (`bg-[#C1502E]`) em vez de um arquivo de tema central.

## Uso de Inteligência Artificial

Usamos IA (Claude) como apoio em algumas partes pontuais do projeto:

- **Estilização com Tailwind CSS**: apoio na escolha das classes utilitárias
  e na definição da paleta de cores do projeto.
- **Scroll suave entre seções**: apoio na configuração do efeito de rolagem
  suave ao clicar nos links do menu (classe `scroll-smooth` no `index.html`).
- **Lógica de alguns componentes**: apoio para entender e implementar a
  lógica de estado de componentes como o menu com efeito de scroll
  (`Navbar.jsx`), o hook de busca de dados (`useCardapio.js`) e o formulário
  de contato (`Contato.jsx`). 

## Integrantes do grupo

- Victor Ulisses de Morais Silva RM:572634 
- Enzo Gabriel Pereira RM:570659 
- Pedro Henrique Moura Aguiar RM:570715 
- Henrique Giusti de Souza RM:570766 
- Pietro Alexandre Guerato Objetivo RM:571232