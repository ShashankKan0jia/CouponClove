
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CouponCard from '@/components/CouponCard';
import { coupons, categories } from '@/utils/couponData';

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  // Convert slug back to category name
  const categoryName = categorySlug
    ? categories.find(c => c.toLowerCase() === categorySlug.toLowerCase())
    : '';
  
  // Filter coupons by category
  const categoryCoupons = categoryName 
    ? (categoryName === 'All' 
      ? coupons 
      : coupons.filter(coupon => coupon.category.includes(categoryName)))
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  if (!categoryName) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container section text-center">
            <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
            <p>Sorry, we couldn't find this category.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-amazon-black via-amazon-black to-gray-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">
              {categoryName} Coupons & Deals
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-200">
              Save on your {categoryName.toLowerCase()} purchases with our verified coupons and promo codes
            </p>
          </div>
        </section>

        <section className="section bg-gray-50">
          <div className="container">
            <h2 className="section-title">Latest {categoryName} Coupons</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team verifies these {categoryName.toLowerCase()} coupons daily to ensure they work
            </p>

            {categoryCoupons.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryCoupons.map(coupon => (
                  <CouponCard key={coupon.id} coupon={coupon} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-lg text-gray-500">No coupons found in this category at the moment.</p>
              </div>
            )}
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title">About {categoryName} Coupons</h2>
              <div className="prose prose-lg mx-auto">
                <p>
                  Looking for the best {categoryName.toLowerCase()} deals? You're in the right place! 
                  Our team at CouponClove.com is dedicated to finding and verifying the most valuable 
                  {categoryName.toLowerCase()} coupons from top brands.
                </p>
                <p>
                  We update our {categoryName.toLowerCase()} coupon collection regularly, ensuring you 
                  always have access to the latest deals. From major retailers to specialty shops, 
                  we cover a wide range of brands that offer {categoryName.toLowerCase()} products.
                </p>
                <p>
                  Using our coupons is simple: just click to reveal the code, copy it, and paste it at 
                  checkout when shopping online. For deals without codes, click the "Activate Deal" 
                  button to go directly to the offer page.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
