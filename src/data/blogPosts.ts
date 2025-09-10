import { BlogPost } from '@/types/blog';
import ReactTypescriptImage from '@/assets/react-typescript-blog.jpg';
import ProjectIdeasImage from '@/assets/project-ideas-blog.jpg';
import JourneyImage from '@/assets/journey-blog.jpg';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: {
      en: 'Building Modern React Applications with TypeScript',
      ar: 'بناء تطبيقات React حديثة باستخدام TypeScript'
    },
    excerpt: {
      en: 'Learn how to create type-safe React applications with modern best practices and powerful tooling.',
      ar: 'تعلم كيفية إنشاء تطبيقات React آمنة الأنواع باستخدام أفضل الممارسات الحديثة والأدوات القوية.'
    },
    content: {
      en: `# Building Modern React Applications with TypeScript

TypeScript has become an essential tool for React developers who want to build robust, maintainable applications. In this comprehensive guide, we'll explore how to leverage TypeScript's powerful type system to create better React apps.

## Why TypeScript with React?

TypeScript brings several advantages to React development:

- **Type Safety**: Catch errors at compile time rather than runtime
- **Better Developer Experience**: Enhanced IntelliSense and autocompletion
- **Refactoring Confidence**: Make changes with confidence knowing the compiler will catch issues
- **Self-Documenting Code**: Types serve as inline documentation

## Setting Up Your Project

The easiest way to start a new React project with TypeScript is using Vite:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
\`\`\`

## Component Types and Props

When defining React components with TypeScript, you'll want to properly type your props:

\`\`\`tsx
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, size = 'md', onClick, children }) => {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
\`\`\`

## Hooks and State Management

TypeScript works beautifully with React hooks:

\`\`\`tsx
const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState<boolean>(false);

// Custom hook with proper typing
function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message));
  }, [url]);
  
  return { data, error };
}
\`\`\`

## Best Practices

1. **Use strict mode**: Enable strict TypeScript settings
2. **Leverage utility types**: Use Pick, Omit, Partial, etc.
3. **Create reusable types**: Define interfaces for common data structures
4. **Use discriminated unions**: For complex state management

Building React applications with TypeScript significantly improves code quality and developer productivity. Start small, gradually add types, and enjoy the benefits of a more robust codebase.`,
      ar: `# بناء تطبيقات React حديثة باستخدام TypeScript

أصبحت TypeScript أداة أساسية لمطوري React الذين يريدون بناء تطبيقات قوية وقابلة للصيانة. في هذا الدليل الشامل، سنستكشف كيفية الاستفادة من نظام الأنواع القوي في TypeScript لإنشاء تطبيقات React أفضل.

## لماذا TypeScript مع React؟

تجلب TypeScript عدة مزايا لتطوير React:

- **أمان الأنواع**: اكتشاف الأخطاء في وقت التحويل بدلاً من وقت التشغيل
- **تجربة مطور أفضل**: IntelliSense محسن وإكمال تلقائي
- **ثقة في إعادة البناء**: قم بإجراء التغييرات بثقة مع العلم أن المترجم سيكتشف المشاكل
- **كود موثق ذاتياً**: الأنواع تعمل كتوثيق مضمن

## إعداد مشروعك

أسهل طريقة لبدء مشروع React جديد مع TypeScript هي استخدام Vite:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
\`\`\`

## أنواع المكونات والخصائص

عند تعريف مكونات React مع TypeScript، ستحتاج إلى كتابة خصائصك بشكل صحيح:

\`\`\`tsx
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, size = 'md', onClick, children }) => {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
\`\`\`

تعمل TypeScript بشكل رائع مع خطافات React وإدارة الحالة. بناء تطبيقات React مع TypeScript يحسن بشكل كبير من جودة الكود وإنتاجية المطور.`
    },
    image: ReactTypescriptImage,
    category: {
      en: 'Web Development',
      ar: 'تطوير الويب'
    },
    tags: {
      en: ['React', 'TypeScript', 'Frontend'],
      ar: ['ريأكت', 'تايب سكريبت', 'واجهة أمامية']
    },
    publishedAt: '2025-01-08',
    readTime: 8
  },
  {
    id: '2',
    title: {
      en: 'Creative Project Ideas for Web Developers',
      ar: 'أفكار مشاريع إبداعية لمطوري الويب'
    },
    excerpt: {
      en: 'Discover unique project ideas that will help you build an impressive portfolio and learn new skills.',
      ar: 'اكتشف أفكار مشاريع فريدة ستساعدك في بناء محفظة أعمال مُبهرة وتعلم مهارات جديدة.'
    },
    content: {
      en: `# Creative Project Ideas for Web Developers

Building a strong portfolio is crucial for web developers. Here are some creative project ideas that will help you stand out and learn new technologies along the way.

## 1. Interactive Data Visualization Dashboard

Create a dashboard that displays real-time data using charts and graphs. This project helps you learn:
- Data fetching and API integration
- Chart libraries like D3.js or Chart.js
- Real-time updates with WebSockets
- Responsive design principles

## 2. AI-Powered Chatbot Interface

Build a modern chat interface that integrates with AI APIs:
- Natural language processing
- Real-time messaging
- File upload and sharing
- Message history and search

## 3. Personal Finance Tracker

A comprehensive app for managing personal finances:
- Expense categorization
- Budget planning and tracking
- Data visualization
- Export functionality

These projects will challenge you and showcase your skills to potential employers or clients.`,
      ar: `# أفكار مشاريع إبداعية لمطوري الويب

بناء محفظة أعمال قوية أمر بالغ الأهمية لمطوري الويب. إليك بعض أفكار المشاريع الإبداعية التي ستساعدك على التميز وتعلم تقنيات جديدة في الطريق.

## 1. لوحة تحكم تفاعلية لتصور البيانات

إنشاء لوحة تحكم تعرض البيانات في الوقت الفعلي باستخدام الرسوم البيانية والمخططات.

## 2. واجهة شات بوت مدعومة بالذكاء الاصطناعي

بناء واجهة دردشة حديثة تتكامل مع واجهات برمجة تطبيقات الذكاء الاصطناعي.

## 3. متتبع المالية الشخصية

تطبيق شامل لإدارة المالية الشخصية مع تصنيف النفقات وتخطيط الميزانية.

هذه المشاريع ستتحداك وتعرض مهاراتك أمام أصحاب العمل المحتملين أو العملاء.`
    },
    image: ProjectIdeasImage,
    category: {
      en: 'Project Ideas',
      ar: 'أفكار مشاريع'
    },
    tags: {
      en: ['Projects', 'Portfolio', 'Ideas'],
      ar: ['مشاريع', 'محفظة أعمال', 'أفكار']
    },
    publishedAt: '2025-01-07',
    readTime: 5
  },
  {
    id: '3',
    title: {
      en: 'My Journey in Web Development: Lessons Learned',
      ar: 'رحلتي في تطوير الويب: الدروس المستفادة'
    },
    excerpt: {
      en: 'Reflections on my web development journey, the challenges faced, and valuable lessons learned along the way.',
      ar: 'تأملات حول رحلتي في تطوير الويب، التحديات التي واجهتها، والدروس القيمة المستفادة في الطريق.'
    },
    content: {
      en: `# My Journey in Web Development: Lessons Learned

After several years in web development, I've learned that the journey is just as important as the destination. Here are some key insights from my experience.

## The Learning Never Stops

Web development is a field that constantly evolves. New frameworks, tools, and best practices emerge regularly. The key is to embrace continuous learning:

- Stay curious and experiment with new technologies
- Build side projects to practice new skills
- Join developer communities and contribute to open source
- Don't be afraid to make mistakes - they're learning opportunities

## Focus on Fundamentals

While it's tempting to jump on every new trend, solid fundamentals are crucial:
- HTML, CSS, and JavaScript mastery
- Understanding of web standards and accessibility
- Problem-solving and debugging skills
- Version control with Git

## Building a Sustainable Career

Success in web development isn't just about technical skills:
- Communication is key when working with teams
- Understanding business requirements helps build better solutions
- Developing a personal brand through blogging and open source
- Networking within the developer community

The journey has been challenging but incredibly rewarding. Every project teaches something new, and every challenge overcome makes you a better developer.`,
      ar: `# رحلتي في تطوير الويب: الدروس المستفادة

بعد عدة سنوات في تطوير الويب، تعلمت أن الرحلة بنفس أهمية الوجهة. إليك بعض الرؤى الرئيسية من تجربتي.

## التعلم لا يتوقف أبداً

تطوير الويب مجال يتطور باستمرار. تظهر أطر عمل وأدوات وممارسات جديدة بانتظام. المفتاح هو احتضان التعلم المستمر.

## التركيز على الأساسيات

بينما من المغري القفز على كل اتجاه جديد، الأساسيات الراسخة أمر بالغ الأهمية.

## بناء مهنة مستدامة

النجاح في تطوير الويب ليس فقط حول المهارات التقنية.

الرحلة كانت مليئة بالتحديات ولكنها مجزية بشكل لا يصدق. كل مشروع يعلم شيئاً جديداً، وكل تحدي يتم التغلب عليه يجعلك مطوراً أفضل.`
    },
    image: JourneyImage,
    category: {
      en: 'Personal Notes',
      ar: 'ملاحظات شخصية'
    },
    tags: {
      en: ['Career', 'Learning', 'Experience'],
      ar: ['مهنة', 'تعلم', 'خبرة']
    },
    publishedAt: '2025-01-06',
    readTime: 6
  }
];