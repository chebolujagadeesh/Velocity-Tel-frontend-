import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, CreditCard, Smartphone, Settings, FileText, 
  Phone, RefreshCw, MapPin, Shield, HelpCircle 
} from 'lucide-react';
import { Button } from '../components/ui/button';

const SelfService: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Account Management',
      icon: User,
      color: 'from-primary to-primary-dark',
      services: [
        {
          title: 'View Account Details',
          description: 'Check your account information and plan details',
          link: '/my-account',
          icon: '👤'
        },
        {
          title: 'Update Personal Info',
          description: 'Change your name, address, or contact information',
          link: '/my-account',
          icon: '✏️'
        },
        {
          title: 'Manage Security Settings',
          description: 'Update password and security preferences',
          link: '/my-account',
          icon: '🔒'
        }
      ]
    },
    {
      title: 'Billing & Payments',
      icon: CreditCard,
      color: 'from-success to-green-600',
      services: [
        {
          title: 'View Bills & Statements',
          description: 'Download and view your billing history',
          link: '/my-account',
          icon: '📄'
        },
        {
          title: 'Make a Payment',
          description: 'Pay your bill or add credit to your account',
          link: '/quick-recharge',
          icon: '💰'
        },
        {
          title: 'Auto-Pay Setup',
          description: 'Set up automatic payments for convenience',
          link: '/my-account',
          icon: '🔄'
        }
      ]
    },
    {
      title: 'Plan & Services',
      icon: Smartphone,
      color: 'from-accent to-blue-600',
      services: [
        {
          title: 'Change Your Plan',
          description: 'Upgrade, downgrade, or switch to a different plan',
          link: '/plans',
          icon: '📱'
        },
        {
          title: 'Add Features',
          description: 'Add international calling, hotspot, or other features',
          link: '/plans',
          icon: '➕'
        },
        {
          title: 'Usage History',
          description: 'Check your data, call, and text usage',
          link: '/my-account',
          icon: '📊'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: Settings,
      color: 'from-warning to-orange-500',
      services: [
        {
          title: 'SIM Card Issues',
          description: 'Troubleshoot SIM activation or replacement',
          link: '/activate-sim',
          icon: '🔧'
        },
        {
          title: 'Network Troubleshooting',
          description: 'Fix connectivity and signal issues',
          link: '/raise-ticket',
          icon: '📶'
        },
        {
          title: 'Device Setup Help',
          description: 'Get help configuring your device settings',
          link: '/raise-ticket',
          icon: '⚙️'
        }
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Check Balance',
      description: 'View your current account balance and usage',
      icon: CreditCard,
      link: '/my-account',
      color: 'bg-primary'
    },
    {
      title: 'Pay Bill',
      description: 'Make a quick payment or recharge',
      icon: RefreshCw,
      link: '/quick-recharge',
      color: 'bg-success'
    },
    {
      title: 'Find Store',
      description: 'Locate the nearest VelocityTel store',
      icon: MapPin,
      link: '#',
      color: 'bg-accent'
    },
    {
      title: 'Get Support',
      description: 'Contact our support team for help',
      icon: HelpCircle,
      link: '/raise-ticket',
      color: 'bg-warning'
    }
  ];

  const popularGuides = [
    {
      title: 'How to Activate Your SIM Card',
      description: 'Step-by-step guide to activate your new SIM',
      readTime: '3 min read',
      link: '/activate-sim'
    },
    {
      title: 'Setting Up eSIM on Your Device',
      description: 'Complete guide for eSIM activation',
      readTime: '5 min read',
      link: '/esim-activation'
    },
    {
      title: 'Understanding Your Bill',
      description: 'Learn how to read and understand your monthly bill',
      readTime: '4 min read',
      link: '/my-account'
    },
    {
      title: 'Troubleshooting Network Issues',
      description: 'Common fixes for connectivity problems',
      readTime: '6 min read',
      link: '/raise-ticket'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-gray-800 text-secondary-foreground py-16">
        <div className="container-custom text-center">
          <Shield className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Self Service Portal
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Manage your account, pay bills, and get support - all in one place. 
            Quick, easy, and available 24/7.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Quick Actions
            </h2>
            <p className="text-xl text-muted-foreground">
              Most common tasks at your fingertips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Link key={index} to={action.link}>
                  <div className="group p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {action.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {action.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              All Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to manage your VelocityTel account
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex} className="bg-card border border-border rounded-xl overflow-hidden">
                  {/* Category Header */}
                  <div className={`p-6 bg-gradient-to-r ${category.color} text-white`}>
                    <div className="flex items-center space-x-3">
                      <IconComponent className="h-8 w-8" />
                      <h3 className="text-2xl font-heading font-bold">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {category.services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={service.link}
                          className="block p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all duration-200"
                        >
                          <div className="flex items-start space-x-3">
                            <span className="text-2xl">{service.icon}</span>
                            <div>
                              <h4 className="font-semibold text-foreground mb-1">
                                {service.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Popular Guides
            </h2>
            <p className="text-xl text-muted-foreground">
              Step-by-step guides to help you get the most out of your service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularGuides.map((guide, index) => (
              <Link
                key={index}
                to={guide.link}
                className="group p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <FileText className="h-6 w-6 text-primary" />
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {guide.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <Phone className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-heading font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our support team is here to help you 24/7. Get personalized assistance 
            for any questions or issues you may have.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/raise-ticket">
              <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
                Contact Support
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
            >
              Call (855) 686-0102
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelfService;