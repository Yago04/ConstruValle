import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi'; // Importando ícones modernos de menu
import ButtonMode from './ButtonMode';
import Logo from '../assets/Logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Estilos dos links para desktop
  const linkStyles = "relative text-gray-700 dark:text-gray-300 text-sm font-medium tracking-wider pb-1 transition-colors duration-300 ease-in-out hover:text-[#a17a38] dark:hover:text-[#d4af37] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#a17a38] dark:after:bg-[#d4af37] after:transform after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100";

  // Estilos dos links para o menu mobile
  const mobileLinkStyles = "block w-full text-left text-lg font-semibold tracking-wide py-3 px-4 rounded-xl text-gray-800 dark:text-gray-200 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-neutral-900 hover:text-[#a17a38] dark:hover:text-[#d4af37]";

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { path: "/home", label: "HOME", end: true },
    { path: "/sobre", label: "SOBRE NÓS" },
    { path: "/servicos", label: "SERVIÇOS" },
    { path: "/obras", label: "OBRAS" },
    { path: "/diferenciais", label: "DIFERENCIAIS" },
    { path: "/contato", label: "CONTATO" },
  ];

  return (
    <header className="w-full bg-brand-light dark:bg-[#0a0a0a] border-b border-gray-100 dark:border-[#1a1a1a] sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center transition-transform duration-200 hover:scale-[1.02]">
          <img 
            src={Logo} 
            alt="Construvalle Logo" 
            className="h-14 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* LINKS DE NAVEGAÇÃO DESKTOP (Ocultos em telas menores) */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path} 
              end={item.end}
              className={({ isActive }) => 
                `${linkStyles} ${isActive ? 'text-[#a17a38] dark:text-[#d4af37] after:scale-x-100' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* BOTÕES DE AÇÃO ESQUERDA (Desktop e Mobile equilibrados) */}
        <div className="flex items-center gap-3 md:gap-4">
          <a 
            href="https://wa.me/5561999169603" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gradient-to-r from-[#a17a38] to-[#835e26] text-white px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-xs font-semibold tracking-wider flex items-center gap-2 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(131,94,38,0.25)]"
          >
            <FaWhatsapp size={18} />
            <span className="hidden sm:inline">FALE CONOSCO</span>
          </a>
          
          <ButtonMode />

          {/* BOTÃO HAMBÚRGUER MOBILE */}
          <button 
            onClick={toggleMenu}
            className="flex md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-[#a17a38] dark:hover:text-[#d4af37] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* 📱 MENU MOBILE DRAWER (SLIDE DA LATERAL DIREITA) */}
      {/* Background escurecido ao fundo do menu */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      />

      {/* Painel do menu deslizante */}
      <div className={`fixed top-0 right-0 bottom-0 w-[280px] max-w-[85vw] bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md z-50 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out border-l border-gray-100 dark:border-neutral-900 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="space-y-6">
          {/* Topo do Menu Mobile (Logo interna e Botão de fechar) */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-neutral-900">
            <span className="text-xs font-bold tracking-[0.2em] text-[#a17a38] dark:text-[#d4af37]">NAVEGAÇÃO</span>
            <button 
              onClick={toggleMenu}
              className="p-2 text-gray-500 dark:text-neutral-400 hover:text-red-500 transition-colors"
            >
              <HiX size={24} />
            </button>
          </div>

          {/* Links de navegação verticais */}
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={toggleMenu} // Fecha o menu automaticamente ao clicar
                className={({ isActive }) => 
                  `${mobileLinkStyles} ${isActive ? 'bg-[#a17a38]/10 text-[#a17a38] dark:text-[#d4af37] dark:bg-[#d4af37]/5 font-bold' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Rodapé Interno do Menu Mobile */}
        <div className="pt-6 border-t border-gray-100 dark:border-neutral-900 text-center space-y-1">
          <p className="text-[10px] text-gray-400 dark:text-neutral-500 tracking-wider">CONSTRUVALLE &copy; 2026</p>
          <p className="text-[11px] font-bold text-gray-600 dark:text-neutral-400">61 99916-9603</p>
        </div>

      </div>
    </header>
  );
}