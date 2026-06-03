import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import Logo from '../assets/Logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-gray-400 text-sm border-t border-[#1a1a1a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* COLUNA 1: LOGO E SOBRE */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="inline-block">
            <img 
              src={Logo}
              alt="Construvalle Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="text-xs leading-relaxed text-gray-500 mt-2">
            Excelência em engenharia e construção. Transformando grandes ideias em infraestruturas sólidas e edificações de alto padrão.
          </p>
          {/* REDES SOCIAIS */}
          <div className="flex items-center gap-4 mt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">
              <FaLinkedin size={18} />
            </a>
            <a href="https://wa.me/5561999169603" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        {/* COLUNA 2: NAVEGAÇÃO RÁPIDA */}
        <div>
          <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5 border-l-2 border-[#a17a38] pl-3">
            Navegação
          </h4>
          <ul className="flex flex-col gap-3 text-xs">
            <li>
              <Link to="/" className="hover:text-[#d4af37] transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-[#d4af37] transition-colors">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/servicos" className="hover:text-[#d4af37] transition-colors">Serviços</Link>
            </li>
            <li>
              <Link to="/obras" className="hover:text-[#d4af37] transition-colors">Obras em Destaque</Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-[#d4af37] transition-colors">Contato</Link>
            </li>
          </ul>
        </div>

        {/* COLUNA 3: SERVIÇOS */}
        <div>
          <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5 border-l-2 border-[#a17a38] pl-3">
            Serviços
          </h4>
          <ul className="flex flex-col gap-3 text-xs text-gray-500">
            <li className="hover:text-gray-300 transition-colors">Construção de Rodovias</li>
            <li className="hover:text-gray-300 transition-colors">Extensões de Viaduto</li>
            <li className="hover:text-gray-300 transition-colors">Pavimentação Asfáltica</li>
            <li className="hover:text-gray-300 transition-colors">Edificações Comerciais</li>
            <li className="hover:text-gray-300 transition-colors">Casas de Alto Padrão</li>
          </ul>
        </div>

        {/* COLUNA 4: CONTATO / ENDEREÇO */}
        <div>
          <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-5 border-l-2 border-[#a17a38] pl-3">
            Contato
          </h4>
          <ul className="flex flex-col gap-4 text-xs">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#a17a38] shrink-0 mt-0.5" size={14} />
              <span className="leading-relaxed">Águas Claras,<br />Brasília - DF</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#a17a38]" size={12} />
              <span>(61) 99916-9603</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#a17a38]" size={13} />
              <span className="break-all">contato@construvalle.com.br</span>
            </li>
          </ul>
        </div>

      </div>

      {/* LINHA DE DIREITOS AUTORAIS */}
      <div className="max-w-7xl mx-auto px-6 border-t border-[#121212] mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
        <p>© {currentYear} Construvalle. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{' '}
          <a href="#" className="hover:text-[#d4af37] transition-colors font-medium">
            Weazel
          </a>
        </p>
      </div>
    </footer>
  );
}