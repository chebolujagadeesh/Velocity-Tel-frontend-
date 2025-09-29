import React, { useState } from 'react';
import { Smartphone, Wifi, Globe, Check, QrCode, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';

const ESimActivation: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Choose Your eSIM Plan',
      description: 'Select the perfect eSIM plan for your needs',
      icon: Smartphone,
    },
    {
      id: 2,
      title: 'Download eSIM Profile',
      description: 'Get your QR code and download instructions',
      icon: Download,
    },
    {
      id: 3,
      title: 'Scan QR Code',
      description: 'Use your device to scan the eSIM QR code',
      icon: QrCode,
    },
    {
      id: 4,
      title: 'Connect & Enjoy',
      description: 'Your eSIM is ready! Start using your new plan',
      icon: Wifi,
    },
  ];

  const benefits = [
    'Instant activation - no waiting for physical SIM',
    'Perfect for travel and international use',
    'Switch between carriers without changing SIMs',
    'Environmentally friendly digital solution',
    'Dual SIM functionality on supported devices',
    'Secure and encrypted digital profile',
  ];

  const compatibleDevices = [
    'iPhone XS and newer',
    'Samsung Galaxy S20 and newer',
    'Google Pixel 3 and newer',
    'iPad Pro (3rd generation) and newer',
    'Most recent Android devices',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-blue-600 text-white py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Instant eSIM Activation
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Go digital with our instant eSIM activation. No physical SIM cards needed - 
                get connected in minutes with our seamless digital solution.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                  <Globe className="h-5 w-5 mr-2" />
                  Get eSIM Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <QrCode className="h-32 w-32 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              How eSIM Activation Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get connected in just 4 simple steps. No technical knowledge required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => {
              const IconComponent = step.icon;
              const isCompleted = step.id <= activeStep;
              const isActive = step.id === activeStep;
              
              return (
                <div
                  key={step.id}
                  className={`text-center cursor-pointer transition-all duration-300 ${
                    isActive ? 'transform scale-105' : ''
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {isCompleted && step.id < activeStep ? (
                      <Check className="h-10 w-10" />
                    ) : (
                      <IconComponent className="h-10 w-10" />
                    )}
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${
                    isActive ? 'text-primary' : 'text-foreground'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* eSIM Plans */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Available eSIM Plans
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our selection of eSIM plans designed for different needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.esims.map((esim) => (
              <ProductCard key={esim.id} product={esim} />
            ))}
            {/* Add a traditional plan that supports eSIM */}
            <ProductCard product={{
              ...productsData.plans[0],
              id: 'gaming-esim',
              name: 'Gaming Pro eSIM',
              description: 'Gaming plan with instant eSIM activation'
            }} />
          </div>
        </div>
      </section>

      {/* Benefits & Compatibility */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Why Choose eSIM?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Device Compatibility */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Compatible Devices
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <ul className="space-y-3">
                  {compatibleDevices.map((device, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Smartphone className="h-5 w-5 text-primary" />
                      <span className="text-muted-foreground">{device}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    💡 <strong>Tip:</strong> Check your device settings under 
                    "Cellular" or "Mobile Data" to see if eSIM is supported.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What is an eSIM?",
                a: "An eSIM (embedded SIM) is a digital SIM that allows you to activate a cellular plan without having to use a physical nano-SIM card."
              },
              {
                q: "How long does activation take?",
                a: "eSIM activation is instant! Once you scan the QR code, your plan will be active within minutes."
              },
              {
                q: "Can I use eSIM while traveling?",
                a: "Yes! eSIM is perfect for travel. You can easily switch between different carriers and plans without changing physical SIM cards."
              },
              {
                q: "What if I need help with activation?",
                a: "Our 24/7 support team is here to help. Contact us via chat, phone, or email for assistance with your eSIM activation."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Go Digital?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of users who have made the switch to eSIM. 
            Get instant activation and enjoy seamless connectivity.
          </p>
          <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            <QrCode className="h-5 w-5 mr-2" />
            Activate eSIM Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ESimActivation;