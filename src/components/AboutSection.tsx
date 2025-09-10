import { User } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 animate-float">
            <User className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold font-heading mb-6 text-gradient-primary">
            {t('about.title')}
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('about.content')}
          </p>
        </div>
      </div>
    </section>
  );
};