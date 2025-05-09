
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Copy, Link } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link as RouterLink } from "react-router-dom";
import type { Coupon } from '@/utils/couponData';

interface CouponCardProps {
  coupon: Coupon;
}

const CouponCard: React.FC<CouponCardProps> = ({ coupon }) => {
  const [isCodeRevealed, setIsCodeRevealed] = useState(false);
  const { toast } = useToast();

  const handleCopyCode = () => {
    if (coupon.code) {
      navigator.clipboard.writeText(coupon.code);
      toast({
        title: "Code Copied!",
        description: "The coupon code has been copied to your clipboard.",
      });
      setIsCodeRevealed(true);
    }
  };

  const handleActivateDeal = () => {
    toast({
      title: "Deal Activated!",
      description: "You're being redirected to the deal page.",
    });
    // Open the deal link in a new tab
    window.open(coupon.dealLink, '_blank');
  };

  return (
    <Card className="coupon-card h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{coupon.title}</h3>
            <RouterLink to={`/brand/${coupon.brand.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-amazon-orange hover:underline">
              {coupon.brand}
            </RouterLink>
          </div>
          <div className="bg-amazon-orange text-white py-1 px-3 rounded-full text-sm font-bold">
            {coupon.discount}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 pb-4 flex-grow">
        <p className="text-gray-600 mb-2">{coupon.description}</p>
        <p className="text-sm text-gray-500">{coupon.validity}</p>
      </CardContent>
      <CardFooter className="pt-0 flex flex-col space-y-2">
        {coupon.isCodeCoupon ? (
          <>
            <div className="w-full p-2 bg-gray-50 border border-dashed border-gray-300 rounded-md flex justify-between items-center">
              <span className="font-mono font-semibold">
                {isCodeRevealed ? coupon.code : "••••••••••"}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopyCode}
                className="text-amazon-orange hover:text-amazon-black hover:bg-gray-100"
              >
                <Copy size={16} className="mr-1" /> Copy
              </Button>
            </div>
            <Button
              className="w-full bg-amazon-orange hover:bg-amazon-light text-white"
              onClick={() => {
                handleCopyCode();
                handleActivateDeal();
              }}
            >
              {isCodeRevealed ? "Code Copied! Go to Deal" : "Reveal & Copy Code"}
            </Button>
          </>
        ) : (
          <Button
            className="w-full bg-amazon-orange hover:bg-amazon-light text-white"
            onClick={handleActivateDeal}
          >
            <Link size={16} className="mr-2" /> Activate Deal
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CouponCard;
