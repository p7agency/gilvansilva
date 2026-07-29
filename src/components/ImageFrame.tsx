import React from 'react';
import { PhotoMode } from '../types';

interface ImageFrameProps {
  photoUrl: string;
  altText: string;
  placeholderText: string;
  mode: PhotoMode;
  aspectRatioClass?: string;
  className?: string;
  isArch?: boolean;
  onToggleMode?: () => void;
}

export const ImageFrame: React.FC<ImageFrameProps> = ({ photoUrl, altText, placeholderText, mode, aspectRatioClass = 'aspect-[3/4]', className = '', isArch = false, onToggleMode }) => {
  const archClasses = isArch ? 'rounded-t-[100px] sm:rounded-t-[140px]' : '';
  return (
    <div className={`relative group ${className}`}>
      <div className={`absolute -inset-2 border border-[#B08D57]/40 pointer-events-none transition-all duration-300 group-hover:border-[#B08D57] ${archClasses}`} />
      <div className={`relative w-full ${aspectRatioClass} overflow-hidden bg-[#F4EFE8] border border-[#B08D57]/60 shadow-sm transition-all duration-300 ${archClasses}`}>
        {mode === 'placeholder' ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#1a3a60] text-white">
            <div className="w-12 h-12 mb-4 border border-[#B08D57] flex items-center justify-center bg-[#0B2545]">
              <span className="text-[#B08D57] font-serif text-lg font-bold">GS</span>
            </div>
            <p className="font-heading font-bold text-xs md:text-sm tracking-[0.2em] text-[#F4EFE8] uppercase max-w-[220px]">{placeholderText}</p>
            <div className="w-10 h-[2px] bg-[#B08D57] my-3" />
            <span className="text-[10px] text-[#B08D57] font-heading tracking-[0.2em] uppercase font-semibold">GILVAN SILVA</span>
          </div>
        ) : (
          <img src={photoUrl} alt={altText} referrerPolicy="no-referrer" className="w-full h-full object-cover grayscale-[15%] contrast-[105%] transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0" />
        )}
        {onToggleMode && (
          <button onClick={onToggleMode} type="button" className="absolute bottom-3 right-3 bg-[#0B2545]/90 hover:bg-[#0B2545] text-[#F4EFE8] hover:text-[#B08D57] border border-[#B08D57]/60 text-[10px] font-heading font-semibold uppercase tracking-wider px-2.5 py-1 transition-all z-10">
            {mode === 'placeholder' ? 'Ver Foto' : 'Ver Placeholder'}
          </button>
        )}
      </div>
    </div>
  );
};
