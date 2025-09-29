import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Users, Shield, Zap, Globe } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import OffersSection from '../components/OffersSection';
import ProductCard from '../components/ProductCard';
import { Button } from '../components/ui/button';
import productsData from '../data/products.json';

const Index = () => {
  // Get featured products (popular ones)
  const featuredPlans = productsData.plans.filter(plan => plan.popular);
  const featuredESims = productsData.esims.slice(0, 2);

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast 5G',
      description: 'Experience blazing-fast speeds with our advanced 5G network coverage.',
    },
    {
      icon: Users,
      title: 'Family Plans',
      description: 'Save more with family bundles and keep everyone connected.',
    },
    {
      icon: Shield,
      title: 'No Contracts',
      description: 'Enjoy flexibility with no long-term contracts or hidden fees.',
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Stay connected anywhere with our extensive network coverage.',
    },
  ];

  const stats = [
    { value: '150+', label: 'Countries Covered' },
    { value: '99.9%', label: 'Network Uptime' },
    { value: '24/7', label: 'Customer Support' },
    { value: '5M+', label: 'Happy Customers' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose VelocityTel?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience premium wireless service with unbeatable features and benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center fade-in">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Plans */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Featured Plans
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our most popular plans designed for your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPlans.map((plan) => (
              <ProductCard key={plan.id} product={plan} />
            ))}
            {featuredESims.map((esim) => (
              <ProductCard key={esim.id} product={esim} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/plans">
              <Button className="btn-primary text-lg px-8 py-4">
                View All Plans
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <OffersSection />

      {/* Stats Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Experience Premium Wireless?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join millions of satisfied customers and enjoy unbeatable coverage, 
            affordable plans, and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/plans">
              <Button 
                variant="secondary" 
                className="text-lg px-8 py-4 w-full sm:w-auto"
              >
                Get Started Now
              </Button>
            </Link>
            <Link to="/raise-ticket">
              <Button 
                variant="outline" 
                className="text-lg px-8 py-4 w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
