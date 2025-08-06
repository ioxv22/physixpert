import { CourseCard } from './CourseCard';

export const CoursesSection = () => {
  const monthlyCourses = [
    {
      title: 'صف تاسع متقدم',
      emoji: '🧪',
      price: 99,
      paymentLink: 'https://pay.ziina.com/ShenawyPhysics/BmPodX9XP',
      gradeColor: 'grade-9' as const,
      features: [
        'حصتين أسبوعياً على الأقل',
        'شرح دروس المنهاج كاملاً',
        'حل التمارين والتطبيقات',
        'الحصص مسجلة ومتاحة'
      ]
    },
    {
      title: 'صف عاشر متقدم',
      emoji: '🔬',
      price: 199,
      paymentLink: 'https://pay.ziina.com/ShenawyPhysics/rQC1OVW8b',
      gradeColor: 'grade-10' as const,
      isPopular: true,
      features: [
        'حصتين أسبوعياً على الأقل',
        'شرح دروس المنهاج كاملاً',
        'حل التمارين والتطبيقات',
        'الحصص مسجلة ومتاحة'
      ]
    },
    {
      title: 'صف حادي عشر متقدم',
      emoji: '⚛️',
      price: 299,
      paymentLink: 'https://pay.ziina.com/ShenawyPhysics/WPWHg-QWJ',
      gradeColor: 'grade-11' as const,
      features: [
        'حصتين أسبوعياً على الأقل',
        'شرح دروس المنهاج كاملاً',
        'حل التمارين والتطبيقات',
        'الحصص مسجلة ومتاحة'
      ]
    }
  ];

  const yearlyCourses = [
    {
      title: 'تاسع متقدم',
      emoji: '📘',
      price: 199,
      originalPrice: 299,
      paymentLink: 'https://pay.ziina.com/PhysixsPert/B1QuX6Vs1',
      gradeColor: 'grade-9' as const,
      isYearly: true,
      features: [
        'كامل منهج السنة',
        'حصص مكثفة ومراجعات',
        'شرح وحل الهيكل بعد صدوره',
        'مراجعة ليلة الامتحان',
        'تسجيلات جميع الحصص'
      ]
    },
    {
      title: 'عاشر متقدم',
      emoji: '📙',
      price: 399,
      originalPrice: 599,
      paymentLink: 'https://pay.ziina.com/PhysixsPert/FIyNZTkf_',
      gradeColor: 'grade-10' as const,
      isYearly: true,
      features: [
        'كامل منهج السنة',
        'حصص مكثفة ومراجعات',
        'شرح وحل الهيكل بعد صدوره',
        'مراجعة ليلة الامتحان',
        'تسجيلات جميع الحصص'
      ]
    },
    {
      title: 'حادي عشر متقدم',
      emoji: '📗',
      price: 599,
      originalPrice: 899,
      paymentLink: 'https://pay.ziina.com/PhysixsPert/tryfRl07J',
      gradeColor: 'grade-11' as const,
      isYearly: true,
      features: [
        'كامل منهج السنة',
        'حصص مكثفة ومراجعات',
        'شرح وحل الهيكل بعد صدوره',
        'مراجعة ليلة الامتحان',
        'تسجيلات جميع الحصص'
      ]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-surface mt-32">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            دوراتنا التعليمية
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            اختر الباقة المناسبة لك واستمتع بتعلم الفيزياء بطريقة شيقة ومفهومة
          </p>
        </div>

        {/* Monthly Courses */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">
            الباقات الشهرية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monthlyCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>

        {/* Yearly Courses */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              الباقات السنوية
            </h3>
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full">
              وفر حتى 40% مع الباقات السنوية
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yearlyCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};