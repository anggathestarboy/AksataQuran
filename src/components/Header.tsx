'use client';

import { BookOpen, Menu, X, Info } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onAboutClick?: () => void;
  onHomeClick?: () => void;
}

export default function Header({ onAboutClick, onHomeClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAboutClick = () => {
    // Use the prop if provided
    if (onAboutClick) {
      onAboutClick();
    } else {
      // Default behavior - scroll to about section atau show about modal
      const aboutSection = document.getElementById('about-section');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Jika tidak ada section, tampilkan alert
        alert('Aksata Qur\'an v1.0.0\n\nAplikasi Al-Quran digital yang responsif dan minimalis untuk kemudahan membaca Al-Quran kapan saja dan di mana saja.\n\nDikembangkan oleh Rizqi Anggara\n\n© 2024 Aksata Qur\'an');
      }
    }
  };

  const handleHomeClick = () => {
    // Use the prop if provided
    if (onHomeClick) {
      onHomeClick();
    }
  };

  return (
    <header className="bg-gradient-to-r from-emerald-800 to-emerald-700 text-white shadow-xl border-b border-emerald-600">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-105">
                <img 
                  src="/logo.png" 
                  alt="Aksata Qur'an Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-white">
                Aksata Qur'an
              </h1>
              <p className="text-emerald-100 text-sm">
                Aplikasi Al-Quran Digital
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={handleHomeClick}
              className="text-emerald-100 hover:text-white transition-colors duration-200 font-medium"
            >
              Beranda
            </button>
            <button 
              onClick={handleAboutClick}
              className="text-emerald-100 hover:text-white transition-colors duration-200 font-medium flex items-center space-x-1"
            >
              <Info className="w-4 h-4" />
              <span>Tentang</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-emerald-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-emerald-600">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={handleHomeClick}
                className="text-emerald-100 hover:text-white transition-colors duration-200 font-medium text-left"
              >
                Beranda
              </button>
              <button 
                onClick={handleAboutClick}
                className="text-emerald-100 hover:text-white transition-colors duration-200 font-medium text-left flex items-center space-x-2"
              >
                <Info className="w-4 h-4" />
                <span>Tentang</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}