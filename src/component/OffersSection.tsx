import React from 'react';
import { Gift, Clock, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  icon: React.ComponentType<any>;
  link: string;
  color: 'primary' | 'accent' | 'success' | 'warning';
}

const OffersSection: React.FC = () => {
  const offers: Offer[] = [
    {
      id: 'gaming-special',
      title: 'Gaming Pro Special',
      description: 'Get unlimited 15GB/month perfect for gaming and streaming',
      discount: '25% OFF',
      validUntil: '2024-12-31',
      icon: Zap,
      link: '/plans',
      color: 'primary'
    },
    {
      id: 'family-deal',
      title: 'Family Bundle Deal',
      description: 'Save more with family plans - up to 4 lines included',
      discount: 'Family Special',
      validUntil: '2024-11-30',
      icon: Users,
      link: '/plans',
      color: 'accent'
    },
    {
      id: 'student-discount',
      title: 'Student Discount',
      description: 'Special pricing for students with valid student ID',
      discount: '30% OFF',
      validUntil: '2024-12-15',
      icon: Gift,
      link: '/plans',
      color: 'success'
    },
    {
      id: 'limited-time',
      title: 'Limited Time Offer',
      description: 'First month free on all annual plans - act fast!',
      discount: 'FREE Month',
      validUntil: '2024-10-31',
      icon: Clock,
      link: '/plans',
      color: 'warning'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'from-primary to-primary-dark text-primary-foreground',
      accent: 'from-accent to-blue-600 text-white',
      success: 'from-success to-green-600 text-white',
      warning: 'from-warning to-orange-500 text-white'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Current Offers & Discounts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these limited-time deals and save big on your mobile plans
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => {
            const IconComponent = offer.icon;
            return (
              <div
                key={offer.id}
                className="relative group overflow-hidden rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(offer.color)} opacity-90`}></div>
                
                {/* Content */}
                <div className="relative p-6 text-center">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Discount Badge */}
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-3">
                    {offer.discount}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-semibold mb-2 text-white">
                    {offer.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">
                    {offer.description}
                  </p>

                  {/* Valid Until */}
                  <p className="text-white/80 text-xs mb-4">
                    Valid until: {new Date(offer.validUntil).toLocaleDateString()}
                  </p>

                  {/* CTA Button */}
                  <Link to={offer.link}>
                    <Button 
                      variant="secondary"
                      className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold"
                    >
                      Claim Offer
                    </Button>
                  </Link>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link to="/plans">
            <Button className="btn-primary text-lg px-8 py-4">
              View All Plans & Offers
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;