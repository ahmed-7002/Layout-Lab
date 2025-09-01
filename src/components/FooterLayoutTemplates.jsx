import React, { useState } from 'react';
import { Copy, Check, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const FooterLayoutTemplates = () => {
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
    <div className="bg-gray-50 min-h-screen" id="FooterLayoutTemplates">
      <h1 className="text-3xl font-bold text-center py-8 text-gray-800">
        Footer Layout Templates
      </h1>
      
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* 1. SIMPLE MINIMAL FOOTER */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            1. Simple Minimal Footers
          </h2>
          
          {/* Basic Minimal Footer */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Basic Minimal Footer</h3>
            <footer className="bg-gray-800 text-white py-8 rounded-lg">
              <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-gray-300">© 2024 Your Company Name. All rights reserved.</p>
              </div>
            </footer>
            <CodeBlock title="Basic Minimal Footer - React JSX">
{`<footer className="bg-gray-800 text-white py-8">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <p className="text-gray-300">© 2024 Your Company Name. All rights reserved.</p>
  </div>
</footer>`}
            </CodeBlock>
          </div>

          {/* Minimal with Links */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Minimal Footer with Links</h3>
            <footer className="bg-white border-t border-gray-200 py-8 rounded-lg">
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <p className="text-gray-600">© 2024 Your Company. All rights reserved.</p>
                  <div className="flex space-x-6">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
                  </div>
                </div>
              </div>
            </footer>
            <CodeBlock title="Minimal Footer with Links - React JSX">
{`<footer className="bg-white border-t border-gray-200 py-8">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <p className="text-gray-600">© 2024 Your Company. All rights reserved.</p>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
      </div>
    </div>
  </div>
</footer>`}
            </CodeBlock>
          </div>

          {/* Minimal with Social Icons */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Minimal Footer with Social Icons</h3>
            <footer className="bg-gray-900 text-white py-8 rounded-lg">
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm">© 2024 Your Company. All rights reserved.</p>
                </div>
              </div>
            </footer>
            <CodeBlock title="Minimal Footer with Social Icons - React JSX">
{`import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

<footer className="bg-gray-900 text-white py-8">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Facebook className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Twitter className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Instagram className="h-5 w-5" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
      <p className="text-gray-400 text-sm">© 2024 Your Company. All rights reserved.</p>
    </div>
  </div>
</footer>`}
            </CodeBlock>
          </div>
        </section>

        {/* 2. MULTI-COLUMN FOOTERS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            2. Multi-Column Footers
          </h2>
          
          {/* 4 Column Footer */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Four Column Footer</h3>
            <footer className="bg-gray-800 text-white rounded-lg">
              <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">News</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Products</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Enterprise</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Security</a></li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                  <p className="text-gray-400">© 2024 Your Company Name. All rights reserved.</p>
                </div>
              </div>
            </footer>
            <CodeBlock title="Four Column Footer - React JSX">
{`<footer className="bg-gray-800 text-white">
  <div className="max-w-6xl mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">News</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Products</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Enterprise</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Resources</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Legal</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Security</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
      <p className="text-gray-400">© 2024 Your Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`}
            </CodeBlock>
          </div>

          {/* 3 Column with Logo */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Three Column Footer with Logo</h3>
            <footer className="bg-white border-t border-gray-200 rounded-lg">
              <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Logo</h2>
                    <p className="text-gray-600 mb-4">
                      Building amazing products and experiences for the modern world.
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Help Center</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Documentation</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Status</a></li>
                      <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">API</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 mr-2" />
                        hello@company.com
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        +1 (555) 123-4567
                      </li>
                      <li className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        San Francisco, CA
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-gray-200 mt-8 pt-8 text-center">
                  <p className="text-gray-600">© 2024 Your Company. All rights reserved.</p>
                </div>
              </div>
            </footer>
            <CodeBlock title="Three Column Footer with Logo - React JSX">
{`import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

<footer className="bg-white border-t border-gray-200">
  <div className="max-w-6xl mx-auto px-4 py-12">
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-1">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Logo</h2>
        <p className="text-gray-600 mb-4">
          Building amazing products and experiences for the modern world.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Help Center</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Documentation</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Status</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">API</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-600">
            <Mail className="h-4 w-4 mr-2" />
            hello@company.com
          </li>
          <li className="flex items-center text-gray-600">
            <Phone className="h-4 w-4 mr-2" />
            +1 (555) 123-4567
          </li>
          <li className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            San Francisco, CA
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-200 mt-8 pt-8 text-center">
      <p className="text-gray-600">© 2024 Your Company. All rights reserved.</p>
    </div>
  </div>
</footer>`}
            </CodeBlock>
          </div>
        </section>

        {/* 3. NEWSLETTER SUBSCRIPTION FOOTERS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            3. Newsletter Subscription Footers
          </h2>
          
          {/* Newsletter with CTA */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Newsletter Subscription Footer</h3>
            <footer className="bg-blue-600 text-white rounded-lg">
              <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                  <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                    Subscribe to our newsletter and get the latest updates, news, and exclusive offers delivered to your inbox.
                  </p>
                </div>
                <div className="max-w-md mx-auto mb-8">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                      <li><a href="#" className="text-blue-100 hover:text-white transition-colors">About Us</a></li>
                      <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Contact</a></li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex justify-center space-x-4">
                      <a href="#" className="text-blue-100 hover:text-white transition-colors">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-blue-100 hover:text-white transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-blue-100 hover:text-white transition-colors">
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <h3 className="text-lg font-semibold mb-2">Legal</h3>
                    <ul className="space-y-1">
                      <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Privacy</a></li>
                      <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Terms</a></li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-blue-500 mt-8 pt-8 text-center">
                  <p className="text-blue-100">© 2024 Your Company. All rights reserved.</p>
                </div>
              </div>
            </footer>
            <CodeBlock title="Newsletter Subscription Footer - React JSX">
{`<footer className="bg-blue-600 text-white">
  <div className="max-w-6xl mx-auto px-4 py-12">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
      <p className="text-blue-100 text-lg max-w-2xl mx-auto">
        Subscribe to our newsletter and get the latest updates, news, and exclusive offers.
      </p>
    </div>
    <div className="max-w-md mx-auto mb-8">
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Subscribe
        </button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center md:text-left">
        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
        <ul className="space-y-1">
          <li><a href="#" className="text-blue-100 hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-100 hover:text-white transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="text-center md:text-right">
        <h3 className="text-lg font-semibold mb-2">Legal</h3>
        <ul className="space-y-1">
          <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Privacy</a></li>
          <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Terms</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>`}
            </CodeBlock>
          </div>
        </section>

        {/* 4. MODERN GRADIENT FOOTERS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            4. Modern Gradient Footers
          </h2>
          
          {/* Gradient Footer */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Modern Gradient Footer</h3>
            <footer className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white rounded-lg">
              <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-lg text-purple-100 mb-6">
                      Join thousands of satisfied customers and transform your workflow today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        Start Free Trial
                      </button>
                      <button className="border border-purple-300 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                        View Pricing
                      </button>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Company</h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-purple-100 hover:text-white transition-colors">About</a></li>
                        <li><a href="#" className="text-purple-100 hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="text-purple-100 hover:text-white transition-colors">Press</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Connect</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="text-purple-100 hover:text-white transition-colors">
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-purple-100 hover:text-white transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="#" className="text-purple-100 hover:text-white transition-colors">
                          <Github className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-purple-400 border-opacity-30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-purple-100">© 2024 Your Company. All rights reserved.</p>
                  <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="text-purple-100 hover:text-white transition-colors text-sm">Privacy</a>
                    <a href="#" className="text-purple-100 hover:text-white transition-colors text-sm">Terms</a>
                    <a href="#" className="text-purple-100 hover:text-white transition-colors text-sm">Cookies</a>
                  </div>
                </div>
              </div>
            </footer>
            <CodeBlock title="Modern Gradient Footer - React JSX">
{`import { Twitter, Linkedin, Github } from 'lucide-react';

<footer className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
  <div className="max-w-6xl mx-auto px-4 py-12">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-purple-100 mb-6">
          Join thousands of satisfied customers and transform your workflow today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
          <button className="border border-purple-300 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
            View Pricing
          </button>
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-purple-100 hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="text-purple-100 hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="text-purple-100 hover:text-white transition-colors">Press</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-purple-100 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-purple-100 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-purple-100 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-purple-400 border-opacity-30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-purple-100">© 2024 Your Company. All rights reserved.</p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="text-purple-100 hover:text-white transition-colors text-sm">Privacy</a>
        <a href="#" className="text-purple-100 hover:text-white transition-colors text-sm">Terms</a>
        <a href="#" className="text-purple-100 hover:text-white transition-colors text-sm">Cookies</a>
      </div>
    </div>
  </div>
</footer>`}
            </CodeBlock>
          </div>
        </section>

        {/* 5. STICKY FOOTERS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            5. Sticky & Fixed Footers
          </h2>
          
          {/* Sticky Bottom Footer */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Sticky Bottom Footer</h3>
            <div className="bg-gray-100 rounded-lg p-4 min-h-96 relative">
              <div className="mb-4 text-center text-gray-600">
                <p>Scroll content would go here...</p>
                <p>This footer will stick to the bottom of the viewport</p>
              </div>
              <footer className="bg-gray-800 text-white fixed bottom-0 left-0 right-0 py-4">
                <div className="max-w-6xl mx-auto px-4">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                    <div className="flex space-x-6">
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</a>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms</a>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a>
                      <p className="text-gray-300 hover:text-white font-bold">this a sticky footer</p>
                    </div>
                    <p className="text-gray-400 text-sm">© 2024 Your Company</p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Facebook className="h-4 w-4" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
            <CodeBlock title="Sticky Bottom Footer - React JSX">
{`<footer className="bg-gray-800 text-white fixed bottom-0 left-0 right-0 py-4">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
      <div className="flex space-x-6">
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a>
      </div>
      <p className="text-gray-400 text-sm">© 2024 Your Company</p>
      <div className="flex space-x-3">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Facebook className="h-4 w-4" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
          <Twitter className="h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
</footer>

/* Add this CSS to ensure proper spacing for sticky footer */
/* body { padding-bottom: 80px; } */`}
            </CodeBlock>
          </div>
        </section>

        {/* 6. MOBILE-FIRST RESPONSIVE FOOTERS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            6. Mobile-First Responsive Footers
          </h2>
          
          {/* Mobile Optimized Footer */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Mobile-Optimized Footer</h3>
            <footer className="bg-gray-900 text-white rounded-lg">
              <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Mobile: Accordion-style sections */}
                <div className="space-y-6 md:hidden">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Your Company</h2>
                    <p className="text-gray-300 text-sm">Building the future, one step at a time.</p>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <button className="w-full text-left text-lg font-semibold mb-3">Quick Links</button>
                    <ul className="space-y-2 pl-4">
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors block py-1">Home</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors block py-1">About</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors block py-1">Services</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors block py-1">Contact</a></li>
                    </ul>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex justify-center space-x-6">
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        <Twitter className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        <Instagram className="h-6 w-6" />
                      </a>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        <Linkedin className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Desktop: Regular grid layout */}
                <div className="hidden md:grid md:grid-cols-4 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4">Your Company</h2>
                    <p className="text-gray-300 mb-4">Building the future, one step at a time.</p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Support</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Status</a></li>
                    </ul>
                  </div>
                </div>
                
                {/* Copyright - Same for all sizes */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                    <p className="text-gray-400 text-sm">© 2024 Your Company. All rights reserved.</p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <CodeBlock title="Mobile-Optimized Footer - React JSX">
{`<footer className="bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto px-4 py-8">
    {/* Mobile: Accordion-style sections */}
    <div className="space-y-6 md:hidden">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Your Company</h2>
        <p className="text-gray-300 text-sm">Building the future, one step at a time.</p>
      </div>
      <div className="border-t border-gray-700 pt-4">
        <button className="w-full text-left text-lg font-semibold mb-3">Quick Links</button>
        <ul className="space-y-2 pl-4">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors block py-1">Home</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors block py-1">About</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors block py-1">Services</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors block py-1">Contact</a></li>
        </ul>
      </div>
      <div className="border-t border-gray-700 pt-4">
        <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
    
    {/* Desktop: Regular grid layout */}
    <div className="hidden md:grid md:grid-cols-4 gap-8">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">Your Company</h2>
        <p className="text-gray-300 mb-4">Building the future, one step at a time.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>`}
            </CodeBlock>
          </div>
        </section>

        {/* Quick Reference */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Footer Quick Reference Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Color Schemes</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 p-2 rounded border-l-4 border-gray-800">
                  <code className="text-gray-800">bg-gray-800</code> - Dark footer
                </div>
                <div className="bg-gray-50 p-2 rounded border-l-4 border-blue-600">
                  <code className="text-blue-600">bg-blue-600</code> - Brand footer
                </div>
                <div className="bg-gray-50 p-2 rounded border-l-4 border-white">
                  <code className="text-gray-600">bg-white</code> - Light footer
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Layout Patterns</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 p-2 rounded border-l-4 border-green-500">
                  <code className="text-green-600">grid-cols-4</code> - 4 column layout
                </div>
                <div className="bg-gray-50 p-2 rounded border-l-4 border-purple-500">
                  <code className="text-purple-600">flex justify-between</code> - Split layout
                </div>
                <div className="bg-gray-50 p-2 rounded border-l-4 border-red-500">
                  <code className="text-red-600">text-center</code> - Centered layout
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Responsive Classes</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 p-2 rounded border-l-4 border-orange-500">
                  <code className="text-orange-600">md:hidden</code> - Hide on desktop
                </div>
                <div className="bg-gray-50 p-2 rounded border-l-4 border-teal-500">
                  <code className="text-teal-600">hidden md:grid</code> - Show on desktop
                </div>
                <div className="bg-gray-50 p-2 rounded border-l-4 border-indigo-500">
                  <code className="text-indigo-600">flex-col md:flex-row</code> - Responsive direction
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Footer Best Practices</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Keep important links accessible</li>
                <li>• Include contact information</li>
                <li>• Add social media links</li>
                <li>• Ensure mobile responsiveness</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Common Footer Sections</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Company information & logo</li>
                <li>• Navigation links</li>
                <li>• Legal pages (Privacy, Terms)</li>
                <li>• Newsletter subscription</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FooterLayoutTemplates;