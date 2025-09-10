import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-card-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold font-heading text-gradient-primary">
              {t('site.title')}
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              {t('nav.home')}
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <div className="language-switch">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="flex items-center space-x-2 text-sm"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};