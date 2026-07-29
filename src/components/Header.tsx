import React from 'react';
import { GILVAN_CONTACT, WHATSAPP_LINK } from '../data/constants';
import { PhotoMode } from '../types';
import { Instagram } from 'lucide-react';

interface HeaderProps {
  onOpenContact?: () => void;
  photoMode: PhotoMode;
  onTogglePhotoMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ photoMode, onTogglePhotoMode }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0B2545] border-b border-[#B08D57]/30 backdrop-blur-md bg-opacity-95 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 border border-[#B08D57] flex items-center justify-center bg-[#0B2545]">
            <span className="font-heading font-bold text-[#F4EFE8] text-xs tracking-tighter">GS</span>
          </div>
          <div>
            <span className="block font-heading font-bold text-white text-sm sm:text-base tracking-[0.15em] uppercase">Gilvan Silva</span>
            <span className="block font-heading font-medium text-[#B08D57] text-[10px] sm:text-xs tracking-[0.1em] uppercase">Advogado & Corretor de Imóveis</span>
          </div>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-6">
          <div className="hidden lg:flex items-center space-x-4 text-right text-[11px] font-heading text-[#F4EFE8]/80 border-r border-[#B08D57]/30 pr-6">
            <div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block text-[#B08D57] font-semibold tracking-wider hover:underline">{GILVAN_CONTACT.phone}</a>
              <span className="block text-white/70">{GILVAN_CONTACT.creciNumber}</span>
            </div>
            <a href={GILVAN_CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="p-2 border border-[#B08D57]/40 hover:border-[#B08D57] text-[#F4EFE8] hover:text-[#B08D57] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
          <button onClick={onTogglePhotoMode} type="button" className="hidden md:inline-flex items-center text-[10px] font-heading tracking-widest uppercase text-[#F4EFE8]/80 hover:text-[#B08D57] transition-colors border border-[#B08D57]/40 px-2.5 py-1.5">
            Modo: {photoMode === 'placeholder' ? 'Placeholder' : 'Foto Real'}
          </button>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block font-heading font-bold text-xs sm:text-sm tracking-wider uppercase px-4 sm:px-6 py-2.5 sm:py-3 bg-[#B08D57] text-[#0B2545] hover:bg-[#987847] hover:text-white transition-all duration-200 border border-[#B08D57] active:scale-[0.98] cursor-pointer">
            Falar com Gilvan
          </a>
        </div>
      </div>
    </header>
  );
};
