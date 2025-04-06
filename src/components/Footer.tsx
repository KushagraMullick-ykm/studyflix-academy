
import { Link } from "react-router-dom";
import { 
  Brain,
  Mail, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Locnix.ai</span>
            </div>
            <p className="text-gray-600 mb-4">
              Create better flashcards faster with AI. Learn smarter, not harder with AI-powered learning assistants.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/locnixai" className="text-gray-400 hover:text-primary">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com/locnixai" className="text-gray-400 hover:text-primary">
                <Facebook size={18} />
              </a>
              <a href="https://x.com/locnixai" className="text-gray-400 hover:text-primary">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-600 hover:text-primary">Features</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 hover:text-primary">Dashboard</Link></li>
              <li><Link to="/study" className="text-gray-600 hover:text-primary">Study</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-primary">Pricing</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/help-center" className="text-gray-600 hover:text-primary">Help Center</Link></li>
              <li><Link to="/tutorials" className="text-gray-600 hover:text-primary">Tutorials</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-primary">FAQ</Link></li>
              <li><Link to="/community" className="text-gray-600 hover:text-primary">Community</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-600">dev.locnixai@gmail.com</span>
              </li>
              <li className="flex items-start">
                <a href="https://discord.gg/NDX2XnHsaM" target="_blank" rel="noreferrer" className="flex items-center text-gray-600 hover:text-primary">
                  <Phone className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Join our Discord</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Locnix.ai. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-700">Terms of Service</Link>
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-700">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
