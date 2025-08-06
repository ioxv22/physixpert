import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CoursesSection } from '@/components/CoursesSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TeacherProfile } from '@/components/TeacherProfile';
import { ContactFooter } from '@/components/ContactFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CoursesSection />
        <FeaturesSection />
        <TeacherProfile />
        <ContactFooter />
      </main>
    </div>
  );
};

export default Index;
