
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BrandPage from "./pages/BrandPage";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import TopCoupons from "./pages/TopCoupons";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/brand/:brandSlug" element={<BrandPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
          <Route path="/top-coupons" element={<TopCoupons />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
