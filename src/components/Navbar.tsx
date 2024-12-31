import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Music2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* <Music2 className="h-8 w-8 text-primary" /> */}
              <img
                src="/assets/images/m-logo.png"  // Replace with your logo's file path
                alt="Logo"
                className="h-12 object-contain"  // Adjust the height as needed
              />
              <span className="font-bold text-xl">Saryug Sangeet Mahavidalya</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md">
              Contact
            </Link>
            <Link to="/admission">
              <Button>Apply Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-primary px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/admission"
              className="block px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full">Apply Now</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}