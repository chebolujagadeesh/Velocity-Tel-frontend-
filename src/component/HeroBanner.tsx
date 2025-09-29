import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import heroGaming from '../assets/hero-gaming.jpg';
import heroPlans from '../assets/hero-plans.jpg';
import heroEsim from '../assets/hero-esim.jpg';

interface BannerSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price?: string;
  duration?: string;
  image: string;
  cta: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
}

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: BannerSlide[] = [
    {
      id: 1,
      title: "Fuel Every Game with",
      subtitle: "VelocityTel Speed",
      description: "Unlimited 15GB/Mo for just $112 for 12 months. Unlimited Nationwide Talk & Text",
      price: "$112",
      duration: "for 12 Months",
      image: heroGaming,
      cta: {
        text: "Get Started Now",
        link: "/plans"
      },
      secondaryCta: {
        text: "View Plans",
        link: "/plans"
      }
    },
    {
      id: 2,
      title: "Premium Wireless Service",
      subtitle: "Best Affordable Plans",
      description: "Experience unbeatable coverage and premium wireless service at budget-friendly prices with no contracts and zero hidden fees.",
      image: heroPlans,
      cta: {
        text: "Explore Plans",
        link: "/plans"
      },
      secondaryCta: {
        text: "Learn More",
        link: "/about"
      }
    },
    {
      id: 3,
      title: "Instant eSIM Activation",
      subtitle: "Go Digital Today",
      description: "Activate your eSIM instantly and enjoy seamless connectivity across 150+ countries. Perfect for travelers and digital nomads.",
      image: heroEsim,
      cta: {
        text: "Activate eSIM",
        link: "/esim-activation"
      },
      secondaryCta: {
        text: "Learn About eSIM",
        link: "/esim-activation"
      }
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentSlideData.image}
          alt={currentSlideData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-4">
              {currentSlideData.title}
              <br />
              <span className="text-primary">{currentSlideData.subtitle}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              {currentSlideData.description}
            </p>

            {/* Pricing (for gaming slide) */}
            {currentSlideData.price && (
              <div className="flex items-baseline space-x-4 mb-8">
                <span className="text-5xl font-heading font-bold text-warning">
                  {currentSlideData.price}
                </span>
                <span className="text-xl text-gray-300">
                  {currentSlideData.duration}
                </span>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to={currentSlideData.cta.link}>
                <Button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                  <Play className="h-5 w-5 mr-2" />
                  {currentSlideData.cta.text}
                </Button>
              </Link>
              
              {currentSlideData.secondaryCta && (
                <Link to={currentSlideData.secondaryCta.link}>
                  <Button 
                    variant="outline" 
                    className="text-lg px-8 py-4 w-full sm:w-auto border-white text-white hover:bg-white hover:text-black"
                  >
                    {currentSlideData.secondaryCta.text}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-primary scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;