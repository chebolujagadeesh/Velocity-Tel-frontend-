import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { name: 'Plans', path: '/plans' },
      { name: 'eSIM Activation', path: '/esim-activation' },
      { name: 'Activate SIM', path: '/activate-sim' },
      { name: 'Quick Recharge', path: '/quick-recharge' },
    ],
    'Support': [
      { name: 'Raise Ticket', path: '/raise-ticket' },
      { name: 'Self Service', path: '/self-service' },
      { name: 'Coverage Map', path: '/coverage' },
      { name: 'FAQ', path: '/faq' },
    ],
    'Company': [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/velocitytel', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/velocitytel', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/velocitytel', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/velocitytel', label: 'YouTube' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">∞</span>
              </div>
              <span className="text-2xl font-heading font-bold">VelocityTel</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Experience premium wireless service with the best affordable phone plans. 
              No contracts, no credit checks, and zero hidden fees.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>(855) 686-0102</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@velocitytel.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Available Nationwide</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h3 className="font-semibold text-primary mb-2">Stay Connected</h3>
              <p className="text-muted-foreground text-sm">Get the latest updates on plans and offers</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg border border-border bg-background text-foreground w-full sm:w-auto min-w-[250px]"
              />
              <button className="btn-primary whitespace-nowrap w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} VelocityTel. All rights reserved. | Made with ❤️ for better connectivity
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;