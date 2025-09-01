import React, { useState } from 'react';

const ImageLayoutTemplates = () => {
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
    <div className="bg-gray-50 min-h-screen p-8" id="ImageLayoutTemplates">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Image Layout Templates
      </h1>
      
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* 1. PROFILE IMAGES */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            1. Profile Images
          </h2>
          
          {/* Small Circular Profile */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Small Circular Profile Picture</h3>
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face" 
                alt="Profile" 
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <h4 className="font-semibold text-gray-800">John Doe</h4>
                <p className="text-gray-600 text-sm">Software Developer</p>
              </div>
            </div>
            <CodeBlock title="Small Circular Profile - React JSX">
{`<div className="flex items-center space-x-4">
  <img 
    src="profile-picture.jpg" 
    alt="Profile" 
    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
  />
  <div>
    <h4 className="font-semibold text-gray-800">John Doe</h4>
    <p className="text-gray-600 text-sm">Software Developer</p>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Large Circular Profile */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Large Circular Profile Picture</h3>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-sm mx-auto text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                alt="Large Profile" 
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-blue-200 shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Alex Smith</h3>
              <p className="text-gray-600 mb-4">UI/UX Designer</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                Follow
              </button>
            </div>
            <CodeBlock title="Large Circular Profile - React JSX">
{`<div className="bg-white p-8 rounded-lg shadow-md max-w-sm mx-auto text-center">
  <img 
    src="large-profile.jpg" 
    alt="Large Profile" 
    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-blue-200 shadow-lg"
  />
  <h3 className="text-xl font-bold text-gray-800 mb-2">Alex Smith</h3>
  <p className="text-gray-600 mb-4">UI/UX Designer</p>
  <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
    Follow
  </button>
</div>`}
            </CodeBlock>
          </div>

          {/* Squared Profile with Status */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Squared Profile with Status Indicator</h3>
            <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                  alt="Profile with Status" 
                  className="w-16 h-16 rounded-lg object-cover border-2 border-gray-200"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Sarah Johnson</h4>
                <p className="text-gray-600 text-sm">Online now</p>
              </div>
            </div>
            <CodeBlock title="Squared Profile with Status - React JSX">
{`<div className="flex items-center space-x-4">
  <div className="relative">
    <img 
      src="profile-status.jpg" 
      alt="Profile with Status" 
      className="w-16 h-16 rounded-lg object-cover border-2 border-gray-200"
    />
    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
  </div>
  <div>
    <h4 className="font-semibold text-gray-800">Sarah Johnson</h4>
    <p className="text-gray-600 text-sm">Online now</p>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 2. RECTANGULAR IMAGES */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            2. Rectangular Images
          </h2>
          
          {/* Landscape Rectangle */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Landscape Rectangle (16:9)</h3>
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop" 
                alt="Landscape" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Beautiful Landscape</h3>
                <p className="text-gray-600">Perfect for hero sections and featured content with wide aspect ratio.</p>
              </div>
            </div>
            <CodeBlock title="Landscape Rectangle - React JSX">
{`<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  <img 
    src="landscape-image.jpg" 
    alt="Landscape" 
    className="w-full h-64 object-cover"
  />
  <div className="p-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Beautiful Landscape</h3>
    <p className="text-gray-600">Perfect for hero sections and featured content.</p>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Portrait Rectangle */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Portrait Rectangle (3:4)</h3>
            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=500&fit=crop" 
                alt="Portrait" 
                className="w-full h-80 object-cover"
              />
              <div className="p-5">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Portrait Style</h4>
                <p className="text-gray-600 text-sm">Great for mobile layouts and product showcases.</p>
              </div>
            </div>
            <CodeBlock title="Portrait Rectangle - React JSX">
{`<div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  <img 
    src="portrait-image.jpg" 
    alt="Portrait" 
    className="w-full h-80 object-cover"
  />
  <div className="p-5">
    <h4 className="text-lg font-semibold text-gray-800 mb-2">Portrait Style</h4>
    <p className="text-gray-600 text-sm">Great for mobile layouts and product showcases.</p>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Square Rectangle */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Square Images (1:1)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { src: 'photo-1542291026-7eec264c27ff', title: 'Square 1' },
                { src: 'photo-1551963831-b3b1ca40c98e', title: 'Square 2' },
                { src: 'photo-1498050108023-c5249f4df085', title: 'Square 3' }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${item.src}?w=300&h=300&fit=crop`}
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h5 className="font-semibold text-gray-800">{item.title}</h5>
                    <p className="text-gray-600 text-sm">Perfect square ratio</p>
                  </div>
                </div>
              ))}
            </div>
            <CodeBlock title="Square Images Grid - React JSX">
{`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {[
    { src: 'square1.jpg', title: 'Square 1' },
    { src: 'square2.jpg', title: 'Square 2' },
    { src: 'square3.jpg', title: 'Square 3' }
  ].map((item, index) => (
    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={item.src}
        alt={item.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h5 className="font-semibold text-gray-800">{item.title}</h5>
        <p className="text-gray-600 text-sm">Perfect square ratio</p>
      </div>
    </div>
  ))}
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 3. IMAGE GALLERIES */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            3. Image Galleries
          </h2>
          
          {/* Grid Gallery */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Grid Gallery (2x2)</h3>
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Photo Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'photo-1506905925346-21bda4d32df4',
                  'photo-1511367461989-f85a21fda167',
                  'photo-1542291026-7eec264c27ff',
                  'photo-1551963831-b3b1ca40c98e'
                ].map((photo, index) => (
                  <img 
                    key={index}
                    src={`https://images.unsplash.com/${photo}?w=250&h=200&fit=crop`}
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                  />
                ))}
              </div>
            </div>
            <CodeBlock title="Grid Gallery - React JSX">
{`<div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
  <h3 className="text-xl font-semibold text-gray-800 mb-4">Photo Gallery</h3>
  <div className="grid grid-cols-2 gap-3">
    {[
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg'
    ].map((photo, index) => (
      <img 
        key={index}
        src={photo}
        alt={\`Gallery \${index + 1}\`} 
        className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
      />
    ))}
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Masonry Style Gallery */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Masonry Style Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
                  alt="Masonry 1" 
                  className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img 
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=300&h=400&fit=crop"
                  alt="Masonry 2" 
                  className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop"
                  alt="Masonry 3" 
                  className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img 
                  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=300&h=250&fit=crop"
                  alt="Masonry 4" 
                  className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=350&fit=crop"
                  alt="Masonry 5" 
                  className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=200&fit=crop"
                  alt="Masonry 6" 
                  className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              </div>
            </div>
            <CodeBlock title="Masonry Gallery - React JSX">
{`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="space-y-4">
    <img 
      src="masonry1.jpg"
      alt="Masonry 1" 
      className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
    />
    <img 
      src="masonry2.jpg"
      alt="Masonry 2" 
      className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
    />
  </div>
  <div className="space-y-4">
    <img 
      src="masonry3.jpg"
      alt="Masonry 3" 
      className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
    />
    <img 
      src="masonry4.jpg"
      alt="Masonry 4" 
      className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
    />
  </div>
  <div className="space-y-4">
    <img 
      src="masonry5.jpg"
      alt="Masonry 5" 
      className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
    />
    <img 
      src="masonry6.jpg"
      alt="Masonry 6" 
      className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
    />
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 4. HERO IMAGES */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            4. Hero Images & Banners
          </h2>
          
          {/* Full Width Hero */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Full Width Hero Image</h3>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop" 
                alt="Hero Image" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Our Site</h2>
                  <p className="text-lg md:text-xl mb-6">Discover amazing content and experiences</p>
                  <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <CodeBlock title="Full Width Hero - React JSX">
{`<div className="relative overflow-hidden rounded-xl shadow-lg">
  <img 
    src="hero-image.jpg" 
    alt="Hero Image" 
    className="w-full h-64 md:h-80 object-cover"
  />
  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
    <div className="text-center text-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Our Site</h2>
      <p className="text-lg md:text-xl mb-6">Discover amazing content and experiences</p>
      <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
        Get Started
      </button>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Banner with Side Content */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Banner with Side Content</h3>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/3">
                  <img 
                    src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=600&h=300&fit=crop" 
                    alt="Banner Image" 
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </div>
                <div className="md:w-1/3 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Amazing Product</h3>
                  <p className="text-gray-600 mb-6">Experience the best quality and design with our featured product line.</p>
                  <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <CodeBlock title="Banner with Side Content - React JSX">
{`<div className="bg-white rounded-xl shadow-lg overflow-hidden">
  <div className="md:flex">
    <div className="md:w-2/3">
      <img 
        src="banner-image.jpg" 
        alt="Banner Image" 
        className="w-full h-48 md:h-64 object-cover"
      />
    </div>
    <div className="md:w-1/3 p-8 flex flex-col justify-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Amazing Product</h3>
      <p className="text-gray-600 mb-6">Experience the best quality and design.</p>
      <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
        Learn More
      </button>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 5. SPECIAL EFFECTS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            5. Images with Special Effects
          </h2>
          
          {/* Overlay Effects */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Images with Hover Overlays</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: 'photo-1506905925346-21bda4d32df4', title: 'Nature', overlay: 'bg-green-500' },
                { src: 'photo-1542291026-7eec264c27ff', title: 'Technology', overlay: 'bg-blue-500' },
                { src: 'photo-1551963831-b3b1ca40c98e', title: 'Art', overlay: 'bg-purple-500' }
              ].map((item, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={`https://images.unsplash.com/${item.src}?w=400&h=300&fit=crop`}
                    alt={item.title} 
                    className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 ${item.overlay} bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center`}>
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-sm">Hover to see overlay effect</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <CodeBlock title="Hover Overlay Images - React JSX">
{`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    { src: 'nature.jpg', title: 'Nature', overlay: 'bg-green-500' },
    { src: 'tech.jpg', title: 'Technology', overlay: 'bg-blue-500' },
    { src: 'art.jpg', title: 'Art', overlay: 'bg-purple-500' }
  ].map((item, index) => (
    <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
      <img 
        src={item.src}
        alt={item.title} 
        className="w-full h-48 object-cover transition-transform group-hover:scale-110"
      />
      <div className={\`absolute inset-0 \${item.overlay} bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center\`}>
        <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
          <h4 className="text-xl font-bold mb-2">{item.title}</h4>
          <p className="text-sm">Hover to see overlay effect</p>
        </div>
      </div>
    </div>
  ))}
</div>`}
            </CodeBlock>
          </div>

          {/* Rounded Corner Variations */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Rounded Corner Variations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=200&h=200&fit=crop&crop=face"
                  alt="No Radius" 
                  className="w-24 h-24 object-cover mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">No Radius</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Small Radius" 
                  className="w-24 h-24 object-cover mx-auto mb-2 rounded-md"
                />
                <p className="text-sm text-gray-600">Small Radius</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                  alt="Large Radius" 
                  className="w-24 h-24 object-cover mx-auto mb-2 rounded-xl"
                />
                <p className="text-sm text-gray-600">Large Radius</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
                  alt="Full Radius" 
                  className="w-24 h-24 object-cover mx-auto mb-2 rounded-full"
                />
                <p className="text-sm text-gray-600">Full Radius</p>
              </div>
            </div>
            <CodeBlock title="Rounded Corner Variations - React JSX">
{`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <img 
      src="no-radius.jpg"
      alt="No Radius" 
      className="w-24 h-24 object-cover mx-auto mb-2"
    />
    <p className="text-sm text-gray-600">No Radius</p>
  </div>
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <img 
      src="small-radius.jpg"
      alt="Small Radius" 
      className="w-24 h-24 object-cover mx-auto mb-2 rounded-md"
    />
    <p className="text-sm text-gray-600">Small Radius</p>
  </div>
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <img 
      src="large-radius.jpg"
      alt="Large Radius" 
      className="w-24 h-24 object-cover mx-auto mb-2 rounded-xl"
    />
    <p className="text-sm text-gray-600">Large Radius</p>
  </div>
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <img 
      src="full-radius.jpg"
      alt="Full Radius" 
      className="w-24 h-24 object-cover mx-auto mb-2 rounded-full"
    />
    <p className="text-sm text-gray-600">Full Radius</p>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 6. RESPONSIVE IMAGE LAYOUTS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            6. Responsive Image Layouts
          </h2>
          
          {/* Mobile First Responsive */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Mobile-First Responsive Images</h3>
            <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=300&fit=crop" 
                  alt="Responsive Image 1" 
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Responsive Design</h4>
                  <p className="text-gray-600 text-sm">Images adapt perfectly to different screen sizes.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=600&h=300&fit=crop" 
                  alt="Responsive Image 2" 
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Mobile Optimized</h4>
                  <p className="text-gray-600 text-sm">Stack on mobile, side-by-side on desktop.</p>
                </div>
              </div>
            </div>
            <CodeBlock title="Mobile-First Responsive - React JSX">
{`<div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img 
      src="responsive1.jpg" 
      alt="Responsive Image 1" 
      className="w-full h-48 md:h-64 object-cover"
    />
    <div className="p-4">
      <h4 className="font-semibold text-gray-800 mb-2">Responsive Design</h4>
      <p className="text-gray-600 text-sm">Images adapt perfectly to different screen sizes.</p>
    </div>
  </div>
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img 
      src="responsive2.jpg" 
      alt="Responsive Image 2" 
      className="w-full h-48 md:h-64 object-cover"
    />
    <div className="p-4">
      <h4 className="font-semibold text-gray-800 mb-2">Mobile Optimized</h4>
      <p className="text-gray-600 text-sm">Stack on mobile, side-by-side on desktop.</p>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Responsive Image Grid */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Adaptive Image Grid</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
              {Array.from({ length: 12 }, (_, index) => (
                <img 
                  key={index}
                  src={`https://images.unsplash.com/photo-${
                    ['1506905925346-21bda4d32df4', '1542291026-7eec264c27ff', '1551963831-b3b1ca40c98e', 
                     '1498050108023-c5249f4df085', '1511367461989-f85a21fda167', '1494790108755-2616b612b47c'][index % 6]
                  }?w=200&h=200&fit=crop`}
                  alt={`Grid ${index + 1}`} 
                  className="w-full aspect-square object-cover rounded hover:scale-105 transition-transform"
                />
              ))}
            </div>
            <CodeBlock title="Adaptive Image Grid - React JSX">
{`<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
  {Array.from({ length: 12 }, (_, index) => (
    <img 
      key={index}
      src={\`grid-image-\${index + 1}.jpg\`}
      alt={\`Grid \${index + 1}\`} 
      className="w-full aspect-square object-cover rounded hover:scale-105 transition-transform"
    />
  ))}
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 7. THUMBNAIL AND PREVIEW LAYOUTS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            7. Thumbnail and Preview Layouts
          </h2>
          
          {/* Thumbnail List */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Thumbnail List with Details</h3>
            <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
              {[
                { src: 'photo-1506905925346-21bda4d32df4', title: 'Mountain Landscape', desc: 'Beautiful mountain scenery', time: '2 hours ago' },
                { src: 'photo-1542291026-7eec264c27ff', title: 'City Architecture', desc: 'Modern building design', time: '4 hours ago' },
                { src: 'photo-1551963831-b3b1ca40c98e', title: 'Ocean Waves', desc: 'Peaceful ocean view', time: '1 day ago' }
              ].map((item, index) => (
                <div key={index} className="flex items-center p-4 hover:bg-gray-50 transition-colors">
                  <img 
                    src={`https://images.unsplash.com/${item.src}?w=100&h=100&fit=crop`}
                    alt={item.title} 
                    className="w-16 h-16 object-cover rounded-lg mr-4 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 truncate">{item.title}</h4>
                    <p className="text-gray-600 text-sm truncate">{item.desc}</p>
                    <p className="text-gray-400 text-xs">{item.time}</p>
                  </div>
                  <button className="ml-4 text-blue-500 hover:text-blue-700 text-sm font-medium">
                    View
                  </button>
                </div>
              ))}
            </div>
            <CodeBlock title="Thumbnail List - React JSX">
{`<div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
  {[
    { src: 'thumbnail1.jpg', title: 'Mountain Landscape', desc: 'Beautiful mountain scenery', time: '2 hours ago' },
    { src: 'thumbnail2.jpg', title: 'City Architecture', desc: 'Modern building design', time: '4 hours ago' },
    { src: 'thumbnail3.jpg', title: 'Ocean Waves', desc: 'Peaceful ocean view', time: '1 day ago' }
  ].map((item, index) => (
    <div key={index} className="flex items-center p-4 hover:bg-gray-50 transition-colors">
      <img 
        src={item.src}
        alt={item.title} 
        className="w-16 h-16 object-cover rounded-lg mr-4 flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-800 truncate">{item.title}</h4>
        <p className="text-gray-600 text-sm truncate">{item.desc}</p>
        <p className="text-gray-400 text-xs">{item.time}</p>
      </div>
      <button className="ml-4 text-blue-500 hover:text-blue-700 text-sm font-medium">
        View
      </button>
    </div>
  ))}
</div>`}
            </CodeBlock>
          </div>

          {/* Image Preview with Thumbnails */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Main Image with Thumbnail Navigation</h3>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop" 
                  alt="Main Preview" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {[
                  'photo-1506905925346-21bda4d32df4',
                  'photo-1542291026-7eec264c27ff',
                  'photo-1551963831-b3b1ca40c98e',
                  'photo-1498050108023-c5249f4df085',
                  'photo-1511367461989-f85a21fda167'
                ].map((photo, index) => (
                  <img 
                    key={index}
                    src={`https://images.unsplash.com/${photo}?w=100&h=80&fit=crop`}
                    alt={`Thumbnail ${index + 1}`} 
                    className={`w-16 h-12 object-cover rounded flex-shrink-0 cursor-pointer border-2 transition-colors ${
                      index === 0 ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <CodeBlock title="Image Preview with Thumbnails - React JSX">
{`import { useState } from 'react';

const ImagePreview = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = ['main1.jpg', 'main2.jpg', 'main3.jpg', 'main4.jpg', 'main5.jpg'];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="mb-4">
        <img 
          src={images[selectedIndex]} 
          alt="Main Preview" 
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((photo, index) => (
          <img 
            key={index}
            src={photo}
            alt={\`Thumbnail \${index + 1}\`} 
            onClick={() => setSelectedIndex(index)}
            className={\`w-16 h-12 object-cover rounded flex-shrink-0 cursor-pointer border-2 transition-colors \${
              index === selectedIndex ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
            }\`}
          />
        ))}
      </div>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* Quick Copy Templates */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Quick Copy Image Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Profile Images</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                  <strong>Small Circle:</strong> <code className="text-blue-600">w-12 h-12 rounded-full object-cover</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-green-500">
                  <strong>Large Circle:</strong> <code className="text-green-600">w-32 h-32 rounded-full object-cover border-4</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-purple-500">
                  <strong>Square with Status:</strong> <code className="text-purple-600">w-16 h-16 rounded-lg + absolute status dot</code>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Layout Styles</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-3 rounded border-l-4 border-red-500">
                  <strong>Hero Image:</strong> <code className="text-red-600">w-full h-64 md:h-80 object-cover + overlay</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-orange-500">
                  <strong>Gallery Grid:</strong> <code className="text-orange-600">grid grid-cols-2 gap-3 + hover effects</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-indigo-500">
                  <strong>Responsive:</strong> <code className="text-indigo-600">w-full h-48 md:h-64 object-cover</code>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Pro Tip:</strong> All image templates are responsive and optimized for different screen sizes. 
              Use <code>object-cover</code> to maintain aspect ratio and prevent distortion!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ImageLayoutTemplates;