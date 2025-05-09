
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I use Amazon promo codes?",
      answer: "To use an Amazon promo code, copy the code from our website, then visit Amazon. Add items to your cart, proceed to checkout, and enter the promo code in the 'Gift Cards & Promotional Codes' section before completing your purchase."
    },
    {
      question: "Are these Amazon coupons verified?",
      answer: "Yes, all coupons on our website are verified daily to ensure they are working. We remove expired coupons and continuously add new ones as they become available."
    },
    {
      question: "Why isn't my coupon code working?",
      answer: "Coupon codes may not work if they've expired, if you're trying to use them on excluded products, or if minimum purchase requirements aren't met. Check the coupon details for any restrictions."
    },
    {
      question: "Do I need an Amazon account to use these coupons?",
      answer: "Yes, you need an Amazon account to make purchases and apply coupon codes. Registration on Amazon is free and only requires basic information."
    },
    {
      question: "Can I combine multiple Amazon coupons?",
      answer: "Amazon typically allows only one promo code per order. However, you might be able to use an Amazon coupon in addition to deals like Lightning Deals or Subscribe & Save discounts."
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Find answers to common questions about using Amazon India coupons and promo codes
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 mb-4 rounded-lg bg-white overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
