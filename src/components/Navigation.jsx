import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div >
      <nav className="bg-gray-900 shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 text-4xl font-bold text-blue-600">
              <img 
                src="/favicon.svg" 
                alt="LayoutLab" 
                className="h-10 w-10"
              />
              <span>Layout Lab</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/content" className="text-gray-600 hover:text-blue-600 transition-colors text-xl">Content</Link>
              <Link to="/cards" className="text-gray-600 hover:text-blue-600 transition-colors text-xl">Cards</Link>  
              <Link to="/images" className="text-gray-600 hover:text-blue-600 transition-colors text-xl">Images</Link>
              <Link to="/navbar" className="text-gray-600 hover:text-blue-600 transition-colors text-xl">Navbar</Link>
            </div>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;