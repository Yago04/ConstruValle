import { FaAward, FaUsers, FaHelmetSafety, FaTruckMonster } from 'react-icons/fa6';
import { FiCheckCircle } from 'react-icons/fi';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Diferenciais() {
  const diferenciais = [
    { 
      title: "Frota Própria de Maquinários", 
      desc: "Dispomos de usinas de asfalto modernas, rolos compactadores, escavadeiras e pavimentadoras próprias, assegurando velocidade operacional sem depender de terceiros.", 
      icon: <FaTruckMonster size={22} />,
      spec: "LOGÍSTICA INTEGRADA"
    },
    { 
      title: "Corpo Técnico Residente", 
      desc: "Nossos engenheiros gerenciam as frentes de trabalho diretamente no canteiro de obras full-time, garantindo rigor absoluto nos testes laboratoriais de solo e asfalto.", 
      icon: <FaUsers size={22} />,
      spec: "PRESENÇA EM CANTEIRO"
    },
    { 
      title: "Garantia Técnica e Pós-Entrega", 
      desc: "Seguimos rigorosamente as normas DNIT e ABNT, oferecendo respaldo de engenharia robusto e auditorias de qualidade em todas as etapas de entrega.", 
      icon: <FaAward size={22} />,
      spec: "NORMAS DNIT / ABNT"
    },
    { 
      title: "Segurança do Trabalho Nota 10", 
      desc: "Zero acidentes graves registrados. Aplicamos treinamentos constantes de NR e mantemos um ambiente de canteiro limpo, seguro e altamente eficiente.", 
      icon: <FaHelmetSafety size={22} />,
      spec: "POLÍTICA INTEGRADA NR"
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-gray-100 min-h-screen font-sans overflow-x-hidden selection:bg-[#a17a38]/30">
      <Navbar />  
      
      {/* 1. HERO HEADER */}
      <section className="relative pt-32 pb-16 px-6 border-b border-neutral-950 text-center overflow-hidden">
        {/* Detalhe de iluminação futurista */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#a17a38]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-[#a17a38] dark:text-[#d4af37] text-xs font-bold uppercase tracking-[0.3em] bg-[#a17a38]/10 px-4 py-1.5 rounded-full border border-[#a17a38]/20 inline-block">
            POR QUE NOS ESCOLHER
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-none">
            Diferenciais Técnicos
          </h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Nossos pilares de entrega combinam independência logística, maestria normativa e segurança absoluta.
          </p>
          <div className="w-12 h-[2px] bg-[#a17a38] mx-auto pt-2" />
        </div>
      </section>

      {/* 2. GRID DE DIFERENCIAIS */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {diferenciais.map((dif, idx) => (
              <div 
                key={idx} 
                className="group relative bg-[#0f0f0f]/50 border border-neutral-900 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start transition-all duration-500 hover:bg-[#0f0f0f]/90 hover:border-neutral-800 hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)] overflow-hidden"
              >
                {/* Indicador de Controle de Qualidade no Topo Direito */}
                <div className="absolute top-6 right-6 flex items-center gap-1.5 text-[9px] font-mono font-semibold tracking-wider text-neutral-600 group-hover:text-[#d4af37]/40 transition-colors duration-300">
                  <FiCheckCircle className="text-neutral-700 group-hover:text-[#a17a38]/60 transition-colors" />
                  <span>VERIFICADO</span>
                </div>

                {/* Container do Ícone Tridimensional em Camadas */}
                <div className="text-[#a17a38] bg-neutral-900 group-hover:bg-[#a17a38] group-hover:text-white p-4 rounded-xl border border-neutral-800/80 group-hover:border-transparent shrink-0 transition-all duration-300 shadow-inner group-hover:scale-105">
                  {dif.icon}
                </div>

                {/* Bloco de Texto */}
                <div className="space-y-2 flex-grow text-left">
                  {/* Minha Categoria Técnica acima do título */}
                  <span className="block font-mono text-[9px] font-bold tracking-widest text-[#a17a38] uppercase">
                    {dif.spec}
                  </span>
                  
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#d4af37] transition-colors duration-300">
                    {dif.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-normal pt-1">
                    {dif.desc}
                  </p>
                </div>

                {/* Detalhe Linear Decorativo Lateral que brilha no hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-transparent group-hover:bg-gradient-to-b group-hover:from-[#a17a38] group-hover:to-transparent transition-all duration-300" />
              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}