
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CouponSection from '@/components/CouponSection';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { brands } from '@/utils/couponData';

const Index = () => {
  useEffect(() => {
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
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <CouponSection />
        
        {/* Featured Brands Section */}
        <section className="section bg-white">
          <div className="container">
            <h2 className="section-title">Featured Brands</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Check out coupons for these popular brands and save on your next purchase
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {brands.map(brand => (
                <Link key={brand} to={`/brand/${brand.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardContent className="flex items-center justify-center p-6 h-full">
                      <span className="font-medium text-center">{brand}</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        <HowItWorks />
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title">About CouponClove.com</h2>
              <div className="prose prose-lg mx-auto">
                <p>
                  Finding the best deals on your favorite brands just got easier with our curated selection of coupons and promo codes. 
                  Whether you're shopping for electronics, health products, home goods, or software, our platform ensures you never miss out on savings.
                </p>
                <p>
                  Our team works tirelessly to verify each coupon and deal, ensuring they are active and ready to use. 
                  We update our collection daily, removing expired offers and adding new ones as they become available. 
                  This dedication to accuracy and freshness makes us the go-to destination for shoppers looking to maximize their savings.
                </p>
                <p>
                  Using our coupons is simple: just browse through our categories, find a deal that interests you, click to reveal the code, 
                  and apply it at checkout on the brand's website. For deals without codes, our "Activate Deal" button takes you directly to the 
                  discounted product page, making the savings process seamless.
                </p>
                <p>
                  Subscribe to our newsletter to stay informed about flash sales, limited-time offers, and exclusive promotions. 
                  Our subscribers often get first access to the best deals before they're widely available.
                </p>
                <p>
                  Start saving today with CouponClove.com – your trusted partner for smarter shopping!
                </p>
              </div>
            </div>
          </div>
        </section>
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
