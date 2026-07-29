import React from 'react';
import { GILVAN_CONTACT, WHO_LABEL, WHO_TEXT, WHO_TITLE } from '../data/constants';
import { PhotoMode } from '../types';
import { ImageFrame } from './ImageFrame';

interface WhoIsGilvanSectionProps {
  photoMode: PhotoMode;
  stillPhotoUrl: string;
  onTogglePhotoMode?: () => void;
}

export const WhoIsGilvanSection: React.FC<WhoIsGilvanSectionProps> = ({ photoMode, stillPhotoUrl, onTogglePhotoMode }) => {
  return (
    <section className="bg-[#FFFFFF] text-[#2B2B2B] py-20 sm:py-28 lg:py-36 border-b border-[#B08D57]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="w-full max-w-md mx-auto lg:max-w-none">
              <ImageFrame photoUrl={stillPhotoUrl} altText="Gilvan Silva em seu escritório" placeholderText="FOTO PROFISSIONAL DE GILVAN" mode={photoMode} aspectRatioClass="aspect-[4/3]" onToggleMode={onTogglePhotoMode} />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center space-x-3">
              <span className="h-px w-6 bg-[#B08D57]" />
              <span className="font-heading font-bold text-xs text-[#B08D57] tracking-[0.25em] uppercase">{WHO_LABEL}</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#2B2B2B] leading-tight tracking-tight">{WHO_TITLE}</h2>
            <div className="w-16 h-px bg-[#B08D57]/80" />
            <p className="font-serif-body text-base sm:text-lg md:text-xl text-[#2B2B2B]/90 leading-relaxed text-justify sm:text-left">{WHO_TEXT}</p>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#F4EFE8]">
              <div className="border-l-2 border-[#B08D57] pl-4 space-y-1">
                <span className="block font-heading font-bold text-xs text-[#0B2545] uppercase tracking-wider">Advocacia (FDV)</span>
                <p className="font-serif-body text-sm text-[#2B2B2B]/80 leading-snug">{GILVAN_CONTACT.fdvFullText}</p>
              </div>
              <div className="border-l-2 border-[#B08D57] pl-4 space-y-1">
                <span className="block font-heading font-bold text-xs text-[#0B2545] uppercase tracking-wider">Corretagem Imobiliária (CRECI)</span>
                <p className="font-serif-body text-sm text-[#2B2B2B]/80 leading-snug">{GILVAN_CONTACT.creciFullText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
