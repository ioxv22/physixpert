import { Button } from '@/components/ui/button';
import { GraduationCap, Award, Clock, Users } from 'lucide-react';
import teacherProfile from '@/assets/teacher-profile-new.jpg';

export const TeacherProfile = () => {
  const achievements = [
    {
      icon: <GraduationCap className="text-primary" size={24} />,
      title: 'خبرة تعليمية',
      value: '10+ سنوات',
      description: 'في تدريس الفيزياء لجميع المستويات'
    },
    {
      icon: <Users className="text-secondary" size={24} />,
      title: 'الطلاب المتخرجين',
      value: '500+',
      description: 'طالب حقق نتائج متميزة'
    },
    {
      icon: <Award className="text-grade-10" size={24} />,
      title: 'معدل النجاح',
      value: '95%',
      description: 'في الامتحانات الرسمية'
    },
    {
      icon: <Clock className="text-grade-11" size={24} />,
      title: 'ساعات التدريس',
      value: '2000+',
      description: 'ساعة تعليمية مكثفة'
    }
  ];

  return (
    <section id="teacher" className="py-20 bg-surface">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              تعرف على أستاذك
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              الأستاذ إسلام الشناوي - خبير في تدريس الفيزياء بطرق حديثة ومبتكرة
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Teacher Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={teacherProfile}
                    alt="الأستاذ إسلام الشناوي"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 gradient-primary opacity-10"></div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -right-6 bg-card border border-card-border rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-xs text-text-secondary">معدل النجاح</div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 bg-card border border-card-border rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">500+</div>
                    <div className="text-xs text-text-secondary">طالب متفوق</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Teacher Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-text-primary mb-4">
                  الأستاذ إسلام الشناوي
                </h3>
                <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
                
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    يحمل الأستاذ إسلام شهادة عليا في الفيزياء وخبرة واسعة في تدريس المناهج 
                    المتقدمة للطلاب في دولة الإمارات العربية المتحدة.
                  </p>
                  
                  <p>
                    يتميز بأسلوبه الفريد في تبسيط المفاهيم المعقدة وربطها بالواقع العملي، 
                    مما يجعل الفيزياء مادة ممتعة ومفهومة لجميع الطلاب.
                  </p>
                  
                  <p>
                    حاصل على العديد من شهادات التقدير في التعليم المتميز، ويسعى دائماً 
                    لتطوير طرق التدريس لضمان وصول المعلومة بأفضل شكل ممكن.
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-card border border-card-border rounded-lg p-4 text-center">
                    <div className="flex justify-center mb-2">
                      {achievement.icon}
                    </div>
                    <div className="text-lg font-bold text-text-primary mb-1">
                      {achievement.value}
                    </div>
                    <div className="text-sm font-medium text-text-primary mb-1">
                      {achievement.title}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {achievement.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="cta-button"
                  onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  ابدأ رحلتك التعليمية
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary-light"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  تواصل معنا
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
