import React, { useState } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Button } from '../components/ui/button';
import productsData from '../data/products.json';

const Plans: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allProducts = [
    ...productsData.plans,
    ...productsData.esims,
    ...productsData.accessories
  ];

  const categories = [
    { id: 'all', name: 'All Plans', count: allProducts.length },
    { id: 'gaming', name: 'Gaming', count: allProducts.filter(p => p.category === 'gaming').length },
    { id: 'family', name: 'Family', count: allProducts.filter(p => p.category === 'family').length },
    { id: 'business', name: 'Business', count: allProducts.filter(p => p.category === 'business').length },
    { id: 'student', name: 'Student', count: allProducts.filter(p => p.category === 'student').length },
    { id: 'travel', name: 'Travel', count: allProducts.filter(p => p.category === 'travel').length },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover the best wireless plans, eSIMs, and accessories tailored to your needs. 
            No contracts, no hidden fees.
          </p>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  variant={activeCategory === category.id ? 'default' : 'outline'}
                  className={`transition-all duration-200 ${
                    activeCategory === category.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-muted'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-black/10 rounded-full text-xs">
                    {category.count}
                  </span>
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground mr-2">View:</span>
              <Button
                onClick={() => setViewMode('grid')}
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => setViewMode('list')}
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container-custom">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'plan' : 'plans'} 
              {activeCategory !== 'all' && ` in ${categories.find(c => c.id === activeCategory)?.name}`}
            </p>
          </div>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 md:grid-cols-2'
            }`}>
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  variant={viewMode === 'list' ? 'compact' : 'default'}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Filter className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No plans found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or browse all available plans.
              </p>
              <Button 
                onClick={() => setActiveCategory('all')}
                className="btn-primary"
              >
                View All Plans
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect plan for your needs. 
            Get personalized recommendations and support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="btn-primary text-lg px-8 py-4">
              Chat with Expert
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4">
              Compare Plans
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;