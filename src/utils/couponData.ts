
export interface Coupon {
  id: string;
  title: string;
  discount: string;
  description: string;
  validity: string;
  code?: string;
  isCodeCoupon: boolean;
  dealLink: string;
  category: string[];
  brand: string;
}

export const brands = [
  "HappyNest",
  "VSL3", 
  "ClevGuard", 
  "Samsung SG",
  "TechNova",
  "EcoLife"
];

export const coupons: Coupon[] = [
  // HappyNest Coupons
  {
    id: "1",
    title: "20% OFF on HappyNest Premium Bedding",
    discount: "20%",
    description: "Get 20% off on all premium bedding products from HappyNest",
    validity: "Valid till May 31, 2025",
    code: "HAPPY20MAY25",
    isCodeCoupon: true,
    dealLink: "https://happynest.example.com/deals",
    category: ["Home"],
    brand: "HappyNest"
  },
  {
    id: "2",
    title: "Buy 2 Get 1 Free on HappyNest Pillows",
    discount: "Buy 2 Get 1",
    description: "Purchase any two HappyNest pillows and get the third one free",
    validity: "Valid till May 25, 2025",
    code: "HAPPYPILLOW3",
    isCodeCoupon: true,
    dealLink: "https://happynest.example.com/pillows",
    category: ["Home"],
    brand: "HappyNest"
  },
  {
    id: "3",
    title: "₹500 OFF on HappyNest Mattress Toppers",
    discount: "₹500",
    description: "Get flat ₹500 off on all HappyNest mattress toppers",
    validity: "Valid till May 20, 2025",
    code: "HAPPYTOPPER",
    isCodeCoupon: true,
    dealLink: "https://happynest.example.com/toppers",
    category: ["Home"],
    brand: "HappyNest"
  },
  {
    id: "4",
    title: "Free Shipping on HappyNest Orders over ₹3000",
    discount: "Free Shipping",
    description: "Enjoy free shipping on all HappyNest orders above ₹3000",
    validity: "Valid till June 15, 2025",
    code: "HAPPYSHIP",
    isCodeCoupon: true,
    dealLink: "https://happynest.example.com",
    category: ["Home"],
    brand: "HappyNest"
  },
  {
    id: "5",
    title: "Up to 40% off on Limited Edition HappyNest Collections",
    discount: "40%",
    description: "Discounts up to 40% on select HappyNest limited edition collections",
    validity: "Valid till June 10, 2025",
    code: "HAPPY40LIMITED",
    isCodeCoupon: true,
    dealLink: "https://happynest.example.com/limited",
    category: ["Home"],
    brand: "HappyNest"
  },
  
  // VSL3 Coupons
  {
    id: "6",
    title: "15% OFF on VSL3 Probiotic Supplements",
    discount: "15%",
    description: "Get 15% off on all VSL3 probiotic supplements",
    validity: "Valid till June 30, 2025",
    code: "VSL3HEALTH15",
    isCodeCoupon: true,
    dealLink: "https://vsl3.example.com/products",
    category: ["Health"],
    brand: "VSL3"
  },
  {
    id: "7",
    title: "BOGO Offer on VSL3 Digestive Health Products",
    discount: "Buy 1 Get 1",
    description: "Buy one get one free on select VSL3 digestive health products",
    validity: "Valid till July 15, 2025",
    code: "VSL3BOGO",
    isCodeCoupon: true,
    dealLink: "https://vsl3.example.com/digestive",
    category: ["Health"],
    brand: "VSL3"
  },
  {
    id: "8",
    title: "25% OFF on VSL3 Subscription Plans",
    discount: "25%",
    description: "Get 25% off when you subscribe to any VSL3 monthly plan",
    validity: "Valid till August 1, 2025",
    code: "VSL3SUB25",
    isCodeCoupon: true,
    dealLink: "https://vsl3.example.com/subscribe",
    category: ["Health"],
    brand: "VSL3"
  },
  {
    id: "9",
    title: "Free Consultation with VSL3 Nutritionists",
    discount: "Free Consultation",
    description: "Get a free consultation with VSL3 nutritionists with any purchase",
    validity: "Valid till June 25, 2025",
    code: "VSL3CONSULT",
    isCodeCoupon: true,
    dealLink: "https://vsl3.example.com/consultation",
    category: ["Health"],
    brand: "VSL3"
  },
  {
    id: "10",
    title: "10% OFF First Order at VSL3",
    discount: "10%",
    description: "New customers get 10% off their first order at VSL3",
    validity: "Ongoing",
    code: "VSL3FIRST10",
    isCodeCoupon: true,
    dealLink: "https://vsl3.example.com/new",
    category: ["Health"],
    brand: "VSL3"
  },
  
  // ClevGuard Coupons
  {
    id: "11",
    title: "30% OFF ClevGuard Premium Security Suite",
    discount: "30%",
    description: "Get 30% off on ClevGuard's premium digital security suite",
    validity: "Valid till July 31, 2025",
    code: "CLEVGUARD30",
    isCodeCoupon: true,
    dealLink: "https://clevguard.example.com/premium",
    category: ["Software"],
    brand: "ClevGuard"
  },
  {
    id: "12",
    title: "25% OFF ClevGuard Mobile Security",
    discount: "25%",
    description: "Get 25% off on all ClevGuard mobile security solutions",
    validity: "Valid till June 20, 2025",
    code: "CLEVMOBILE25",
    isCodeCoupon: true,
    dealLink: "https://clevguard.example.com/mobile",
    category: ["Software"],
    brand: "ClevGuard"
  },
  {
    id: "13",
    title: "50% OFF ClevGuard Annual Subscriptions",
    discount: "50%",
    description: "Half price on all ClevGuard annual security subscriptions",
    validity: "Valid till May 30, 2025",
    code: "CLEVSAVE50",
    isCodeCoupon: true,
    dealLink: "https://clevguard.example.com/annual",
    category: ["Software"],
    brand: "ClevGuard"
  },
  {
    id: "14",
    title: "Free Data Recovery Tool with ClevGuard Purchase",
    discount: "Free Tool",
    description: "Get a free data recovery tool with any ClevGuard security purchase",
    validity: "Valid till August 15, 2025",
    code: "CLEVFREE",
    isCodeCoupon: true,
    dealLink: "https://clevguard.example.com/tools",
    category: ["Software"],
    brand: "ClevGuard"
  },
  {
    id: "15",
    title: "20% OFF ClevGuard Business Security Solutions",
    discount: "20%",
    description: "Get 20% off on all ClevGuard business and enterprise security solutions",
    validity: "Valid till September 1, 2025",
    code: "CLEVBIZ20",
    isCodeCoupon: true,
    dealLink: "https://clevguard.example.com/business",
    category: ["Software"],
    brand: "ClevGuard"
  },
  
  // Samsung SG Coupons
  {
    id: "16",
    title: "₹10,000 OFF on Samsung SG QLED TVs",
    discount: "₹10,000",
    description: "Get ₹10,000 off on select Samsung SG QLED TV models",
    validity: "Valid till June 15, 2025",
    code: "SGQLED10K",
    isCodeCoupon: true,
    dealLink: "https://samsung-sg.example.com/tv",
    category: ["Electronics"],
    brand: "Samsung SG"
  },
  {
    id: "17",
    title: "25% OFF Samsung SG Galaxy Smartphones",
    discount: "25%",
    description: "Get 25% off on select Samsung SG Galaxy smartphone models",
    validity: "Valid till May 31, 2025",
    code: "SGGALAXY25",
    isCodeCoupon: true,
    dealLink: "https://samsung-sg.example.com/phones",
    category: ["Electronics"],
    brand: "Samsung SG"
  },
  {
    id: "18",
    title: "Free Galaxy Buds with Samsung SG Phone Purchase",
    discount: "Free Buds",
    description: "Get free Galaxy Buds with purchase of select Samsung SG phones",
    validity: "Valid till July 1, 2025",
    code: "SGFREEBUDS",
    isCodeCoupon: true,
    dealLink: "https://samsung-sg.example.com/buds-promo",
    category: ["Electronics"],
    brand: "Samsung SG"
  },
  {
    id: "19",
    title: "Up to 40% OFF Samsung SG Home Appliances",
    discount: "40%",
    description: "Get up to 40% off on select Samsung SG home appliances",
    validity: "Valid till June 30, 2025",
    code: "SGHOME40",
    isCodeCoupon: true,
    dealLink: "https://samsung-sg.example.com/appliances",
    category: ["Electronics", "Home"],
    brand: "Samsung SG"
  },
  {
    id: "20",
    title: "20% OFF Samsung SG Accessories",
    discount: "20%",
    description: "Get 20% off on all Samsung SG genuine accessories",
    validity: "Valid till August 15, 2025",
    code: "SGACCESS20",
    isCodeCoupon: true,
    dealLink: "https://samsung-sg.example.com/accessories",
    category: ["Electronics"],
    brand: "Samsung SG"
  },
  
  // TechNova Coupons
  {
    id: "21",
    title: "35% OFF TechNova Smart Home Devices",
    discount: "35%",
    description: "Get 35% off on all TechNova smart home devices",
    validity: "Valid till July 15, 2025",
    code: "NOVAHOME35",
    isCodeCoupon: true,
    dealLink: "https://technova.example.com/smart-home",
    category: ["Electronics", "Home"],
    brand: "TechNova"
  },
  {
    id: "22",
    title: "BOGO on TechNova Wireless Chargers",
    discount: "Buy 1 Get 1",
    description: "Buy one get one free on TechNova wireless charging solutions",
    validity: "Valid till June 30, 2025",
    code: "NOVACHARGE",
    isCodeCoupon: true,
    dealLink: "https://technova.example.com/chargers",
    category: ["Electronics"],
    brand: "TechNova"
  },
  
  // EcoLife Coupons
  {
    id: "23",
    title: "25% OFF EcoLife Sustainable Products",
    discount: "25%",
    description: "Get 25% off on all EcoLife sustainable living products",
    validity: "Valid till August 1, 2025",
    code: "ECOLIFE25",
    isCodeCoupon: true,
    dealLink: "https://ecolife.example.com/products",
    category: ["Lifestyle"],
    brand: "EcoLife"
  },
  {
    id: "24",
    title: "Free Bamboo Utensils with EcoLife Orders",
    discount: "Free Gift",
    description: "Get a free set of bamboo utensils with EcoLife orders above ₹2,000",
    validity: "Valid till June 15, 2025",
    code: "ECOGIFT",
    isCodeCoupon: true,
    dealLink: "https://ecolife.example.com/kitchen",
    category: ["Lifestyle", "Home"],
    brand: "EcoLife"
  }
];

export const categories = [
  "All",
  "Electronics",
  "Health",
  "Home",
  "Lifestyle",
  "Software",
  "Fashion"
];
