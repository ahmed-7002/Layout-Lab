import React, { useState } from 'react';
import { Copy, Check, Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

const ContactFormTemplates = () => {
  const [copiedCode, setCopiedCode] = useState('');
  const [formData, setFormData] = useState({});

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(text);
      setTimeout(() => setCopiedCode(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleFormSubmit = (e, formName) => {
    e.preventDefault();
    alert(`${formName} form submitted! (This is just a demo)`);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
    <div className="bg-gray-50 min-h-screen" id="ContactFormTemplates">
      <h1 className="text-3xl font-bold text-center py-8 text-gray-800">
        Contact Form Layout Templates
      </h1>
      
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        {/* 1. SIMPLE CONTACT FORMS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            1. Simple Contact Forms
          </h2>
          
          {/* Basic Contact Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Basic Contact Form</h3>
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h2>
                <form onSubmit={(e) => handleFormSubmit(e, 'Basic Contact')}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your message"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <CodeBlock title="Basic Contact Form - React JSX">
{`<div className="bg-white p-8 rounded-lg shadow-md border">
  <div className="max-w-md mx-auto">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h2>
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your message"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Minimal Contact Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Minimal Contact Form</h3>
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <div className="max-w-lg mx-auto">
                <form onSubmit={(e) => handleFormSubmit(e, 'Minimal Contact')} className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-light text-gray-900 mb-2">Contact Us</h2>
                    <p className="text-gray-600">We'd love to hear from you</p>
                  </div>
                  
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent text-lg"
                    required
                  />
                  
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent text-lg"
                    required
                  />
                  
                  <textarea
                    placeholder="Your Message"
                    rows={3}
                    className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent text-lg resize-none"
                    required
                  />
                  
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="bg-black text-white px-8 py-3 rounded-none hover:bg-gray-800 transition-colors font-light tracking-wider"
                    >
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <CodeBlock title="Minimal Contact Form - React JSX">
{`<div className="bg-white p-8 rounded-lg shadow-md border">
  <div className="max-w-lg mx-auto">
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-light text-gray-900 mb-2">Contact Us</h2>
        <p className="text-gray-600">We'd love to hear from you</p>
      </div>
      
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent text-lg"
        required
      />
      
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent text-lg"
        required
      />
      
      <textarea
        placeholder="Your Message"
        rows={3}
        className="w-full px-0 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-transparent text-lg resize-none"
        required
      />
      
      <div className="text-center pt-4">
        <button
          type="submit"
          className="bg-black text-white px-8 py-3 rounded-none hover:bg-gray-800 transition-colors font-light tracking-wider"
        >
          SEND
        </button>
      </div>
    </form>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 2. SPLIT LAYOUT CONTACT FORMS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            2. Split Layout Contact Forms
          </h2>
          
          {/* Form with Contact Info Sidebar */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Form with Contact Information Sidebar</h3>
            <div className="bg-white rounded-lg shadow-md border overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Contact Info */}
                <div className="bg-blue-600 text-white p-8 lg:p-12">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    We're here to help and answer any questions you might have. 
                    We look forward to hearing from you.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-4 text-blue-200" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-blue-200">hello@company.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-4 text-blue-200" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-blue-200">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-4 text-blue-200" />
                      <div>
                        <p className="font-medium">Office</p>
                        <p className="text-blue-200">123 Business St, City, State 12345</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Form */}
                <div className="p-8 lg:p-12">
                  <form onSubmit={(e) => handleFormSubmit(e, 'Split Layout')}>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>General Inquiry</option>
                          <option>Support Request</option>
                          <option>Sales Question</option>
                          <option>Partnership</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message
                        </label>
                        <textarea
                          rows={5}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
                      >
                        <Send className="h-4 w-4" />
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <CodeBlock title="Split Layout Contact Form - React JSX">
{`<div className="bg-white rounded-lg shadow-md border overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-2">
    {/* Left Side - Contact Info */}
    <div className="bg-blue-600 text-white p-8 lg:p-12">
      <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
      <p className="text-blue-100 mb-8 leading-relaxed">
        We're here to help and answer any questions you might have.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-center">
          <Mail className="h-5 w-5 mr-4 text-blue-200" />
          <div>
            <p className="font-medium">Email</p>
            <p className="text-blue-200">hello@company.com</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Phone className="h-5 w-5 mr-4 text-blue-200" />
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-blue-200">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Right Side - Form */}
    <div className="p-8 lg:p-12">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          
          <textarea
            rows={5}
            placeholder="Message"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Map Integration Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Contact Form with Map Integration</h3>
            <div className="bg-white rounded-lg shadow-md border overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Left Side - Map Placeholder */}
                <div className="lg:col-span-2 bg-gray-200 p-8 flex items-center justify-center min-h-96">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-sm">Google Maps or similar integration would go here</p>
                    <div className="mt-4 text-xs bg-gray-300 p-2 rounded">
                      123 Business Street<br />
                      City, State 12345<br />
                      United States
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Compact Form */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
                  <form onSubmit={(e) => handleFormSubmit(e, 'Map Integration')} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      required
                    />
                    
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      required
                    />
                    
                    <input
                      type="tel"
                      placeholder="Phone (Optional)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    
                    <textarea
                      rows={4}
                      placeholder="Message"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      required
                    />
                    
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors font-medium text-sm"
                    >
                      Send Message
                    </button>
                  </form>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-3">Visit Us</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>123 Business St, City</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        <span>info@company.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Map Integration Contact Form - React JSX">
{`<div className="bg-white rounded-lg shadow-md border overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-3">
    {/* Left Side - Map */}
    <div className="lg:col-span-2 bg-gray-200 p-8 flex items-center justify-center min-h-96">
      <div className="text-center text-gray-500">
        <MapPin className="h-12 w-12 mx-auto mb-4" />
        <p className="text-lg font-medium">Interactive Map</p>
        <p className="text-sm">Google Maps integration would go here</p>
      </div>
    </div>
    
    {/* Right Side - Form */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          required
        />
        
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          required
        />
        
        <textarea
          rows={4}
          placeholder="Message"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          required
        />
        
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors font-medium text-sm"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 3. MULTI-STEP CONTACT FORMS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            3. Multi-Step Contact Forms
          </h2>
          
          {/* Step-by-Step Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Multi-Step Contact Form</h3>
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <div className="max-w-2xl mx-auto">
                {/* Progress Indicator */}
                <div className="mb-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                        1
                      </div>
                      <span className="ml-2 text-sm font-medium text-blue-600">Personal Info</span>
                    </div>
                    <div className="flex-1 mx-4 h-1 bg-gray-200">
                      <div className="h-1 bg-blue-600 w-1/3"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-gray-200 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                        2
                      </div>
                      <span className="ml-2 text-sm text-gray-500">Contact Details</span>
                    </div>
                    <div className="flex-1 mx-4 h-1 bg-gray-200"></div>
                    <div className="flex items-center">
                      <div className="bg-gray-200 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                        3
                      </div>
                      <span className="ml-2 text-sm text-gray-500">Message</span>
                    </div>
                  </div>
                </div>

                {/* Step 1 Content */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                    Tell us about yourself
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Title (Optional)
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                  <button
                    type="button"
                    disabled
                    className="px-6 py-2 text-gray-400 cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </div>
            <CodeBlock title="Multi-Step Contact Form - React JSX">
{`<div className="bg-white p-8 rounded-lg shadow-md border">
  <div className="max-w-2xl mx-auto">
    {/* Progress Indicator */}
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
            1
          </div>
          <span className="ml-2 text-sm font-medium text-blue-600">Personal Info</span>
        </div>
        <div className="flex-1 mx-4 h-1 bg-gray-200">
          <div className="h-1 bg-blue-600 w-1/3"></div>
        </div>
        <div className="flex items-center">
          <div className="bg-gray-200 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
            2
          </div>
          <span className="ml-2 text-sm text-gray-500">Contact Details</span>
        </div>
      </div>
    </div>

    {/* Step Content */}
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        Tell us about yourself
      </h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name *"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Last Name *"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <input
          type="text"
          placeholder="Company (Optional)"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    {/* Navigation */}
    <div className="flex justify-between">
      <button
        type="button"
        disabled
        className="px-6 py-2 text-gray-400 cursor-not-allowed"
      >
        Previous
      </button>
      <button
        type="button"
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Next Step
      </button>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 4. CARD-BASED CONTACT FORMS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            4. Card-Based Contact Forms
          </h2>
          
          {/* Contact Cards Layout */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Contact Method Cards</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Email Card */}
              <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Send Email</h3>
                  <p className="text-gray-600 text-sm">Get in touch via email for detailed inquiries</p>
                </div>
                
                <form onSubmit={(e) => handleFormSubmit(e, 'Email Card')} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                  <textarea
                    rows={3}
                    placeholder="Message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Phone Card */}
              <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 text-sm">Speak directly with our team</p>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">+1 (555) 123-4567</div>
                    <p className="text-sm text-gray-600 mb-4">Available Mon-Fri 9AM-6PM EST</p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-3 text-sm">Request a Callback</h4>
                    <form onSubmit={(e) => handleFormSubmit(e, 'Callback')} className="space-y-3">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                        required
                      />
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                        required
                      />
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm">
                        <option>Best time to call</option>
                        <option>Morning (9AM-12PM)</option>
                        <option>Afternoon (12PM-3PM)</option>
                        <option>Evening (3PM-6PM)</option>
                      </select>
                      <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
                      >
                        Request Callback
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Live Chat Card */}
              <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 text-sm">Get instant support through live chat</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-green-600">Online Now</span>
                    </div>
                    <p className="text-xs text-gray-600">Average response time: 2 minutes</p>
                  </div>
                  
                  <form onSubmit={(e) => handleFormSubmit(e, 'Live Chat')} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      required
                    />
                    <textarea
                      rows={2}
                      placeholder="How can we help?"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors text-sm font-medium"
                    >
                      Start Chat
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <CodeBlock title="Contact Method Cards - React JSX">
{`<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Email Card */}
  <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
    <div className="text-center mb-6">
      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Mail className="h-8 w-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Send Email</h3>
      <p className="text-gray-600 text-sm">Get in touch via email for detailed inquiries</p>
    </div>
    
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        required
      />
      <textarea
        rows={3}
        placeholder="Message"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
      >
        Send Message
      </button>
    </form>
  </div>

  {/* Phone Card */}
  <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
    <div className="text-center mb-6">
      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Phone className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
      <p className="text-gray-600 text-sm">Speak directly with our team</p>
    </div>
    
    <div className="text-center">
      <div className="text-2xl font-bold text-green-600 mb-2">+1 (555) 123-4567</div>
      <p className="text-sm text-gray-600">Available Mon-Fri 9AM-6PM EST</p>
    </div>
  </div>

  {/* Live Chat Card */}
  <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
    <div className="text-center mb-6">
      <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <MessageSquare className="h-8 w-8 text-purple-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
      <p className="text-gray-600 text-sm">Get instant support through live chat</p>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 5. FLOATING & MODAL CONTACT FORMS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            5. Floating & Modal Contact Forms
          </h2>
          
          {/* Floating Contact Button */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Floating Contact Button with Form</h3>
            <div className="bg-gray-100 p-8 rounded-lg relative min-h-96">
              <div className="text-center text-gray-600 py-20">
                <p className="text-lg">Your main website content would be here...</p>
                <p className="text-sm mt-2">Notice the floating contact button in the bottom right</p>
              </div>
              
              {/* Floating Button */}
              <div className="fixed bottom-8 right-8 z-10">
                <button
                  className="bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  onClick={() => alert('This would open a contact modal')}
                >
                  <MessageSquare className="h-6 w-6" />
                </button>
              </div>
              
              {/* Modal Preview (normally hidden) */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl border max-w-md w-full mx-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Quick Contact</h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    ×
                  </button>
                </div>
                
                <form onSubmit={(e) => handleFormSubmit(e, 'Floating Modal')} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                  <textarea
                    rows={3}
                    placeholder="How can we help you?"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <CodeBlock title="Floating Contact Form - React JSX">
{`{/* Main content area */}
<div className="min-h-screen bg-gray-100 relative">
  <div className="text-center text-gray-600 py-20">
    <p>Your main website content...</p>
  </div>
  
  {/* Floating Button */}
  <div className="fixed bottom-8 right-8 z-10">
    <button
      className="bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
      onClick={openModal}
    >
      <MessageSquare className="h-6 w-6" />
    </button>
  </div>
</div>

{/* Modal (conditionally rendered) */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-xl border max-w-md w-full mx-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Quick Contact</h3>
        <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
          ×
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          required
        />
        <textarea
          rows={3}
          placeholder="How can we help you?"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
)}`}
            </CodeBlock>
          </div>
        </section>

        {/* 6. SPECIALIZED CONTACT FORMS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            6. Specialized Contact Forms
          </h2>
          
          {/* Support Ticket Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Support Ticket Form</h3>
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Submit Support Request</h2>
                  <p className="text-gray-600">We'll get back to you within 24 hours</p>
                </div>
                
                <form onSubmit={(e) => handleFormSubmit(e, 'Support Ticket')} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Account ID (Optional)
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. ACC-12345"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Priority Level *
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Low - General Question</option>
                        <option>Medium - Issue Affecting Work</option>
                        <option>High - Critical Business Impact</option>
                        <option>Urgent - System Down</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Technical Support</option>
                        <option>Billing Question</option>
                        <option>Account Management</option>
                        <option>Feature Request</option>
                        <option>Bug Report</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Brief description of your issue"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Detailed Description *
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Please provide as much detail as possible including steps to reproduce, error messages, etc."
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Attachments (Optional)
                    </label>
                    <input
                      type="file"
                      multiple
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Supported formats: JPG, PNG, PDF, DOC, DOCX (Max 10MB each)
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors font-medium"
                  >
                    Submit Support Request
                  </button>
                </form>
              </div>
            </div>
            <CodeBlock title="Support Ticket Form - React JSX">
{`<div className="bg-white p-8 rounded-lg shadow-md border">
  <div className="max-w-3xl mx-auto">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Submit Support Request</h2>
      <p className="text-gray-600">We'll get back to you within 24 hours</p>
    </div>
    
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name *"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Last Name *"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Priority Level</option>
          <option>Low - General Question</option>
          <option>Medium - Issue Affecting Work</option>
          <option>High - Critical Business Impact</option>
        </select>
        
        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Category</option>
          <option>Technical Support</option>
          <option>Billing Question</option>
          <option>Account Management</option>
        </select>
      </div>
      
      <input
        type="text"
        placeholder="Subject *"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      
      <textarea
        rows={6}
        placeholder="Detailed Description *"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      
      <input
        type="file"
        multiple
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
      />
      
      <button
        type="submit"
        className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors font-medium"
      >
        Submit Support Request
      </button>
    </form>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Quote Request Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Quote Request Form</h3>
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Quote</h2>
                  <p className="text-gray-600">Tell us about your project and we'll provide a detailed estimate</p>
                </div>
                
                <form onSubmit={(e) => handleFormSubmit(e, 'Quote Request')} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full Name *"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email Address *"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Project Details</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Service Type *
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
                            <option value="">Select a service</option>
                            <option>Web Development</option>
                            <option>Mobile App Development</option>
                            <option>UI/UX Design</option>
                            <option>Digital Marketing</option>
                            <option>E-commerce Solutions</option>
                            <option>Custom Software</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Budget Range *
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
                            <option value="">Select budget range</option>
                            <option>Under $5,000</option>
                            <option>$5,000 - $10,000</option>
                            <option>$10,000 - $25,000</option>
                            <option>$25,000 - $50,000</option>
                            <option>$50,000+</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Timeline *
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
                            <option value="">Select timeline</option>
                            <option>ASAP (Rush job)</option>
                            <option>1-2 weeks</option>
                            <option>1 month</option>
                            <option>2-3 months</option>
                            <option>3+ months</option>
                            <option>Flexible</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Project Size *
                          </label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
                            <option value="">Select project size</option>
                            <option>Small (1-2 pages/features)</option>
                            <option>Medium (3-10 pages/features)</option>
                            <option>Large (10+ pages/features)</option>
                            <option>Enterprise (Complex system)</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Description *
                        </label>
                        <textarea
                          rows={5}
                          placeholder="Please describe your project in detail. Include goals, target audience, specific requirements, and any existing materials you have."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Features (Check all that apply)
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                          {[
                            'User Authentication',
                            'Payment Processing',
                            'Content Management',
                            'Multi-language Support',
                            'Social Media Integration',
                            'Analytics & Reporting',
                            'Mobile Responsive',
                            'SEO Optimization',
                            'Third-party APIs'
                          ].map((feature) => (
                            <label key={feature} className="flex items-center">
                              <input
                                type="checkbox"
                                className="mr-2 text-green-600 focus:ring-green-500"
                              />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Reference Materials (Optional)
                        </label>
                        <input
                          type="file"
                          multiple
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Upload wireframes, designs, documents, or any reference materials
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-green-600 text-white py-3 px-8 rounded-md hover:bg-green-700 transition-colors font-medium text-lg"
                    >
                      Request Quote
                    </button>
                    <p className="text-sm text-gray-600 mt-2">
                      We'll review your request and get back to you within 24 hours
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <CodeBlock title="Quote Request Form - React JSX">
{`<div className="bg-white p-8 rounded-lg shadow-md border">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Quote</h2>
      <p className="text-gray-600">Tell us about your project and we'll provide a detailed estimate</p>
    </div>
    
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name *"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <input
            type="email"
            placeholder="Email Address *"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
      </div>
      
      {/* Project Details */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Project Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
            <option>Service Type</option>
            <option>Web Development</option>
            <option>Mobile App Development</option>
            <option>UI/UX Design</option>
          </select>
          
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required>
            <option>Budget Range</option>
            <option>Under $5,000</option>
            <option>$5,000 - $10,000</option>
            <option>$10,000 - $25,000</option>
          </select>
        </div>
        
        <textarea
          rows={5}
          placeholder="Project Description *"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mt-4"
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 px-8 rounded-md hover:bg-green-700 transition-colors font-medium"
      >
        Request Quote
      </button>
    </form>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* Quick Reference Guide */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Form Quick Reference</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Form Types</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-blue-50 p-2 rounded border-l-4 border-blue-500">
                  <strong>Basic Contact</strong> - Simple name, email, message
                </div>
                <div className="bg-green-50 p-2 rounded border-l-4 border-green-500">
                  <strong>Split Layout</strong> - Form + contact info sidebar
                </div>
                <div className="bg-purple-50 p-2 rounded border-l-4 border-purple-500">
                  <strong>Multi-Step</strong> - Progress indicator + steps
                </div>
                <div className="bg-orange-50 p-2 rounded border-l-4 border-orange-500">
                  <strong>Specialized</strong> - Support tickets, quotes
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Input Styling</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 p-2 rounded">
                  <code className="text-blue-600">focus:ring-2 focus:ring-blue-500</code>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <code className="text-green-600">border border-gray-300</code>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <code className="text-purple-600">rounded-md px-3 py-2</code>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Button Variants</h4>
              <div className="space-y-2 text-sm">
                <button className="w-full bg-blue-600 text-white py-1 px-3 rounded text-xs">Primary</button>
                <button className="w-full bg-green-600 text-white py-1 px-3 rounded text-xs">Success</button>
                <button className="w-full border border-gray-300 text-gray-700 py-1 px-3 rounded text-xs">Secondary</button>
                <button className="w-full bg-red-600 text-white py-1 px-3 rounded text-xs">Support</button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Layout Options</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-gray-50 p-2 rounded">
                  <strong>Centered:</strong> <code>mx-auto max-w-md</code>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <strong>Grid:</strong> <code>grid grid-cols-1 md:grid-cols-2</code>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <strong>Cards:</strong> <code>grid lg:grid-cols-3 gap-6</code>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Essential Form Elements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h5 className="font-medium mb-2">Required Fields:</h5>
                <ul className="space-y-1 text-gray-600">
                  <li>• Name (first name minimum)</li>
                  <li>• Email address</li>
                  <li>• Message/inquiry details</li>
                  <li>• Submit button</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Optional Enhancements:</h5>
                <ul className="space-y-1 text-gray-600">
                  <li>• Phone number field</li>
                  <li>• Subject/category dropdown</li>
                  <li>• File upload capability</li>
                  <li>• Priority/urgency selector</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Best Practices:</strong> Always include proper form validation, clear labels, helpful placeholders, 
              and success/error messages. Consider accessibility with proper ARIA labels and keyboard navigation support.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactFormTemplates;