import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaWhatsapp, FaBuilding, FaUsers, FaAward, FaHome, FaWrench } from 'react-icons/fa';
import { FaHelmetSafety } from "react-icons/fa6";
import { BsMap } from 'react-icons/bs';
import Logo from '../assets/Logo.png';
import CasaBanner from '../assets/casabanner.jpg';
import rodovia from '../assets/rodovia.jpeg';
import inss from '../assets/inss.jpeg';
import construcao from '../assets/construcao.jpeg';


export default function Home() {
  const servicosHorizontais = [
    {
      icon: <FaBuilding size={28} />,
      title: "INCORPORAÇÕES",
      desc: "Projetos completos do início ao fim"
    },
    {
      icon: <FaHome size={28} />,
      title: "CONSTRUÇÕES",
      desc: "Obras residenciais, comerciais e industriais"
    },
    {
      icon: <BsMap size={28} />,
      title: "GESTÃO DE OBRAS",
      desc: "Planejamento, execução e acompanhamento"
    },
    {
      icon: <FaWrench size={28} />,
      title: "REFORMAS",
      desc: "Renovação com qualidade e eficiência"
    }
  ];

  return (
    <div className="bg-brand-light dark:bg-[#0a0a0a] text-gray-950 dark:text-gray-50 min-h-screen font-sans transition-colors duration-500 overflow-x-hidden">
      
      <Navbar/>
     
      {/* 2. HERO SECTION */}
      <section className="relative h-[85vh] md:h-[90vh] flex items-center bg-[#0a0a0a] overflow-hidden select-none">
  
  {/* IMAGEM DE FUNDO POSICIONADA À DIREITA E INTEGRADA */}
  <div 
    className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] bg-cover bg-center bg-no-repeat z-0"
    style={{ backgroundImage: `url(${CasaBanner})` }} 
  >
    {/* Máscara de degradê invisível: Esconde a lateral esquerda da foto fundindo-a no preto absoluto #0a0a0a */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent hidden md:block" />
    
    {/* Gradiente inferior e geral para telas menores/mobile (Garante legibilidade em qualquer dispositivo) */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/40 md:hidden" />
  </div>

  {/* CONTEÚDO DA HERO SECTION (ALINHADO À ESQUERDA) */}
  <div className="max-w-7xl mx-auto px-6 w-full z-10 relative">
    <div className="max-w-2xl md:max-w-3xl space-y-6 text-left">
      
      {/* Título com a exata quebra de impacto da imagem */}
      <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-normal leading-[1.15] text-white">
        CONSTRUÍMOS MAIS<br />
        QUE OBRAS,<br />
        <span className="text-[#a17a38] dark:text-[#d4af37]">REALIZAMOS SONHOS.</span>
      </h1>
      
      {/* Descrição minimalista limpa */}
      <p className="max-w-xl text-gray-300 dark:text-gray-400 text-sm md:text-base leading-relaxed font-normal antialiased">
        Excelência em construções e incorporações, com qualidade, segurança e compromisso em cada detalhe.
      </p>
      
      {/* BOTÕES IDÊNTICOS AOS DA IMAGEM DE REFERÊNCIA */}
      <div className="pt-4 flex flex-wrap gap-4">
        
        {/* Botão Fale Conosco Sólido (Dourado/Castanho Fosco Elegante) */}
        <a 
          href="https://wa.me/5561999169603" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group bg-[#a17a38] hover:bg-[#835e26] text-white px-6 py-3.5 rounded-md font-medium text-xs tracking-wider flex items-center gap-4 transition-all duration-300"
        >
          <FaWhatsapp size={20} className="text-white group-hover:scale-110 transition-transform" />
          <div className="text-left font-sans">
            <span className="block text-[10px] font-bold text-gray-200 uppercase tracking-wider">FALE CONOSCO</span>
            <span className="block text-sm font-bold tracking-wide">61 99916-9603</span>
          </div>
        </a>
        
        {/* Botão Nossas Obras (Vazado com Borda Fina Dourada) */}
        <Link 
          to="/obras" 
          className="border border-[#a17a38] hover:bg-[#a17a38]/10 text-white px-8 py-3.5 rounded-md font-bold text-xs tracking-widest uppercase flex items-center justify-center transition-all duration-300 bg-transparent min-w-[180px]"
        >
          NOSSAS OBRAS
        </Link>
      </div>

    </div>
  </div>
</section>


      {/* 3. STATS BAR */}
      <section className="bg-white dark:bg-[#0f0f0f] border-y border-gray-100 dark:border-neutral-900 py-10 text-gray-900 dark:text-white shadow-sm transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {[
            { icon: <FaBuilding className="text-[#a17a38] dark:text-[#d4af37]" size={32} />, stat: "+150", label: "Obras Executadas" },
            { icon: <FaUsers className="text-[#a17a38] dark:text-[#d4af37]" size={32} />, stat: "+200", label: "Clientes Atendidos" },
            { icon: <FaHelmetSafety className="text-[#a17a38] dark:text-[#d4af37]" size={32} />, stat: "+15", label: "Anos de Experiência" },
            { icon: <FaAward className="text-[#a17a38] dark:text-[#d4af37]" size={32} />, stat: "PRÊMIO", label: "Qualidade e Compromisso" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-4 justify-center sm:justify-start group">
              <div className="p-3 bg-gray-50 dark:bg-neutral-900 rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#a17a38]/10">
                {item.icon}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{item.stat}</h3>
                <p className="text-[11px] font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-widest mt-0.5">{item.label}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* 4. SEÇÃO SOBRE NÓS */}
      <section className="relative bg-[#050505] text-white py-28 border-b border-neutral-900 overflow-hidden">
        
        {/* Fundo abstrato dinâmico */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#a17a38]/10 blur-[130px] pointer-events-none z-0" />
        
        {/* Linhas curvas sofisticadas de arquitetura */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 pointer-events-none hidden md:block z-0">
          <div className="absolute right-[-10%] top-[-20%] w-[130%] h-[140%] border-l border-neutral-800 rounded-bl-[400px] transform rotate-6 bg-gradient-to-b from-transparent via-neutral-950 to-transparent" />
          <div className="absolute right-0 top-[10%] w-[100%] h-[80%] border-l-2 border-[#a17a38]/20 rounded-tl-[300px] transform -rotate-6" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-left flex flex-col items-start space-y-4">
            <span className="text-[#a17a38] dark:text-[#d4af37] text-xs font-bold uppercase tracking-[0.25em] bg-[#a17a38]/10 px-3 py-1 rounded-full">
              SOBRE NÓS
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight text-white">
              A Construvalle é referência em <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#d4af37]">construção civil e incorporações.</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-lg pt-2">
              Atuamos com foco estrito em qualidade, cumprimento rigoroso de prazos e satisfação total dos nossos clientes, entregando projetos modernos, seguros e sustentáveis.
            </p>
            <div className="pt-4">
              <Link 
                to="/sobre" 
                className="group relative inline-flex items-center justify-center border border-[#a17a38] text-white px-8 py-3 rounded-md text-xs font-bold tracking-widest uppercase transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-[#a17a38] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></span>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">SAIBA MAIS</span>
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end items-center group">
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-transparent border border-neutral-800/60 backdrop-blur-sm transition-all duration-500 group-hover:border-[#a17a38]/30">
              <img 
                src={Logo}
                alt="Construvalle Logo" 
                className="w-full max-w-[380px] h-auto object-contain drop-shadow-[0_15px_40px_rgba(161,122,56,0.25)] transition-transform duration-500 group-hover:scale-[1]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. OBRAS EM DESTAQUE */}
      <section className="bg-white dark:bg-[#0a0a0a] py-24 text-gray-900 dark:text-white transition-colors duration-500 overflow-hidden relative">
  {/* Elemento de fundo sutil para quebrar a monotonia */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#a17a38]/5 to-transparent dark:from-[#d4af37]/2 blur-3xl pointer-events-none rounded-full" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* Cabeçalho da Seção */}
    <div className="flex flex-col items-center mb-16 space-y-3 text-center">
      <span className="text-[#a17a38] dark:text-[#d4af37] text-xs font-bold uppercase tracking-[0.3em] bg-[#a17a38]/5 dark:bg-[#d4af37]/5 px-3 py-1 rounded-full border border-[#a17a38]/10 dark:border-[#d4af37]/10">
        PORTFÓLIO DE EXCELÊNCIA
      </span>
      <h3 className="text-3xl md:text-5xl font-black tracking-tight text-gray-950 dark:text-white transition-colors">
        Nossas Obras em Destaque
      </h3>
      <div className="w-16 h-[3px] bg-gradient-to-r from-[#a17a38] to-[#835e26] dark:from-[#d4af37] dark:to-[#a17a38] rounded-full mt-2" />
    </div>
    
    {/* FILEIRA ÚNICA COM SCROLL HORIZONTAl (Cards Gigantes de Exibição) */}
    <div className="flex gap-8 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory scrollbar-none mask-linear-edges">
      {[
        { title: "Rodovia BR-XXX", desc: "Pavimentação", tag: "Infraestrutura", image: rodovia },
        { title: "Viaduto Setor XX", desc: "Extensão de Viaduto", tag: "Mobilidade", image: inss },
        { title: "Asfalto DF-XXX", desc: "Pavimentação Asfáltica", tag: "Vias Urbanas", image: construcao },
        { title: "Edifício Comercial", desc: "Construção de Prédio", tag: "Edificações", image: "/obra-predio.jpg" },
        { title: "Residência Alphaville", desc: "Construção de Casa", tag: "Residencial", image: "/obra-casa.jpg" }
      ].map((obra, index) => (
        <div 
          key={index} 
          className="w-[380px] sm:w-[420px] shrink-0 snap-start group relative bg-neutral-50 dark:bg-[#0f0f0f] border border-gray-200/60 dark:border-neutral-900/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col text-left"
        >
          {/* CONTAINER DA IMAGEM - Altura imponente mantida */}
          <div className="w-full h-64 overflow-hidden relative border-b border-gray-200/40 dark:border-neutral-900 bg-neutral-900">
            
            {/* Imagem de Fundo Real */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url('${obra.image}')` }}
            />

            {/* Filtro de escurecimento linear sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* Badge de Categoria */}
            <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-[10px] font-bold tracking-widest text-neutral-200 px-3 py-1 rounded-md border border-white/10 uppercase">
              {obra.tag}
            </span>
          </div>
          
          {/* CONTEÚDO DO CARD */}
          <div className="p-8 flex-grow flex flex-col justify-between bg-white dark:bg-[#0f0f0f] transition-colors duration-500 relative">
            
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#a17a38] dark:group-hover:text-[#d4af37] transition-colors duration-300 tracking-tight">
                {obra.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed font-normal">
                {obra.desc}
              </p>
            </div>
            
            {/* Rodapé Interno do Card */}
            <div className="pt-6 mt-6 border-t border-gray-100 dark:border-neutral-900/60 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-neutral-500 group-hover:text-[#a17a38] dark:group-hover:text-[#d4af37] transition-colors duration-300">
              <span>PROJETO CONSTRUTIVO</span>
              <div className="flex items-center gap-1.5 transform translate-x-[-4px] group-hover:translate-x-0 transition-transform duration-300">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans text-[11px]">VER</span>
                <span className="text-base font-light leading-none">&rarr;</span>
              </div>
            </div>

            {/* Linha decorativa na base do card */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#a17a38] to-[#d4af37] w-0 group-hover:w-full transition-all duration-500" />
          </div>
        </div>
      ))}
    </div>

    {/* Botão de Ação Inferior */}
    <div className="mt-12 text-center">
      <Link 
        to="/obras" 
        className="inline-flex items-center justify-center border-2 border-[#a17a38] text-[#a17a38] dark:text-[#d4af37] dark:border-[#d4af37] hover:bg-[#a17a38] dark:hover:bg-[#d4af37] hover:text-white dark:hover:text-black px-12 py-4 rounded-xl text-xs font-bold tracking-widest transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5"
      >
        VER TODAS AS OBRAS
      </Link>
    </div>
  </div>
</section>

      {/* 6. SEÇÃO DE SERVIÇOS HORIZONTAL */}
      <section className="w-full bg-[#050505] border-t border-neutral-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-[#a17a38] dark:text-[#d4af37] text-xs font-bold tracking-[0.25em] uppercase">
              NOSSOS SERVIÇOS EXPERTS
            </h3>
            <div className="w-8 h-[2px] bg-[#a17a38] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {servicosHorizontais.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 group p-4 rounded-xl transition-all duration-300 hover:bg-neutral-900/30 border border-transparent hover:border-neutral-800/40"
              >
                <div className="text-[#a17a38] dark:text-[#d4af37] shrink-0 p-3 bg-neutral-900 rounded-lg transition-colors duration-300 group-hover:bg-[#a17a38] group-hover:text-white">
                  {item.icon}
                </div>
                <div className="flex flex-col text-left mt-1">
                  <h4 className="text-white font-bold text-sm tracking-wider uppercase group-hover:text-[#d4af37] transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="text-neutral-400 text-xs mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}