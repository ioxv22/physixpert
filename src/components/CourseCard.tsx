import { Button } from '@/components/ui/button';
import { ExternalLink, Clock, Users, BookOpen } from 'lucide-react';

interface CourseCardProps {
  title: string;
  emoji: string;
  price: number;
  originalPrice?: number;
  paymentLink: string;
  features: string[];
  isYearly?: boolean;
  gradeColor: 'grade-9' | 'grade-10' | 'grade-11';
  isPopular?: boolean;
}

export const CourseCard = ({
  title,
  emoji,
  price,
  originalPrice,
  paymentLink,
  features,
  isYearly = false,
  gradeColor,
  isPopular = false
}: CourseCardProps) => {
  const handleSubscribe = () => {
    window.open(paymentLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`
      course-card relative
      ${isPopular ? 'ring-2 ring-primary scale-105' : ''}
    `}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            الأكثر طلباً
          </span>
        </div>
      )}

      {/* Course Header */}
      <div className="text-center mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${gradeColor}/10 mb-4`}>
          <span className="text-3xl">{emoji}</span>
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
        {isYearly && (
          <span className="inline-block bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
            باقة سنوية
          </span>
        )}
      </div>

      {/* Pricing */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          {originalPrice && (
            <span className="text-lg text-text-muted line-through">
              {originalPrice} درهم
            </span>
          )}
          <span className="text-3xl font-bold text-primary">
            {price} درهم
          </span>
        </div>
        <div className="text-text-secondary">
          {isYearly ? 'لكامل السنة' : 'شهرياً'}
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="flex-shrink-0">
              <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
                <span className="text-xs text-success-foreground">✓</span>
              </div>
            </div>
            <span className="text-sm text-text-secondary">{feature}</span>
          </div>
        ))}
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-border">
        <div className="text-center">
          <Clock size={16} className="mx-auto text-text-muted mb-1" />
          <div className="text-xs text-text-muted">ساعة+</div>
        </div>
        <div className="text-center">
          <Users size={16} className="mx-auto text-text-muted mb-1" />
          <div className="text-xs text-text-muted">مجموعة</div>
        </div>
        <div className="text-center">
          <BookOpen size={16} className="mx-auto text-text-muted mb-1" />
          <div className="text-xs text-text-muted">مسجل</div>
        </div>
      </div>

      {/* CTA Button */}
      <Button 
        onClick={handleSubscribe}
        className="w-full cta-button group"
        size="lg"
      >
        اشترك الآن
        <ExternalLink size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
      </Button>

      {/* Trust Badge */}
      <div className="text-center mt-4">
        <span className="text-xs text-text-muted">✨ ضمان الجودة والتميز</span>
      </div>
    </div>
  );
};