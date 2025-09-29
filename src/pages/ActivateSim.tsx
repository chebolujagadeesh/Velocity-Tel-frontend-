import React, { useState } from 'react';
import { Smartphone, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

const ActivateSim: React.FC = () => {
  const [activationData, setActivationData] = useState({
    simNumber: '',
    phoneNumber: '',
    zipCode: '',
    email: '',
    firstName: '',
    lastName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setActivationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Activation Submitted",
        description: "Your SIM activation request has been submitted. You'll receive confirmation within 15 minutes.",
      });
      
      // Reset form
      setActivationData({
        simNumber: '',
        phoneNumber: '',
        zipCode: '',
        email: '',
        firstName: '',
        lastName: ''
      });
    }, 2000);
  };

  const activationSteps = [
    {
      step: 1,
      title: 'Insert SIM Card',
      description: 'Insert your VelocityTel SIM card into your device',
      icon: '📱'
    },
    {
      step: 2,
      title: 'Fill Activation Form',
      description: 'Complete the activation form with your details',
      icon: '📝'
    },
    {
      step: 3,
      title: 'Wait for Confirmation',
      description: 'Receive activation confirmation within 15 minutes',
      icon: '⏱️'
    },
    {
      step: 4,
      title: 'Start Using',
      description: 'Your service is now active and ready to use',
      icon: '✅'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-16">
        <div className="container-custom text-center">
          <Smartphone className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Activate Your SIM Card
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Complete your SIM card activation in just a few simple steps. 
            Your service will be active within 15 minutes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Activation Form */}
            <div>
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  SIM Activation Form
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* SIM Number */}
                  <div>
                    <Label htmlFor="simNumber" className="text-sm font-medium text-foreground">
                      SIM Card Number (ICCID) *
                    </Label>
                    <Input
                      id="simNumber"
                      value={activationData.simNumber}
                      onChange={(e) => handleInputChange('simNumber', e.target.value)}
                      placeholder="Enter 19-20 digit SIM number"
                      className="mt-1"
                      required
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Found on your SIM card or packaging
                    </p>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <Label htmlFor="phoneNumber" className="text-sm font-medium text-foreground">
                      Phone Number *
                    </Label>
                    <Input
                      id="phoneNumber"
                      value={activationData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      placeholder="(555) 123-4567"
                      className="mt-1"
                      required
                    />
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={activationData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="John"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={activationData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Doe"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={activationData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@example.com"
                      className="mt-1"
                      required
                    />
                  </div>

                  {/* ZIP Code */}
                  <div>
                    <Label htmlFor="zipCode" className="text-sm font-medium text-foreground">
                      ZIP Code *
                    </Label>
                    <Input
                      id="zipCode"
                      value={activationData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      placeholder="12345"
                      className="mt-1"
                      maxLength={5}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Activating...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Activate SIM Card
                      </>
                    )}
                  </Button>
                </form>

                {/* Important Notes */}
                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium text-foreground mb-1">Important Notes:</p>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Activation typically takes 5-15 minutes</li>
                        <li>• Keep your device powered on during activation</li>
                        <li>• You may need to restart your device after activation</li>
                        <li>• Contact support if activation takes longer than 30 minutes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activation Steps & Help */}
            <div className="space-y-8">
              {/* Steps */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Activation Process
                </h2>
                
                <div className="space-y-6">
                  {activationSteps.map((step, index) => (
                    <div key={step.step} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-lg">{step.icon}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Step {step.step}: {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Need Help?
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Call Support</p>
                      <p className="text-sm text-muted-foreground">(855) 686-0102</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Email Support</p>
                      <p className="text-sm text-muted-foreground">support@velocitytel.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    💬 <strong>Live Chat:</strong> Available 24/7 for instant help with activation issues.
                  </p>
                </div>
              </div>

              {/* Troubleshooting */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Troubleshooting
                </h2>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-medium text-foreground mb-2">SIM Not Detected?</h3>
                    <p className="text-muted-foreground">
                      Ensure the SIM is properly inserted and restart your device.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-foreground mb-2">No Service After Activation?</h3>
                    <p className="text-muted-foreground">
                      Check your network settings and ensure mobile data is enabled.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Activation Taking Too Long?</h3>
                    <p className="text-muted-foreground">
                      Contact our support team if activation isn't complete within 30 minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivateSim;