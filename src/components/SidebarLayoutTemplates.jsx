import React, { useState } from 'react';
import { Copy, Check, Menu, X, ChevronDown, ChevronRight, Home, Users, Settings, Bell, Search, User, Mail, Phone, MapPin, Calendar, FileText, BarChart, Shield, LogOut, Star, Heart, Bookmark, MessageSquare, Image } from 'lucide-react';

const SidebarLayoutTemplates = () => {
  const [copiedCode, setCopiedCode] = useState('');
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [collapsibleSidebarOpen, setCollapsibleSidebarOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(text);
      setTimeout(() => setCopiedCode(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const CodeBlock = ({ children, title }) => (
    <div className="bg-gray-100 p-4 rounded-md mt-6 overflow-x-auto relative">
      <div className="flex items-center justify-between mb-2">
        <div className="text-xs text-gray-500 font-medium">{title}</div>
        <button
          onClick={() => copyToClipboard(children)}
          className={`px-3 py-1 text-xs rounded-md transition-colors flex items-center gap-1 ${
            copiedCode === children
              ? 'bg-green-500 text-white'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {copiedCode === children ? (
            <>
              <Check className="h-3 w-3" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="text-sm">
        <code>{children}</code>
      </pre>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen" id="SidebarLayoutTemplates">
      <h1 className="text-3xl font-bold text-center py-8 text-gray-800">
        Fixed Sidebar Layout Templates
      </h1>
      
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* 1. SIMPLE LEFT SIDEBAR */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            1. Simple Left Sidebar
          </h2>
          
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
              <div className="flex h-full">
                <aside className="bg-gray-800 text-white w-64 p-6">
                  <div className="mb-8">
                    <h2 className="text-xl font-bold">Your App</h2>
                  </div>
                  <nav>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-600 text-white">
                          <Home className="h-5 w-5" />
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                          <Users className="h-5 w-5" />
                          <span>Users</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                          <BarChart className="h-5 w-5" />
                          <span>Analytics</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </aside>
                <main className="flex-1 p-6 bg-gray-50">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Main Content Area</h1>
                  <p className="text-gray-600">Your main content goes here...</p>
                </main>
              </div>
            </div>
            <CodeBlock title="Simple Left Sidebar - React JSX">
{`import { Home, Users, BarChart } from 'lucide-react';

const SimpleLeftSidebar = () => {
  return (
    <div className="flex h-screen">
      <aside className="bg-gray-800 text-white w-64 p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold">Your App</h2>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-600 text-white">
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
                <Users className="h-5 w-5" />
                <span>Users</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Main Content Area</h1>
        <p className="text-gray-600">Your main content goes here...</p>
      </main>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 2. RIGHT SIDEBAR */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            2. Right Sidebar
          </h2>
          
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
              <div className="flex h-full">
                <main className="flex-1 p-6 bg-gray-50">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Main Content</h1>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h2 className="text-lg font-semibold mb-2">Article Title</h2>
                      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </main>
                <aside className="bg-white border-l border-gray-200 w-80 p-6">
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">New user registered</p>
                          <p className="text-xs text-gray-500">5 minutes ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-2">
                      <button className="w-full text-left p-3 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
                        <div className="flex items-center space-x-3">
                          <Bell className="h-4 w-4" />
                          <span className="text-sm font-medium">View Notifications</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
            <CodeBlock title="Right Sidebar - React JSX">
{`import { User, Bell } from 'lucide-react';

const RightSidebar = () => {
  return (
    <div className="flex h-screen">
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Main Content</h1>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Article Title</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
      </main>
      <aside className="bg-white border-l border-gray-200 w-80 p-6">
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">New user registered</p>
                <p className="text-xs text-gray-500">5 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 3. COLLAPSIBLE SIDEBAR */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            3. Collapsible Sidebar
          </h2>
          
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
              <div className="flex h-full">
                <aside className={`bg-gray-900 text-white transition-all duration-300 ${collapsibleSidebarOpen ? 'w-64' : 'w-16'}`}>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-8">
                      {collapsibleSidebarOpen && <h2 className="text-xl font-bold">Admin Panel</h2>}
                      <button 
                        onClick={() => setCollapsibleSidebarOpen(!collapsibleSidebarOpen)}
                        className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                      >
                        <Menu className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <nav>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-600 text-white">
                            <Home className="h-5 w-5" />
                            {collapsibleSidebarOpen && <span>Dashboard</span>}
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors relative">
                            <Mail className="h-5 w-5" />
                            {collapsibleSidebarOpen && (
                              <>
                                <span>Messages</span>
                                <span className="ml-auto bg-red-500 text-xs px-2 py-1 rounded-full">5</span>
                              </>
                            )}
                            {!collapsibleSidebarOpen && <span className="absolute left-12 bg-red-500 text-xs w-3 h-3 rounded-full"></span>}
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </aside>
                <main className="flex-1 p-6 bg-gray-50">
                  <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                  <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your app today.</p>
                </main>
              </div>
            </div>
            <CodeBlock title="Collapsible Sidebar - React JSX">
{`import { useState } from 'react';
import { Menu, Home, Mail } from 'lucide-react';

const CollapsibleSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <aside className={\`bg-gray-900 text-white transition-all duration-300 \${sidebarOpen ? 'w-64' : 'w-16'}\`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            {sidebarOpen && <h2 className="text-xl font-bold">Admin Panel</h2>}
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
          
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-600 text-white">
                  <Home className="h-5 w-5" />
                  {sidebarOpen && <span>Dashboard</span>}
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors relative">
                  <Mail className="h-5 w-5" />
                  {sidebarOpen && (
                    <>
                      <span>Messages</span>
                      <span className="ml-auto bg-red-500 text-xs px-2 py-1 rounded-full">5</span>
                    </>
                  )}
                  {!sidebarOpen && <span className="absolute left-12 bg-red-500 text-xs w-3 h-3 rounded-full"></span>}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">Welcome back!</p>
      </main>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 4. MOBILE RESPONSIVE SIDEBAR */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            4. Mobile Responsive Sidebar
          </h2>
          
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
              <div className="flex h-full relative">
                {/* Mobile Menu Button */}
                <div className="md:hidden absolute top-4 left-4 z-20">
                  <button 
                    onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
                    className="p-2 rounded-lg bg-white shadow-md border border-gray-200"
                  >
                    <Menu className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                {/* Sidebar */}
                <aside className={`bg-gray-900 text-white fixed md:static inset-y-0 left-0 z-10 w-64 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${leftSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-xl font-bold">Mobile App</h2>
                      <button 
                        onClick={() => setLeftSidebarOpen(false)}
                        className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <nav>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-600 text-white">
                            <Home className="h-5 w-5" />
                            <span>Home</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                            <Search className="h-5 w-5" />
                            <span>Search</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                            <User className="h-5 w-5" />
                            <span>Profile</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </aside>

                {/* Overlay for mobile */}
                {leftSidebarOpen && (
                  <div 
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-5"
                    onClick={() => setLeftSidebarOpen(false)}
                  ></div>
                )}

                {/* Main content */}
                <main className="flex-1 p-6 bg-gray-50 md:ml-0">
                  <div className="pt-12 md:pt-0">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Mobile Responsive Layout</h1>
                    <p className="text-gray-600">This sidebar adapts to mobile devices with a slide-out menu.</p>
                  </div>
                </main>
              </div>
            </div>
            <CodeBlock title="Mobile Responsive Sidebar - React JSX">
{`import { useState } from 'react';
import { Menu, X, Home, Search, User } from 'lucide-react';

const MobileResponsiveSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen relative">
      {/* Mobile Menu Button */}
      <div className="md:hidden absolute top-4 left-4 z-20">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-white shadow-md border border-gray-200"
        >
          <Menu className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={\`bg-gray-900 text-white fixed md:static inset-y-0 left-0 z-10 w-64 transform transition-transform duration-300 ease-in-out md:translate-x-0 \${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}\`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">Mobile App</h2>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-600 text-white">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-5"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-50 md:ml-0">
        <div className="pt-12 md:pt-0">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Main Content</h1>
          <p className="text-gray-600">Content here...</p>
        </div>
      </main>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 5. GLASSMORPHISM SIDEBAR */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            5. Modern Glassmorphism Sidebar
          </h2>
          
          <div className="mb-12">
            <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
              <div className="flex h-full">
                <aside className="w-64 backdrop-blur-md bg-white/10 border-r border-white/20 p-6">
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-white">Modern UI</h2>
                    <p className="text-white/70 text-sm">Glassmorphism Design</p>
                  </div>
                  
                  <nav>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-xl bg-white/20 backdrop-blur-sm text-white border border-white/10">
                          <Home className="h-5 w-5" />
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-xl text-white/80 hover:bg-white/10 hover:backdrop-blur-sm hover:text-white transition-all duration-200">
                          <Users className="h-5 w-5" />
                          <span>Team</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-xl text-white/80 hover:bg-white/10 hover:backdrop-blur-sm hover:text-white transition-all duration-200">
                          <MessageSquare className="h-5 w-5" />
                          <span>Messages</span>
                          <span className="ml-auto bg-red-500 text-xs px-2 py-1 rounded-full">2</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </aside>
                <main className="flex-1 p-6 backdrop-blur-sm bg-white/5">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-full">
                    <h1 className="text-2xl font-bold text-white mb-4">Glassmorphism Dashboard</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                        <h3 className="text-white/80 text-sm font-medium">Active Users</h3>
                        <p className="text-2xl font-bold text-white">2,847</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                        <h3 className="text-white/80 text-sm font-medium">Revenue</h3>
                        <p className="text-2xl font-bold text-white">$45,290</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                        <h3 className="text-white/80 text-sm font-medium">Conversion</h3>
                        <p className="text-2xl font-bold text-white">3.2%</p>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <CodeBlock title="Glassmorphism Sidebar - React JSX">
{`import { Home, Users, MessageSquare } from 'lucide-react';

const GlassmorphismSidebar = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      <aside className="w-64 backdrop-blur-md bg-white/10 border-r border-white/20 p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white">Modern UI</h2>
          <p className="text-white/70 text-sm">Glassmorphism Design</p>
        </div>
        
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-xl bg-white/20 backdrop-blur-sm text-white border border-white/10">
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-xl text-white/80 hover:bg-white/10 hover:backdrop-blur-sm hover:text-white transition-all duration-200">
                <MessageSquare className="h-5 w-5" />
                <span>Messages</span>
                <span className="ml-auto bg-red-500 text-xs px-2 py-1 rounded-full">2</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6 backdrop-blur-sm bg-white/5">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-full">
          <h1 className="text-2xl font-bold text-white mb-4">Dashboard</h1>
          {/* Content here */}
        </div>
      </main>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

          {/* 6. NESTED NAVIGATION SIDEBAR */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            6. Nested Navigation Sidebar
          </h2>
          
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '500px' }}>
              <div className="flex h-full">
                <aside className="bg-gray-800 text-white w-72 p-4 overflow-y-auto">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold">Enterprise App</h2>
                  </div>
                  
                  <nav>
                    <ul className="space-y-1">
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-600 text-white">
                          <Home className="h-5 w-5" />
                          <span>Dashboard</span>
                        </a>
                      </li>
                      
                      <li>
                        <div>
                          <button 
                            onClick={() => toggleSection('users')}
                            className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                          >
                            <Users className="h-5 w-5" />
                            <span>User Management</span>
                            {expandedSections.users ? 
                              <ChevronDown className="h-4 w-4 ml-auto" /> : 
                              <ChevronRight className="h-4 w-4 ml-auto" />
                            }
                          </button>
                          {expandedSections.users && (
                            <ul className="ml-8 mt-2 space-y-1">
                              <li>
                                <a href="#" className="flex items-center space-x-3 p-2 rounded text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                                  <span>All Users</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="flex items-center space-x-3 p-2 rounded text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                                  <span>Roles & Permissions</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="flex items-center space-x-3 p-2 rounded text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                                  <span>User Groups</span>
                                </a>
                              </li>
                            </ul>
                          )}
                        </div>
                      </li>
                      
                      <li>
                        <div>
                          <button 
                            onClick={() => toggleSection('analytics')}
                            className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                          >
                            <BarChart className="h-5 w-5" />
                            <span>Analytics</span>
                            {expandedSections.analytics ? 
                              <ChevronDown className="h-4 w-4 ml-auto" /> : 
                              <ChevronRight className="h-4 w-4 ml-auto" />
                            }
                          </button>
                          {expandedSections.analytics && (
                            <ul className="ml-8 mt-2 space-y-1">
                              <li>
                                <a href="#" className="flex items-center space-x-3 p-2 rounded text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                                  <span>Overview</span>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="flex items-center space-x-3 p-2 rounded text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                                  <span>Reports</span>
                                </a>
                              </li>
                            </ul>
                          )}
                        </div>
                      </li>
                    </ul>
                  </nav>
                </aside>
                <main className="flex-1 p-6 bg-gray-50">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Dashboard</h1>
                  <p className="text-gray-600">Nested navigation helps organize complex applications with multiple sections and subsections.</p>
                </main>
              </div>
            </div>
            <CodeBlock title="Nested Navigation Sidebar - React JSX">
{`import { useState } from 'react';
import { Home, Users, BarChart, ChevronDown, ChevronRight } from 'lucide-react';

const NestedNavigationSidebar = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="flex h-screen">
      <aside className="bg-gray-800 text-white w-72 p-4 overflow-y-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold">Enterprise App</h2>
        </div>
        
        <nav>
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-600 text-white">
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </a>
            </li>
            
            <li>
              <div>
                <button 
                  onClick={() => toggleSection('users')}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                >
                  <Users className="h-5 w-5" />
                  <span>User Management</span>
                  {expandedSections.users ? 
                    <ChevronDown className="h-4 w-4 ml-auto" /> : 
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  }
                </button>
                {expandedSections.users && (
                  <ul className="ml-8 mt-2 space-y-1">
                    <li>
                      <a href="#" className="flex items-center space-x-3 p-2 rounded text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                        <span>All Users</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center space-x-3 p-2 rounded text-gray-400 hover:text-white hover:bg-gray-700 transition-colors">
                        <span>Roles & Permissions</span>
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Dashboard</h1>
        <p className="text-gray-600">Content here...</p>
      </main>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 7. DUAL SIDEBAR */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            7. Dual Sidebar Layout
          </h2>
          
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
              <div className="flex h-full">
                <aside className="bg-gray-900 text-white w-16 p-3 flex flex-col items-center">
                  <div className="mb-8">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Home className="h-4 w-4" />
                    </div>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    <button className="p-2 rounded-lg bg-blue-600 text-white">
                      <Home className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
                      <Users className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
                      <BarChart className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
                      <Settings className="h-5 w-5" />
                    </button>
                  </nav>
                </aside>
                
                <aside className="bg-gray-50 border-r border-gray-200 w-64 p-4">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
                    <p className="text-sm text-gray-500">Manage your workspace</p>
                  </div>
                  
                  <nav>
                    <ul className="space-y-1">
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-100 text-blue-700">
                          <span>Overview</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                          <span>Recent Activity</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                          <span>Quick Stats</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </aside>
                
                <main className="flex-1 p-6 bg-white">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard Overview</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                      <h3 className="text-lg font-semibold">Total Users</h3>
                      <p className="text-3xl font-bold">12,543</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white">
                      <h3 className="text-lg font-semibold">Revenue</h3>
                      <p className="text-3xl font-bold">$89,432</p>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <CodeBlock title="Dual Sidebar Layout - React JSX">
{`import { Home, Users, BarChart, Settings } from 'lucide-react';

const DualSidebarLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Primary Sidebar */}
      <aside className="bg-gray-900 text-white w-16 p-3 flex flex-col items-center">
        <div className="mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Home className="h-4 w-4" />
          </div>
        </div>
        <nav className="flex flex-col space-y-4">
          <button className="p-2 rounded-lg bg-blue-600 text-white">
            <Home className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
            <Users className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
            <Settings className="h-5 w-5" />
          </button>
        </nav>
      </aside>
      
      {/* Secondary Sidebar */}
      <aside className="bg-gray-50 border-r border-gray-200 w-64 p-4">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
          <p className="text-sm text-gray-500">Manage your workspace</p>
        </div>
        
        <nav>
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-100 text-blue-700">
                <span>Overview</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                <span>Recent Activity</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      
      <main className="flex-1 p-6 bg-white">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-3xl font-bold">12,543</p>
          </div>
        </div>
      </main>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 8. MINI SIDEBAR WITH TOOLTIPS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            8. Mini Sidebar with Tooltips
          </h2>
          
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
              <div className="flex h-full">
                <aside className="bg-gray-900 text-white w-16 p-3 flex flex-col">
                  <div className="mb-8 flex justify-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-sm font-bold">A</span>
                    </div>
                  </div>
                  
                  <nav className="flex flex-col space-y-4">
                    <div className="relative group">
                      <button className="p-3 rounded-lg bg-blue-600 text-white w-full">
                        <Home className="h-5 w-5 mx-auto" />
                      </button>
                      <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                        Dashboard
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <button className="p-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors w-full">
                        <MessageSquare className="h-5 w-5 mx-auto" />
                      </button>
                      <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                        Messages
                      </div>
                      <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
                    </div>
                    
                    <div className="relative group">
                      <button className="p-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors w-full">
                        <Bell className="h-5 w-5 mx-auto" />
                      </button>
                      <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                        Notifications
                      </div>
                    </div>
                  </nav>
                  
                  <div className="mt-auto">
                    <div className="relative group">
                      <button className="p-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors w-full">
                        <Settings className="h-5 w-5 mx-auto" />
                      </button>
                      <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                        Settings
                      </div>
                    </div>
                  </div>
                </aside>
                
                <main className="flex-1 p-6 bg-gray-50">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Minimal Interface</h1>
                  <p className="text-gray-600">Hover over the sidebar icons to see tooltips. Perfect for saving space while maintaining functionality.</p>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Space Efficient</h3>
                      <p className="text-gray-600">Maximum screen real estate for content.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Clean Design</h3>
                      <p className="text-gray-600">Minimalist approach with clear navigation.</p>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <CodeBlock title="Mini Sidebar with Tooltips - React JSX">
{`import { Home, MessageSquare, Bell, Settings } from 'lucide-react';

const MiniSidebarWithTooltips = () => {
  return (
    <div className="flex h-screen">
      <aside className="bg-gray-900 text-white w-16 p-3 flex flex-col">
        <div className="mb-8 flex justify-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-sm font-bold">A</span>
          </div>
        </div>
        
        <nav className="flex flex-col space-y-4">
          <div className="relative group">
            <button className="p-3 rounded-lg bg-blue-600 text-white w-full">
              <Home className="h-5 w-5 mx-auto" />
            </button>
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Dashboard
            </div>
          </div>
          
          <div className="relative group">
            <button className="p-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors w-full">
              <MessageSquare className="h-5 w-5 mx-auto" />
            </button>
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Messages
            </div>
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
          </div>
        </nav>
        
        <div className="mt-auto">
          <div className="relative group">
            <button className="p-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors w-full">
              <Settings className="h-5 w-5 mx-auto" />
            </button>
            <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Settings
            </div>
          </div>
        </div>
      </aside>
      
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Main Content</h1>
        <p className="text-gray-600">Content here...</p>
      </main>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 9. FLOATING SIDEBAR */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            9. Floating Sidebar
          </h2>
          
          <div className="mb-12">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
              <div className="flex h-full p-4">
                <aside className="bg-white/80 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl w-64 p-6 mr-4">
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900">Float UI</h2>
                    <p className="text-sm text-gray-500">Modern floating design</p>
                  </div>
                  
                  <nav>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                          <Home className="h-5 w-5" />
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-xl text-gray-600 hover:bg-gray-100 hover:shadow-md transition-all duration-200">
                          <Heart className="h-5 w-5" />
                          <span>Favorites</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-xl text-gray-600 hover:bg-gray-100 hover:shadow-md transition-all duration-200">
                          <Bookmark className="h-5 w-5" />
                          <span>Bookmarks</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-xl text-gray-600 hover:bg-gray-100 hover:shadow-md transition-all duration-200">
                          <Image className="h-5 w-5" />
                          <span>Gallery</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  
                  <div className="mt-8 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">Pro Tip</h4>
                    <p className="text-sm text-gray-600">Use keyboard shortcuts to navigate faster!</p>
                  </div>
                </aside>
                
                <main className="flex-1 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
                  <h1 className="text-3xl font-bold text-gray-900 mb-6">Floating Design</h1>
                  <div className="space-y-6">
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">Modern Card</h2>
                      <p className="text-gray-600">This layout uses floating elements and glassmorphism effects for a modern, elegant appearance.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg">
                        <h3 className="font-semibold text-gray-900">Stat 1</h3>
                        <p className="text-2xl font-bold text-blue-600">42.3K</p>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg">
                        <h3 className="font-semibold text-gray-900">Stat 2</h3>
                        <p className="text-2xl font-bold text-purple-600">98.7%</p>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <CodeBlock title="Floating Sidebar - React JSX">
{`import { Home, Heart, Bookmark, Image } from 'lucide-react';

const FloatingSidebar = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <aside className="bg-white/80 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl w-64 p-6 mr-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900">Float UI</h2>
          <p className="text-sm text-gray-500">Modern floating design</p>
        </div>
        
        <nav>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                <Home className="h-5 w-5" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-xl text-gray-600 hover:bg-gray-100 hover:shadow-md transition-all duration-200">
                <Heart className="h-5 w-5" />
                <span>Favorites</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-xl text-gray-600 hover:bg-gray-100 hover:shadow-md transition-all duration-200">
                <Bookmark className="h-5 w-5" />
                <span>Bookmarks</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      
              <main className="flex-1 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Floating Design</h1>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Modern Card</h2>
          <p className="text-gray-600">This layout uses floating elements and glassmorphism effects.</p>
        </div>
      </main>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 10. DARK MODE SIDEBAR */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            10. Dark Mode Elegant Sidebar
          </h2>
          
          <div className="mb-12">
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
              <div className="flex h-full">
                <aside className="bg-black/50 backdrop-blur-sm border-r border-gray-700 w-64 p-6">
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-white">Dark Theme</h2>
                    <p className="text-gray-400 text-sm">Professional Interface</p>
                  </div>
                  
                  <nav>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
                          <Home className="h-5 w-5" />
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200">
                          <Users className="h-5 w-5" />
                          <span>Team</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200">
                          <FileText className="h-5 w-5" />
                          <span>Projects</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200">
                          <Calendar className="h-5 w-5" />
                          <span>Calendar</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  
                  <div className="mt-auto pt-8">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">John Doe</p>
                          <p className="text-xs text-gray-400">Administrator</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
                
                <main className="flex-1 p-6 bg-gray-900">
                  <h1 className="text-2xl font-bold text-white mb-4">Dark Dashboard</h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                      <h3 className="text-gray-300 text-sm font-medium mb-2">Total Projects</h3>
                      <p className="text-3xl font-bold text-white">24</p>
                      <p className="text-green-400 text-sm mt-2">↗ 12% from last month</p>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                      <h3 className="text-gray-300 text-sm font-medium mb-2">Active Users</h3>
                      <p className="text-3xl font-bold text-white">1,429</p>
                      <p className="text-blue-400 text-sm mt-2">→ Stable</p>
                    </div>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                      <h3 className="text-gray-300 text-sm font-medium mb-2">Completion Rate</h3>
                      <p className="text-3xl font-bold text-white">87%</p>
                      <p className="text-yellow-400 text-sm mt-2">↗ 5% improvement</p>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <CodeBlock title="Dark Mode Elegant Sidebar - React JSX">
{`import { Home, Users, FileText, Calendar, User } from 'lucide-react';

const DarkModeElegantSidebar = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <aside className="bg-black/50 backdrop-blur-sm border-r border-gray-700 w-64 p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white">Dark Theme</h2>
          <p className="text-gray-400 text-sm">Professional Interface</p>
        </div>
        
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200">
                <Users className="h-5 w-5" />
                <span>Team</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-200">
                <FileText className="h-5 w-5" />
                <span>Projects</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="mt-auto pt-8">
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-gray-400">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
      
      <main className="flex-1 p-6 bg-gray-900">
        <h1 className="text-2xl font-bold text-white mb-4">Dark Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <h3 className="text-gray-300 text-sm font-medium mb-2">Total Projects</h3>
            <p className="text-3xl font-bold text-white">24</p>
            <p className="text-green-400 text-sm mt-2">↗ 12% from last month</p>
          </div>
        </div>
      </main>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 11. SIDEBAR WITH TABS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            11. Sidebar with Tabs
          </h2>
          
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
              <div className="flex h-full">
                <aside className="bg-gray-50 border-r border-gray-200 w-80 flex flex-col">
                  <div className="p-4 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900">Navigation Hub</h2>
                  </div>
                  
                  <div className="flex border-b border-gray-200">
                    <button className="flex-1 p-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600 bg-blue-50">
                      Navigation
                    </button>
                    <button className="flex-1 p-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
                      Tools
                    </button>
                    <button className="flex-1 p-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
                      Settings
                    </button>
                  </div>
                  
                  <div className="flex-1 p-4 overflow-y-auto">
                    <nav>
                      <div className="mb-6">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Main</h3>
                        <ul className="space-y-1">
                          <li>
                            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg bg-blue-100 text-blue-700">
                              <Home className="h-4 w-4" />
                              <span>Dashboard</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                              <BarChart className="h-4 w-4" />
                              <span>Analytics</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Management</h3>
                        <ul className="space-y-1">
                          <li>
                            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                              <Users className="h-4 w-4" />
                              <span>Users</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center space-x-3 p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                              <Shield className="h-4 w-4" />
                              <span>Security</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </aside>
                
                <main className="flex-1 p-6 bg-white">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Tabbed Sidebar Interface</h1>
                  <p className="text-gray-600 mb-6">This sidebar includes multiple tabs for organizing different types of navigation and tools.</p>
                  
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl text-white">
                    <h3 className="text-lg font-semibold mb-2">Featured Content</h3>
                    <p>Tabbed sidebars are perfect for complex applications with multiple navigation contexts.</p>
                  </div>
                </main>
              </div>
            </div>
            <CodeBlock title="Sidebar with Tabs - React JSX">
{`import { useState } from 'react';
import { Home, BarChart, Users, Shield } from 'lucide-react';

const SidebarWithTabs = () => {
  const [activeTab, setActiveTab] = useState('navigation');

  return (
    <div className="flex h-screen">
      <aside className="bg-gray-50 border-r border-gray-200 w-80 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Navigation Hub</h2>
        </div>
        
        <div className="flex border-b border-gray-200">
          <button 
            onClick={() => setActiveTab('navigation')}
            className={\`flex-1 p-3 text-sm font-medium transition-colors \${
              activeTab === 'navigation' 
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                : 'text-gray-500 hover:text-gray-700'
            }\`}
          >
            Navigation
          </button>
          <button 
            onClick={() => setActiveTab('tools')}
            className={\`flex-1 p-3 text-sm font-medium transition-colors \${
              activeTab === 'tools' 
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' 
                : 'text-gray-500 hover:text-gray-700'
            }\`}
          >
            Tools
          </button>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto">
          {activeTab === 'navigation' && (
            <nav>
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Main</h3>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="flex items-center space-x-3 p-2 rounded-lg bg-blue-100 text-blue-700">
                      <Home className="h-4 w-4" />
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center space-x-3 p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                      <Users className="h-4 w-4" />
                      <span>Users</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          )}
        </div>
      </aside>
      
      <main className="flex-1 p-6 bg-white">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Tabbed Interface</h1>
        <p className="text-gray-600">Content here...</p>
      </main>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 12. SIDEBAR WITH SEARCH */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            12. Sidebar with Search & Filtering
          </h2>
          
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '500px' }}>
              <div className="flex h-full">
                <aside className="bg-white border-r border-gray-200 w-80 p-4 flex flex-col">
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Smart Navigation</h2>
                    
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input 
                        type="text" 
                        placeholder="Search navigation..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto">
                    <nav>
                      <div className="mb-6">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Favorites</h3>
                        <ul className="space-y-1">
                          <li>
                            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-yellow-50 text-yellow-700 border border-yellow-200">
                              <Star className="h-4 w-4" />
                              <span>Important Dashboard</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                              <Star className="h-4 w-4" />
                              <span>Weekly Reports</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Main Navigation</h3>
                        <ul className="space-y-1">
                          <li>
                            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 text-blue-700">
                              <Home className="h-4 w-4" />
                              <span>Dashboard</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                              <Users className="h-4 w-4" />
                              <span>Team Members</span>
                              <span className="ml-auto bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">24</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                              <FileText className="h-4 w-4" />
                              <span>Documents</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                              <Calendar className="h-4 w-4" />
                              <span>Calendar</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <button className="w-full flex items-center space-x-3 p-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </aside>
                
                <main className="flex-1 p-6 bg-gray-50">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Searchable Navigation</h1>
                  <p className="text-gray-600 mb-6">This sidebar includes search functionality and organized sections with favorites.</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Features</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Real-time navigation filtering</li>
                        <li>• Favorited items for quick access</li>
                        <li>• Organized by categories</li>
                        <li>• Badge counts for context</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">User Experience</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Quick search reduces navigation time</li>
                        <li>• Favorites improve workflow efficiency</li>
                        <li>• Clear visual hierarchy</li>
                        <li>• Smooth hover interactions</li>
                      </ul>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <CodeBlock title="Sidebar with Search & Filtering - React JSX">
{`import { Search, Star, Home, Users, FileText, Calendar, LogOut } from 'lucide-react';

const SidebarWithSearch = () => {
  return (
    <div className="flex h-screen">
      <aside className="bg-white border-r border-gray-200 w-80 p-4 flex flex-col">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Smart Navigation</h2>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input 
              type="text" 
              placeholder="Search navigation..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <nav>
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Favorites</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-yellow-50 text-yellow-700 border border-yellow-200">
                    <Star className="h-4 w-4" />
                    <span>Important Dashboard</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Main Navigation</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 text-blue-700">
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                    <Users className="h-4 w-4" />
                    <span>Team Members</span>
                    <span className="ml-auto bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">24</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-200">
          <button className="w-full flex items-center space-x-3 p-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
      
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Searchable Navigation</h1>
        <p className="text-gray-600">Content here...</p>
      </main>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 13. BOTTOM NAVIGATION SIDEBAR */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            13. Bottom Navigation + Sidebar Hybrid
          </h2>
          
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
              <div className="flex flex-col h-full">
                <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                  <h1 className="text-xl font-bold text-gray-900">Hybrid Layout</h1>
                  <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                      <Bell className="h-5 w-5" />
                    </button>
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </header>
                
                <div className="flex flex-1 overflow-hidden">
                  <aside className="bg-gray-50 border-r border-gray-200 w-64 p-4 hidden md:block">
                    <nav>
                      <ul className="space-y-2">
                        <li>
                          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-100 text-blue-700">
                            <FileText className="h-4 w-4" />
                            <span>Documents</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                            <Image className="h-4 w-4" />
                            <span>Media Files</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                            <Star className="h-4 w-4" />
                            <span>Favorites</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </aside>
                  
                  <main className="flex-1 p-6 bg-white">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Main Content Area</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Desktop Experience</h3>
                        <p className="text-gray-600">Full sidebar navigation on larger screens.</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Experience</h3>
                        <p className="text-gray-600">Bottom navigation on mobile devices.</p>
                      </div>
                    </div>
                  </main>
                </div>
                
                {/* Bottom Navigation for Mobile */}
                <nav className="md:hidden bg-white border-t border-gray-200 p-2">
                  <div className="flex items-center justify-around">
                    <button className="flex flex-col items-center p-3 text-blue-600">
                      <Home className="h-5 w-5" />
                      <span className="text-xs mt-1">Home</span>
                    </button>
                    <button className="flex flex-col items-center p-3 text-gray-400">
                      <FileText className="h-5 w-5" />
                      <span className="text-xs mt-1">Files</span>
                    </button>
                    <button className="flex flex-col items-center p-3 text-gray-400 relative">
                      <MessageSquare className="h-5 w-5" />
                      <span className="text-xs mt-1">Messages</span>
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">2</span>
                    </button>
                    <button className="flex flex-col items-center p-3 text-gray-400">
                      <User className="h-5 w-5" />
                      <span className="text-xs mt-1">Profile</span>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
            <CodeBlock title="Bottom Navigation + Sidebar Hybrid - React JSX">
{`import { Bell, User, FileText, Image, Star, Home, MessageSquare } from 'lucide-react';

const BottomNavSidebarHybrid = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Hybrid Layout</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100">
            <Bell className="h-5 w-5" />
          </button>
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        <aside className="bg-gray-50 border-r border-gray-200 w-64 p-4 hidden md:block">
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-100 text-blue-700">
                  <FileText className="h-4 w-4" />
                  <span>Documents</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                  <Image className="h-4 w-4" />
                  <span>Media Files</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        
        <main className="flex-1 p-6 bg-white">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Main Content Area</h2>
          <p className="text-gray-600">Content adapts to both desktop and mobile...</p>
        </main>
      </div>
      
      {/* Bottom Navigation for Mobile */}
      <nav className="md:hidden bg-white border-t border-gray-200 p-2">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center p-3 text-blue-600">
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center p-3 text-gray-400">
            <FileText className="h-5 w-5" />
            <span className="text-xs mt-1">Files</span>
          </button>
          <button className="flex flex-col items-center p-3 text-gray-400 relative">
            <MessageSquare className="h-5 w-5" />
            <span className="text-xs mt-1">Messages</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">2</span>
          </button>
        </div>
      </nav>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 14. ANIMATED SIDEBAR */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            14. Animated Micro-Interactions Sidebar
          </h2>
          
          <div className="mb-12">
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden" style={{ height: '400px' }}>
              <div className="flex h-full">
                <aside className="bg-gradient-to-b from-purple-900 to-indigo-900 w-64 p-6">
                  <div className="mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Star className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-white">Animated UI</h2>
                        <p className="text-purple-200 text-xs">v2.0</p>
                      </div>
                    </div>
                  </div>
                  
                  <nav>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="group flex items-center space-x-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                          <div className="p-1 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                            <Home className="h-4 w-4" />
                          </div>
                          <span>Dashboard</span>
                          <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full opacity-100"></div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="group flex items-center space-x-3 p-3 rounded-xl text-purple-200 hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105">
                          <div className="p-1 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                            <Users className="h-4 w-4" />
                          </div>
                          <span>Team</span>
                          <span className="ml-auto bg-purple-500 text-xs px-2 py-1 rounded-full">4</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="group flex items-center space-x-3 p-3 rounded-xl text-purple-200 hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105">
                          <div className="p-1 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                            <BarChart className="h-4 w-4" />
                          </div>
                          <span>Analytics</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  
                  <div className="mt-8 p-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl border border-purple-400/30">
                    <h4 className="text-white font-semibold mb-2">🚀 New Feature</h4>
                    <p className="text-purple-200 text-sm">Advanced analytics now available!</p>
                    <button className="mt-3 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </aside>
                
                <main className="flex-1 p-6 bg-gray-900">
                  <h1 className="text-2xl font-bold text-white mb-4">Animated Interface</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                      <h3 className="text-purple-200 text-sm font-medium mb-2">Active Projects</h3>
                      <p className="text-3xl font-bold text-white">18</p>
                      <div className="mt-3 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-sm">All systems operational</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-indigo-800/50 to-blue-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                      <h3 className="text-blue-200 text-sm font-medium mb-2">Team Members</h3>
                      <p className="text-3xl font-bold text-white">12</p>
                      <div className="mt-3">
                        <span className="text-blue-400 text-sm">4 online now</span>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <CodeBlock title="Animated Micro-Interactions Sidebar - React JSX">
{`import { Star, Home, Users, BarChart } from 'lucide-react';

const AnimatedSidebar = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <aside className="bg-gradient-to-b from-purple-900 to-indigo-900 w-64 p-6">
        <div className="mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Star className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Animated UI</h2>
              <p className="text-purple-200 text-xs">v2.0</p>
            </div>
          </div>
        </div>
        
        <nav>
          <ul className="space-y-3">
            <li>
              <a href="#" className="group flex items-center space-x-3 p-3 rounded-xl bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="p-1 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                  <Home className="h-4 w-4" />
                </div>
                <span>Dashboard</span>
                <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
              </a>
            </li>
            <li>
              <a href="#" className="group flex items-center space-x-3 p-3 rounded-xl text-purple-200 hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105">
                <div className="p-1 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                  <Users className="h-4 w-4" />
                </div>
                <span>Team</span>
                <span className="ml-auto bg-purple-500 text-xs px-2 py-1 rounded-full">4</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="mt-8 p-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl border border-purple-400/30">
          <h4 className="text-white font-semibold mb-2">🚀 New Feature</h4>
          <p className="text-purple-200 text-sm">Advanced analytics now available!</p>
          <button className="mt-3 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </aside>
      
      <main className="flex-1 p-6 bg-gray-900">
        <h1 className="text-2xl font-bold text-white mb-4">Animated Interface</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <h3 className="text-purple-200 text-sm font-medium mb-2">Active Projects</h3>
            <p className="text-3xl font-bold text-white">18</p>
            <div className="mt-3 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm">All systems operational</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 15. SIDEBAR WITH USER PROFILE */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            15. Sidebar with Detailed User Profile
          </h2>
          
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '500px' }}>
              <div className="flex h-full">
                <aside className="bg-gray-50 border-r border-gray-200 w-80 p-6 flex flex-col">
                  <div className="mb-6">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
                      <p className="text-sm text-gray-500">Product Manager</p>
                      <div className="flex items-center justify-center space-x-4 mt-3 text-xs text-gray-400">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>San Francisco</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>Joined 2023</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                        <p className="text-lg font-bold text-gray-900">24</p>
                        <p className="text-xs text-gray-500">Projects</p>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                        <p className="text-lg font-bold text-gray-900">156</p>
                        <p className="text-xs text-gray-500">Tasks</p>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
                        <p className="text-lg font-bold text-gray-900">98%</p>
                        <p className="text-xs text-gray-500">Complete</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <nav>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Navigation</h4>
                      <ul className="space-y-1">
                        <li>
                          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-100 text-blue-700">
                            <Home className="h-4 w-4" />
                            <span>My Dashboard</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                            <FileText className="h-4 w-4" />
                            <span>My Projects</span>
                            <span className="ml-auto bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">5 active</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                            <Calendar className="h-4 w-4" />
                            <span>Schedule</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                            <MessageSquare className="h-4 w-4" />
                            <span>Messages</span>
                            <span className="ml-auto bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">3 new</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                        Edit Profile
                      </button>
                      <button className="px-3 py-2 bg-gray-200 text-gray-600 text-sm rounded-lg hover:bg-gray-300 transition-colors">
                        <Settings className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </aside>
                
                <main className="flex-1 p-6 bg-white">
                  <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Welcome back, Sarah! 👋</h1>
                    <p className="text-gray-600">Here's what's happening with your projects today.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                      <h3 className="text-lg font-semibold mb-2">Today's Tasks</h3>
                      <p className="text-3xl font-bold">8</p>
                      <p className="text-blue-100 text-sm mt-2">2 completed this morning</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                      <h3 className="text-lg font-semibold mb-2">Team Updates</h3>
                      <p className="text-3xl font-bold">3</p>
                      <p className="text-purple-100 text-sm mt-2">Requires your review</p>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <CodeBlock title="Sidebar with User Profile - React JSX">
{`import { User, MapPin, Calendar, Home, FileText, MessageSquare, Settings } from 'lucide-react';

const SidebarWithUserProfile = () => {
  return (
    <div className="flex h-screen">
      <aside className="bg-gray-50 border-r border-gray-200 w-80 p-6 flex flex-col">
        <div className="mb-6">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
            <p className="text-sm text-gray-500">Product Manager</p>
            <div className="flex items-center justify-center space-x-4 mt-3 text-xs text-gray-400">
              <div className="flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>San Francisco</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>Joined 2023</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mb-6">
            <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
              <p className="text-lg font-bold text-gray-900">24</p>
              <p className="text-xs text-gray-500">Projects</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
              <p className="text-lg font-bold text-gray-900">156</p>
              <p className="text-xs text-gray-500">Tasks</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg border border-gray-200">
              <p className="text-lg font-bold text-gray-900">98%</p>
              <p className="text-xs text-gray-500">Complete</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <nav>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Navigation</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-100 text-blue-700">
                  <Home className="h-4 w-4" />
                  <span>My Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                  <FileText className="h-4 w-4" />
                  <span>My Projects</span>
                  <span className="ml-auto bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">5 active</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex space-x-2">
            <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
              Edit Profile
            </button>
            <button className="px-3 py-2 bg-gray-200 text-gray-600 text-sm rounded-lg hover:bg-gray-300 transition-colors">
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>
      
      <main className="flex-1 p-6 bg-white">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Sarah! 👋</h1>
          <p className="text-gray-600">Here's what's happening with your projects today.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
            <h3 className="text-lg font-semibold mb-2">Today's Tasks</h3>
            <p className="text-3xl font-bold">8</p>
            <p className="text-blue-100 text-sm mt-2">2 completed this morning</p>
          </div>
        </div>
      </main>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>


        {/* QUICK REFERENCE */}
        <section className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Quick Reference Guide</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">Key Components Needed:</h3>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• useState for state management</li>
                <li>• Lucide React icons</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Responsive classes (md:, lg:)</li>
                <li>• Transform utilities for animations</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">Common Patterns:</h3>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>• flex h-screen for full height</li>
                <li>• w-64 for standard sidebar width</li>
                <li>• transition-all duration-300 for smooth animations</li>
                <li>• backdrop-blur-md for glassmorphism</li>
                <li>• fixed md:static for mobile responsiveness</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="font-semibold text-blue-700 mb-2">Essential CSS Classes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-3 rounded">
                <strong>Layout:</strong> flex, h-screen, w-64, flex-1
              </div>
              <div className="bg-white p-3 rounded">
                <strong>Responsive:</strong> md:static, md:translate-x-0, md:hidden
              </div>
              <div className="bg-white p-3 rounded">
                <strong>Effects:</strong> backdrop-blur-md, bg-white/10, transition-all
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg">
            <h3 className="font-semibold text-blue-700 mb-2">Implementation Tips:</h3>
            <ul className="text-sm text-blue-600 space-y-1">
              <li>1. Always use useState for sidebar toggle state</li>
              <li>2. Add overlay div for mobile menu backdrop</li>
              <li>3. Use transform classes for slide animations</li>
              <li>4. Test responsive breakpoints thoroughly</li>
              <li>5. Consider accessibility with proper ARIA labels</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SidebarLayoutTemplates;