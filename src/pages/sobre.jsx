import { FaBuilding, FaAward, FaUsers } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import Navbar from '../components/navbar';
import Footer from '../components/footer'; // Importado para manter a consistência de navegação

export default function Sobre() {
  return (
    <div className="bg-[#0a0a0a] text-gray-100 min-h-screen font-sans overflow-x-hidden selection:bg-[#a17a38]/30">
      <Navbar />

      {/* 1. HERO INTRODUÇÃO */}
      <section className="relative pt-32 pb-20 px-6 border-b border-neutral-950 overflow-hidden">
        {/* Fundo dinâmico com círculos de luz */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#a17a38]/5 blur-[120px] pointer-events-none rounded-full" />
        
        {/* Grid de engenharia sutil em background */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-4">
          <span className="text-[#a17a38] dark:text-[#d4af37] text-xs font-bold uppercase tracking-[0.3em] bg-[#a17a38]/10 px-4 py-1.5 rounded-full border border-[#a17a38]/20 inline-block">
            CONHEÇA A CONSTRUVALLE
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none text-white max-w-3xl mx-auto">
            Nossa História, Engenharia <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a17a38] to-[#d4af37]">e Compromisso.</span>
          </h1>
          <div className="w-12 h-[3px] bg-[#a17a38] mx-auto rounded-full mt-6" />
        </div>
      </section>

      {/* 2. CONTEÚDO PRINCIPAL (HISTÓRIA) */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-24">
            
            {/* Coluna Texto (Esquerda) */}
            <div className="md:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-2 text-[#d4af37] font-mono text-xs tracking-widest uppercase font-bold">
                <span className="w-4 h-[1px] bg-[#d4af37]" /> Solidez e Inovação
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Construindo o Futuro com Rigor Técnico.
              </h2>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-normal">
                Fundada com o objetivo de entregar excelência técnica inquestionável no mercado de engenharia, nossa empresa consolidou sua marca através de projetos de infraestrutura, pavimentação e edificações de alta complexidade.
              </p>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-normal">
                Com sede estratégica em Brasília e atuação expandida, contamos com um corpo técnico altamente qualificado. Nosso foco é moldado sob três pilares intransigentes: segurança operacional, cumprimento rigoroso de prazos e sustentabilidade socioambiental.
              </p>
            </div>

            {/* Coluna Imagem Ilustrativa Técnica (Direita) */}
            <div className="md:col-span-5 relative group w-full">
              {/* Efeito de borda luminosa decorativa por trás do bloco */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#a17a38]/20 to-transparent rounded-2xl opacity-50 blur-lg group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative w-full h-80 bg-neutral-900/60 border border-neutral-800/80 rounded-2xl flex flex-col items-center justify-center p-6 text-center overflow-hidden group backdrop-blur-md">
                {/* Linhas cruzadas de desenho técnico */}
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-neutral-800/40" />
                <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-neutral-800/40" />
                
                {/* Número Gigante Estilizado */}
                <div className="relative z-10 space-y-1">
                  <span className="block text-6xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#d4af37]/40 to-transparent">
                    15+
                  </span>
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-neutral-300">
                    Anos de Atuação
                  </span>
                  <span className="block text-[11px] text-neutral-500 max-w-[180px] mx-auto mt-2 leading-relaxed">
                    Transformando plantas técnicas em realidades estruturais.
                  </span>
                </div>

                {/* Tag Decorativa inferior */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[9px] font-bold text-neutral-600 tracking-widest uppercase border-t border-neutral-800/50 pt-3">
                  <span>BRÉD-ID // 061</span>
                  <span>CONSTRUVALLE HQ</span>
                </div>
              </div>
            </div>

          </div>

          {/* 3. SEÇÃO PILARES (MISSÃO, VISÃO, VALORES) */}
          <div className="space-y-8">
            <div className="text-left">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#a17a38]">DIRETRIZES CORPORATIVAS</h3>
              <p className="text-lg text-neutral-400 mt-1">O que orienta nossa cultura de engenharia diariamente.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card Missão */}
              <div className="group relative bg-neutral-900/30 border border-neutral-900 rounded-2xl p-8 text-left transition-all duration-300 hover:bg-neutral-900/60 hover:border-neutral-800 hover:shadow-[0_15px_30px_rgba(0,0,0,0.55)] flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-neutral-900 rounded-xl inline-block text-[#a17a38] transition-colors duration-300 group-hover:bg-[#a17a38] group-hover:text-white mb-6">
                    <FaBuilding size={22} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#d4af37] transition-colors">
                    Missão
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-normal">
                    Executar obras com máxima precisão técnica, inteligência em engenharia e responsabilidade, gerando valor real e sustentável para nossos clientes, colaboradores e parceiros.
                  </p>
                </div>
                <div className="w-6 h-[2px] bg-neutral-800 group-hover:bg-[#a17a38] group-hover:w-12 transition-all duration-300 mt-6" />
              </div>

              {/* Card Visão */}
              <div className="group relative bg-neutral-900/30 border border-neutral-900 rounded-2xl p-8 text-left transition-all duration-300 hover:bg-neutral-900/60 hover:border-neutral-800 hover:shadow-[0_15px_30px_rgba(0,0,0,0.55)] flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-neutral-900 rounded-xl inline-block text-[#a17a38] transition-colors duration-300 group-hover:bg-[#a17a38] group-hover:text-white mb-6">
                    <FaAward size={22} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#d4af37] transition-colors">
                    Visão
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-normal">
                    Ser reconhecida nacionalmente como referência em engenharia de infraestrutura pesada e edificações, consagrando nossa marca pela inovação construtiva, ética e solidez financeira.
                  </p>
                </div>
                <div className="w-6 h-[2px] bg-neutral-800 group-hover:bg-[#a17a38] group-hover:w-12 transition-all duration-300 mt-6" />
              </div>

              {/* Card Valores */}
              <div className="group relative bg-neutral-900/30 border border-neutral-900 rounded-2xl p-8 text-left transition-all duration-300 hover:bg-neutral-900/60 hover:border-neutral-800 hover:shadow-[0_15px_30px_rgba(0,0,0,0.55)] flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-neutral-900 rounded-xl inline-block text-[#a17a38] transition-colors duration-300 group-hover:bg-[#a17a38] group-hover:text-white mb-6">
                    <FaUsers size={22} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#d4af37] transition-colors">
                    Valores
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-normal">
                    Atuar com ética inegociável, transparência absoluta em governança, segurança intransigente com a vida humana, excelência de desempenho e respeito ao meio ambiente.
                  </p>
                </div>
                <div className="w-6 h-[2px] bg-neutral-800 group-hover:bg-[#a17a38] group-hover:w-12 transition-all duration-300 mt-6" />
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}