
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-amazon-black via-amazon-black to-gray-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-200">
              Have questions or suggestions? We'd love to hear from you!
            </p>
          </div>
        </section>

        <section className="section bg-gray-50">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-amazon-black text-white p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Mail className="mr-4 text-amazon-orange" />
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-gray-300">info@couponclove.com</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="mr-4 text-amazon-orange" />
                        <div>
                          <h4 className="font-medium">Phone</h4>
                          <p className="text-gray-300">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="mr-4 text-amazon-orange" />
                        <div>
                          <h4 className="font-medium">Address</h4>
                          <p className="text-gray-300">
                            123 Coupon Street<br />
                            Savings City, SC 12345<br />
                            United States
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="How can we help you?"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Please type your message here..."
                          rows={5}
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="bg-amazon-orange hover:bg-amazon-light text-white w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
