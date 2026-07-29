import React from 'react';
import { GILVAN_CONTACT, WHATSAPP_LINK } from '../data/constants';
import { Scale, Building2, ShieldAlert, UserCheck, Instagram } from 'lucide-react';

export const QualificationsSection: React.FC = () => {
  const pillars = [
    { icon: <Building2 className="w-5 h-5 text-[#0B2545]" />, tag: 'DESDE 1997', title: 'Expertise no Mercado Imobiliário', description: GILVAN_CONTACT.creciFullText },
    { icon: <Scale className="w-5 h-5 text-[#0B2545]" />, tag: 'DESDE 2002', title: 'Formação Jurídica Pioneira', description: GILVAN_CONTACT.fdvFullText },
    { icon: <ShieldAlert className="w-5 h-5 text-[#0B2545]" />, tag: 'SEGURANÇA TOTAL', title: 'Análise Unificada de Negócios', description: 'A viabilidade comercial do imóvel e a proteção do contrato estudadas juntas.' },
    { icon: <UserCheck className="w-5 h-5 text-[#0B2545]" />, tag: 'SEM INTERMEDIÁRIOS', title: 'Atendimento Direto e Exclusivo', description: 'Contato pessoal com Gilvan Silva do primeiro atendimento à conclusão.' },
  ];
  return (
    <section className="bg-[#FFFFFF] text-[#2B2B2B] py-16 sm:py-24 border-b border-[#B08D57]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center space-x-3">
            <span className="h-px w-6 bg-[#B08D57]" />
            <span className="font-heading font-bold text-xs text-[#B08D57] tracking-[0.25em] uppercase">PILARES DE ATUAÇÃO</span>
            <span className="h-px w-6 bg-[#B08D57]" />
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#0B2545] leading-tight">A união entre conhecimento prático e fundamentação legal.</h2>
          <div className="w-16 h-px bg-[#B08D57] mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-[#F4EFE8]/60 p-6 sm:p-8 border border-[#B08D57]/30 hover:border-[#B08D57] transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-[#FFFFFF] border border-[#B08D57]/40 flex items-center justify-center">{pillar.icon}</div>
                  <span className="font-heading font-bold text-[10px] text-[#B08D57] tracking-widest uppercase">{pillar.tag}</span>
                </div>
                <h3 className="font-heading font-bold text-base text-[#0B2545] mb-3 leading-snug">{pillar.title}</h3>
                <p className="font-serif-body text-sm text-[#2B2B2B]/85 leading-relaxed">{pillar.description}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#B08D57]/20 flex items-center justify-between text-[11px] font-heading font-semibold text-[#0B2545] group-hover:text-[#B08D57] transition-colors">
                <span>GILVAN SILVA</span><span>•</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 p-6 bg-[#0B2545] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#B08D57]">
          <div className="flex items-center space-x-4">
            <a href={GILVAN_CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="p-2 border border-[#B08D57]/50 text-[#B08D57] hover:text-white hover:border-[#B08D57] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <div>
              <span className="block font-heading text-xs font-bold text-white tracking-wider uppercase">Acompanhe o conteúdo técnico no Instagram</span>
              <a href={GILVAN_CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="font-serif-body text-xs text-[#B08D57] hover:underline">{GILVAN_CONTACT.instagramUsername}</a>
            </div>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-heading font-bold text-xs tracking-wider uppercase px-6 py-3 bg-[#B08D57] text-[#0B2545] hover:bg-[#987847] hover:text-white transition-all border border-[#B08D57] whitespace-nowrap">Falar no WhatsApp</a>
        </div>
      </div>
    </section>
  );
};
