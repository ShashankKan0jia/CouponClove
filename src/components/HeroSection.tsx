
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToCoupons = () => {
    const couponsSection = document.getElementById('coupons-section');
    if (couponsSection) {
      couponsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-amazon-black via-amazon-black to-gray-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Exclusive Coupons & Offers For Your Favorite Brands
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-md mx-auto md:mx-0 text-gray-200">
              Save big on your favorite products with our curated selection of verified coupons, promo codes, and exclusive deals from top brands.
            </p>
            <Button 
              onClick={scrollToCoupons}
              className="bg-amazon-orange hover:bg-amazon-light text-white text-lg px-8 py-6 rounded-full btn-bounce"
            >
              Show Coupons <ArrowDown className="ml-2" size={20} />
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
                alt="Online Shopping" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amazon-orange text-white text-xl font-bold p-4 rounded-lg shadow-lg transform rotate-6">
                Up to 70% OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
