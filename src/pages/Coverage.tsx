import React from 'react';
import { Check, MapPin, Signal, Smartphone } from 'lucide-react';

const Coverage = () => {
  const coverageStats = [
    { value: '99.7%', label: 'Population Coverage' },
    { value: '150+', label: 'Countries' },
    { value: '2.5M+', label: 'Cell Towers' },
    { value: '5G', label: 'Network Ready' },
  ];

  const networkFeatures = [
    {
      icon: Signal,
      title: '5G Ultra Fast',
      description: 'Experience lightning-fast speeds with our advanced 5G network.',
    },
    {
      icon: MapPin,
      title: 'Nationwide Coverage',
      description: 'Stay connected from coast to coast with our extensive network.',
    },
    {
      icon: Smartphone,
      title: 'Compatible Devices',
      description: 'Works with all major smartphone brands and models.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Network Coverage
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Experience reliable connectivity across the nation with our extensive network coverage
          </p>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {coverageStats.map((stat, index) => (
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

      {/* Network Features */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Advanced Network Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on cutting-edge infrastructure for superior performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {networkFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg bg-card border">
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

      {/* Coverage Areas */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Coverage Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strong signal strength in all major metropolitan and rural areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'New York City', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia',
              'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville'
            ].map((city, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
                <Check className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coverage;