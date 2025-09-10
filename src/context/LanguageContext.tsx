import { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '@/types/blog';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  'site.title': { en: 'TechNotes', ar: 'تقنيات' },
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.about': { en: 'About', ar: 'حول' },
  'button.readMore': { en: 'Read More', ar: 'اقرأ المزيد' },
  'filter.all': { en: 'All Posts', ar: 'جميع المقالات' },
  'about.title': { en: 'About Me', ar: 'نبذة عني' },
  'about.content': { 
    en: 'I am Ahmed Amer, a web developer who loves sharing ideas and experiences in web development.',
    ar: 'أنا أحمد عامر، مطور ويب أحب مشاركة الأفكار والخبرات في تطوير الويب.'
  },
  'footer.copyright': { en: '© 2025 - Coded by Ahmed Amer', ar: '© 2025 - برمجة أحمد عامر' },
  'social.share': { en: 'Share this post:', ar: 'شارك هذا المقال:' },
  'social.copyLink': { en: 'Copy Link', ar: 'نسخ الرابط' },
  'social.linkCopied': { en: 'Link copied!', ar: 'تم نسخ الرابط!' },
  'category.webDev': { en: 'Web Development', ar: 'تطوير الويب' },
  'category.projectIdeas': { en: 'Project Ideas', ar: 'أفكار مشاريع' },
  'category.personalNotes': { en: 'Personal Notes', ar: 'ملاحظات شخصية' },
  'readTime': { en: 'min read', ar: 'دقيقة قراءة' },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    return translation ? translation[language] : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};