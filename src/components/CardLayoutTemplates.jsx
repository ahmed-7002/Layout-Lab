import React, { useState } from 'react';

const CardLayoutTemplates = () => {
  const [activeTab, setActiveTab] = useState('overview');
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
    <div className="bg-gray-100 p-4 rounded-md mt-4 overflow-x-auto relative">
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
    <div className="bg-gray-50 min-h-screen p-8" id="CardLayoutTemplates">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Card Layout Templates
      </h1>
      
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* 1. SINGLE CARD LAYOUTS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            1. Single Card Layouts
          </h2>
          
          {/* Basic Single Card */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Basic Single Card</h3>
            <div className="max-w-sm mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=200&fit=crop" 
                  alt="Card Image" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Card Title</h3>
                  <p className="text-gray-600 mb-4">This is a sample card description that explains the content.</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <CodeBlock title="Basic Single Card - React JSX">
{`<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
  <img src="your-image.jpg" alt="Card Image" className="w-full h-48 object-cover" />
  <div className="p-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Card Title</h3>
    <p className="text-gray-600 mb-4">Card description text here.</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
      Read More
    </button>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Featured Single Card */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Featured Single Card</h3>
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg overflow-hidden border-2 border-blue-200">
                <img 
                  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=400&h=200&fit=crop" 
                  alt="Featured Image" 
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-3">
                    FEATURED
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Premium Card</h3>
                  <p className="text-gray-700 mb-6">This is a premium featured card with gradient background and special styling.</p>
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <CodeBlock title="Featured Single Card - React JSX">
{`<div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg overflow-hidden border-2 border-blue-200">
  <img src="your-image.jpg" alt="Featured Image" className="w-full h-56 object-cover" />
  <div className="p-8">
    <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-3">
      FEATURED
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-3">Premium Card</h3>
    <p className="text-gray-700 mb-6">Card description here.</p>
    <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg">
      Get Started
    </button>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 2. TWO CARDS SIDE BY SIDE */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            2. Two Cards Side by Side
          </h2>
          
          {/* Equal Two Cards */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Equal Width Two Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop" 
                  alt="Card 1" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Left Card</h4>
                  <p className="text-gray-600 text-sm mb-3">Description for the left card content.</p>
                  <a href="#" className="text-blue-500 hover:text-blue-700 font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=200&fit=crop" 
                  alt="Card 2" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Right Card</h4>
                  <p className="text-gray-600 text-sm mb-3">Description for the right card content.</p>
                  <a href="#" className="text-blue-500 hover:text-blue-700 font-medium text-sm">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
            <CodeBlock title="Two Equal Cards - React JSX">
{`<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src="image1.jpg" alt="Card 1" className="w-full h-40 object-cover" />
    <div className="p-5">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">Left Card</h4>
      <p className="text-gray-600 text-sm mb-3">Card description.</p>
      <a href="#" className="text-blue-500 hover:text-blue-700 font-medium text-sm">
        Learn More →
      </a>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src="image2.jpg" alt="Card 2" className="w-full h-40 object-cover" />
    <div className="p-5">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">Right Card</h4>
      <p className="text-gray-600 text-sm mb-3">Card description.</p>
      <a href="#" className="text-blue-500 hover:text-blue-700 font-medium text-sm">
        Learn More →
      </a>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Large + Small Two Cards */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Large Left + Small Right Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=250&fit=crop" 
                  alt="Main Card" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Main Featured Card</h4>
                  <p className="text-gray-600 mb-4">This is the main featured content with more detailed information and larger space.</p>
                  <button className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600">
                    View Details
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1546422904-90eab23c3d8e?w=300&h=150&fit=crop" 
                  alt="Side Card" 
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-md font-semibold text-gray-800 mb-2">Side Card</h4>
                  <p className="text-gray-600 text-sm mb-3">Quick info card.</p>
                  <a href="#" className="text-green-500 text-sm font-medium">View →</a>
                </div>
              </div>
            </div>
            <CodeBlock title="Large + Small Cards - React JSX">
{`<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
    <img src="main-image.jpg" alt="Main Card" className="w-full h-48 object-cover" />
    <div className="p-6">
      <h4 className="text-xl font-bold text-gray-800 mb-3">Main Featured Card</h4>
      <p className="text-gray-600 mb-4">Main content description.</p>
      <button className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600">
        View Details
      </button>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src="side-image.jpg" alt="Side Card" className="w-full h-32 object-cover" />
    <div className="p-4">
      <h4 className="text-md font-semibold text-gray-800 mb-2">Side Card</h4>
      <p className="text-gray-600 text-sm mb-3">Quick info.</p>
      <a href="#" className="text-green-500 text-sm font-medium">View →</a>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 3. FOUR CARDS GRID */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            3. Four Cards Grid Layout
          </h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">2x2 Grid Four Cards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {['Top Left', 'Top Right', 'Bottom Left', 'Bottom Right'].map((title, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      ['1551963831-b3b1ca40c98e', '1542291026-7eec264c27ff', '1498050108023-c5249f4df085', '1517180102446-f3ece451e9d8'][index]
                    }?w=300&h=150&fit=crop`}
                    alt={`Card ${index + 1}`} 
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">{title}</h5>
                    <p className="text-gray-600 text-sm">Card content here.</p>
                  </div>
                </div>
              ))}
            </div>
            <CodeBlock title="2x2 Grid Four Cards - React JSX">
{`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
  {['Top Left', 'Top Right', 'Bottom Left', 'Bottom Right'].map((title, index) => (
    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={\`image\${index + 1}.jpg\`}
        alt={\`Card \${index + 1}\`} 
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <h5 className="font-semibold text-gray-800 mb-2">{title}</h5>
        <p className="text-gray-600 text-sm">Card content here.</p>
      </div>
    </div>
  ))}
</div>`}
            </CodeBlock>
          </div>

          {/* Single Row Four Cards */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Single Row Four Cards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { emoji: '🚀', title: 'Feature 1', bg: 'bg-blue-100', text: 'text-blue-600' },
                { emoji: '⚡', title: 'Feature 2', bg: 'bg-green-100', text: 'text-green-600' },
                { emoji: '🎯', title: 'Feature 3', bg: 'bg-purple-100', text: 'text-purple-600' },
                { emoji: '💎', title: 'Feature 4', bg: 'bg-red-100', text: 'text-red-600' }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
                  <div className={`w-12 h-12 ${feature.bg} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <span className={`${feature.text} text-xl`}>{feature.emoji}</span>
                  </div>
                  <h6 className="font-semibold text-gray-800 mb-2">{feature.title}</h6>
                  <p className="text-gray-600 text-xs">Quick description</p>
                </div>
              ))}
            </div>
            <CodeBlock title="Single Row Feature Cards - React JSX">
{`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {[
    { emoji: '🚀', title: 'Feature 1', bg: 'bg-blue-100', text: 'text-blue-600' },
    { emoji: '⚡', title: 'Feature 2', bg: 'bg-green-100', text: 'text-green-600' },
    { emoji: '🎯', title: 'Feature 3', bg: 'bg-purple-100', text: 'text-purple-600' },
    { emoji: '💎', title: 'Feature 4', bg: 'bg-red-100', text: 'text-red-600' }
  ].map((feature, index) => (
    <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
      <div className={\`w-12 h-12 \${feature.bg} rounded-full flex items-center justify-center mx-auto mb-3\`}>
        <span className={\`\${feature.text} text-xl\`}>{feature.emoji}</span>
      </div>
      <h6 className="font-semibold text-gray-800 mb-2">{feature.title}</h6>
      <p className="text-gray-600 text-xs">Quick description</p>
    </div>
  ))}
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 4. NESTED CARDS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            4. Nested Cards - Large Container with Small Cards Inside
          </h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Dashboard Style Nested Cards</h3>
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Dashboard Overview</h3>
                <button className="text-gray-500 hover:text-gray-700">
                  <span className="text-2xl">⚙️</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: '📊', title: 'Sales', value: '$12,345', change: '+12%', gradient: 'from-blue-50 to-blue-100', border: 'border-blue-200', text: 'text-blue-600' },
                  { icon: '👥', title: 'Users', value: '1,234', change: '+8%', gradient: 'from-green-50 to-green-100', border: 'border-green-200', text: 'text-green-600' },
                  { icon: '📈', title: 'Revenue', value: '$45,678', change: '+15%', gradient: 'from-purple-50 to-purple-100', border: 'border-purple-200', text: 'text-purple-600' },
                  { icon: '📦', title: 'Orders', value: '567', change: '+3%', gradient: 'from-orange-50 to-orange-100', border: 'border-orange-200', text: 'text-orange-600' }
                ].map((stat, index) => (
                  <div key={index} className={`bg-gradient-to-br ${stat.gradient} rounded-lg p-4 border ${stat.border}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`${stat.text} text-2xl`}>{stat.icon}</span>
                      <span className={`${stat.text} text-xs font-medium`}>{stat.change}</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800">{stat.title}</h4>
                    <p className="text-gray-600 text-sm">{stat.value}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  View Full Report
                </button>
              </div>
            </div>
            <CodeBlock title="Dashboard Nested Cards - React JSX">
{`<div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-6">
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-2xl font-bold text-gray-800">Dashboard Overview</h3>
    <button className="text-gray-500 hover:text-gray-700">
      <span className="text-2xl">⚙️</span>
    </button>
  </div>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {[
      { icon: '📊', title: 'Sales', value: '$12,345', change: '+12%', gradient: 'from-blue-50 to-blue-100', border: 'border-blue-200', text: 'text-blue-600' },
      { icon: '👥', title: 'Users', value: '1,234', change: '+8%', gradient: 'from-green-50 to-green-100', border: 'border-green-200', text: 'text-green-600' }
      // Add more stat objects as needed
    ].map((stat, index) => (
      <div key={index} className={\`bg-gradient-to-br \${stat.gradient} rounded-lg p-4 border \${stat.border}\`}>
        <div className="flex items-center justify-between mb-2">
          <span className={\`\${stat.text} text-2xl\`}>{stat.icon}</span>
          <span className={\`\${stat.text} text-xs font-medium\`}>{stat.change}</span>
        </div>
        <h4 className="text-lg font-bold text-gray-800">{stat.title}</h4>
        <p className="text-gray-600 text-sm">{stat.value}</p>
      </div>
    ))}
  </div>
  
  <div className="mt-6 pt-6 border-t border-gray-200">
    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
      View Full Report
    </button>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 5. ADVANCED CARD LAYOUTS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            5. Advanced Card Layouts
          </h2>
          
          {/* Mixed Height Cards */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Mixed Height Cards (Pinterest Style)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Tall Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=300&h=200&fit=crop" 
                  alt="Tall Card" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Tall Card</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    This is a taller card with more content. It demonstrates how cards can have different heights while maintaining a clean grid layout. Perfect for blog posts or detailed content.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">March 15, 2024</span>
                    <button className="text-blue-500 text-sm hover:text-blue-700">Read More</button>
                  </div>
                </div>
              </div>
              
              {/* Short Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=120&fit=crop" 
                  alt="Short Card" 
                  className="w-full h-32 object-cover"
                />
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Short Card</h4>
                  <p className="text-gray-600 text-sm">Quick summary card.</p>
                </div>
              </div>
              
              {/* Medium Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=160&fit=crop" 
                  alt="Medium Card" 
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Medium Card</h4>
                  <p className="text-gray-600 text-sm mb-3">This card has medium amount of content to show variety in card heights.</p>
                  <button className="bg-purple-500 text-white px-4 py-2 text-sm rounded hover:bg-purple-600">
                    Action
                  </button>
                </div>
              </div>
            </div>
            <CodeBlock title="Mixed Height Cards - React JSX">
{`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Tall Card */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src="tall-card.jpg" alt="Tall Card" className="w-full h-48 object-cover" />
    <div className="p-5">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">Tall Card</h4>
      <p className="text-gray-600 text-sm mb-4">
        This is a taller card with more content. Perfect for blog posts or detailed content.
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">March 15, 2024</span>
        <button className="text-blue-500 text-sm hover:text-blue-700">Read More</button>
      </div>
    </div>
  </div>
  
  {/* Short Card */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src="short-card.jpg" alt="Short Card" className="w-full h-32 object-cover" />
    <div className="p-5">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">Short Card</h4>
      <p className="text-gray-600 text-sm">Quick summary card.</p>
    </div>
  </div>
  
  {/* Medium Card */}
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src="medium-card.jpg" alt="Medium Card" className="w-full h-40 object-cover" />
    <div className="p-5">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">Medium Card</h4>
      <p className="text-gray-600 text-sm mb-3">Medium amount of content to show variety.</p>
      <button className="bg-purple-500 text-white px-4 py-2 text-sm rounded hover:bg-purple-600">
        Action
      </button>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Card with Interactive Tabs */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Card with Tabs (Interactive Content)</h3>
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Multi-Tab Card</h3>
                
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200 mb-4">
                  {['overview', 'details', 'reviews'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 font-medium text-sm ${
                        activeTab === tab
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
                
                {/* Tab Content */}
                <div className="space-y-4">
                  {activeTab === 'overview' && (
                    <>
                      <div className="flex items-center space-x-4">
                        <img 
                          src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=80&h=80&fit=crop" 
                          alt="Preview" 
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800">Product Overview</h4>
                          <p className="text-gray-600 text-sm">This tab shows the main product information and key features.</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-medium text-gray-800 mb-2">Key Feature 1</h5>
                          <p className="text-gray-600 text-sm">Description of feature</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-medium text-gray-800 mb-2">Key Feature 2</h5>
                          <p className="text-gray-600 text-sm">Description of feature</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {activeTab === 'details' && (
                    <div className="text-gray-600">
                      <h4 className="font-semibold text-gray-800 mb-2">Detailed Information</h4>
                      <p className="mb-4">Here you would show more detailed product specifications, technical details, or expanded information.</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Specification 1</li>
                        <li>Specification 2</li>
                        <li>Specification 3</li>
                      </ul>
                    </div>
                  )}
                  
                  {activeTab === 'reviews' && (
                    <div className="text-gray-600">
                      <h4 className="font-semibold text-gray-800 mb-2">Customer Reviews</h4>
                      <div className="space-y-3">
                        <div className="border-l-4 border-blue-500 pl-4">
                          <p className="text-sm">"Great product! Highly recommended."</p>
                          <p className="text-xs text-gray-500 mt-1">- Customer A</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <p className="text-sm">"Excellent quality and fast delivery."</p>
                          <p className="text-xs text-gray-500 mt-1">- Customer B</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <CodeBlock title="Interactive Tabs Card - React JSX">
{`import { useState } from 'react';

const InteractiveTabsCard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Multi-Tab Card</h3>
        
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-4">
          {['overview', 'details', 'reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={\`px-4 py-2 font-medium text-sm \${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }\`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="space-y-4">
          {activeTab === 'overview' && (
            <div>
              <h4 className="font-semibold text-gray-800">Product Overview</h4>
              <p className="text-gray-600 text-sm">Overview content here.</p>
            </div>
          )}
          {activeTab === 'details' && (
            <div>
              <h4 className="font-semibold text-gray-800">Detailed Information</h4>
              <p className="text-gray-600 text-sm">Details content here.</p>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div>
              <h4 className="font-semibold text-gray-800">Customer Reviews</h4>
              <p className="text-gray-600 text-sm">Reviews content here.</p>
            </div>
          )}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 6. RESPONSIVE CARD PATTERNS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            6. Responsive Card Patterns
          </h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Mobile-First Responsive Cards</h3>
            <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
              {[
                { img: 'photo-1551963831-b3b1ca40c98e', title: 'Responsive Card 1', desc: 'Layout changes based on screen size.' },
                { img: 'photo-1542291026-7eec264c27ff', title: 'Responsive Card 2', desc: 'Horizontal on mobile, vertical on desktop.' },
                { img: 'photo-1498050108023-c5249f4df085', title: 'Responsive Card 3', desc: 'Perfect for any device size.' }
              ].map((card, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4">
                  <div className="flex items-center sm:block">
                    <img 
                      src={`https://images.unsplash.com/${card.img}?w=100&h=100&fit=crop`}
                      alt="Mobile Card" 
                      className="w-16 h-16 sm:w-full sm:h-32 rounded-lg sm:rounded-lg object-cover mr-4 sm:mr-0 sm:mb-3"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">{card.title}</h4>
                      <p className="text-gray-600 text-sm">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <CodeBlock title="Responsive Mobile-First Cards - React JSX">
{`<div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
  {[
    { img: 'image1.jpg', title: 'Responsive Card 1', desc: 'Layout changes based on screen size.' },
    { img: 'image2.jpg', title: 'Responsive Card 2', desc: 'Horizontal on mobile, vertical on desktop.' },
    { img: 'image3.jpg', title: 'Responsive Card 3', desc: 'Perfect for any device size.' }
  ].map((card, index) => (
    <div key={index} className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center sm:block">
        <img 
          src={card.img}
          alt="Responsive Card" 
          className="w-16 h-16 sm:w-full sm:h-32 rounded-lg object-cover mr-4 sm:mr-0 sm:mb-3"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 mb-1">{card.title}</h4>
          <p className="text-gray-600 text-sm">{card.desc}</p>
        </div>
      </div>
    </div>
  ))}
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* Quick Copy Templates */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Quick Copy Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Basic Layouts</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                  <strong>Single Card:</strong> <code className="text-blue-600">bg-white rounded-lg shadow-md overflow-hidden</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-green-500">
                  <strong>Two Cards:</strong> <code className="text-green-600">grid grid-cols-1 md:grid-cols-2 gap-6</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-purple-500">
                  <strong>Four Cards:</strong> <code className="text-purple-600">grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6</code>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Advanced Layouts</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-3 rounded border-l-4 border-red-500">
                  <strong>Nested Cards:</strong> <code className="text-red-600">bg-white rounded-xl shadow-lg border-2 border-gray-200 p-6</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-orange-500">
                  <strong>Responsive:</strong> <code className="text-orange-600">space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-indigo-500">
                  <strong>Dashboard Style:</strong> <code className="text-indigo-600">grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4</code>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Pro Tip:</strong> All these templates are fully responsive and use Tailwind CSS. 
              Just copy the React JSX structure and replace images/content with your own data!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayoutTemplates;