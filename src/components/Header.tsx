import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { brands } from "@/utils/couponData";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [filteredBrands, setFilteredBrands] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matches = brands.filter((brand) =>
        brand.toLowerCase().includes(query)
      );
      setFilteredBrands(matches);
      setIsPopoverOpen(matches.length > 0);
    } else {
      setFilteredBrands([]);
      setIsPopoverOpen(false);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsPopoverOpen(false);
    }
  };

  const selectBrand = (brand: string) => {
    navigate(`/brand/${brand.toLowerCase().replace(/\s+/g, "-")}`);
    setSearchQuery("");
    setIsPopoverOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-amazon-black">
                <span className="text-amazon-orange">Coupon</span>Clove
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-amazon-orange font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="text-gray-700 hover:text-amazon-orange font-medium transition-colors"
            >
              Categories
            </Link>
            <Link
              to="/top-coupons"
              className="text-gray-700 hover:text-amazon-orange font-medium transition-colors"
            >
              Top Coupons
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-amazon-orange font-medium transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-amazon-orange font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:block w-1/3 relative">
            <form onSubmit={handleSearch} className="flex">
              <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                  <Input
                    type="text"
                    placeholder="Search for coupons or brands..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-r-none focus-visible:ring-amazon-orange w-full"
                  />
                </PopoverTrigger>
                <PopoverContent
                  className="w-[300px] p-0"
                  align="start"
                  sideOffset={5}
                  avoidCollisions={false}
                  onOpenAutoFocus={(e) => e.preventDefault()} // 🧠 Prevent focus from jumping away
                >
                  {filteredBrands.length > 0 && (
                    <Command>
                      <CommandList>
                        <CommandGroup heading="Suggested Brands">
                          {filteredBrands.map((brand) => (
                            <CommandItem
                              key={brand}
                              onSelect={() => selectBrand(brand)}
                              className="cursor-pointer hover:bg-gray-100"
                            >
                              {brand}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  )}
                </PopoverContent>
              </Popover>
              <Button
                type="submit"
                className="bg-amazon-orange hover:bg-amazon-light text-white rounded-l-none"
              >
                <Search size={18} />
              </Button>
            </form>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMenu}
              className="border-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4 relative">
          <form onSubmit={handleSearch} className="flex">
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild>
                <Input
                  type="text"
                  placeholder="Search for coupons or brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-r-none focus-visible:ring-amazon-orange w-full"
                />
              </PopoverTrigger>
              <PopoverContent
                className="w-[250px] p-0"
                align="start"
                sideOffset={5}
                avoidCollisions={false}
                onOpenAutoFocus={(e) => e.preventDefault()} // ✅ Fix for mobile too
              >
                {filteredBrands.length > 0 && (
                  <Command>
                    <CommandList>
                      <CommandGroup heading="Suggested Brands">
                        {filteredBrands.map((brand) => (
                          <CommandItem
                            key={brand}
                            onSelect={() => selectBrand(brand)}
                            className="cursor-pointer hover:bg-gray-100"
                          >
                            {brand}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                )}
              </PopoverContent>
            </Popover>
            <Button
              type="submit"
              className="bg-amazon-orange hover:bg-amazon-light text-white rounded-l-none"
            >
              <Search size={18} />
            </Button>
          </form>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white border-b shadow-md z-50 animate-fade-in">
            <div className="container py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-amazon-orange font-medium transition-colors p-2"
                >
                  Home
                </Link>
                <Link
                  to="/categories"
                  className="text-gray-700 hover:text-amazon-orange font-medium transition-colors p-2"
                >
                  Categories
                </Link>
                <Link
                  to="/top-coupons"
                  className="text-gray-700 hover:text-amazon-orange font-medium transition-colors p-2"
                >
                  Top Coupons
                </Link>
                <Link
                  to="/blog"
                  className="text-gray-700 hover:text-amazon-orange font-medium transition-colors p-2"
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-amazon-orange font-medium transition-colors p-2"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
