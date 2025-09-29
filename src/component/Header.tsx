import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getItemCount } = useCart();
  const location = useLocation();
  const itemCount = getItemCount();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Plans', path: '/plans' },
    { name: 'eSIM Activation', path: '/esim-activation' },
    { name: 'Activate SIM', path: '/activate-sim' },
    { name: 'Quick Recharge', path: '/quick-recharge' },
    { name: 'Raise Ticket', path: '/raise-ticket' },
    { name: 'Self Service', path: '/self-service' },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>support@velocitytel.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(855) 686-0102</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/coverage" className="hover:text-primary transition-colors">Coverage</Link>
            <Link to="/byop" className="hover:text-primary transition-colors">BYOP</Link>
            <Link to="/support" className="hover:text-primary transition-colors">Support</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">∞</span>
            </div>
            <span className="text-2xl font-heading font-bold text-foreground">
              VelocityTel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  isActivePath(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <ShoppingCart className="h-6 w-6 text-foreground" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* My Account */}
            <Link to="/my-account">
              <Button variant="outline" className="hidden md:flex">
                My Account
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                    isActivePath(item.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/my-account"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200 font-medium"
              >
                My Account
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;