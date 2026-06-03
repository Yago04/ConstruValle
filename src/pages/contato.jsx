import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/navbar';

export default function Contato() {
  return (
    <div>
        <Navbar />
    
    <div className="bg-[#0a0a0a] text-white min-h-screen py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <span className="text-[#a17a38] text-xs font-bold uppercase tracking-widest block mb-2 text-center">FALE CONOSCO</span>
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-16">Inicie Seu Projeto Conosco</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Informações Rápidas */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <h2 className="text-xl font-bold text-white mb-2">Canais de Atendimento</h2>
            
            <div className="bg-[#0f0f0f] border border-[#1a1a1a] p-5 rounded-xl flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#a17a38]" size={20} />
              <p className="text-xs text-gray-400 leading-relaxed">Águas Claras, Brasília - DF</p>
            </div>

            <div className="bg-[#0f0f0f] border border-[#1a1a1a] p-5 rounded-xl flex items-center gap-4">
              <FaPhoneAlt className="text-[#a17a38]" size={16} />
              <p className="text-xs text-gray-400">(61) 99916-9603</p>
            </div>

            <div className="bg-[#0f0f0f] border border-[#1a1a1a] p-5 rounded-xl flex items-center gap-4">
              <FaEnvelope className="text-[#a17a38]" size={18} />
              <p className="text-xs text-gray-400">contato@construvalle.com.br</p>
            </div>

            <a 
              href="https://wa.me/5561999169603" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-[#a17a38] to-[#835e26] text-white text-center py-3 rounded-lg text-xs font-semibold tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all mt-4"
            >
              <FaWhatsapp size={16} /> FALE NO WHATSAPP
            </a>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-2 bg-[#0f0f0f] border border-[#1a1a1a] p-8 rounded-xl">
            <h2 className="text-xl font-bold text-white mb-6">Envie uma Mensagem</h2>
            <form className="space-y-4 text-xs" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-1 font-medium">Nome Completo</label>
                  <input type="text" className="w-full bg-[#050505] border border-neutral-800 rounded p-3 text-white focus:outline-none focus:border-[#a17a38]" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1 font-medium">E-mail Corporativo</label>
                  <input type="email" className="w-full bg-[#050505] border border-neutral-800 rounded p-3 text-white focus:outline-none focus:border-[#a17a38]" placeholder="seu@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 mb-1 font-medium">Assunto</label>
                <input type="text" className="w-full bg-[#050505] border border-neutral-800 rounded p-3 text-white focus:outline-none focus:border-[#a17a38]" placeholder="Ex: Orçamento de Pavimentação Asfáltica" />
              </div>
              <div>
                <label className="block text-gray-400 mb-1 font-medium">Mensagem / Detalhes da Obra</label>
                <textarea rows="5" className="w-full bg-[#050505] border border-neutral-800 rounded p-3 text-white focus:outline-none focus:border-[#a17a38]" placeholder="Descreva sucintamente as necessidades do projeto..."></textarea>
              </div>
              <button type="submit" className="bg-[#a17a38] text-white font-semibold uppercase tracking-wider px-6 py-3 rounded hover:bg-[#d4af37] transition-colors">
                Enviar Formulário
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
}