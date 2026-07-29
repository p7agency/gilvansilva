import { useState } from 'react';
import heroPhotoUrl from './assets/images/gilvan_hero_portrait_1785352806978.jpg';
import stillPhotoUrl from './assets/images/gilvan_office_still_1785352819755.jpg';
import { AuthoritySection } from './components/AuthoritySection';
import { ContactSection } from './components/ContactSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { QualificationsSection } from './components/QualificationsSection';
import { WhoIsGilvanSection } from './components/WhoIsGilvanSection';
import { WHATSAPP_LINK } from './data/constants';
import { PhotoMode } from './types';

export default function App() {
  const [photoMode, setPhotoMode] = useState<PhotoMode>('placeholder');

  const handleOpenContact = () => {
    window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer');
  };

  const handleTogglePhotoMode = () => {
    setPhotoMode((prev) => (prev === 'placeholder' ? 'photo' : 'placeholder'));
  };

  return (
    <div className="min-h-screen bg-[#0B2545] text-[#2B2B2B] flex flex-col font-serif-body selection:bg-[#B08D57] selection:text-white">
      <Header onOpenContact={handleOpenContact} photoMode={photoMode} onTogglePhotoMode={handleTogglePhotoMode} />
      <main className="flex-1">
        <HeroSection onOpenContact={handleOpenContact} photoMode={photoMode} onTogglePhotoMode={handleTogglePhotoMode} heroPhotoUrl={heroPhotoUrl} />
        <WhoIsGilvanSection photoMode={photoMode} stillPhotoUrl={stillPhotoUrl} onTogglePhotoMode={handleTogglePhotoMode} />
        <QualificationsSection />
        <AuthoritySection />
        <ContactSection onOpenContact={handleOpenContact} />
      </main>
    </div>
  );
}
