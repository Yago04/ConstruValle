import { useState } from 'react';
import Navbar from '../components/navbar';

export default function Obras() {
  const [filtro, setFiltro] = useState('todos');

  const projetos = [
    { id: 1, title: "Rodovia BR-101 Sul", cat: "infra", desc: "Pavimentação de 40km de rodovia" },
    { id: 2, title: "Viaduto Alvorada", cat: "infra", desc: "Alargamento e extensão de faixas" },
    { id: 3, title: "Edifício Corporate Tower", cat: "predios", desc: "Construção de prédio comercial de 22 andares" },
    { id: 4, title: "Residência Alphaville", cat: "casas", desc: "Mansão contemporânea de alto padrão" },
    { id: 5, title: "Complexo Logístico DF", cat: "infra", desc: "Pavimentação asfáltica e pátio industrial" },
    { id: 6, title: "Residência Lake View", cat: "casas", desc: "Casa conceito de alto luxo à beira-lago" }
  ];

  const projetosFiltrados = filtro === 'todos' ? projetos : projetos.filter(p => p.cat === filtro);

  return (
    <><></><div>
          <Navbar />
      </div>
      <div className="bg-[#0a0a0a] text-white min-h-screen py-20 px-6 font-sans">
              <div className="max-w-6xl mx-auto text-center">
                  <span className="text-[#a17a38] text-xs font-bold uppercase tracking-widest block mb-2">NOSSO PORTFÓLIO</span>
                  <h1 className="text-3xl md:text-5xl font-bold mb-10">Galeria de Obras Executadas</h1>

                  {/* Botões de Filtro */}
                  <div className="flex flex-wrap justify-center gap-3 mb-12">
                      {['todos', 'infra', 'predios', 'casas'].map((cat) => (
                          <button
                              key={cat}
                              onClick={() => setFiltro(cat)}
                              className={`px-5 py-2 rounded text-xs font-semibold uppercase tracking-wider transition-all border ${filtro === cat
                                      ? 'bg-[#a17a38] border-[#a17a38] text-white'
                                      : 'bg-transparent border-neutral-800 text-gray-400 hover:border-gray-600'}`}
                          >
                              {cat === 'todos' ? 'Ver Todas' : cat === 'infra' ? 'Infraestrutura / Asfalto' : cat === 'predios' ? 'Prédios' : 'Casas'}
                          </button>
                      ))}
                  </div>

                  {/* Grid da Galeria */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {projetosFiltrados.map((item) => (
                          <div key={item.id} className="group cursor-pointer text-left bg-[#0f0f0f] border border-[#1a1a1a] p-4 rounded-xl">
                              <div className="w-full h-48 bg-neutral-900 rounded-lg overflow-hidden mb-4 relative">
                                  <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-xs text-gray-600 group-hover:scale-105 transition-transform duration-500">
                                      [Imagem da Obra]
                                  </div>
                              </div>
                              <h3 className="text-base font-semibold text-[#d4af37]">{item.title}</h3>
                              <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </div></>
  );
}