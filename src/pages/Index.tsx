import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { BlogCard } from '@/components/BlogCard';
import { BlogDetail } from '@/pages/BlogDetail';
import { CategoryFilter } from '@/components/CategoryFilter';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';
import { useLanguage } from '@/context/LanguageContext';

const Index = () => {
  const { language } = useLanguage();
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const selectedPost = selectedPostId 
    ? blogPosts.find(post => post.id === selectedPostId) 
    : null;

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(blogPosts.map(post => post.category[language]))];
    return uniqueCategories;
  }, [language]);

  const filteredPosts = useMemo(() => {
    if (!activeCategory) return blogPosts;
    return blogPosts.filter(post => post.category[language] === activeCategory);
  }, [activeCategory, language]);

  if (selectedPost) {
    return (
      <BlogDetail 
        post={selectedPost} 
        onBack={() => setSelectedPostId(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="py-16 bg-gradient-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-gradient-primary animate-fade-in-up">
            TechNotes
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            {language === 'en' 
              ? 'Sharing ideas and experiences in web development' 
              : 'مشاركة الأفكار والخبرات في تطوير الويب'
            }
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div key={post.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <BlogCard 
                  post={post} 
                  onReadMore={setSelectedPostId}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;