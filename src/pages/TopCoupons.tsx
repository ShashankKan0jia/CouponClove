
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CouponCard from '@/components/CouponCard';
import { coupons } from '@/utils/couponData';

const TopCoupons = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
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
  }, []);

  // For demo purposes, we'll just sort by ID to simulate popularity
  const topCoupons = [...coupons]
    .sort((a, b) => parseInt(a.id) - parseInt(b.id))
    .slice(0, 12); // Take top 12

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-amazon-black via-amazon-black to-gray-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Top Coupons</h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-200">
              Our most popular and highest-value coupons across all brands
            </p>
          </div>
        </section>

        <section className="section bg-gray-50">
          <div className="container">
            <h2 className="section-title">Most Popular Deals</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              These are our users' favorite coupons and deals - updated daily
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topCoupons.map((coupon) => (
                <CouponCard key={coupon.id} coupon={coupon} />
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <h2 className="section-title">Best Saving Tips</h2>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <p>
                  Looking to maximize your savings? Here are some expert tips to get the most out of our coupons:
                </p>
                <ul>
                  <li>Subscribe to our newsletter to get notified about limited-time offers</li>
                  <li>Check back regularly as we update our coupons daily</li>
                  <li>Combine coupon codes with ongoing sales for maximum discounts</li>
                  <li>Look for free shipping codes to save on delivery costs</li>
                  <li>Follow your favorite brands on our site for personalized deal alerts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TopCoupons;
