import React, { useState } from 'react';
import { CreditCard, Smartphone, Zap, History, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

const QuickRecharge: React.FC = () => {
  const [rechargeData, setRechargeData] = useState({
    phoneNumber: '',
    amount: '',
    paymentMethod: 'credit'
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const quickAmounts = [25, 50, 75, 100, 150, 200];
  
  const recentRecharges = [
    { phone: '(555) 123-4567', amount: 50, date: '2024-01-15', status: 'completed' },
    { phone: '(555) 987-6543', amount: 100, date: '2024-01-10', status: 'completed' },
    { phone: '(555) 456-7890', amount: 75, date: '2024-01-05', status: 'completed' },
  ];

  const handleAmountSelect = (amount: number) => {
    setRechargeData(prev => ({ ...prev, amount: amount.toString() }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Recharge Successful!",
        description: `$${rechargeData.amount} has been added to ${rechargeData.phoneNumber}`,
      });
      
      // Reset form
      setRechargeData({
        phoneNumber: '',
        amount: '',
        paymentMethod: 'credit'
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-success to-green-600 text-white py-16">
        <div className="container-custom text-center">
          <Zap className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Quick Recharge
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Instantly recharge your mobile plan with our fast and secure payment system. 
            Add credit to your account in seconds.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recharge Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center">
                  <Smartphone className="h-6 w-6 mr-2 text-primary" />
                  Recharge Your Account
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Phone Number */}
                  <div>
                    <Label htmlFor="phoneNumber" className="text-sm font-medium text-foreground">
                      Phone Number *
                    </Label>
                    <Input
                      id="phoneNumber"
                      value={rechargeData.phoneNumber}
                      onChange={(e) => setRechargeData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                      placeholder="(555) 123-4567"
                      className="mt-1"
                      required
                    />
                  </div>

                  {/* Quick Amount Selection */}
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-3 block">
                      Quick Amount Selection
                    </Label>
                    <div className="grid grid-cols-3 gap-3">
                      {quickAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          onClick={() => handleAmountSelect(amount)}
                          variant={rechargeData.amount === amount.toString() ? 'default' : 'outline'}
                          className="h-16 text-lg font-semibold"
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount */}
                  <div>
                    <Label htmlFor="amount" className="text-sm font-medium text-foreground">
                      Or Enter Custom Amount *
                    </Label>
                    <div className="relative mt-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="amount"
                        type="number"
                        value={rechargeData.amount}
                        onChange={(e) => setRechargeData(prev => ({ ...prev, amount: e.target.value }))}
                        placeholder="0.00"
                        className="pl-8"
                        min="10"
                        max="500"
                        required
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Minimum $10, Maximum $500
                    </p>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-3 block">
                      Payment Method
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { id: 'credit', name: 'Credit Card', icon: '💳' },
                        { id: 'debit', name: 'Debit Card', icon: '💰' },
                        { id: 'paypal', name: 'PayPal', icon: '🅿️' }
                      ].map((method) => (
                        <Button
                          key={method.id}
                          type="button"
                          onClick={() => setRechargeData(prev => ({ ...prev, paymentMethod: method.id }))}
                          variant={rechargeData.paymentMethod === method.id ? 'default' : 'outline'}
                          className="h-20 flex-col space-y-1"
                        >
                          <span className="text-2xl">{method.icon}</span>
                          <span className="text-sm">{method.name}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isProcessing || !rechargeData.phoneNumber || !rechargeData.amount}
                    className="w-full btn-primary text-lg py-4"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        <CreditCard className="h-5 w-5 mr-2" />
                        Recharge ${rechargeData.amount || '0'}
                      </>
                    )}
                  </Button>
                </form>

                {/* Security Notice */}
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground flex items-center">
                    🔒 <span className="ml-2">Secure payment processing with 256-bit SSL encryption</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Recharges */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center">
                  <History className="h-5 w-5 mr-2 text-primary" />
                  Recent Recharges
                </h3>
                
                {recentRecharges.length > 0 ? (
                  <div className="space-y-3">
                    {recentRecharges.map((recharge, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="font-medium text-foreground text-sm">{recharge.phone}</p>
                          <p className="text-xs text-muted-foreground">{recharge.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-success">${recharge.amount}</p>
                          <p className="text-xs text-muted-foreground capitalize">{recharge.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">No recent recharges</p>
                )}
              </div>

              {/* Quick Tips */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center">
                  <Star className="h-5 w-5 mr-2 text-warning" />
                  Quick Tips
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">Recharges are processed instantly</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">Save payment methods for faster future recharges</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">Set up auto-recharge to never run out of credit</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">Get email notifications for all transactions</span>
                  </div>
                </div>
              </div>

              {/* Auto-Recharge Promo */}
              <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-xl p-6">
                <h3 className="text-lg font-heading font-semibold mb-2">
                  Try Auto-Recharge
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  Never worry about running out of credit. Set up automatic recharges and get 5% bonus credit!
                </p>
                <Button className="w-full bg-white text-primary hover:bg-gray-100">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Why Choose Our Recharge Service?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Instant Processing',
                description: 'Your recharge is processed immediately with real-time confirmation'
              },
              {
                icon: '🔒',
                title: 'Secure Payments',
                description: 'Bank-level security with encrypted transactions and fraud protection'
              },
              {
                icon: '💰',
                title: 'No Hidden Fees',
                description: 'What you see is what you pay - no additional charges or fees'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuickRecharge;