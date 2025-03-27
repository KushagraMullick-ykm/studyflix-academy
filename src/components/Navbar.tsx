
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Search, Menu, X, User, Bell, GraduationCap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-7 w-7 text-brand-blue" />
            <span className="text-xl font-bold text-brand-darkBlue">StudyFlix</span>
          </Link>
          
          {/* Desktop navigation */}
          {!isMobile && (
            <>
              <div className="flex-1 max-w-md mx-6">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search for subjects, topics..."
                    className="pl-8 bg-gray-50 border-0"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <Link to="/subjects" className="text-gray-700 hover:text-brand-blue font-medium">
                  Subjects
                </Link>
                <Link to="/practice" className="text-gray-700 hover:text-brand-blue font-medium">
                  Practice
                </Link>
                <Link to="/dashboard" className="text-gray-700 hover:text-brand-blue font-medium">
                  Dashboard
                </Link>
                <Bell className="h-5 w-5 text-gray-600 cursor-pointer hover:text-brand-blue" />
                <Link to="/login">
                  <Button>Sign In</Button>
                </Link>
              </div>
            </>
          )}
          
          {/* Mobile menu button */}
          {isMobile && (
            <div className="flex items-center space-x-3">
              <Search className="h-5 w-5 text-gray-600" onClick={() => {}} />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          )}
        </div>
        
        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="mt-3 p-3 border-t space-y-3">
            <Input
              placeholder="Search for subjects, topics..."
              className="bg-gray-50 border-0 mb-3"
            />
            <Link to="/subjects" className="block py-2 text-gray-700 hover:text-brand-blue">
              Subjects
            </Link>
            <Link to="/practice" className="block py-2 text-gray-700 hover:text-brand-blue">
              Practice
            </Link>
            <Link to="/dashboard" className="block py-2 text-gray-700 hover:text-brand-blue">
              Dashboard
            </Link>
            <div className="pt-2">
              <Link to="/login">
                <Button className="w-full">Sign In</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
