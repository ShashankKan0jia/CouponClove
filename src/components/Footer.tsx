
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from 'react-router-dom';
import { brands, categories } from '@/utils/couponData';

const Footer = () => {
  return (
    <footer className="bg-amazon-black text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CouponClove.com</h3>
            <p className="text-gray-400 mb-4">
              Your go-to source for verified coupons, deals, and promo codes to help you save on every purchase.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amazon-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amazon-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amazon-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amazon-orange transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/partners" className="text-gray-400 hover:text-white transition-colors">Partners</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.slice(0, 5).map(category => (
                <li key={category}>
                  <Link to={`/category/${category.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Top Brands</h3>
            <ul className="space-y-2">
              {brands.map(brand => (
                <li key={brand}>
                  <Link to={`/brand/${brand.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white transition-colors">
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-6 mt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} CouponClove.com. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center">
              Disclaimer: We may earn a commission when you use our coupons or links.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
