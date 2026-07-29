import React from 'react';
import { CONTACT_TEXT, CONTACT_TITLE, GILVAN_CONTACT, WHATSAPP_LINK } from '../data/constants';
import { Instagram } from 'lucide-react';

interface ContactSectionProps { onOpenContact?: () => void; }

export const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <section className="bg-[#0B2545] text-white pt-20 sm:pt-28 lg:pt-36 pb-12 relative overflow-hidden border-t border-[#B08D57]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 pb-20 border-b border-[#B08D57]/20">
          <div className="w-12 h-12 mx-auto border border-[#B08D57] flex items-center justify-center bg-[#0B2545]">
            <span className="font-heading font-bold text-[#F4EFE8] text-xs tracking-tighter">GS</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">{CONTACT_TITLE}</h2>
          <div className="w-20 h-px bg-[#B08D57] mx-auto" />
          <p className="font-serif-body text-base sm:text-lg md:text-xl text-[#F4EFE8]/90 max-w-2xl mx-auto leading-relaxed">{CONTACT_TEXT}</p>
          <div className="pt-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block font-heading font-bold text-sm tracking-[0.1em] uppercase px-10 py-4 bg-[#B08D57] text-[#0B2545] hover:bg-[#987847] hover:text-white transition-all duration-300 border border-[#B08D57]">Falar com Gilvan</a>
          </div>
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-heading text-[#F4EFE8]/80 tracking-widest uppercase">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[#B08D57] font-semibold hover:underline">{GILVAN_CONTACT.phone}</a>
            <span className="text-[#B08D57]">•</span>
            <a href={GILVAN_CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1.5 text-[#B08D57] font-semibold hover:underline">
              <Instagram className="w-3.5 h-3.5" /><span>{GILVAN_CONTACT.instagramUsername}</span>
            </a>
            <span className="text-[#B08D57]">•</span>
            <span>{GILVAN_CONTACT.creciNumber}</span>
            <span className="text-[#B08D57]">•</span>
            <span>{GILVAN_CONTACT.location}</span>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center text-xs font-sans text-[#F4EFE8]/60 text-center">
          <div>© {new Date().getFullYear()} Gilvan Silva. Todos os direitos reservados.</div>
        </div>
      </div>
    </section>
  );
};
