
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CouponCard from '@/components/CouponCard';
import { coupons, brands } from '@/utils/couponData';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Search = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const [results, setResults] = useState<typeof coupons>([]);
  const [brandResults, setBrandResults] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Filter coupons based on search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      
      // Find matching coupons
      const matchingCoupons = coupons.filter(coupon => 
        coupon.title.toLowerCase().includes(query) || 
        coupon.description.toLowerCase().includes(query) ||
        coupon.brand.toLowerCase().includes(query) ||
        coupon.category.some(cat => cat.toLowerCase().includes(query))
      );
      
      // Find matching brands
      const matchingBrands = brands.filter(brand => 
        brand.toLowerCase().includes(query)
      );
      
      setResults(matchingCoupons);
      setBrandResults(matchingBrands);
    } else {
      setResults([]);
      setBrandResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-amazon-black via-amazon-black to-gray-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Search Results</h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-200">
              {searchQuery ? `Showing results for: "${searchQuery}"` : 'Enter a search query to find coupons and deals'}
            </p>
          </div>
        </section>

        <section className="section bg-gray-50">
          <div className="container">
            {brandResults.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Matching Brands</h2>
                <div className="flex flex-wrap gap-3">
                  {brandResults.map(brand => (
                    <Link key={brand} to={`/brand/${brand.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button variant="outline" className="border-amazon-orange text-amazon-orange hover:bg-amazon-orange hover:text-white">
                        {brand}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            <h2 className="text-2xl font-bold mb-6">Matching Coupons</h2>
            
            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map(coupon => (
                  <CouponCard key={coupon.id} coupon={coupon} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">No coupons found</h3>
                <p className="text-gray-600 mb-6">
                  {searchQuery 
                    ? "We couldn't find any coupons matching your search. Please try different keywords." 
                    : "Please enter a search term to find coupons."
                  }
                </p>
                <Link to="/">
                  <Button className="bg-amazon-orange hover:bg-amazon-light text-white">
                    Explore All Coupons
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
