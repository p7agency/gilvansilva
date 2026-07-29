import React from 'react';
import { HERO_HEADLINE, HERO_SUBTEXT, WHATSAPP_LINK } from '../data/constants';
import { PhotoMode } from '../types';
import { ImageFrame } from './ImageFrame';

interface HeroSectionProps {
  onOpenContact?: () => void;
  photoMode: PhotoMode;
  onTogglePhotoMode: () => void;
  heroPhotoUrl: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ photoMode, onTogglePhotoMode, heroPhotoUrl }) => {
  return (
    <section className="relative bg-[#0B2545] text-white py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-[#B08D57]/30">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(#B08D57 1px, transparent 1px), linear-gradient(to right, #B08D57 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center space-x-3">
              <span className="h-px w-8 bg-[#B08D57]" />
              <span className="font-heading font-semibold text-xs text-[#B08D57] tracking-[0.2em] uppercase">27 Anos de Tradição e Excelência</span>
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] leading-[1.2] text-white tracking-tight">{HERO_HEADLINE}</h1>
            <div className="w-24 h-[2px] bg-[#B08D57] my-2" />
            <p className="font-serif-body text-base sm:text-lg md:text-xl text-[#F4EFE8]/90 leading-relaxed max-w-2xl">{HERO_SUBTEXT}</p>
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block font-heading font-bold text-sm tracking-[0.1em] uppercase px-8 py-4 bg-[#B08D57] text-[#0B2545] hover:bg-[#987847] hover:text-white transition-all duration-300 border border-[#B08D57]">Falar com Gilvan</a>
              <div className="text-xs font-heading text-[#F4EFE8]/60 tracking-wider uppercase">Atendimento Jurídico & Imobiliário Direto</div>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-none">
              <ImageFrame photoUrl={heroPhotoUrl} altText="Gilvan Silva - Advogado e Corretor de Imóveis" placeholderText="FOTO PROFISSIONAL DE GILVAN" mode={photoMode} aspectRatioClass="aspect-[4/5]" isArch={true} onToggleMode={onTogglePhotoMode} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
