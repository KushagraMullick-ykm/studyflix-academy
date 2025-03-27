
import { Link } from "react-router-dom";
import { 
  GraduationCap,
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
              <GraduationCap className="h-6 w-6 text-brand-blue" />
              <span className="text-lg font-bold text-brand-darkBlue">StudyFlix</span>
            </div>
            <p className="text-gray-600 mb-4">
              Helping 12th grade students excel in their board exams with high-quality educational content.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/subjects" className="text-gray-600 hover:text-brand-blue">Subjects</Link></li>
              <li><Link to="/practice" className="text-gray-600 hover:text-brand-blue">Practice Tests</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 hover:text-brand-blue">Dashboard</Link></li>
              <li><Link to="/premium" className="text-gray-600 hover:text-brand-blue">Premium</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-600 hover:text-brand-blue">Blog</Link></li>
              <li><Link to="/notes" className="text-gray-600 hover:text-brand-blue">Study Notes</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-brand-blue">FAQ</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-brand-blue">Support</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase text-gray-500 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-brand-blue mr-2 mt-0.5" />
                <span className="text-gray-600">support@studyflix.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-brand-blue mr-2 mt-0.5" />
                <span className="text-gray-600">+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2023 StudyFlix Academy. All rights reserved.</p>
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
