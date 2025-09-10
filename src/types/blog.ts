export interface BlogPost {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  excerpt: {
    en: string;
    ar: string;
  };
  content: {
    en: string;
    ar: string;
  };
  image: string;
  category: {
    en: string;
    ar: string;
  };
  tags: {
    en: string[];
    ar: string[];
  };
  publishedAt: string;
  readTime: number;
}

export type Language = 'en' | 'ar';

export interface Translation {
  [key: string]: {
    en: string;
    ar: string;
  };
}