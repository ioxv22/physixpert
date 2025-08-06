import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-6 animate-fade-in">
              <span className="gradient-primary bg-clip-text text-transparent">
                PhysixsPert
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-4 animate-fade-in delay-200">
              تعلم الفيزياء مع الأستاذ إسلام الشناوي
            </p>
            <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8 animate-fade-in delay-300">
              دورات شاملة ومتقدمة في الفيزياء للصفوف التاسع والعاشر والحادي عشر، 
              مع شرح مفصل وتطبيق عملي لضمان التفوق الأكاديمي
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-500">
            <Button 
              size="lg" 
              className="cta-button text-lg px-8 py-4 min-w-[200px]"
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            >
              استكشف الدورات
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 min-w-[200px] border-primary text-primary hover:bg-primary-light"
              onClick={() => document.getElementById('teacher')?.scrollIntoView({ behavior: 'smooth' })}
            >
              عن الأستاذ
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in delay-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-text-secondary">طالب متفوق</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">95%</div>
              <div className="text-text-secondary">معدل النجاح</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-grade-11 mb-2">3</div>
              <div className="text-text-secondary">مستويات دراسية</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-text-muted" />
          </div>
        </div>
      </div>
    </section>
  );
};