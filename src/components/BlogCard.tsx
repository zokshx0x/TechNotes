import { Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  post: BlogPost;
  onReadMore: (id: string) => void;
}

export const BlogCard = ({ post, onReadMore }: BlogCardProps) => {
  const { language, t } = useLanguage();

  return (
    <article className="blog-card animate-fade-in-up">
      <div className="aspect-video bg-muted rounded-t-2xl overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title[language]}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            {post.category[language]}
          </span>
          <div className="flex items-center text-muted-foreground text-sm">
            <Clock className="w-4 h-4 mr-1" />
            <span>{post.readTime} {t('readTime')}</span>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold font-heading mb-3 text-card-foreground leading-tight">
          {post.title[language]}
        </h2>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {post.excerpt[language]}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags[language].slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <Button
            onClick={() => onReadMore(post.id)}
            className="btn-gradient-primary group"
            size="sm"
          >
            {t('button.readMore')}
            <ArrowRight className={`w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 ${
              language === 'ar' ? 'rotate-180' : ''
            }`} />
          </Button>
        </div>
      </div>
    </article>
  );
};