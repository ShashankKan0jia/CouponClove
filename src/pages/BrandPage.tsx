
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CouponSection from '@/components/CouponSection';
import HowItWorks from '@/components/HowItWorks';
import { brands } from '@/utils/couponData';
import { useEffect } from 'react';

const BrandPage = () => {
  const { brandSlug } = useParams<{ brandSlug: string }>();
  
  // Convert slug back to brand name (replace hyphens with spaces and capitalize)
  const brandName = brandSlug
    ? brands.find(b => b.toLowerCase().replace(/\s+/g, '-') === brandSlug)
    : '';

  useEffect(() => {
    // Scroll to top when brand page loads
    window.scrollTo(0, 0);
    
    // Simple animation observer for scroll effects
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, [brandSlug]);

  if (!brandName) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container section text-center">
            <h1 className="text-3xl font-bold mb-4">Brand Not Found</h1>
            <p>Sorry, we couldn't find coupons for this brand.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-amazon-black via-amazon-black to-gray-800 text-white py-16">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {brandName} Coupons & Deals
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-200">
              Save big with our exclusive {brandName} coupons, promo codes, and special offers.
              All verified and updated regularly to ensure maximum savings!
            </p>
          </div>
        </section>
        
        <CouponSection 
          filterByBrand={brandName} 
          title={`Latest ${brandName} Coupons & Offers`} 
        />
        
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title">About {brandName} Coupons</h2>
              <div className="prose prose-lg mx-auto">
                <p>
                  Looking for the best {brandName} deals and discounts? You've come to the right place! 
                  At CouponClove.com, we specialize in finding and verifying the latest {brandName} coupons 
                  to help you save on your purchases.
                </p>
                <p>
                  Our team works tirelessly to ensure that all {brandName} promo codes and offers listed on our site 
                  are valid and up-to-date. We regularly check and remove expired coupons, so you can shop with confidence.
                </p>
                <p>
                  Using our coupons is easy - simply click on the coupon you want to use, copy the code, and paste it 
                  at checkout on the {brandName} website. For deals without codes, just click "Activate Deal" and you'll 
                  be taken directly to the offer page.
                </p>
                <p>
                  Don't miss out on these exclusive savings! Bookmark our {brandName} coupons page and check back often 
                  for new deals and special promotions.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default BrandPage;
