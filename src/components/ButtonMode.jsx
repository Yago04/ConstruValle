import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ButtonMode() {
  // 1. FORÇA O MODO ESCURO COMO PADRÃO NO PRIMEIRO ACESSO
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Se for o primeiro acesso (sem nada no localStorage), começa como TRUE (Escuro)
    return true; 
  });

  // 2. Controla a injeção da classe na tag <html>
  useEffect(() => {
    const root = window.document.documentElement; // Pega a tag <html>
    
    if (isDark) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2.5 rounded-full border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 text-[#a17a38] hover:text-[#d4af37] transition-all duration-300 focus:outline-none flex items-center justify-center cursor-pointer"
      title={isDark ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
    >
      {/* Se estiver escuro, mostra o sol (para mudar pro claro). Se estiver claro, mostra a lua. */}
      {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
    </button>
  );
}