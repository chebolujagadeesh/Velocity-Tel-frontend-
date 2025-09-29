import React, { useState } from 'react';
import { Check, Smartphone, CreditCard, Shield, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const BYOP = () => {
  const [imei, setImei] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [checkResult, setCheckResult] = useState<'compatible' | 'incompatible' | null>(null);

  const compatibleBrands = [
    'Apple iPhone', 'Samsung Galaxy', 'Google Pixel', 'OnePlus', 'Motorola',
    'LG', 'Sony Xperia', 'Huawei', 'Xiaomi', 'Nokia'
  ];

  const steps = [
    {
      icon: Smartphone,
      title: 'Check Compatibility',
      description: 'Enter your device IMEI to verify compatibility with our network.',
    },
    {
      icon: CreditCard,
      title: 'Order Your SIM',
      description: 'Get a free SIM card delivered to your door or pick up at a store.',
    },
    {
      icon: Shield,
      title: 'Activate Service',
      description: 'Follow simple activation steps and start using your device.',
    },
  ];

  const handleIMEICheck = () => {
    if (!imei.trim()) return;
    
    setIsChecking(true);
    // Simulate API call
    setTimeout(() => {
      // Random result for demo - in real app this would call an API
      setCheckResult(Math.random() > 0.2 ? 'compatible' : 'incompatible');
      setIsChecking(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Bring Your Own Phone
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Keep your current device and switch to VelocityTel for better service and savings
          </p>
        </div>
      </section>

      {/* IMEI Checker */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Check Device Compatibility
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Enter your device's IMEI number to see if it works with our network
            </p>
            
            <div className="bg-card p-8 rounded-lg border">
              <div className="space-y-4">
                <div>
                  <label htmlFor="imei" className="block text-sm font-medium text-foreground mb-2">
                    IMEI Number
                  </label>
                  <input
                    id="imei"
                    type="text"
                    value={imei}
                    onChange={(e) => setImei(e.target.value)}
                    placeholder="Enter 15-digit IMEI (dial *#06#)"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground"
                    maxLength={15}
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Find your IMEI by dialing *#06# on your phone
                  </p>
                </div>
                
                <Button
                  onClick={handleIMEICheck}
                  disabled={!imei.trim() || isChecking}
                  className="w-full"
                >
                  {isChecking ? 'Checking...' : 'Check Compatibility'}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>

                {checkResult && (
                  <div className={`p-4 rounded-lg ${
                    checkResult === 'compatible' 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    {checkResult === 'compatible' ? (
                      <div className="text-green-800">
                        <Check className="h-5 w-5 inline mr-2" />
                        Great! Your device is compatible with our network.
                      </div>
                    ) : (
                      <div className="text-red-800">
                        Unfortunately, this device may not be fully compatible with our network.
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to switch to VelocityTel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-primary font-semibold mb-2">Step {index + 1}</div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compatible Devices */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Compatible Device Brands
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Most unlocked devices from these brands work with our network
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {compatibleBrands.map((brand, index) => (
              <div key={index} className="text-center p-4 bg-card rounded-lg border">
                <Check className="h-6 w-6 text-primary mx-auto mb-2" />
                <span className="font-medium text-foreground">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BYOP;