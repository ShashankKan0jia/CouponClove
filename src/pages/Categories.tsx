
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { categories, coupons, brands } from '@/utils/couponData';

const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get count of coupons for each category
  const getCategoryCount = (category: string) => {
    return category === 'All'
      ? coupons.length
      : coupons.filter(c => c.category.includes(category)).length;
  };

  // Get count of coupons for each brand
  const getBrandCount = (brand: string) => {
    return coupons.filter(c => c.brand === brand).length;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-amazon-black via-amazon-black to-gray-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Browse Categories</h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-200">
              Find coupons and deals organized by categories and brands
            </p>
          </div>
        </section>

        <section className="section bg-gray-50">
          <div className="container">
            <h2 className="section-title">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {categories.map(category => (
                <Card key={category} className="hover:shadow-lg transition-shadow">
                  <Link to={`/category/${category.toLowerCase()}`}>
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-lg mb-2">{category}</h3>
                      <p className="text-sm text-gray-500">{getCategoryCount(category)} coupons</p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>

            <h2 className="section-title">Shop by Brand</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {brands.map(brand => (
                <Card key={brand} className="hover:shadow-lg transition-shadow">
                  <Link to={`/brand/${brand.toLowerCase().replace(/\s+/g, '-')}`}>
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-lg mb-2">{brand}</h3>
                      <p className="text-sm text-gray-500">{getBrandCount(brand)} coupons</p>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
