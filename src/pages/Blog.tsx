
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "10 Ways to Save Money on Your Online Shopping",
    excerpt: "Discover the best strategies to get more bang for your buck when shopping online.",
    date: "May 5, 2025",
    category: "Shopping Tips",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 2,
    title: "How to Find the Best Coupons for Your Favorite Brands",
    excerpt: "A comprehensive guide to finding and using coupons effectively for maximum savings.",
    date: "April 28, 2025",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 3,
    title: "Why Shopping Seasonally Can Save You Thousands",
    excerpt: "Learn how timing your purchases with seasonal sales can lead to significant savings.",
    date: "April 15, 2025",
    category: "Seasonal Shopping",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 4,
    title: "The Psychology of Discounts: Why We Love Coupons",
    excerpt: "An interesting look at the psychology behind why coupons make us feel good about our purchases.",
    date: "April 3, 2025",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1573612664822-d7d347da7b80?auto=format&fit=crop&q=80&w=300"
  }
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-amazon-black via-amazon-black to-gray-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Savings Blog</h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-200">
              Tips, tricks, and insights to help you save more on every purchase
            </p>
          </div>
        </section>

        <section className="section bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts.map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="h-48 md:h-full w-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="text-sm text-amazon-orange font-medium mb-1">{post.category}</div>
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <Button variant="outline" className="text-amazon-orange border-amazon-orange hover:bg-amazon-orange hover:text-white">
                          Read More
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Looking for more savings advice?</p>
              <Link to="/categories">
                <Button className="bg-amazon-orange hover:bg-amazon-light text-white">
                  Browse All Coupons
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
