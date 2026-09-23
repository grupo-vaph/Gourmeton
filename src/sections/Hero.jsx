import { FaApple, FaGooglePlay, FaStar } from 'react-icons/fa';

function Hero() {
  return (
    <section id="hero" className="flex items-center min-h-screen pt-24 pb-16 bg-[#C1502E] px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[#FDF6EC] text-sm mb-4">🍽️ Mais de 500 restaurantes parceiros</p>

          <h1 className="font-bold text-4xl md:text-5xl text-[#FDF6EC] leading-tight mb-5">
            Sua próxima refeição favorita está a um toque de distância
          </h1>

          <p className="text-[#FDF6EC]/90 text-lg mb-7 max-w-md">
            O GourmetOn conecta você aos melhores restaurantes da sua cidade. Peça, acompanhe e receba — tudo em minutos.
          </p>

          <div className="flex flex-wrap gap-3 mb-7">
            <a href="#" className="flex items-center gap-2 bg-[#FDF6EC] text-[#2B2621] font-medium px-5 py-3 rounded hover:bg-[#E8987A]">
              <FaApple /> App Store
            </a>
            <a href="#" className="flex items-center gap-2 border border-[#FDF6EC] text-[#FDF6EC] font-medium px-5 py-3 rounded hover:bg-[#FDF6EC]/10">
              <FaGooglePlay /> Google Play
            </a>
          </div>

          <div className="flex items-center gap-2 text-[#FDF6EC] text-sm">
            <div className="flex">{[...Array(5)].map((_, i) => <FaStar key={i} />)}</div>
            4.8 de 5 — mais de 20 mil avaliações
          </div>
        </div>

        <div className="hidden md:block bg-[#FDF6EC] rounded p-6 w-64 justify-self-center">
          <div className="text-6xl mb-3 text-center">🍕</div>
          <p className="font-bold text-lg text-[#2B2621]">Pizza Margherita</p>
          <p className="text-sm text-[#6B7A4F] mb-3">Forneria Bella — 2.1 km</p>
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#C1502E] font-bold">R$ 42,90</span>
            <span className="text-[#6B7A4F]">25-35 min</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;