import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import Navbar from '../components/navbar';

export default function Contato() {
  // 1. Estados para armazenar o que o usuário digita
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  // Estados para controlar o carregamento e as mensagens de sucesso/erro
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  // 2. Função que atualiza os estados toda vez que o usuário digita algo
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  // 3. A FUNÇÃO DO FETCH (Onde a mágica acontece)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede a página de recarregar
    setStatus({ loading: true, success: null, error: null });

    try {
      // SUBSTITUA COM O LINK REAL DE ONDE VOCÊ JOGOU O SEU ARQUIVO PHP NA HOSTINGER
      const response = await fetch('https://seu-dominio.com.br/backend/contato.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Transforma os dados digitados em JSON para o PHP ler
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: 'Mensagem enviada com sucesso!', error: null });
        setFormData({ nome: '', email: '', assunto: '', mensagem: '' }); // Limpa o formulário
      } else {
        setStatus({ loading: false, success: null, error: data.error || 'Erro ao enviar' });
      }
    } catch (error) {
      setStatus({ loading: false, success: null, error: 'Não foi possível conectar ao servidor.' });
    }
  };

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
              
              {/* 4. Ligamos o formulário à nossa função handleSubmit */}
              <form className="space-y-4 text-xs" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 mb-1 font-medium">Nome Completo</label>
                    <input 
                      type="text" 
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#050505] border border-neutral-800 rounded p-3 text-white focus:outline-none focus:border-[#a17a38]" 
                      placeholder="Seu nome" 
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-1 font-medium">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#050505] border border-neutral-800 rounded p-3 text-white focus:outline-none focus:border-[#a17a38]" 
                      placeholder="seu@email.com" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 mb-1 font-medium">Assunto</label>
                  <input 
                    type="text" 
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#050505] border border-neutral-800 rounded p-3 text-white focus:outline-none focus:border-[#a17a38]" 
                    placeholder="Ex: Orçamento de Pavimentação Asfáltica" 
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1 font-medium">Mensagem / Detalhes da Obra</label>
                  <textarea 
                    rows="5" 
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#050505] border border-neutral-800 rounded p-3 text-white focus:outline-none focus:border-[#a17a38]" 
                    placeholder="Descreva sucintamente as necessidades do projeto..."
                  ></textarea>
                </div>

                {/* 5. Alertas Visuais de Sucesso ou Erro para o usuário */}
                {status.success && <p className="text-green-500 font-medium text-sm">{status.success}</p>}
                {status.error && <p className="text-red-500 font-medium text-sm">{status.error}</p>}

                <button 
                  type="submit" 
                  disabled={status.loading}
                  className="bg-[#a17a38] text-white font-semibold uppercase tracking-wider px-6 py-3 rounded hover:bg-[#d4af37] transition-colors disabled:opacity-50"
                >
                  {status.loading ? 'Enviando...' : 'Enviar Formulário'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}