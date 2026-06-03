import { FaBuilding, FaHome } from 'react-icons/fa';
import { FaRoad, FaBridge, FaHelmetSafety } from 'react-icons/fa6';
import { GiBulldozer } from 'react-icons/gi';
import { FiArrowUpRight } from 'react-icons/fi';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Servicos() {
  const listaServicos = [
    { 
      id: "01",
      title: "Construção de Rodovias", 
      desc: "Terraplenagem, pavimentação asfáltica de alta resistência e sinalização completa para rodovias públicas e privadas.", 
      icon: <GiBulldozer size={26} /> 
    },
    { 
      id: "02",
      title: "Extensões de Viadutos", 
      desc: "Engenharia de grandes estruturas, alargamento, reforço estrutural e soluções de mobilidade urbana complexas.", 
      icon: <FaBridge size={26} /> 
    },
    { 
      id: "03",
      title: "Pavimentação de Asfaltos", 
      desc: "Aplicação de CBUQ com usinagem própria, recapeamento de vias urbanas e pavimentação técnica para tráfego pesado.", 
      icon: <FaRoad size={26} /> 
    },
    { 
      id: "04",
      title: "Construção de Prédios", 
      desc: "Edificações comerciais, industriais e corporativas executadas sob os mais rígidos padrões de engenharia civil moderna.", 
      icon: <FaBuilding size={26} /> 
    },
    { 
      id: "05",
      title: "Casas de Alto Padrão", 
      desc: "Gerenciamento completo e execução de residências exclusivas com finíssimo acabamento e projetos estruturais arrojados.", 
      icon: <FaHome size={26} /> 
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-gray-100 min-h-screen font-sans overflow-x-hidden selection:bg-[#a17a38]/30">
      <Navbar />

      {/* 1. HERO HEADER DA PÁGINA */}
      <section className="relative pt-32 pb-16 px-6 border-b border-neutral-950 text-center overflow-hidden">
        {/* Glow de fundo sutil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#a17a38]/5 to-[#d4af37]/3 blur-[140px] pointer-events-none rounded-full" />
        
        {/* Marcador estético de engenharia */}
        <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-[#a17a38] dark:text-[#d4af37] text-xs font-bold uppercase tracking-[0.3em] bg-[#a17a38]/10 px-4 py-1.5 rounded-full border border-[#a17a38]/20 inline-block">
            CAPACIDADE TÉCNICA E ESCOPO
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-none">
            Soluções em Engenharia
          </h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Oferecemos um portfólio completo focado em infraestrutura pesada, pavimentação urbana dinâmica e incorporações residenciais e comerciais exclusivas.
          </p>
          <div className="w-12 h-[2px] bg-[#a17a38] mx-auto pt-2" />
        </div>
      </section>

      {/* 2. GRID DE SERVIÇOS */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listaServicos.map((servico, index) => (
              <div 
                key={index} 
                className="group relative bg-[#0f0f0f]/40 border border-neutral-900 rounded-2xl p-8 transition-all duration-500 hover:bg-[#0f0f0f]/80 hover:border-neutral-800 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden"
              >
                {/* ID do Serviço no Canto Superior Direito (Estilo numeração técnica) */}
                <span className="absolute top-6 right-8 text-xs font-mono font-bold text-neutral-800 group-hover:text-[#a17a38]/30 transition-colors duration-300">
                  // {servico.id}
                </span>

                <div>
                  {/* Ícone dinâmico em container quadrado */}
                  <div className="p-3.5 bg-neutral-900 rounded-xl inline-block text-[#a17a38] transition-all duration-300 group-hover:bg-[#a17a38] group-hover:text-white mb-6 border border-neutral-800/40 group-hover:border-transparent">
                    {servico.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#d4af37] transition-colors duration-300 mb-3">
                    {servico.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-normal">
                    {servico.desc}
                  </p>
                </div>

                {/* Efeito estético de linha de crescimento inferior */}
                <div className="w-full h-[1px] bg-neutral-900 group-hover:bg-gradient-to-r group-hover:from-[#a17a38] group-hover:to-transparent transition-all duration-500 mt-8" />
              </div>
            ))}

            {/* CARD 06 ESPECIAL: CALL TO ACTION (Fechamento do Grid Assimétrico) */}
            <div className="group relative bg-gradient-to-br from-[#a17a38]/10 via-[#0f0f0f]/40 to-[#0f0f0f]/10 border border-[#a17a38]/20 rounded-2xl p-8 flex flex-col justify-between text-left overflow-hidden min-h-[280px]">
              {/* Linhas cruzadas abstratas decorativas */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div>
                <div className="p-3.5 bg-[#a17a38]/20 text-[#d4af37] rounded-xl inline-block mb-6">
                  <FaHelmetSafety size={26} />
                </div>
                <h3 className="text-xl font-extrabold text-white tracking-tight leading-snug">
                  Tem um projeto <br />em mente?
                </h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Nossa equipe de engenheiros e projetistas está pronta para transformar seu plano em uma execução sólida.
                </p>
              </div>

              <div className="pt-4">
                <a 
                  href="https://wa.me/5561999169603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d4af37] hover:text-white transition-colors duration-300 group"
                >
                  Solicitar Proposta Técnica
                  <FiArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}