import React from 'react';
import { Star, Check, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../context/CartContext';
import { useToast } from '../hooks/use-toast';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  duration: string;
  category: string;
  description: string;
  features: string[];
  offer?: string;
  popular?: boolean;
  image: string;
}

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variant = 'default' }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const getImagePlaceholder = (imageType: string) => {
    const imageMap: { [key: string]: string } = {
      gaming: "🎮",
      family: "👨‍👩‍👧‍👦",
      business: "💼",
      student: "🎓",
      travel: "✈️",
      "business-travel": "🌍",
      "sim-kit": "📱",
      "sim-replacement": "🔄"
    };
    return imageMap[imageType] || "📱";
  };

  const isCompact = variant === 'compact';

  return (
    <div className={`product-card relative ${product.popular ? 'ring-2 ring-primary' : ''}`}>
      {/* Popular Badge */}
      {product.popular && (
        <div className="absolute -top-3 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold z-10">
          <Star className="inline h-3 w-3 mr-1" />
          Most Popular
        </div>
      )}

      {/* Offer Badge */}
      {product.offer && (
        <div className="offer-badge">
          {product.offer}
        </div>
      )}

      {/* Product Image Placeholder */}
      <div className={`bg-muted rounded-lg flex items-center justify-center mb-4 ${isCompact ? 'h-24' : 'h-32'}`}>
        <span className={`${isCompact ? 'text-3xl' : 'text-4xl'}`}>
          {getImagePlaceholder(product.image)}
        </span>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div>
          <h3 className={`font-heading font-semibold text-card-foreground ${isCompact ? 'text-lg' : 'text-xl'}`}>
            {product.name}
          </h3>
          <p className={`text-muted-foreground ${isCompact ? 'text-sm' : ''}`}>
            {product.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline space-x-2">
          <span className={`font-heading font-bold text-primary ${isCompact ? 'text-xl' : 'text-2xl'}`}>
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ${product.originalPrice}
            </span>
          )}
          <span className="text-muted-foreground text-sm">
            / {product.duration}
          </span>
        </div>

        {/* Features */}
        {!isCompact && (
          <ul className="space-y-2">
            {product.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm">
                <Check className="h-4 w-4 text-success flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
            {product.features.length > 4 && (
              <li className="text-sm text-primary font-medium">
                +{product.features.length - 4} more features
              </li>
            )}
          </ul>
        )}

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className={`w-full btn-primary ${isCompact ? 'py-2' : 'py-3'}`}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>

        {/* Category Badge */}
        <div className="flex justify-center">
          <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium capitalize">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;