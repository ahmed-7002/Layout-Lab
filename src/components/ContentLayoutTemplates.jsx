import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ContentLayoutTemplates = () => {
  const [copiedCode, setCopiedCode] = useState('');

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
    <div className="bg-gray-50 min-h-screen" id="ContentLayoutTemplates">
      <h1 className="text-3xl font-bold text-center py-8 text-gray-800">
        Content Layout Templates
      </h1>
      
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* 1. LEFT ALIGNED CONTENT */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            1. Left Aligned Content
          </h2>
          
          {/* Basic Left Layout */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Basic Left Aligned Layout</h3>
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <div className="max-w-2xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Our Platform</h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Discover amazing features and tools that will help you achieve your goals. 
                  Our platform is designed with simplicity and efficiency in mind.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join thousands of users who have already transformed their workflow with our innovative solutions.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
            <CodeBlock title="Basic Left Aligned - React JSX">
{`<div className="bg-white p-8 rounded-lg shadow-md border">
  <div className="max-w-2xl">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Our Platform</h1>
    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
      Discover amazing features and tools that will help you achieve your goals. 
      Our platform is designed with simplicity and efficiency in mind.
    </p>
    <p className="text-gray-600 mb-6 leading-relaxed">
      Join thousands of users who have already transformed their workflow with our innovative solutions.
    </p>
    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
      Get Started
    </button>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Left with Sidebar */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Left Content with Right Sidebar</h3>
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Main Content Area</h1>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    This is the primary content area where your main information goes. 
                    It takes up most of the space and is perfect for articles, product descriptions, or detailed content.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The layout is responsive and will stack on mobile devices for better readability.
                  </p>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-blue-600 hover:underline">Documentation</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Support</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">API Reference</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Community</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <CodeBlock title="Left Content with Right Sidebar - React JSX">
{`<div className="bg-white p-8 rounded-lg shadow-md border">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Main Content Area</h1>
      <p className="text-gray-600 mb-4 leading-relaxed">
        This is the primary content area where your main information goes.
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h2>
      <p className="text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-blue-600 hover:underline">Documentation</a></li>
        <li><a href="#" className="text-blue-600 hover:underline">Support</a></li>
      </ul>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 2. RIGHT ALIGNED CONTENT */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            2. Right Aligned Content
          </h2>
          
          {/* Basic Right Layout */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Basic Right Aligned Layout</h3>
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <div className="flex justify-end">
                <div className="max-w-2xl text-right">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">Right Aligned Heading</h1>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Sometimes you want your content to be right-aligned for design purposes or to create visual balance with other elements on the page.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    This layout works well for call-to-action sections or when you have an image on the left side.
                  </p>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <CodeBlock title="Basic Right Aligned - React JSX">
{`<div className="bg-white p-8 rounded-lg shadow-md border">
  <div className="flex justify-end">
    <div className="max-w-2xl text-right">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Right Aligned Heading</h1>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        Sometimes you want your content to be right-aligned for design purposes.
      </p>
      <p className="text-gray-600 mb-6 leading-relaxed">
        This layout works well for call-to-action sections.
      </p>
      <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
        Learn More
      </button>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Right with Left Sidebar */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Right Content with Left Sidebar</h3>
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Navigation</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
                    <li><a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
                    <li><a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Services</a></li>
                    <li><a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
                  </ul>
                </div>
                <div className="lg:col-span-2 text-right">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Right-Side Main Content</h1>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    This layout places the sidebar on the left and content on the right. 
                    It's useful when you want to emphasize the navigation or supplementary information first.
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The right alignment creates a unique visual hierarchy that draws attention to the content area.
                  </p>
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
            <CodeBlock title="Right Content with Left Sidebar - React JSX">
{`<div className="bg-white p-8 rounded-lg shadow-md border">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Navigation</h3>
      <ul className="space-y-3">
        <li><a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
        <li><a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
      </ul>
    </div>
    <div className="lg:col-span-2 text-right">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Right-Side Main Content</h1>
      <p className="text-gray-600 mb-4 leading-relaxed">
        This layout places the sidebar on the left and content on the right.
      </p>
      <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
        Explore Now
      </button>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 3. CENTER ALIGNED CONTENT */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            3. Center Aligned Content
          </h2>
          
          {/* Basic Center Layout */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Basic Center Aligned Layout</h3>
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Centered Content Layout</h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Center-aligned content is perfect for landing pages, announcements, and focal points that need maximum attention.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                  This layout creates symmetry and balance, making it ideal for hero sections, testimonials, and call-to-action areas that need to stand out.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Primary Action
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                    Secondary Action
                  </button>
                </div>
              </div>
            </div>
            <CodeBlock title="Basic Center Aligned - React JSX">
{`<div className="bg-white p-8 rounded-lg shadow-md border">
  <div className="max-w-3xl mx-auto text-center">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">Centered Content Layout</h1>
    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
      Center-aligned content is perfect for landing pages and focal points.
    </p>
    <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
      This layout creates symmetry and balance for hero sections and call-to-action areas.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Primary Action
      </button>
      <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
        Secondary Action
      </button>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Center with Cards */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Center Layout with Feature Cards</h3>
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Amazing Features</h1>
                <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                  Discover what makes our platform special with these key features designed for your success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Fast Performance</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Lightning-fast loading times and optimized performance for the best user experience.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure & Reliable</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Enterprise-grade security with 99.9% uptime guarantee for peace of mind.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Easy Integration</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Simple APIs and comprehensive documentation for quick implementation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Center with Feature Cards - React JSX">
{`<div className="bg-white p-8 rounded-lg shadow-md border">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Amazing Features</h1>
    <p className="text-lg text-gray-600 mb-12 leading-relaxed">
      Discover what makes our platform special with these key features.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Fast Performance</h3>
        <p className="text-gray-600 leading-relaxed">
          Lightning-fast loading times and optimized performance.
        </p>
      </div>
      <div className="p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure & Reliable</h3>
        <p className="text-gray-600 leading-relaxed">
          Enterprise-grade security with 99.9% uptime guarantee.
        </p>
      </div>
      <div className="p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Easy Integration</h3>
        <p className="text-gray-600 leading-relaxed">
          Simple APIs and comprehensive documentation.
        </p>
      </div>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 4. TOP ALIGNED CONTENT */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            4. Top Aligned Content
          </h2>
          
          {/* Top Banner Style */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Top Banner Content Layout</h3>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-md">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold mb-4">Welcome to the Future</h1>
                  <p className="text-xl text-blue-100 leading-relaxed">
                    Experience the next generation of digital innovation with our cutting-edge platform
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                  <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">10M+</h3>
                    <p className="text-blue-100">Active Users</p>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">99.9%</h3>
                    <p className="text-blue-100">Uptime</p>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">150+</h3>
                    <p className="text-blue-100">Countries</p>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">24/7</h3>
                    <p className="text-blue-100">Support</p>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Top Banner Content - React JSX">
{`<div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-md">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Future</h1>
      <p className="text-xl text-blue-100 leading-relaxed">
        Experience the next generation of digital innovation with our cutting-edge platform
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">10M+</h3>
        <p className="text-blue-100">Active Users</p>
      </div>
      {/* Add more stat cards */}
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Top Header with Content Below */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Top Header with Content Below</h3>
            <div className="bg-white rounded-lg shadow-md border overflow-hidden">
              <div className="bg-gray-800 text-white p-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-3xl font-bold mb-2">Product Documentation</h1>
                  <p className="text-gray-300">Everything you need to know about our platform</p>
                </div>
              </div>
              <div className="p-8">
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Learn the basics of our platform and get up and running quickly with our step-by-step guides.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Quick setup guide</li>
                        <li>• Basic configuration</li>
                        <li>• First project setup</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Features</h2>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Dive deep into advanced functionality and learn how to maximize your productivity.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Custom integrations</li>
                        <li>• API documentation</li>
                        <li>• Advanced workflows</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Top Header with Content Below - React JSX">
{`<div className="bg-white rounded-lg shadow-md border overflow-hidden">
  <div className="bg-gray-800 text-white p-6">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-2">Product Documentation</h1>
      <p className="text-gray-300">Everything you need to know about our platform</p>
    </div>
  </div>
  <div className="p-8">
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Learn the basics and get up and running quickly.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• Quick setup guide</li>
            <li>• Basic configuration</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Features</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Dive deep into advanced functionality.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• Custom integrations</li>
            <li>• API documentation</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 5. FULL SCREEN CONTENT */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            5. Full Screen Content Layouts
          </h2>
          
          {/* Full Width Hero */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Full Screen Hero Layout</h3>
            <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white rounded-lg shadow-md overflow-hidden">
              <div className="min-h-96 flex items-center justify-center p-8">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Build Something 
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      Amazing
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                    Create stunning applications with our powerful tools and intuitive interface. 
                    Join millions of developers worldwide.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                      Start Building
                    </button>
                    <button className="border border-blue-300 hover:bg-blue-800 text-blue-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                      Watch Demo
                    </button>
                  </div>
                  <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                      <div className="text-3xl font-bold text-blue-300">5M+</div>
                      <div className="text-blue-200 text-sm">Developers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-300">99.9%</div>
                      <div className="text-blue-200 text-sm">Uptime</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-300">150+</div>
                      <div className="text-blue-200 text-sm">Countries</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-300">24/7</div>
                      <div className="text-blue-200 text-sm">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Full Screen Hero Layout - React JSX">
{`<div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white rounded-lg shadow-md overflow-hidden">
  <div className="min-h-96 flex items-center justify-center p-8">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Build Something 
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Amazing
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
        Create stunning applications with our powerful tools and intuitive interface.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
          Start Building
        </button>
        <button className="border border-blue-300 hover:bg-blue-800 text-blue-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
          Watch Demo
        </button>
      </div>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Full Width with Split Content */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Full Width Split Content Layout</h3>
            <div className="bg-white rounded-lg shadow-md border overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-96">
                <div className="bg-gray-50 p-8 lg:p-12 flex items-center">
                  <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                      Transform Your Workflow
                    </h1>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Streamline your processes and boost productivity with our innovative solutions designed for modern teams.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      From project management to team collaboration, we've got everything you need to succeed in today's fast-paced business environment.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                        Get Started Free
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                        Schedule Demo
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 lg:p-12 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="mb-8">
                      <div className="text-5xl font-bold mb-2">85%</div>
                      <div className="text-indigo-200">Efficiency Boost</div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-2xl font-bold">500+</div>
                        <div className="text-indigo-200 text-sm">Companies</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">50K+</div>
                        <div className="text-indigo-200 text-sm">Users</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Full Width Split Content - React JSX">
{`<div className="bg-white rounded-lg shadow-md border overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-96">
    <div className="bg-gray-50 p-8 lg:p-12 flex items-center">
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Transform Your Workflow
        </h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Streamline your processes and boost productivity with our innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
            Get Started Free
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 lg:p-12 flex items-center justify-center text-white">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-5xl font-bold mb-2">85%</div>
          <div className="text-indigo-200">Efficiency Boost</div>
        </div>
      </div>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 6. MIXED ORIENTATION LAYOUTS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            6. Mixed Orientation Layouts
          </h2>
          
          {/* Zigzag Layout */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Alternating Zigzag Layout</h3>
            <div className="space-y-12">
              {/* First Row - Left Text, Right Visual */}
              <div className="bg-white p-8 rounded-lg shadow-md border">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Analytics</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Get deep insights into your business performance with our comprehensive analytics dashboard. 
                      Track key metrics and make data-driven decisions.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Real-time data visualization</li>
                      <li>• Custom report generation</li>
                      <li>• Predictive analytics</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-lg text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">📊</div>
                    <div className="text-lg font-semibold text-blue-800">Analytics Dashboard</div>
                  </div>
                </div>
              </div>
              
              {/* Second Row - Right Text, Left Visual */}
              <div className="bg-white p-8 rounded-lg shadow-md border">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-lg text-center lg:order-first order-last">
                    <div className="text-4xl font-bold text-green-600 mb-2">🔒</div>
                    <div className="text-lg font-semibold text-green-800">Security First</div>
                  </div>
                  <div className="text-right lg:order-last order-first">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Security</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Protect your data with military-grade encryption and advanced security protocols. 
                      Your information stays safe and secure at all times.
                    </p>
                    <ul className="space-y-2 text-gray-600 text-right">
                      <li>• End-to-end encryption</li>
                      <li>• Multi-factor authentication</li>
                      <li>• Regular security audits</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Third Row - Left Text, Right Visual */}
              <div className="bg-white p-8 rounded-lg shadow-md border">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Seamless Integration</h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Connect with your favorite tools and platforms effortlessly. Our API-first approach 
                      ensures smooth integration with your existing workflow.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• REST & GraphQL APIs</li>
                      <li>• Webhook support</li>
                      <li>• 100+ integrations</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-lg text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">🔗</div>
                    <div className="text-lg font-semibold text-purple-800">API Integration</div>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Alternating Zigzag Layout - React JSX">
{`<div className="space-y-12">
  {/* First Row - Left Text, Right Visual */}
  <div className="bg-white p-8 rounded-lg shadow-md border">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Analytics</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Get deep insights into your business performance with our comprehensive analytics dashboard.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>• Real-time data visualization</li>
          <li>• Custom report generation</li>
        </ul>
      </div>
      <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-lg text-center">
        <div className="text-4xl font-bold text-blue-600 mb-2">📊</div>
        <div className="text-lg font-semibold text-blue-800">Analytics Dashboard</div>
      </div>
    </div>
  </div>
  
  {/* Second Row - Right Text, Left Visual */}
  <div className="bg-white p-8 rounded-lg shadow-md border">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-lg text-center lg:order-first order-last">
        <div className="text-4xl font-bold text-green-600 mb-2">🔒</div>
        <div className="text-lg font-semibold text-green-800">Security First</div>
      </div>
      <div className="text-right lg:order-last order-first">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Security</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Protect your data with military-grade encryption and advanced security protocols.
        </p>
      </div>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Multi-Column Mixed Layout */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Multi-Column Mixed Orientation</h3>
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Select the perfect plan for your needs. All plans include our core features with different levels of access and support.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="text-left">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Starter</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-4">$9<span className="text-base text-gray-500">/month</span></div>
                    <p className="text-gray-600 mb-6">Perfect for individuals and small teams getting started.</p>
                    <ul className="space-y-3 text-gray-600 text-sm mb-6">
                      <li>• Up to 5 projects</li>
                      <li>• Basic analytics</li>
                      <li>• Email support</li>
                      <li>• 1GB storage</li>
                    </ul>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Choose Plan
                    </button>
                  </div>
                </div>
                
                {/* Center Column */}
                <div className="text-center">
                  <div className="bg-blue-600 text-white p-6 rounded-lg h-full relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      POPULAR
                    </div>
                    <h3 className="text-xl font-bold mb-3">Professional</h3>
                    <div className="text-3xl font-bold mb-4">$29<span className="text-base text-blue-200">/month</span></div>
                    <p className="text-blue-100 mb-6">Ideal for growing businesses and professional teams.</p>
                    <ul className="space-y-3 text-blue-100 text-sm mb-6">
                      <li>• Unlimited projects</li>
                      <li>• Advanced analytics</li>
                      <li>• Priority support</li>
                      <li>• 100GB storage</li>
                    </ul>
                    <button className="w-full bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                      Choose Plan
                    </button>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="text-right">
                  <div className="bg-gray-50 p-6 rounded-lg h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-4">Custom</div>
                    <p className="text-gray-600 mb-6">For large organizations with specific requirements.</p>
                    <ul className="space-y-3 text-gray-600 text-sm mb-6">
                      <li>• Custom solutions</li>
                      <li>• Dedicated support</li>
                      <li>• SLA guarantees</li>
                      <li>• Unlimited storage</li>
                    </ul>
                    <button className="w-full border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Multi-Column Mixed Orientation - React JSX">
{`<div className="bg-white p-8 rounded-lg shadow-md border">
  <div className="text-center mb-12">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Select the perfect plan for your needs with different levels of access and support.
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Left Column */}
    <div className="text-left">
      <div className="bg-gray-50 p-6 rounded-lg h-full">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Starter</h3>
        <div className="text-3xl font-bold text-blue-600 mb-4">$9<span className="text-base text-gray-500">/month</span></div>
        <p className="text-gray-600 mb-6">Perfect for individuals and small teams.</p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Choose Plan
        </button>
      </div>
    </div>
    
    {/* Center Column */}
    <div className="text-center">
      <div className="bg-blue-600 text-white p-6 rounded-lg h-full relative">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          POPULAR
        </div>
        <h3 className="text-xl font-bold mb-3">Professional</h3>
        <div className="text-3xl font-bold mb-4">$29<span className="text-base text-blue-200">/month</span></div>
      </div>
    </div>
    
    {/* Right Column */}
    <div className="text-right">
      <div className="bg-gray-50 p-6 rounded-lg h-full">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise</h3>
        <div className="text-3xl font-bold text-blue-600 mb-4">Custom</div>
      </div>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* Quick Reference */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Quick Reference Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Text Alignment Classes</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 p-2 rounded border-l-4 border-blue-500">
                  <code className="text-blue-600">text-left</code> - Left align
                </div>
                <div className="bg-gray-50 p-2 rounded border-l-4 border-green-500">
                  <code className="text-green-600">text-center</code> - Center align
                </div>
                <div className="bg-gray-50 p-2 rounded border-l-4 border-purple-500">
                  <code className="text-purple-600">text-right</code> - Right align
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Layout Positioning</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 p-2 rounded border-l-4 border-red-500">
                  <code className="text-red-600">justify-start</code> - Left position
                </div>
                <div className="bg-gray-50 p-2 rounded border-l-4 border-orange-500">
                  <code className="text-orange-600">justify-center</code> - Center position
                </div>
                <div className="bg-gray-50 p-2 rounded border-l-4 border-indigo-500">
                  <code className="text-indigo-600">justify-end</code> - Right position
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Content Containers</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 p-2 rounded border-l-4 border-pink-500">
                  <code className="text-pink-600">max-w-2xl</code> - Narrow content
                </div>
                <div className="bg-gray-50 p-2 rounded border-l-4 border-teal-500">
                  <code className="text-teal-600">max-w-4xl</code> - Medium content  
                </div>
                <div className="bg-gray-50 p-2 rounded border-l-4 border-cyan-500">
                  <code className="text-cyan-600">max-w-7xl</code> - Wide content
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Pro Tip:</strong> Use <code>mx-auto</code> to center containers, combine with <code>text-center</code> for full center alignment.
              For responsive designs, use <code>text-left md:text-center lg:text-right</code> to change alignment at different breakpoints.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContentLayoutTemplates;