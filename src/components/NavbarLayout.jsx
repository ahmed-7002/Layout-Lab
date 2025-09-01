import React, { useState } from 'react';
import { Search, Menu, X, Bell, ChevronDown, User, Settings, LogOut, Home, Info, Mail, Phone } from 'lucide-react';

const NavbarLayoutTemplates = () => {
  const [copiedCode, setCopiedCode] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(text);
      setTimeout(() => setCopiedCode(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const CodeBlock = ({ children, title }) => (
    <div className="bg-gray-100 p-4 rounded-md mt-6 overflow-x-auto relative">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs text-gray-500 font-medium">{title}</div>
        <button
          onClick={() => copyToClipboard(children)}
          className={`px-3 py-1 text-xs rounded-md transition-colors ${
            copiedCode === children
              ? 'bg-green-500 text-white'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {copiedCode === children ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="text-sm">
        <code>{children}</code>
      </pre>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen" id="NavbarLayoutTemplates">
      <h1 className="text-3xl font-bold text-center py-8 text-gray-800">
        Navbar Layout Templates
      </h1>
      
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* 1. SIMPLE NAVBARS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            1. Simple Navbars
          </h2>
          
          {/* Basic Logo Only */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Basic Logo Only Navbar</h3>
            <nav className="bg-white shadow-md border-b">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center">
                  <div className="text-xl font-bold text-blue-600">
                    MyBrand
                  </div>
                </div>
              </div>
            </nav>
            <CodeBlock title="Basic Logo Navbar - React JSX">
{`<nav className="bg-white shadow-md border-b">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center">
      <div className="text-xl font-bold text-blue-600">
        MyBrand
      </div>
    </div>
  </div>
</nav>`}
            </CodeBlock>
          </div>

          {/* Logo with Button */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Logo with Action Button</h3>
            <nav className="bg-white shadow-md border-b">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-blue-600">
                    MyBrand
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </nav>
            <CodeBlock title="Logo with Button - React JSX">
{`<nav className="bg-white shadow-md border-b">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="text-xl font-bold text-blue-600">
        MyBrand
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
        Get Started
      </button>
    </div>
  </div>
</nav>`}
            </CodeBlock>
          </div>
        </section>

        {/* 2. NAVBARS WITH NAVIGATION */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            2. Navbars with Navigation Links
          </h2>
          
          {/* Basic Navigation */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Basic Navigation Menu</h3>
            <nav className="bg-white shadow-md border-b">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-blue-600">
                    MyBrand
                  </div>
                  <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
                  </div>
                  <button className="md:hidden">
                    <Menu className="h-6 w-6 text-gray-600" />
                  </button>
                </div>
              </div>
            </nav>
            <CodeBlock title="Basic Navigation - React JSX">
{`import { Menu } from 'lucide-react';

<nav className="bg-white shadow-md border-b">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="text-xl font-bold text-blue-600">
        MyBrand
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
      </div>
      <button className="md:hidden">
        <Menu className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  </div>
</nav>`}
            </CodeBlock>
          </div>

          {/* Navigation with Icons */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Navigation with Icons</h3>
            <nav className="bg-white shadow-md border-b">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-blue-600">
                    MyBrand
                  </div>
                  <div className="hidden md:flex space-x-6">
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Info className="h-4 w-4" />
                      <span>About</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Mail className="h-4 w-4" />
                      <span>Services</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>Contact</span>
                    </a>
                  </div>
                  <button className="md:hidden">
                    <Menu className="h-6 w-6 text-gray-600" />
                  </button>
                </div>
              </div>
            </nav>
            <CodeBlock title="Navigation with Icons - React JSX">
{`import { Home, Info, Mail, Phone, Menu } from 'lucide-react';

<nav className="bg-white shadow-md border-b">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="text-xl font-bold text-blue-600">MyBrand</div>
      <div className="hidden md:flex space-x-6">
        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
          <Home className="h-4 w-4" />
          <span>Home</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
          <Info className="h-4 w-4" />
          <span>About</span>
        </a>
        {/* Add more nav items */}
      </div>
      <button className="md:hidden">
        <Menu className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  </div>
</nav>`}
            </CodeBlock>
          </div>

          {/* Centered Navigation */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Centered Navigation</h3>
            <nav className="bg-white shadow-md border-b">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
                  <div className="text-xl font-bold text-blue-600">
                    MyBrand
                  </div>
                  <div className="flex space-x-8">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
                  </div>
                  <div className="hidden md:block w-20"></div>
                </div>
              </div>
            </nav>
            <CodeBlock title="Centered Navigation - React JSX">
{`<nav className="bg-white shadow-md border-b">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
      <div className="text-xl font-bold text-blue-600">
        MyBrand
      </div>
      <div className="flex space-x-8">
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
      </div>
      <div className="hidden md:block w-20"></div>
    </div>
  </div>
</nav>`}
            </CodeBlock>
          </div>
        </section>

        {/* 3. NAVBARS WITH PROFILE */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            3. Navbars with Profile
          </h2>
          
          {/* Navbar with Profile Picture */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Navbar with Round Profile Picture</h3>
            <nav className="bg-white shadow-md border-b">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-blue-600">
                    MyBrand
                  </div>
                  <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face" 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-blue-300 transition-all"
                    />
                  </div>
                </div>
              </div>
            </nav>
            <CodeBlock title="Navbar with Profile Picture - React JSX">
{`<nav className="bg-white shadow-md border-b">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="text-xl font-bold text-blue-600">
        MyBrand
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
      </div>
      <div className="flex items-center space-x-4">
        <img 
          src="profile-picture.jpg" 
          alt="Profile" 
          className="w-8 h-8 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-blue-300 transition-all"
        />
      </div>
    </div>
  </div>
</nav>`}
            </CodeBlock>
          </div>

          {/* Navbar with Profile Picture and Name */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Navbar with Profile Picture and Name</h3>
            <nav className="bg-white shadow-md border-b">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-blue-600">
                    MyBrand
                  </div>
                  <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-gray-700 font-medium">John Doe</span>
                  </div>
                </div>
              </div>
            </nav>
            <CodeBlock title="Navbar with Profile Picture and Name - React JSX">
{`<nav className="bg-white shadow-md border-b">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="text-xl font-bold text-blue-600">
        MyBrand
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
      </div>
      <div className="flex items-center space-x-3">
        <img 
          src="profile-picture.jpg" 
          alt="Profile" 
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-gray-700 font-medium">John Doe</span>
      </div>
    </div>
  </div>
</nav>`}
            </CodeBlock>
          </div>

          {/* Navbar with Profile Dropdown */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Navbar with Profile Dropdown</h3>
            <nav className="bg-white shadow-md border-b">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-blue-600">
                    MyBrand
                  </div>
                  <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
                  </div>
                  <div className="relative">
                    <button 
                      onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                        alt="Profile" 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="font-medium">Sarah</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {profileDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 border z-50">
                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <User className="h-4 w-4 mr-3" />
                          Profile
                        </a>
                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <Settings className="h-4 w-4 mr-3" />
                          Settings
                        </a>
                        <hr className="my-2" />
                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <LogOut className="h-4 w-4 mr-3" />
                          Sign Out
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </nav>
            <CodeBlock title="Navbar with Profile Dropdown - React JSX">
{`import { ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';

const NavbarWithDropdown = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600">MyBrand</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
          </div>
          <div className="relative">
            <button 
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <img src="profile.jpg" alt="Profile" className="w-8 h-8 rounded-full object-cover" />
              <span className="font-medium">Sarah</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 border z-50">
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <User className="h-4 w-4 mr-3" />Profile
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <Settings className="h-4 w-4 mr-3" />Settings
                </a>
                <hr className="my-2" />
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <LogOut className="h-4 w-4 mr-3" />Sign Out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 4. NAVBARS WITH SEARCH */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            4. Navbars with Search Bar
          </h2>
          
          {/* Basic Search Bar */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Navbar with Search Bar</h3>
            <nav className="bg-white shadow-md border-b">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-blue-600">
                    MyBrand
                  </div>
                  <div className="flex-1 max-w-lg mx-8">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500 transition-colors"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                    Login
                  </button>
                </div>
              </div>
            </nav>
            <CodeBlock title="Navbar with Search Bar - React JSX">
{`import { Search } from 'lucide-react';

<nav className="bg-white shadow-md border-b">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="text-xl font-bold text-blue-600">
        MyBrand
      </div>
      <div className="flex-1 max-w-lg mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500 transition-colors"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
        Login
      </button>
    </div>
  </div>
</nav>`}
            </CodeBlock>
          </div>

          {/* Search with Navigation */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Navbar with Search and Navigation</h3>
            <nav className="bg-white shadow-md border-b">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-8">
                    <div className="text-xl font-bold text-blue-600">
                      MyBrand
                    </div>
                    <div className="hidden md:flex space-x-6">
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Products</a>
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
                    </div>
                  </div>
                  <div className="flex-1 max-w-md mx-8">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500 transition-colors"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                    Login
                  </button>
                </div>
              </div>
            </nav>
            <CodeBlock title="Search with Navigation - React JSX">
{`import { Search } from 'lucide-react';

<nav className="bg-white shadow-md border-b">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <div className="text-xl font-bold text-blue-600">MyBrand</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Products</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
        </div>
      </div>
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500 transition-colors"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
        Login
      </button>
    </div>
  </div>
</nav>`}
            </CodeBlock>
          </div>
        </section>

        {/* 5. NAVBARS WITH SEARCH AND PROFILE */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            5. Navbars with Search Bar and Profile
          </h2>
          
          {/* Search + Profile Picture */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Search Bar with Profile Picture</h3>
            <nav className="bg-white shadow-md border-b">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-blue-600">
                    MyBrand
                  </div>
                  <div className="flex-1 max-w-lg mx-8">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500 transition-colors"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Bell className="h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face" 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-blue-300 transition-all"
                    />
                  </div>
                </div>
              </div>
            </nav>
            <CodeBlock title="Search with Profile Picture - React JSX">
{`import { Search, Bell } from 'lucide-react';

<nav className="bg-white shadow-md border-b">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="text-xl font-bold text-blue-600">
        MyBrand
      </div>
      <div className="flex-1 max-w-lg mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500 transition-colors"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
        <img 
          src="profile.jpg" 
          alt="Profile" 
          className="w-8 h-8 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-blue-300 transition-all"
        />
      </div>
    </div>
  </div>
</nav>`}
            </CodeBlock>
          </div>

          {/* Complete Navbar with Everything */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Complete Navbar - Navigation, Search, and Profile</h3>
            <nav className="bg-white shadow-md border-b">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-8">
                    <div className="text-xl font-bold text-blue-600">
                      MyBrand
                    </div>
                    <div className="hidden lg:flex space-x-6">
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</a>
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Team</a>
                    </div>
                  </div>
                  <div className="flex-1 max-w-md mx-8">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search projects, files..."
                        className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500 transition-colors"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Bell className="h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
                    <div className="flex items-center space-x-2">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face" 
                        alt="Profile" 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-gray-700 font-medium hidden sm:block">Alex</span>
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <CodeBlock title="Complete Navbar - React JSX">
{`import { Search, Bell, ChevronDown } from 'lucide-react';

<nav className="bg-white shadow-md border-b">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <div className="text-xl font-bold text-blue-600">MyBrand</div>
        <div className="hidden lg:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Team</a>
        </div>
      </div>
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects, files..."
            className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500 transition-colors"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
        <div className="flex items-center space-x-2">
          <img src="profile.jpg" alt="Profile" className="w-8 h-8 rounded-full object-cover" />
          <span className="text-gray-700 font-medium hidden sm:block">Alex</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </div>
    </div>
  </div>
</nav>`}
            </CodeBlock>
          </div>
        </section>

        {/* 6. COLORED AND STYLED NAVBARS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            6. Colored and Styled Navbars
          </h2>
          
          {/* Dark Navbar */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Dark Theme Navbar</h3>
            <nav className="bg-gray-900 shadow-lg">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-white">
                    MyBrand
                  </div>
                  <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      Sign Up
                    </button>
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full object-cover border-2 border-gray-600"
                    />
                  </div>
                </div>
              </div>
            </nav>
            <CodeBlock title="Dark Theme Navbar - React JSX">
{`<nav className="bg-gray-900 shadow-lg">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="text-xl font-bold text-white">
        MyBrand
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Sign Up
        </button>
        <img 
          src="profile.jpg" 
          alt="Profile" 
          className="w-8 h-8 rounded-full object-cover border-2 border-gray-600"
        />
      </div>
    </div>
  </div>
</nav>`}
            </CodeBlock>
          </div>

          {/* Gradient Navbar */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Gradient Navbar</h3>
            <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-white">
                    MyBrand
                  </div>
                  <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-blue-100 hover:text-white transition-colors">Home</a>
                    <a href="#" className="text-blue-100 hover:text-white transition-colors">Products</a>
                    <a href="#" className="text-blue-100 hover:text-white transition-colors">About</a>
                    <a href="#" className="text-blue-100 hover:text-white transition-colors">Contact</a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 pl-10 pr-4 text-gray-700 bg-white bg-opacity-20 backdrop-blur border border-white border-opacity-30 rounded-lg placeholder-blue-100 focus:outline-none focus:bg-white focus:text-gray-700 transition-all"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-100" />
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full object-cover border-2 border-white border-opacity-50"
                    />
                  </div>
                </div>
              </div>
            </nav>
            <CodeBlock title="Gradient Navbar - React JSX">
{`import { Search } from 'lucide-react';

<nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="text-xl font-bold text-white">MyBrand</div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-blue-100 hover:text-white transition-colors">Home</a>
        <a href="#" className="text-blue-100 hover:text-white transition-colors">Products</a>
        <a href="#" className="text-blue-100 hover:text-white transition-colors">About</a>
        <a href="#" className="text-blue-100 hover:text-white transition-colors">Contact</a>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 pl-10 pr-4 text-gray-700 bg-white bg-opacity-20 backdrop-blur border border-white border-opacity-30 rounded-lg placeholder-blue-100 focus:outline-none focus:bg-white focus:text-gray-700 transition-all"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-100" />
        </div>
        <img 
          src="profile.jpg" 
          alt="Profile" 
          className="w-8 h-8 rounded-full object-cover border-2 border-white border-opacity-50"
        />
      </div>
    </div>
  </div>
</nav>`}
            </CodeBlock>
          </div>

          {/* Mobile-Responsive Navbar */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Mobile-Responsive Navbar with Hamburger Menu</h3>
            <nav className="bg-white shadow-md border-b">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-blue-600">
                    MyBrand
                  </div>
                  <div className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
                    <div className="flex items-center space-x-4">
                      <img 
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face" 
                        alt="Profile" 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-gray-700 font-medium">John</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2"
                  >
                    {mobileMenuOpen ? (
                      <X className="h-6 w-6 text-gray-600" />
                    ) : (
                      <Menu className="h-6 w-6 text-gray-600" />
                    )}
                  </button>
                </div>
                {/* Mobile Menu */}
                {mobileMenuOpen && (
                  <div className="md:hidden mt-4 pb-4 border-t pt-4">
                    <div className="flex flex-col space-y-3">
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Home</a>
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">About</a>
                      <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Services</a>
                      <div className="flex items-center space-x-3 py-2">
                        <img 
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face" 
                          alt="Profile" 
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-gray-700 font-medium">John Doe</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
            <CodeBlock title="Mobile-Responsive Navbar - React JSX">
{`import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const ResponsiveNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600">MyBrand</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <div className="flex items-center space-x-4">
              <img src="profile.jpg" alt="Profile" className="w-8 h-8 rounded-full object-cover" />
              <span className="text-gray-700 font-medium">John</span>
            </div>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors py-2">Services</a>
              <div className="flex items-center space-x-3 py-2">
                <img src="profile.jpg" alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                <span className="text-gray-700 font-medium">John Doe</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};`}

            </CodeBlock>
          </div>
        </section>

        {/* Dynamic Profile Image Upload */}
<div className="mb-12">
  <h3 className="text-lg font-medium mb-4 text-gray-600">Dynamic Profile Image Upload with Editable Name</h3>
  <nav className="bg-white shadow-md border-b">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600">
          MyBrand
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative group">
            {/* Profile Image or Default SVG Icon */}
            <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <User className="h-6 w-6 text-gray-600" />
            </div>
            {/* File Input for Image Upload */}
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    // Handle image upload logic here
                    console.log('Image uploaded:', e.target.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            {/* Upload Tooltip */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Upload Image
            </div>
          </div>
          {/* Editable Name */}
          <div className="flex items-center">
            <input
              type="text"
              defaultValue="John Doe"
              className="bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-2 py-1 text-gray-700 font-medium min-w-0 w-20"
              onFocus={(e) => e.target.select()}
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
  
  <CodeBlock title="Dynamic Profile Upload with Editable Name - React JSX">
{`import { User } from 'lucide-react';
import { useState } from 'react';

const DynamicProfileNavbar = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState('John Doe');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600">MyBrand</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="h-6 w-6 text-gray-600" />
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleImageUpload}
              />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Upload Image
              </div>
            </div>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-2 py-1 text-gray-700 font-medium min-w-0 w-20"
              onFocus={(e) => e.target.select()}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};`}
  </CodeBlock>
</div>

        {/* Quick Copy Templates */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Quick Copy Navbar Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Basic Components</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                  <strong>Container:</strong> <code className="text-blue-600">max-w-7xl mx-auto px-6 py-4</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-green-500">
                  <strong>Logo:</strong> <code className="text-green-600">text-xl font-bold text-blue-600</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-purple-500">
                  <strong>Profile Pic:</strong> <code className="text-purple-600">w-8 h-8 rounded-full object-cover</code>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Advanced Features</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-3 rounded border-l-4 border-red-500">
                  <strong>Search Bar:</strong> <code className="text-red-600">flex-1 max-w-lg + relative input</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-orange-500">
                  <strong>Mobile Menu:</strong> <code className="text-orange-600">hidden md:flex + mobile toggle</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-indigo-500">
                  <strong>Dropdown:</strong> <code className="text-indigo-600">relative + absolute positioned</code>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Pro Tip:</strong> All navbars use <code>bg-white shadow-md border-b</code> for the standard look. 
              For mobile responsiveness, always include <code>hidden md:flex</code> for desktop items and mobile menu toggle!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLayoutTemplates;