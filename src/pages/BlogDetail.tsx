import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { BlogPost } from '@/types/blog';
import { useLanguage } from '@/context/LanguageContext';
import { SocialShare } from '@/components/SocialShare';
import { Button } from '@/components/ui/button';

interface BlogDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export const BlogDetail = ({ post, onBack }: BlogDetailProps) => {
  const { language, t } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 group"
        >
          <ArrowLeft className={`w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1 ${
            language === 'ar' ? 'rotate-180' : ''
          }`} />
          Back
        </Button>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
          <div className="aspect-video bg-muted rounded-2xl overflow-hidden mb-6">
            <img 
              src={post.image} 
              alt={post.title[language]}
              className="w-full h-full object-cover"
            />
          </div>

            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                {post.category[language]}
              </span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime} {t('readTime')}
              </div>
            </div>

            <h1 className="text-4xl font-bold font-heading mb-4 text-gradient-primary leading-tight">
              {post.title[language]}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags[language].map((tag, index) => (
                <span
                  key={index}
                  className="text-sm bg-secondary/20 text-secondary px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-8 text-foreground">
            <div className="whitespace-pre-wrap leading-relaxed">
              {post.content[language].split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold font-heading mb-6 text-gradient-primary">
                      {paragraph.replace('# ', '')}
                    </h1>
                  );
                }
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold font-heading mb-4 mt-8 text-foreground">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('```')) {
                  return null; // Skip code block markers for now
                }
                if (paragraph.trim() === '') {
                  return <br key={index} />;
                }
                return (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Social Share */}
          <SocialShare
            title={post.title[language]}
            url={`${window.location.origin}/blog/${post.id}`}
          />
        </article>
      </div>
    </div>
  );
};