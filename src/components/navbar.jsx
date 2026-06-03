import { Link, NavLink } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import ButtonMode from './ButtonMode';
import Logo from '../assets/Logo.png';

export default function Navbar() {
  // Ajustamos as classes para responderem dinamicamente ao tema claro/escuro
  const linkStyles = "relative text-gray-700 dark:text-gray-300 text-sm font-medium tracking-wider pb-1 transition-colors duration-300 ease-in-out hover:text-[#a17a38] dark:hover:text-[#d4af37] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#a17a38] dark:after:bg-[#d4af37] after:transform after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100";

  return (
    // Transiciona de bg-white (Modo Claro) para dark:bg-[#0a0a0a] (Modo Escuro)
    <header className="w-fullbg-brand-light  dark:bg-[#0a0a0a] border-b border-gray-100 dark:border-[#1a1a1a] sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center transition-transform duration-200 hover:scale-[1.02]">
          <img 
            src={Logo} 
            alt="Construvalle Logo" 
            className="h-16 md:h-20 w-auto object-contain" // Uma pequena dica: h-24 pode empurrar muito a altura da navbar, h-20 costuma ser o ponto ideal para logos verticais
          />
        </Link>

        {/* LINKS DE NAVEGAÇÃO COM HOVER ANIMADO */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink 
            to="/home" 
            end
            className={({ isActive }) => 
              `${linkStyles} ${isActive ? 'text-[#a17a38] dark:text-[#d4af37] after:scale-x-100' : ''}`
            }
          >
            HOME
          </NavLink>
          
          <NavLink 
            to="/sobre" 
            className={({ isActive }) => 
              `${linkStyles} ${isActive ? 'text-[#a17a38] dark:text-[#d4af37] after:scale-x-100' : ''}`
            }
          >
            SOBRE NÓS
          </NavLink>

          <NavLink 
            to="/servicos" 
            className={({ isActive }) => 
              `${linkStyles} ${isActive ? 'text-[#a17a38] dark:text-[#d4af37] after:scale-x-100' : ''}`
            }
          >
            SERVIÇOS
          </NavLink>

          <NavLink 
            to="/obras" 
            className={({ isActive }) => 
              `${linkStyles} ${isActive ? 'text-[#a17a38] dark:text-[#d4af37] after:scale-x-100' : ''}`
            }
          >
            OBRAS
          </NavLink>

          <NavLink 
            to="/diferenciais" 
            className={({ isActive }) => 
              `${linkStyles} ${isActive ? 'text-[#a17a38] dark:text-[#d4af37] after:scale-x-100' : ''}`
            }
          >
            DIFERENCIAIS
          </NavLink>

          <NavLink 
            to="/contato" 
            className={({ isActive }) => 
              `${linkStyles} ${isActive ? 'text-[#a17a38] dark:text-[#d4af37] after:scale-x-100' : ''}`
            }
          >
            CONTATO
          </NavLink>
        </nav>

        {/* BOTÕES DE AÇÃO AGROUPADOS */}
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/5561999169603" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-gradient-to-r from-[#a17a38] to-[#835e26] text-white px-5 py-2.5 rounded-md text-xs font-semibold tracking-wider flex items-center gap-2 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(131,94,38,0.25)]"
          >
            <FaWhatsapp size={18} />
            <span className="hidden sm:inline">FALE CONOSCO</span>
          </a>
          
          {/* BOTÃO ALTERNADOR DE TEMA */}
          <ButtonMode />
        </div>

      </div>
    </header>
  );
}