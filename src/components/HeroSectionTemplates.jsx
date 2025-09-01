import React, { useState, useEffect } from 'react';
import { Copy, Check, Play, ArrowRight, Star, Users, Zap, Shield } from 'lucide-react';

const HeroSectionTemplates = () => {
  const [copiedCode, setCopiedCode] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(text);
      setTimeout(() => setCopiedCode(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
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
    <div className="bg-gray-50 min-h-screen" id="HeroSectionTemplates">
      <h1 className="text-4xl font-bold text-center py-8 text-gray-800">
        Hero Section Templates
      </h1>
      
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* 1. GRADIENT HERO WITH ANIMATION */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            1. Animated Gradient Hero
          </h2>
          
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Gradient Background with Floating Elements</h3>
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-transparent to-cyan-400/20"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
              <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-32 right-10 w-8 h-8 bg-cyan-400/40 rounded-full animate-bounce delay-300"></div>
              
              <div className="relative min-h-96 flex items-center justify-center p-8 lg:p-16">
                <div className="max-w-4xl mx-auto text-center text-white">
                  <div className="animate-fade-in">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                      Build the
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 animate-pulse">
                        Future
                      </span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                      Transform your ideas into reality with our cutting-edge platform designed for creators, developers, and innovators.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                      <button className="group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                        Start Building
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                        <Play className="h-5 w-5" />
                        Watch Demo
                      </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                      <div>
                        <div className="text-2xl font-bold text-cyan-400">10M+</div>
                        <div className="text-gray-300 text-sm">Users</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-pink-400">99.9%</div>
                        <div className="text-gray-300 text-sm">Uptime</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-yellow-400">150+</div>
                        <div className="text-gray-300 text-sm">Countries</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-400">24/7</div>
                        <div className="text-gray-300 text-sm">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Animated Gradient Hero - React JSX">
{`<div className="relative overflow-hidden rounded-xl shadow-2xl">
  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800"></div>
  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-transparent to-cyan-400/20"></div>
  
  {/* Floating Elements */}
  <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
  <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
  <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400/30 rounded-full animate-ping"></div>
  
  <div className="relative min-h-96 flex items-center justify-center p-8 lg:p-16">
    <div className="max-w-4xl mx-auto text-center text-white">
      <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
        Build the
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 animate-pulse">
          Future
        </span>
      </h1>
      <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
        Transform your ideas into reality with our cutting-edge platform.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="group bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
          Start Building
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
          <Play className="h-5 w-5" />
          Watch Demo
        </button>
      </div>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 2. INTERACTIVE PARTICLE HERO */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            2. Interactive Particle Hero
          </h2>
          
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Mouse-Following Particle Effect</h3>
            <div 
              className="relative overflow-hidden rounded-xl shadow-2xl bg-black cursor-crosshair"
              onMouseMove={handleMouseMove}
            >
              {/* Particle Effect */}
              <div className="absolute inset-0">
                <div 
                  className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-80 transition-all duration-500 ease-out"
                  style={{
                    left: `${mousePosition.x}%`,
                    top: `${mousePosition.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                ></div>
                <div 
                  className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-60 transition-all duration-700 ease-out"
                  style={{
                    left: `${mousePosition.x + 10}%`,
                    top: `${mousePosition.y + 5}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                ></div>
                <div 
                  className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-40 transition-all duration-1000 ease-out"
                  style={{
                    left: `${mousePosition.x - 8}%`,
                    top: `${mousePosition.y - 3}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                ></div>
              </div>
              
              {/* Static Particles */}
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse delay-500"></div>
              <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-white/25 rounded-full animate-pulse delay-700"></div>
              
              <div className="relative min-h-96 flex items-center justify-center p-8 lg:p-16">
                <div className="max-w-5xl mx-auto text-center text-white">
                  <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-none">
                    <span className="block opacity-90">INNOVATE</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                      CREATE
                    </span>
                    <span className="block opacity-90">INSPIRE</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                    Step into a world where technology meets creativity. Build extraordinary experiences that captivate and inspire.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                      Enter the Future
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="group border-2 border-white/30 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                      Explore Features
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Interactive Particle Hero - React JSX">
{`const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  setMousePosition({
    x: ((e.clientX - rect.left) / rect.width) * 100,
    y: ((e.clientY - rect.top) / rect.height) * 100,
  });
};

<div 
  className="relative overflow-hidden rounded-xl shadow-2xl bg-black cursor-crosshair"
  onMouseMove={handleMouseMove}
>
  {/* Particle Effect */}
  <div className="absolute inset-0">
    <div 
      className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-80 transition-all duration-500 ease-out"
      style={{
        left: \`\${mousePosition.x}%\`,
        top: \`\${mousePosition.y}%\`,
        transform: 'translate(-50%, -50%)',
      }}
    ></div>
  </div>
  
  <div className="relative min-h-96 flex items-center justify-center p-8 lg:p-16">
    <div className="max-w-5xl mx-auto text-center text-white">
      <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-none">
        <span className="block opacity-90">INNOVATE</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
          CREATE
        </span>
        <span className="block opacity-90">INSPIRE</span>
      </h1>
      <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
        Step into a world where technology meets creativity.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
          Enter the Future
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 3. VIDEO BACKGROUND HERO */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            3. Video Background Hero
          </h2>
          
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Simulated Video Background with Overlay</h3>
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              {/* Simulated Video Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700">
                <div className="absolute inset-0 opacity-30">
                  <div className="w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
                </div>
              </div>
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              <div className="relative min-h-96 flex items-center justify-center p-8 lg:p-16">
                <div className="max-w-4xl mx-auto text-center text-white">
                  <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Experience the
                    <span className="block text-yellow-400">Revolution</span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                    Join millions who have already transformed their workflow with our innovative platform built for the modern world.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                      Get Started Free
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span>Trusted by Fortune 500</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-400" />
                      <span>10M+ Active Users</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-400" />
                      <span>Enterprise Security</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Video Background Hero - React JSX">
{`<div className="relative overflow-hidden rounded-xl shadow-2xl">
  {/* Simulated Video Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700">
    <div className="absolute inset-0 opacity-30">
      <div className="w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
    </div>
  </div>
  
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>
  
  <div className="relative min-h-96 flex items-center justify-center p-8 lg:p-16">
    <div className="max-w-4xl mx-auto text-center text-white">
      <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Experience the
        <span className="block text-yellow-400">Revolution</span>
      </h1>
      <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
        Join millions who have transformed their workflow with our innovative platform.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105">
          Get Started Free
        </button>
        <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 4. CAROUSEL HERO */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            4. Carousel Hero Section
          </h2>
          
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Auto-Playing Content Carousel</h3>
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              {/* Slide 1 */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 min-h-96 flex items-center justify-center p-8 lg:p-16">
                  <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">Powerful Tools</h1>
                    <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
                      Everything you need to build amazing products. From design to deployment, we've got you covered.
                    </p>
                    <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                      Explore Tools
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Slide 2 */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="bg-gradient-to-r from-orange-600 to-red-600 min-h-96 flex items-center justify-center p-8 lg:p-16">
                  <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">Scale Globally</h1>
                    <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                      Reach customers worldwide with our global infrastructure and localization features.
                    </p>
                    <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                      Go Global
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Slide 3 */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 min-h-96 flex items-center justify-center p-8 lg:p-16">
                  <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">Ship Faster</h1>
                    <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                      Deploy your applications instantly with our automated CI/CD pipeline and cloud infrastructure.
                    </p>
                    <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                      Deploy Now
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
            <CodeBlock title="Carousel Hero Section - React JSX">
{`const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  }, 4000);
  return () => clearInterval(interval);
}, []);

<div className="relative overflow-hidden rounded-xl shadow-2xl">
  {/* Slide 1 */}
  <div className={\`absolute inset-0 transition-opacity duration-1000 \${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}\`}>
    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 min-h-96 flex items-center justify-center p-8 lg:p-16">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">Powerful Tools</h1>
        <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
          Everything you need to build amazing products.
        </p>
        <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
          Explore Tools
        </button>
      </div>
    </div>
  </div>
  
  {/* Slide Indicators */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
    {[0, 1, 2].map((index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={\`w-3 h-3 rounded-full transition-all duration-300 \${
          currentSlide === index ? 'bg-white' : 'bg-white/40'
        }\`}
      />
    ))}
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 5. MINIMAL HERO */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            5. Minimal Clean Hero
          </h2>
          
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Clean Minimal Design with Subtle Animations</h3>
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="min-h-96 flex items-center justify-center p-8 lg:p-20">
                <div className="max-w-5xl mx-auto text-center">
                  <div className="inline-block p-3 bg-blue-100 rounded-full mb-8 animate-bounce">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight">
                    Simply
                    <span className="block font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Powerful
                    </span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                    Experience the perfect balance of simplicity and functionality. Built for those who appreciate elegant design.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                    <button className="group bg-black text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                      Get Started
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="text-gray-600 hover:text-black transition-colors duration-300 text-lg font-medium underline underline-offset-4">
                      View Documentation
                    </button>
                  </div>
                  
                  {/* Minimal Stats */}
                  <div className="grid grid-cols-3 gap-12 max-w-lg mx-auto">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-1">99.9%</div>
                      <div className="text-gray-500 text-sm">Uptime</div>
                    </div>
                    <div className="text-center border-l border-r border-gray-200">
                      <div className="text-3xl font-bold text-gray-900 mb-1">10M+</div>
                      <div className="text-gray-500 text-sm">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                      <div className="text-gray-500 text-sm">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Minimal Clean Hero - React JSX">
{`<div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
  <div className="min-h-96 flex items-center justify-center p-8 lg:p-20">
    <div className="max-w-5xl mx-auto text-center">
      <div className="inline-block p-3 bg-blue-100 rounded-full mb-8 animate-bounce">
        <Zap className="h-8 w-8 text-blue-600" />
      </div>
      <h1 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight">
        Simply
        <span className="block font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Powerful
        </span>
      </h1>
      <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
        Experience the perfect balance of simplicity and functionality.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
        <button className="group bg-black text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
          Get Started
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="text-gray-600 hover:text-black transition-colors duration-300 text-lg font-medium underline underline-offset-4">
          View Documentation
        </button>
      </div>
      
      {/* Minimal Stats */}
      <div className="grid grid-cols-3 gap-12 max-w-lg mx-auto">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-1">99.9%</div>
          <div className="text-gray-500 text-sm">Uptime</div>
        </div>
        <div className="text-center border-l border-r border-gray-200">
          <div className="text-3xl font-bold text-gray-900 mb-1">10M+</div>
          <div className="text-gray-500 text-sm">Users</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
          <div className="text-gray-500 text-sm">Support</div>
        </div>
      </div>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 6. SPLIT SCREEN HERO */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            6. Split Screen Hero
          </h2>
          
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Dynamic Split Screen Layout</h3>
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-96">
                {/* Left Side */}
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 lg:p-16 flex items-center">
                  <div className="text-white">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                      Unleash Your
                      <span className="block text-cyan-300">Creativity</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-indigo-100 mb-8 leading-relaxed">
                      Design, develop, and deploy amazing projects with our comprehensive suite of tools built for creators.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <Zap className="h-5 w-5 text-yellow-400" />
                        <span>Lightning-fast performance</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-green-400" />
                        <span>Enterprise-grade security</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-blue-400" />
                        <span>Collaborative workspace</span>
                      </div>
                    </div>
                    <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                      Start Creating
                    </button>
                  </div>
                </div>
                
                {/* Right Side */}
                <div className="bg-gray-50 p-8 lg:p-16 flex items-center justify-center">
                  <div className="w-full max-w-sm">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Join 10M+ Creators</h3>
                        <p className="text-gray-600">Start your free trial today</p>
                      </div>
                      <div className="space-y-4">
                        <input 
                          type="email" 
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        />
                        <input 
                          type="password" 
                          placeholder="Create password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        />
                        <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                          Create Account
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 text-center mt-4">
                        By signing up, you agree to our Terms & Privacy Policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Split Screen Hero - React JSX">
{`<div className="bg-white rounded-xl shadow-2xl overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-96">
    {/* Left Side */}
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 lg:p-16 flex items-center">
      <div className="text-white">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Unleash Your
          <span className="block text-cyan-300">Creativity</span>
        </h1>
        <p className="text-lg lg:text-xl text-indigo-100 mb-8 leading-relaxed">
          Design, develop, and deploy amazing projects with our comprehensive suite of tools.
        </p>
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <Zap className="h-5 w-5 text-yellow-400" />
            <span>Lightning-fast performance</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-green-400" />
            <span>Enterprise-grade security</span>
          </div>
        </div>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
          Start Creating
        </button>
      </div>
    </div>
    
    {/* Right Side */}
    <div className="bg-gray-50 p-8 lg:p-16 flex items-center justify-center">
      <div className="w-full max-w-sm">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Join 10M+ Creators</h3>
            <p className="text-gray-600">Start your free trial today</p>
          </div>
          <div className="space-y-4">
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" />
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 7. GLASSMORPHISM HERO */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            7. Glassmorphism Hero
          </h2>
          
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Modern Glass Effect with Blur</h3>
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-transparent to-cyan-400/30"></div>
              
              {/* Background Shapes */}
              <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-400/10 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative min-h-96 flex items-center justify-center p-8 lg:p-16">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Glass Card */}
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 lg:p-12 shadow-2xl">
                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                      Next-Gen
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                        Platform
                      </span>
                    </h1>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                      Experience the future of digital innovation with our revolutionary platform that combines cutting-edge technology with beautiful design.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Start Free Trial
                      </button>
                      <button className="border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur">
                        Schedule Demo
                      </button>
                    </div>
                    
                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-3">
                      <span className="px-4 py-2 bg-white/20 backdrop-blur text-white rounded-full text-sm font-medium">
                        AI-Powered
                      </span>
                      <span className="px-4 py-2 bg-white/20 backdrop-blur text-white rounded-full text-sm font-medium">
                        Real-time Sync
                      </span>
                      <span className="px-4 py-2 bg-white/20 backdrop-blur text-white rounded-full text-sm font-medium">
                        Global CDN
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Glassmorphism Hero - React JSX">
{`<div className="relative overflow-hidden rounded-xl shadow-2xl">
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-transparent to-cyan-400/30"></div>
  
  {/* Background Shapes */}
  <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
  <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl"></div>
  
  <div className="relative min-h-96 flex items-center justify-center p-8 lg:p-16">
    <div className="max-w-4xl mx-auto text-center">
      {/* Glass Card */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 lg:p-12 shadow-2xl">
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Next-Gen
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
            Platform
          </span>
        </h1>
        <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
          Experience the future of digital innovation with our revolutionary platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Start Free Trial
          </button>
        </div>
        
        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-white/20 backdrop-blur text-white rounded-full text-sm font-medium">
            AI-Powered
          </span>
          <span className="px-4 py-2 bg-white/20 backdrop-blur text-white rounded-full text-sm font-medium">
            Real-time Sync
          </span>
        </div>
      </div>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 8. DARK MODE HERO */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            8. Dark Mode Hero
          </h2>
          
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Modern Dark Theme with Neon Accents</h3>
            <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
              <div className="relative min-h-96 p-8 lg:p-16">
                {/* Grid Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-12 gap-1 h-full">
                    {Array.from({ length: 144 }).map((_, i) => (
                      <div key={i} className="border border-gray-700 rounded-sm"></div>
                    ))}
                  </div>
                </div>
                
                {/* Neon Glow Elements */}
                <div className="absolute top-10 right-10 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                
                <div className="relative flex items-center justify-center min-h-80">
                  <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                      <span className="text-gray-400">Welcome to</span>
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                        NEXUS
                      </span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                      The ultimate development environment where code meets creativity. Build faster, deploy smarter, scale infinitely.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                      <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-lg text-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                        Launch Console
                        <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                      <button className="border border-gray-600 text-gray-300 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all duration-300">
                        View GitHub
                      </button>
                    </div>
                    
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap justify-center gap-3">
                      <span className="px-4 py-2 bg-gray-800 border border-gray-700 text-cyan-400 rounded-full text-sm font-medium">
                        React
                      </span>
                      <span className="px-4 py-2 bg-gray-800 border border-gray-700 text-purple-400 rounded-full text-sm font-medium">
                        Node.js
                      </span>
                      <span className="px-4 py-2 bg-gray-800 border border-gray-700 text-blue-400 rounded-full text-sm font-medium">
                        TypeScript
                      </span>
                      <span className="px-4 py-2 bg-gray-800 border border-gray-700 text-green-400 rounded-full text-sm font-medium">
                        Docker
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Dark Mode Hero - React JSX">
{`<div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
  <div className="relative min-h-96 p-8 lg:p-16">
    {/* Grid Pattern Background */}
    <div className="absolute inset-0 opacity-10">
      <div className="grid grid-cols-12 gap-1 h-full">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-gray-700 rounded-sm"></div>
        ))}
      </div>
    </div>
    
    {/* Neon Glow Elements */}
    <div className="absolute top-10 right-10 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
    
    <div className="relative flex items-center justify-center min-h-80">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="text-gray-400">Welcome to</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            NEXUS
          </span>
        </h1>
        <p className="text-xl lg:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
          The ultimate development environment where code meets creativity.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-lg text-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
            Launch Console
          </button>
        </div>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-gray-800 border border-gray-700 text-cyan-400 rounded-full text-sm font-medium">
            React
          </span>
          <span className="px-4 py-2 bg-gray-800 border border-gray-700 text-purple-400 rounded-full text-sm font-medium">
            Node.js
          </span>
        </div>
      </div>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 9. SPLIT HERO WITH IMAGE */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            9. Split Hero with Visual
          </h2>
          
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Content and Visual Split Layout</h3>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-96">
                {/* Left Content */}
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 lg:p-16 flex items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                      <Star className="h-4 w-4" />
                      #1 Platform of 2024
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                      Transform Your
                      <span className="block text-blue-600">Business Today</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      Join thousands of companies who have revolutionized their operations with our intelligent automation platform. See results in just 30 days.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Automated workflows that save 10+ hours per week</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Real-time analytics and reporting</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Integration with 500+ popular tools</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                        Get Started Free
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
                        Book a Demo
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Right Visual */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 lg:p-16 flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    {/* Simulated Dashboard */}
                    <div className="bg-white rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="h-4 bg-blue-200 rounded-full w-3/4 animate-pulse delay-200"></div>
                        <div className="h-4 bg-purple-200 rounded-full w-1/2 animate-pulse delay-400"></div>
                        <div className="grid grid-cols-2 gap-3 mt-6">
                          <div className="h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                            <div className="text-blue-600 font-bold">$50K</div>
                          </div>
                          <div className="h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                            <div className="text-green-600 font-bold">+24%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Cards */}
                    <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur p-3 rounded-lg shadow-lg animate-float">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-800">Task Completed</span>
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur p-3 rounded-lg shadow-lg animate-float delay-1000">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <Star className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-800">New Achievement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Split Hero with Visual - React JSX">
{`<div className="bg-white rounded-xl shadow-xl overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-96">
    {/* Left Content */}
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 lg:p-16 flex items-center">
      <div>
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Star className="h-4 w-4" />
          #1 Platform of 2024
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Transform Your
          <span className="block text-blue-600">Business Today</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Join thousands of companies who have revolutionized their operations.
        </p>
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Automated workflows that save 10+ hours per week</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
    
    {/* Right Visual */}
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 lg:p-16 flex items-center justify-center">
      <div className="relative w-full max-w-md">
        {/* Simulated Dashboard */}
        <div className="bg-white rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-4 bg-blue-200 rounded-full w-3/4 animate-pulse delay-200"></div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <div className="text-blue-600 font-bold">$50K</div>
              </div>
              <div className="h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                <div className="text-green-600 font-bold">+24%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 10. TESTIMONIAL HERO */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            10. Testimonial Hero
          </h2>
          
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Social Proof Focused Hero</h3>
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.3),transparent_70%)]"></div>
              
              <div className="relative min-h-96 flex items-center justify-center p-8 lg:p-16">
                <div className="max-w-6xl mx-auto text-center text-white">
                  <div className="mb-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-2xl lg:text-3xl font-medium italic text-gray-200 mb-6 leading-relaxed max-w-4xl mx-auto">
                      "This platform completely transformed how we work. Our productivity increased by 300% and our team couldn't be happier with the results."
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">SK</span>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-white">Sarah Johnson</div>
                        <div className="text-gray-400 text-sm">CEO, TechCorp</div>
                      </div>
                    </div>
                  </div>
                  
                  <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                    Join 10,000+ Happy
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                      Customers
                    </span>
                  </h1>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                    <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Start Your Success Story
                    </button>
                    <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                      Read Case Studies
                    </button>
                  </div>
                  
                  {/* Company Logos */}
                  <div className="text-gray-400 text-sm mb-6">Trusted by industry leaders:</div>
                  <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                    <div className="text-white font-bold text-lg">ACME</div>
                    <div className="text-white font-bold text-lg">TechFlow</div>
                    <div className="text-white font-bold text-lg">DataCorp</div>
                    <div className="text-white font-bold text-lg">CloudBase</div>
                    <div className="text-white font-bold text-lg">InnovateAI</div>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Testimonial Hero - React JSX">
{`<div className="relative overflow-hidden rounded-xl shadow-2xl">
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.3),transparent_70%)]"></div>
  
  <div className="relative min-h-96 flex items-center justify-center p-8 lg:p-16">
    <div className="max-w-6xl mx-auto text-center text-white">
      <div className="mb-8">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
          ))}
        </div>
        <blockquote className="text-2xl lg:text-3xl font-medium italic text-gray-200 mb-6 leading-relaxed max-w-4xl mx-auto">
          "This platform completely transformed how we work. Our productivity increased by 300%."
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">SK</span>
          </div>
          <div className="text-left">
            <div className="font-semibold text-white">Sarah Johnson</div>
            <div className="text-gray-400 text-sm">CEO, TechCorp</div>
          </div>
        </div>
      </div>
      
      <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
        Join 10,000+ Happy
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Customers
        </span>
      </h1>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
        <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
          Start Your Success Story
        </button>
      </div>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

       {/* QUICK REFERENCE */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg border border-blue-100">
          <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">Quick Reference Guide</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-blue-700 mb-4 text-lg flex items-center gap-2">
                <Star className="h-5 w-5" />
                Key Components Needed:
              </h3>
              <ul className="text-sm text-blue-600 space-y-2">
                <li>• React with useState and useEffect hooks</li>
                <li>• Lucide React icons (Copy, Check, Play, ArrowRight, etc.)</li>
                <li>• Tailwind CSS with full utility classes</li>
                <li>• Responsive breakpoints (sm:, md:, lg:)</li>
                <li>• Animation utilities (animate-pulse, animate-bounce)</li>
                <li>• Gradient and backdrop utilities</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-blue-700 mb-4 text-lg flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Common Layout Patterns:
              </h3>
              <ul className="text-sm text-blue-600 space-y-2">
                <li>• min-h-96 for consistent hero heights</li>
                <li>• max-w-4xl mx-auto for content centering</li>
                <li>• text-5xl lg:text-7xl for responsive typography</li>
                <li>• flex flex-col sm:flex-row for button groups</li>
                <li>• absolute inset-0 for overlay positioning</li>
                <li>• grid grid-cols-1 lg:grid-cols-2 for splits</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-bold text-blue-700 mb-4 text-lg text-center">Essential CSS Classes by Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-semibold text-gray-800 mb-2">Background Effects:</div>
                <div className="text-gray-600 space-y-1">
                  <div>bg-gradient-to-br from-purple-600</div>
                  <div>backdrop-blur-lg</div>
                  <div>bg-white/10</div>
                  <div>bg-black/40</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-semibold text-gray-800 mb-2">Interactive Elements:</div>
                <div className="text-gray-600 space-y-1">
                  <div>hover:scale-105</div>
                  <div>transition-all duration-300</div>
                  <div>group-hover:translate-x-1</div>
                  <div>transform hover:rotate-0</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-semibold text-gray-800 mb-2">Text & Colors:</div>
                <div className="text-gray-600 space-y-1">
                  <div>text-transparent bg-clip-text</div>
                  <div>bg-gradient-to-r from-cyan-400</div>
                  <div>leading-tight</div>
                  <div>font-bold</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Animation Techniques:
              </h3>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>1. Use animate-pulse for breathing effects</li>
                <li>2. Combine delays for staggered animations</li>
                <li>3. Mouse tracking with useState and onMouseMove</li>
                <li>4. Carousel slides with useEffect intervals</li>
                <li>5. Hover transforms for interactive elements</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Best Practices:
              </h3>
              <ul className="text-sm text-blue-600 space-y-1">
                <li>1. Test all breakpoints thoroughly</li>
                <li>2. Ensure sufficient color contrast</li>
                <li>3. Add loading states for dynamic content</li>
                <li>4. Use semantic HTML structure</li>
                <li>5. Optimize for performance and accessibility</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
            <h3 className="font-bold mb-3 text-lg">Pro Tips for Customization:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2">
                <li>• Mix multiple gradients for depth</li>
                <li>• Use backdrop-blur for glassmorphism</li>
                <li>• Combine transforms for complex animations</li>
                <li>• Add particle effects with absolute positioning</li>
              </ul>
              <ul className="space-y-2">
                <li>• Layer multiple background elements</li>
                <li>• Use CSS variables for dynamic theming</li>
                <li>• Implement proper focus states</li>
                <li>• Consider reduced motion preferences</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSectionTemplates;