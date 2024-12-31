import { Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                {/* <Music2 className="h-8 w-8 text-primary" /> */}
                <img
                  src="/assets/images/m-logo.png"  // Replace with your logo's file path
                  alt="Logo"
                  className="h-10"  // Adjust the height as needed
                />
                <span className="font-bold text-xl">Saryug Sangeet Mahavidalya</span>
              </Link>
            </div>
            <p className="text-gray-400">
              Nurturing musical talent and fostering creativity since 2010.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link to="/admission" className="text-gray-400 hover:text-white">Admission</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Classical Performance</li>
              <li className="text-gray-400">Jazz Studies</li>
              <li className="text-gray-400">Music Production</li>
              <li className="text-gray-400">Music Education</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Music Street</li>
              <li>Harmony City, HC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@harmonyacademy.edu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Harmony Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}