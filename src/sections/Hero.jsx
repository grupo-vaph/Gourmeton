import { FaApple, FaGooglePlay, FaStar } from 'react-icons/fa';

function Hero() {
  return (
    <section id="hero" className="relative flex items-center min-h-screen pt-24 pb-16 bg-gradient-to-br from-[#8F3A20] via-[#C1502E] to-[#4A5638] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(253,246,236,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(253,246,236,0.08),transparent_40%)]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-[#FDF6EC]/15 text-[#FDF6EC] text-sm font-['Inter'] font-medium px-4 py-1 rounded-full mb-5">
            🍽️ Mais de 500 restaurantes parceiros
          </span>

          <h1 className="font-['Fraunces'] font-bold text-4xl md:text-6xl text-[#FDF6EC] leading-tight mb-6">
            Sua próxima refeição favorita está a um toque de distância
          </h1>

          <p className="font-['Inter'] text-[#FDF6EC]/85 text-lg mb-8 max-w-md">
            O GourmetOn conecta você aos melhores restaurantes da sua cidade. Peça, acompanhe e receba — tudo em minutos.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#" className="flex items-center gap-2 bg-[#FDF6EC] text-[#2B2621] font-['Inter'] font-semibold px-6 py-3 rounded-lg hover:bg-[#E8987A] hover:text-[#FDF6EC] transition-colors">
              <FaApple /> App Store
            </a>
            <a href="#" className="flex items-center gap-2 bg-transparent border-2 border-[#FDF6EC] text-[#FDF6EC] font-['Inter'] font-semibold px-6 py-3 rounded-lg hover:bg-[#FDF6EC]/10 transition-colors">
              <FaGooglePlay /> Google Play
            </a>
          </div>

          <div className="flex items-center gap-2 text-[#FDF6EC]/90 font-['Inter'] text-sm">
            <div className="flex text-[#E8987A]">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            4.8 de 5 — mais de 20 mil avaliações
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="bg-[#FDF6EC] rounded-3xl shadow-2xl p-8 w-72 text-center">
            <div className="text-7xl mb-4">🍕</div>
            <p className="font-['Fraunces'] font-bold text-xl text-[#2B2621] mb-1">Pizza Margherita</p>
            <p className="font-['Inter'] text-sm text-[#6B7A4F] mb-4">Forneria Bella — 2.1 km</p>
            <div className="flex justify-between items-center font-['Inter']">
              <span className="text-[#C1502E] font-bold text-lg">R$ 42,90</span>
              <span className="bg-[#6B7A4F] text-[#FDF6EC] text-xs px-3 py-1 rounded-full">25-35 min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;