
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Find an Offer",
      description: "Browse our selection of verified coupons and deals for top brands.",
      icon: "🔍",
    },
    {
      id: 2,
      title: "Copy Code or Activate",
      description: "Reveal the coupon code and copy it, or click on 'Activate Deal'.",
      icon: "📋",
    },
    {
      id: 3,
      title: "Shop and Save",
      description: "Shop on the brand's website and paste the code at checkout to save.",
      icon: "💰",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Start saving on your purchases in three simple steps
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 max-w-xs w-full flex flex-col items-center text-center animate-on-scroll relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-amazon-orange text-white rounded-full text-3xl mb-4">
                {step.icon}
              </div>
              <div className="absolute -top-3 -left-3 bg-amazon-black text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                {step.id}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
