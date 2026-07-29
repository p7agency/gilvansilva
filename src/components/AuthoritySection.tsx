import React from 'react';
import { AUTHORITY_CARDS, AUTHORITY_LABEL, AUTHORITY_PARAGRAPH } from '../data/constants';
import { Award, Compass, UserCheck } from 'lucide-react';

export const AuthoritySection: React.FC = () => {
  const cardIcons = [
    <Award key="award" className="w-6 h-6 text-[#0B2545]" />,
    <Compass key="compass" className="w-6 h-6 text-[#0B2545]" />,
    <UserCheck key="usercheck" className="w-6 h-6 text-[#0B2545]" />,
  ];
  return (
    <section className="bg-[#F4EFE8] text-[#2B2B2B] py-20 sm:py-28 lg:py-36 border-b border-[#B08D57]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center justify-center space-x-3">
            <span className="h-px w-6 bg-[#B08D57]" />
            <span className="font-heading font-bold text-xs text-[#B08D57] tracking-[0.25em] uppercase">{AUTHORITY_LABEL}</span>
            <span className="h-px w-6 bg-[#B08D57]" />
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#0B2545] leading-tight">Análise Preventiva & Segurança Integral</h2>
          <div className="w-16 h-px bg-[#B08D57] mx-auto" />
          <p className="font-serif-body text-base sm:text-lg md:text-xl text-[#2B2B2B]/90 leading-relaxed">{AUTHORITY_PARAGRAPH}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {AUTHORITY_CARDS.map((card, index) => (
            <div key={card.title} className="bg-[#FFFFFF] p-8 lg:p-10 border border-[#B08D57]/30 border-l-4 border-l-[#B08D57] relative transition-all duration-300 hover:border-[#0B2545] shadow-sm group">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 bg-[#F4EFE8] border border-[#B08D57]/40 flex items-center justify-center">{cardIcons[index]}</div>
                <span className="font-heading font-bold text-2xl text-[#0B2545]/30 group-hover:text-[#0B2545]/60 transition-colors">0{index + 1}</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-[#0B2545] mb-3 tracking-tight">{card.title}</h3>
              <p className="font-serif-body text-base text-[#2B2B2B]/85 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
