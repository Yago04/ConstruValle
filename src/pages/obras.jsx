import { useState } from 'react';
import Navbar from '../components/navbar';
import Escola from '../assets/escola.jpeg';
import rodovia from '../assets/rodovia.jpeg';
import inss from '../assets/inss.jpeg';
import construcao from '../assets/construcao.jpeg'; 
import rio from '../assets/Rio.jpeg';
import pedagio from '../assets/Pedagio.jpeg';
import ponte from '../assets/ponte.jpeg';

export default function Obras() {
  const [filtro, setFiltro] = useState('todos');

  const projetos = [
    { 
      id: 1, 
      title: "Rodovia BR-101 Sul", 
      cat: "infra", 
      tag: "Infraestrutura",
      desc: "Pavimentação de 40km de rodovia", 
      image: rodovia 
    },
    { 
      id: 2, 
      title: "Viaduto Alvorada", 
      cat: "infra", 
      tag: "Mobilidade",
      desc: "Alargamento e extensão de faixas", 
      image: ponte 
    },
    { 
      id: 3, 
      title: "Edifício Corporate Tower", 
      cat: "predios", 
      tag: "Comercial",
      desc: "Construção de prédio comercial de 22 andares", 
      image: inss 
    },
    { 
      id: 4, 
      title: "Residência Alphaville", 
      cat: "casas", 
      tag: "Residencial",
      desc: "Mansão contemporânea de alto padrão", 
      image: construcao 
    },
    { 
      id: 5, 
      title: "Complexo Logístico DF", 
      cat: "infra", 
      tag: "Asfalto / Pátio",
      desc: "Pavimentação asfáltica e pátio industrial", 
      image: pedagio 
    },
    { 
      id: 6, 
      title: "Residência Lake View", 
      cat: "casas", 
      tag: "Residencial",
      desc: "Casa conceito de alto luxo à beira-lago", 
      image: rio 
    },
    { 
      id: 7, 
      title: "Centro Educacional Unidade II", 
      cat: "predios", 
      tag: "Institucional",
      desc: "Construção e acabamento de bloco escolar moderno", 
      image: Escola 
    },
    { 
      id: 8, 
      title: "Residência Horizon", 
      cat: "casas", 
      tag: "Residencial",
      desc: "Projeto arquitetônico minimalista de alto padrão", 
      image: construcao 
    },
    { 
      id: 9, 
      title: "Skyline Residence", 
      cat: "predios", 
      tag: "Residencial Vertical",
      desc: "Incorporação e estrutura de edifício residencial", 
      image: inss 
    },
  ];

  const projetosFiltrados = filtro === 'todos' ? projetos : projetos.filter(p => p.cat === filtro);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      <Navbar />
      
      <div className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-[#a17a38] text-xs font-bold uppercase tracking-widest block mb-2">
            NOSSO PORTFÓLIO
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-10 text-white">
            Galeria de Obras Executadas
          </h1>

          {/* Botões de Filtro */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['todos', 'infra', 'predios', 'casas'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                className={`px-5 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all border ${
                  filtro === cat
                    ? 'bg-[#a17a38] border-[#a17a38] text-white'
                    : 'bg-transparent border-neutral-800 text-gray-400 hover:border-gray-600'
                }`}
              >
                {cat === 'todos' ? 'Ver Todas' : cat === 'infra' ? 'Infraestrutura / Asfalto' : cat === 'predios' ? 'Prédios' : 'Casas'}
              </button>
            ))}
          </div>

          {/* Grid da Galeria */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetosFiltrados.map((item) => (
              <div 
                key={item.id} 
                className="group cursor-pointer text-left bg-[#0f0f0f] border border-neutral-900 p-4 rounded-xl hover:border-neutral-800 transition-all duration-300"
              >
                {/* Container da Imagem */}
                <div className="w-full h-48 bg-neutral-900 rounded-lg overflow-hidden mb-4 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Badge sutil com a tag do tipo de projeto */}
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-[9px] font-bold tracking-wider text-neutral-300 px-2 py-0.5 rounded uppercase border border-white/5">
                    {item.tag}
                  </span>
                </div>
                
                {/* Textos */}
                <h3 className="text-base font-semibold text-[#d4af37] group-hover:text-[#a17a38] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}