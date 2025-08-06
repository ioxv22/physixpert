import { 
  CheckCircle2, 
  Clock, 
  Video, 
  BookOpen, 
  Users, 
  Trophy,
  Star,
  Target
} from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <CheckCircle2 className="text-success" size={24} />,
      title: 'الدفع مرة واحدة فقط',
      description: 'لا توجد رسوم إضافية أو تكاليف مخفية'
    },
    {
      icon: <Clock className="text-primary" size={24} />,
      title: 'حصتين أسبوعياً على الأقل',
      description: 'جدول منتظم يضمن التقدم المستمر'
    },
    {
      icon: <Video className="text-secondary" size={24} />,
      title: 'الحصة لا تقل عن ساعة',
      description: 'وقت كافٍ لفهم المفاهيم بعمق'
    },
    {
      icon: <BookOpen className="text-grade-9" size={24} />,
      title: 'شرح دروس المنهاج كاملاً',
      description: 'تغطية شاملة لجميع مواضيع المنهج'
    },
    {
      icon: <Target className="text-grade-10" size={24} />,
      title: 'شرح وحل الهيكل بعد صدوره',
      description: 'تحضير مثالي للامتحانات الرسمية'
    },
    {
      icon: <Star className="text-grade-11" size={24} />,
      title: 'مراجعة ليلة الامتحان',
      description: 'دعم إضافي في اللحظات المهمة'
    },
    {
      icon: <Video className="text-warning" size={24} />,
      title: 'الحصص مسجلة',
      description: 'إمكانية المراجعة في أي وقت'
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: 'اجتماعات مباشرة',
      description: 'تفاعل مباشر للتدريب والمراجعة'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            ما يشمله اشتراكك
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            نقدم لك تجربة تعليمية متكاملة مع جميع الأدوات والموارد التي تحتاجها للنجاح
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-card-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-card rounded-xl p-8 border border-card-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              مزايا إضافية
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                <Trophy className="text-primary" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                ضمان النجاح
              </h4>
              <p className="text-text-secondary text-sm">
                معدل نجاح 95% من طلابنا في الامتحانات الرسمية
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary-light flex items-center justify-center">
                <Users className="text-secondary" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                مجتمع تعليمي
              </h4>
              <p className="text-text-secondary text-sm">
                انضم لمجتمع من الطلاب المتفوقين والمتحفزين
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-grade-11/10 flex items-center justify-center">
                <Star className="text-grade-11" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                دعم شخصي
              </h4>
              <p className="text-text-secondary text-sm">
                متابعة فردية لضمان فهم كل طالب للمادة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};