import React from 'react';
import { Phone, Mail, MessageCircle, Clock, MapPin, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Support = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with our expert support team',
      contact: '(855) 686-0102',
      hours: '24/7 Available',
      action: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions and concerns',
      contact: 'support@velocitytel.com',
      hours: 'Response within 24 hours',
      action: 'Send Email',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support agents instantly',
      contact: 'Available on website',
      hours: 'Mon-Fri, 8AM-10PM EST',
      action: 'Start Chat',
    },
  ];

  const supportTopics = [
    {
      title: 'Account & Billing',
      description: 'Manage your account, view bills, and payment options',
      link: '/my-account',
    },
    {
      title: 'Activate SIM',
      description: 'Get help activating your new SIM card',
      link: '/activate-sim',
    },
    {
      title: 'eSIM Activation',
      description: 'Activate your eSIM with step-by-step guidance',
      link: '/esim-activation',
    },
    {
      title: 'Quick Recharge',
      description: 'Add credit to your prepaid account instantly',
      link: '/quick-recharge',
    },
    {
      title: 'Network Coverage',
      description: 'Check coverage in your area',
      link: '/coverage',
    },
    {
      title: 'Bring Your Phone',
      description: 'Check if your device is compatible',
      link: '/byop',
    },
  ];

  const faqItems = [
    {
      question: 'How do I activate my new SIM card?',
      answer: 'Visit our Activate SIM page and follow the simple step-by-step process.',
    },
    {
      question: 'Can I keep my current phone number?',
      answer: 'Yes, you can port your number from any carrier. The process usually takes 24-48 hours.',
    },
    {
      question: 'What happens if I use all my data?',
      answer: 'Depending on your plan, you may have reduced speeds or can purchase additional data.',
    },
    {
      question: 'How do I check my account balance?',
      answer: 'Log into your account online or use our mobile app to check your balance and usage.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Customer Support
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            We're here to help you 24/7 with any questions or issues you may have
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the best way to reach our support team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="text-center p-6 bg-card rounded-lg border">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="font-medium text-foreground">{method.contact}</div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {method.hours}
                    </div>
                  </div>
                  <Button className="w-full">{method.action}</Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Help Topics */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Quick Help Topics
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers and tools for common tasks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportTopics.map((topic, index) => (
              <Link key={index} to={topic.link} className="block">
                <div className="p-6 bg-card rounded-lg border hover:border-primary transition-colors">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-muted-foreground">{topic.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {item.question}
                </h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/raise-ticket">
              <Button className="btn-primary text-lg px-8 py-4">
                Raise a Support Ticket
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;