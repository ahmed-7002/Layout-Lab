// import { Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div >
//       <nav className="bg-gray-900 shadow-lg border-b">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <Link to="/" className="flex items-center space-x-3 text-4xl font-bold text-blue-600">
//               <img 
//                 src="/favicon.svg" 
//                 alt="LayoutLab" 
//                 className="h-10 w-10"
//               />
//               <span>Layout Lab</span>
//             </Link>
//             <div className="hidden md:flex space-x-8">
//               <Link to="/content" className="text-gray-600 hover:text-blue-600 transition-colors text-xl">Content</Link>
//               <Link to="/cards" className="text-gray-600 hover:text-blue-600 transition-colors text-xl">Cards</Link>  
//               <Link to="/images" className="text-gray-600 hover:text-blue-600 transition-colors text-xl">Images</Link>
//               <Link to="/navbar" className="text-gray-600 hover:text-blue-600 transition-colors text-xl">Navbar</Link>
//               <Link to="/footer" className="text-gray-600 hover:text-blue-600 transition-colors text-xl">Footer</Link>
//                <Link to="/login" className="text-gray-600 hover:text-blue-600 transition-colors text-xl">Login</Link>
               
//             </div>
//             <button 
//               className="md:hidden" 
//               onClick={toggleMenu}
//               aria-label="Toggle menu"
//             >
//               {isOpen ? (
//                 <X className="h-6 w-6 text-gray-600" />
//               ) : (
//                 <Menu className="h-6 w-6 text-gray-600" />
//               )}
//             </button>
//           </div>
          
//           {/* Mobile Menu */}
//           {isOpen && (
//             <div className="md:hidden mt-4 pb-4">
//               <div className="flex flex-col space-y-4">
//                 <Link 
//                   to="/content" 
//                   className="text-gray-600 hover:text-blue-600 transition-colors text-xl"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Content
//                 </Link>
//                 <Link 
//                   to="/cards" 
//                   className="text-gray-600 hover:text-blue-600 transition-colors text-xl"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Cards
//                 </Link>  
//                 <Link 
//                   to="/images" 
//                   className="text-gray-600 hover:text-blue-600 transition-colors text-xl"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Images
//                 </Link>
//                 <Link 
//                   to="/navbar" 
//                   className="text-gray-600 hover:text-blue-600 transition-colors text-xl"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Navbar
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navigation;






import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
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
            
            <button 
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Collapsible Menu */}
          {isOpen && (
            <div className="mt-6 pb-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Left column - first 4 links */}
                <div className="flex flex-col space-y-4">
                  <Link 
                    to="/content" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    Content
                  </Link>
                  <Link 
                    to="/cards" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    Cards
                  </Link>  
                  <Link 
                    to="/images" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    Images
                  </Link>
                  <Link 
                    to="/navbar" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    Navbar
                  </Link>
                   <Link 
                    to="/hero" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    Hero
                  </Link>
                </div>
                
                {/* Right column - remaining links */}
                <div className="flex flex-col space-y-4">
                  <Link 
                    to="/footer" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    Footer
                  </Link>
                  <Link 
                    to="/login" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                   <Link 
                    to="/contact" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link 
                    to="/sidebar" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    Sidebar
                  </Link>
                 
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;