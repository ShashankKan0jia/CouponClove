
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import CouponCard from './CouponCard';
import { coupons, categories, brands } from '@/utils/couponData';
import { Filter } from 'lucide-react';

interface CouponSectionProps {
  filterByBrand?: string;
  title?: string;
}

const CouponSection: React.FC<CouponSectionProps> = ({ 
  filterByBrand,
  title = "Latest Coupons & Deals" 
}) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const filteredCoupons = coupons.filter(coupon => {
    const categoryMatch = activeCategory === 'All' || coupon.category.includes(activeCategory);
    const brandMatch = !filterByBrand || coupon.brand === filterByBrand;
    return categoryMatch && brandMatch;
  });

  const sortedCoupons = [...filteredCoupons].sort((a, b) => {
    // This is a simple sort by id for example purposes
    // In a real app, you'd sort by date
    if (sortOrder === 'newest') {
      return parseInt(b.id) - parseInt(a.id);
    } else {
      return parseInt(a.id) - parseInt(b.id);
    }
  });

  return (
    <section id="coupons-section" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover the best deals and discount codes for your favorite brands. All our coupons are verified daily to ensure they work.
        </p>

        {/* Filters */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-4 md:mb-0 w-full md:w-auto">
              <Filter size={18} className="mr-2 text-gray-600 flex-shrink-0" />
              <span className="mr-3 font-medium">Filter:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    className={activeCategory === category ? "bg-amazon-orange text-white border-none" : "text-gray-700"}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-medium">Sort:</span>
              <div className="flex rounded-md overflow-hidden">
                <Button
                  variant={sortOrder === 'newest' ? "default" : "outline"}
                  className={sortOrder === 'newest' ? "bg-amazon-orange text-white rounded-r-none" : "rounded-r-none"}
                  onClick={() => setSortOrder('newest')}
                >
                  Newest
                </Button>
                <Button
                  variant={sortOrder === 'oldest' ? "default" : "outline"}
                  className={sortOrder === 'oldest' ? "bg-amazon-orange text-white rounded-l-none" : "rounded-l-none"}
                  onClick={() => setSortOrder('oldest')}
                >
                  Oldest
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Coupons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCoupons.length > 0 ? (
            sortedCoupons.map((coupon) => (
              <CouponCard key={coupon.id} coupon={coupon} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-lg text-gray-500">No coupons found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CouponSection;
