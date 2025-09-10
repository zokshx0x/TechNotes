import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <Button
        variant={activeCategory === null ? "default" : "outline"}
        onClick={() => onCategoryChange(null)}
        className={activeCategory === null ? "btn-gradient-primary" : ""}
      >
        {t('filter.all')}
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={activeCategory === category ? "btn-gradient-secondary" : ""}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};