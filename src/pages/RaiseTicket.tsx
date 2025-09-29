import React, { useState } from 'react';
import { Send, Phone, Mail, MessageCircle, Clock, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';

const RaiseTicket: React.FC = () => {
  const [ticketData, setTicketData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    description: '',
    priority: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const categories = [
    'Technical Support',
    'Billing & Payment',
    'Plan Changes',
    'SIM Activation',
    'eSIM Issues',
    'Network Coverage',
    'Account Management',
    'General Inquiry'
  ];

  const priorities = [
    { value: 'low', label: 'Low Priority', description: 'General questions, non-urgent issues' },
    { value: 'medium', label: 'Medium Priority', description: 'Service disruptions, billing questions' },
    { value: 'high', label: 'High Priority', description: 'Account security, urgent technical issues' }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: '24/7 phone support for urgent issues',
      contact: '(855) 686-0102',
      availability: 'Available now'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Quick help through our chat system',
      contact: 'Start chat',
      availability: 'Average wait: 2 minutes'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed support via email',
      contact: 'support@velocitytel.com',
      availability: 'Response within 4 hours'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate ticket submission
    setTimeout(() => {
      setIsSubmitting(false);
      const ticketId = `INF-${Date.now().toString().slice(-6)}`;
      toast({
        title: "Ticket Created Successfully!",
        description: `Your ticket ${ticketId} has been created. We'll respond within 4 hours.`,
      });
      
      // Reset form
      setTicketData({
        name: '',
        email: '',
        phone: '',
        category: '',
        subject: '',
        description: '',
        priority: 'medium'
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-accent to-blue-600 text-white py-16">
        <div className="container-custom text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get Support
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Need help? We're here for you 24/7. Create a support ticket or 
            contact us directly for immediate assistance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Ticket Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Create Support Ticket
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={ticketData.name}
                        onChange={(e) => setTicketData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="John Doe"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={ticketData.email}
                        onChange={(e) => setTicketData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="john@example.com"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={ticketData.phone}
                      onChange={(e) => setTicketData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="(555) 123-4567"
                      className="mt-1"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <Label htmlFor="category" className="text-sm font-medium text-foreground">
                      Issue Category *
                    </Label>
                    <select
                      id="category"
                      value={ticketData.category}
                      onChange={(e) => setTicketData(prev => ({ ...prev, category: e.target.value }))}
                      className="mt-1 w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                      required
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Priority */}
                  <div>
                    <Label className="text-sm font-medium text-foreground mb-3 block">
                      Priority Level *
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {priorities.map((priority) => (
                        <div
                          key={priority.value}
                          className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                            ticketData.priority === priority.value
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => setTicketData(prev => ({ ...prev, priority: priority.value }))}
                        >
                          <h3 className="font-medium text-foreground mb-1">{priority.label}</h3>
                          <p className="text-xs text-muted-foreground">{priority.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      value={ticketData.subject}
                      onChange={(e) => setTicketData(prev => ({ ...prev, subject: e.target.value }))}
                      placeholder="Brief description of your issue"
                      className="mt-1"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description" className="text-sm font-medium text-foreground">
                      Detailed Description *
                    </Label>
                    <Textarea
                      id="description"
                      value={ticketData.description}
                      onChange={(e) => setTicketData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Please provide detailed information about your issue, including any error messages, steps you've tried, and when the problem started..."
                      className="mt-1 min-h-[120px]"
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
                        Creating Ticket...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Submit Ticket
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Options */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                  Other Ways to Get Help
                </h3>
                
                <div className="space-y-4">
                  {supportChannels.map((channel, index) => {
                    const IconComponent = channel.icon;
                    return (
                      <div key={index} className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                        <div className="flex items-start space-x-3">
                          <IconComponent className="h-5 w-5 text-primary mt-1" />
                          <div className="flex-1">
                            <h4 className="font-medium text-foreground">{channel.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{channel.description}</p>
                            <p className="text-sm font-medium text-primary">{channel.contact}</p>
                            <p className="text-xs text-muted-foreground">{channel.availability}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Response Times */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Expected Response Times
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">High Priority</span>
                    <span className="text-sm font-medium text-foreground">Within 1 hour</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Medium Priority</span>
                    <span className="text-sm font-medium text-foreground">Within 4 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Low Priority</span>
                    <span className="text-sm font-medium text-foreground">Within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-4 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-warning" />
                  Tips for Faster Resolution
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">Include your phone number and account details</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">Describe the exact error messages you see</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">Mention what device and OS you're using</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">List the troubleshooting steps you've already tried</span>
                  </div>
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
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "How long does it take to get a response?",
                a: "Response times vary by priority: High priority issues get responses within 1 hour, medium priority within 4 hours, and low priority within 24 hours."
              },
              {
                q: "Can I track my ticket status?",
                a: "Yes! You'll receive a ticket number via email and can track your ticket status in your account dashboard or by replying to the confirmation email."
              },
              {
                q: "What information should I include?",
                a: "Include your phone number, account details, device information, error messages, and steps you've already tried to resolve the issue."
              },
              {
                q: "Is phone support available 24/7?",
                a: "Yes, our phone support is available 24/7 at (855) 686-0102 for urgent issues. For general inquiries, tickets are often faster."
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
    </div>
  );
};

export default RaiseTicket;