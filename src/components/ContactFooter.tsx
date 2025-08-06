import { Button } from '@/components/ui/button';
import { MessageCircle, Video } from 'lucide-react';
import physixspertLogo from '@/assets/physixspert-logo.png';

export const ContactFooter = () => {
  const socialLinks = [
    {
      name: 'قناة تليجرام',
      icon: <MessageCircle size={24} />,
      url: 'https://t.me/Elshenawy_Physics',
      description: 'انضم لقناتنا على التليجرام للحصول على آخر الأخبار والمحدثات',
      color: 'primary'
    },
    {
      name: 'تيك توك',
      icon: <Video size={24} />,
      url: 'https://www.tiktok.com/@physixspert?_t=ZS-8wGbEpLvJtx&_r=1',
      description: 'تابعنا على تيك توك لمقاطع تعليمية قصيرة ومفيدة',
      color: 'secondary'
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="contact" className="bg-background border-t border-border">
      {/* Contact Section */}
      <div className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              تواصل معنا
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              هل لديك أسئلة؟ تواصل معنا عبر قنواتنا الرسمية ونحن سعداء للإجابة عن استفساراتك
            </p>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {socialLinks.map((link, index) => (
              <div 
                key={index}
                className="bg-card border border-card-border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${link.color}-light mb-6`}>
                  <div className={`text-${link.color}`}>
                    {link.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {link.name}
                </h3>
                
                <p className="text-text-secondary mb-6">
                  {link.description}
                </p>
                
                <Button 
                  className={`cta-button ${link.color === 'secondary' ? 'bg-secondary hover:bg-secondary-hover' : ''}`}
                  onClick={() => handleSocialClick(link.url)}
                >
                  {link.name === 'قناة تليجرام' ? 'انضم للقناة' : 'تابعنا'}
                </Button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-card border border-card-border rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              هل أنت مستعد لبدء رحلتك التعليمية؟
            </h3>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              انضم إلى مئات الطلاب الذين حققوا التميز في الفيزياء مع PhysixsPert
            </p>
            <Button 
              size="lg"
              className="cta-button text-lg px-8 py-4"
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
            >
              اختر دورتك الآن
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-border py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <img 
                src={physixspertLogo} 
                alt="PhysixsPert" 
                className="h-8 w-auto mr-3"
              />
              <div>
                <div className="text-lg font-bold text-text-primary">PhysixsPert</div>
                <div className="text-sm text-text-secondary">الفيزياء مع الأستاذ إسلام</div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-text-secondary text-sm text-center">
              <p>© 2025 PhysixsPert + <a href="https://t.me/iivoz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">https://t.me/iivoz</a>. جميع الحقوق محفوظة.</p>
              <p className="mt-1">تم تصميم الموقع باشراف استاذ اسلام الشناوي</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};