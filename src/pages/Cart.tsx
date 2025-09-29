import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeFromCart, clearCart, getTotal } = useCart();
  const { toast } = useToast();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: string, name: string) => {
    removeFromCart(id);
    toast({
      title: "Removed from Cart",
      description: `${name} has been removed from your cart.`,
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
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

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Looks like you haven't added any plans to your cart yet. 
              Explore our plans and find the perfect one for you.
            </p>
            <Link to="/plans">
              <Button className="btn-primary text-lg px-8 py-4">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Browse Plans
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              Shopping Cart
            </h1>
            <p className="text-muted-foreground">
              {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          
          <div className="flex space-x-4">
            <Link to="/plans">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
            <Button 
              onClick={handleClearCart}
              variant="destructive"
              className="hidden sm:flex"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Cart
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-lg p-6 transition-all duration-200 hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">
                      {getImagePlaceholder(item.image)}
                    </span>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2 capitalize">
                      {item.category} • {item.duration}
                    </p>
                    <div className="flex items-center space-x-4">
                      <span className="text-xl font-bold text-primary">
                        ${item.price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        per {item.duration}
                      </span>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      variant="outline"
                      size="sm"
                      className="w-8 h-8 p-0"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      variant="outline"
                      size="sm"
                      className="w-8 h-8 p-0"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Remove Button */}
                  <Button
                    onClick={() => handleRemoveItem(item.id, item.name)}
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-8">
              <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                Order Summary
              </h2>
              
              {/* Items Breakdown */}
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${getTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-medium">${(getTotal() * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-border pt-2">
                  <span>Total</span>
                  <span className="text-primary">
                    ${(getTotal() * 1.08).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button className="w-full btn-primary mt-6 text-lg py-3">
                Proceed to Checkout
              </Button>

              {/* Security Note */}
              <div className="mt-4 text-xs text-muted-foreground text-center">
                🔒 Secure checkout with SSL encryption
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;