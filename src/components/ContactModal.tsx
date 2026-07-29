import React, { useState } from 'react';
import { GILVAN_CONTACT } from '../data/constants';
import { X, MessageSquare, Phone, Mail, Copy, Check, ShieldCheck } from 'lucide-react';

interface ContactModalProps { isOpen: boolean; onClose: () => void; }

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<string | null>(null);
  if (!isOpen) return null;

  const defaultMessage = encodeURIComponent('Olá, Gilvan. Gostaria de agendar uma conversa sobre uma consulta imobiliária/jurídica.');
  const whatsappUrl = `https://wa.me/${GILVAN_CONTACT.whatsappNumber}?text=${defaultMessage}`;
  const copyToClipboard = (text: string, label: string) => { navigator.clipboard.writeText(text); setCopied(label); setTimeout(() => setCopied(null), 3000); };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="fixed inset-0 bg-[#0B2545]/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-[#FFFFFF] border-2 border-[#B08D57] shadow-2xl z-10 overflow-hidden text-[#2B2B2B]">
        <div className="bg-[#0B2545] text-white p-6 sm:p-8 border-b border-[#B08D57] relative">
          <button onClick={onClose} type="button" className="absolute top-4 right-4 text-[#F4EFE8]/70 hover:text-white p-1 transition-colors"><X className="w-5 h-5" /></button>
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 border border-[#B08D57] flex items-center justify-center bg-[#0B2545]"><span className="font-heading font-bold text-[#F4EFE8] text-xs">GS</span></div>
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#B08D57]">Atendimento Direto</span>
          </div>
          <h3 className="font-heading font-bold text-2xl text-white">Gilvan Silva</h3>
          <p className="font-serif-body text-sm text-[#F4EFE8]/80 mt-1">Advogado ({GILVAN_CONTACT.oabNumber}) & Corretor ({GILVAN_CONTACT.creciNumber})</p>
        </div>
        <div className="p-6 sm:p-8 space-y-6 bg-[#FFFFFF]">
          <p className="font-serif-body text-sm sm:text-base text-[#2B2B2B]/90 leading-relaxed">Escolha a forma mais conveniente para falar diretamente com Gilvan.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between p-4 bg-[#0B2545] text-white border border-[#B08D57] hover:bg-[#B08D57] hover:text-[#0B2545] transition-all duration-200 group">
            <div className="flex items-center space-x-3">
              <MessageSquare className="w-5 h-5 text-[#B08D57] group-hover:text-[#0B2545]" />
              <div className="text-left">
                <span className="block font-heading font-bold text-sm tracking-wider uppercase">Conversar via WhatsApp</span>
                <span className="block font-serif-body text-xs opacity-80">Resposta rápida e direta</span>
              </div>
            </div>
            <span className="font-heading text-xs font-bold uppercase tracking-wider underline">Abrir →</span>
          </a>
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between p-3.5 bg-[#F4EFE8] border border-[#B08D57]/30">
              <div className="flex items-center space-x-3"><Phone className="w-4 h-4 text-[#0B2545]" /><div><span className="block font-heading text-xs font-bold text-[#0B2545]">Telefone Profissional</span><span className="font-serif-body text-xs text-[#2B2B2B]">{GILVAN_CONTACT.phone}</span></div></div>
              <button onClick={() => copyToClipboard(GILVAN_CONTACT.phone, 'Telefone')} type="button" className="text-xs font-heading text-[#0B2545] hover:text-[#B08D57] flex items-center space-x-1">{copied === 'Telefone' ? <span className="flex items-center text-emerald-700 font-bold"><Check className="w-3.5 h-3.5 mr-1" /> Copiado!</span> : <span className="flex items-center"><Copy className="w-3.5 h-3.5 mr-1" /> Copiar</span>}</button>
            </div>
            <div className="flex items-center justify-between p-3.5 bg-[#F4EFE8] border border-[#B08D57]/30">
              <div className="flex items-center space-x-3"><Mail className="w-4 h-4 text-[#0B2545]" /><div><span className="block font-heading text-xs font-bold text-[#0B2545]">E-mail Oficial</span><span className="font-serif-body text-xs text-[#2B2B2B]">{GILVAN_CONTACT.email}</span></div></div>
              <button onClick={() => copyToClipboard(GILVAN_CONTACT.email, 'E-mail')} type="button" className="text-xs font-heading text-[#0B2545] hover:text-[#B08D57] flex items-center space-x-1">{copied === 'E-mail' ? <span className="flex items-center text-emerald-700 font-bold"><Check className="w-3.5 h-3.5 mr-1" /> Copiado!</span> : <span className="flex items-center"><Copy className="w-3.5 h-3.5 mr-1" /> Copiar</span>}</button>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-[11px] text-[#2B2B2B]/70 pt-2 border-t border-[#F4EFE8]"><ShieldCheck className="w-4 h-4 text-[#B08D57] flex-shrink-0" /><span>Atendimento pautado pelo Código de Ética da OAB e do CRECI.</span></div>
        </div>
        <div className="bg-[#F4EFE8] px-6 py-3 border-t border-[#B08D57]/30 text-center"><button onClick={onClose} type="button" className="font-heading text-xs uppercase tracking-widest text-[#0B2545] font-semibold hover:underline">Fechar Janela</button></div>
      </div>
    </div>
  );
};
