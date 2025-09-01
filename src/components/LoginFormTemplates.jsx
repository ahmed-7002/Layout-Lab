import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, Github, Chrome, X } from 'lucide-react';

const LoginFormTemplates = () => {
  const [copiedCode, setCopiedCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: ''
  });

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
      <pre className="text-sm overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen" id="LoginFormTemplates">
      <h1 className="text-3xl font-bold text-center py-8 text-gray-800">
        Login Form Layout Templates
      </h1>
      
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        
        {/* 1. SIMPLE LOGIN FORMS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            1. Simple Login Forms
          </h2>
          
          {/* Basic Login Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Basic Login Form</h3>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label className="ml-2 text-sm text-gray-600">Remember me</label>
                    </div>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Forgot password?</a>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Sign In
                  </button>
                </form>
                <p className="text-center text-sm text-gray-600 mt-6">
                  Don't have an account? <a href="#" className="text-blue-600 hover:text-blue-500">Sign up</a>
                </p>
              </div>
            </div>
            <CodeBlock title="Basic Login Form - React JSX">
{`<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
  <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
      <input
        type="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
        placeholder="Enter your email"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
      <input
        type="password"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
        placeholder="Enter your password"
      />
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
        <label className="ml-2 text-sm text-gray-600">Remember me</label>
      </div>
      <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Forgot password?</a>
    </div>
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
    >
      Sign In
    </button>
  </form>
  <p className="text-center text-sm text-gray-600 mt-6">
    Don't have an account? <a href="#" className="text-blue-600 hover:text-blue-500">Sign up</a>
  </p>
</div>`}
            </CodeBlock>
          </div>

          {/* Login Form with Icons */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Login Form with Icons</h3>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
                  >
                    Sign In
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
            <CodeBlock title="Login Form with Icons - React JSX">
{`import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const LoginWithIcons = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
        >
          Sign In
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 2. LOGIN FORMS WITH SOCIAL LOGIN */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            2. Login Forms with Social Login
          </h2>
          
          {/* Social Login Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Login with Social Options</h3>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
                
                {/* Social Buttons */}
                <div className="space-y-3 mb-6">
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Chrome className="h-5 w-5 mr-3 text-red-500" />
                    Continue with Google
                  </button>
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Github className="h-5 w-5 mr-3 text-gray-800" />
                    Continue with GitHub
                  </button>
                </div>

                {/* Divider */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                  </div>
                </div>

                {/* Email Form */}
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
            <CodeBlock title="Social Login Form - React JSX">
{`import { Chrome, Github } from 'lucide-react';

<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
  <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
  
  {/* Social Buttons */}
  <div className="space-y-3 mb-6">
    <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
      <Chrome className="h-5 w-5 mr-3 text-red-500" />
      Continue with Google
    </button>
    <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
      <Github className="h-5 w-5 mr-3 text-gray-800" />
      Continue with GitHub
    </button>
  </div>

  {/* Divider */}
  <div className="relative mb-6">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-gray-300" />
    </div>
    <div className="relative flex justify-center text-sm">
      <span className="px-2 bg-white text-gray-500">Or continue with email</span>
    </div>
  </div>

  {/* Email Form */}
  <form className="space-y-4">
    <input
      type="email"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
      placeholder="Email address"
    />
    <input
      type="password"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
      placeholder="Password"
    />
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
    >
      Sign In
    </button>
  </form>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 3. LOGIN/SIGNUP TOGGLE FORMS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            3. Login/Signup Toggle Forms
          </h2>
          
          {/* Toggle Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Login/Signup Toggle Form</h3>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                {/* Toggle Tabs */}
                <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      isLogin
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      !isLogin
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                <form className="space-y-4">
                  {!isLogin && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          placeholder="First name"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                  )}
                  <div>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Password"
                    />
                  </div>
                  {!isLogin && (
                    <div>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="Confirm password"
                      />
                    </div>
                  )}
                  
                  {!isLogin && (
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label className="ml-2 text-sm text-gray-600">
                        I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a>
                      </label>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                  </button>
                </form>
              </div>
            </div>
            <CodeBlock title="Login/Signup Toggle Form - React JSX">
{`import { useState } from 'react';

const ToggleForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      {/* Toggle Tabs */}
      <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setIsLogin(true)}
          className={\`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors \${
            isLogin
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }\`}
        >
          Sign In
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={\`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors \${
            !isLogin
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'
          }\`}
        >
          Sign Up
        </button>
      </div>

      <form className="space-y-4">
        {!isLogin && (
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="First name"
            />
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Last name"
            />
          </div>
        )}
        <input
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          placeholder="Email address"
        />
        <input
          type="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          placeholder="Password"
        />
        {!isLogin && (
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            placeholder="Confirm password"
          />
        )}
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          {isLogin ? 'Sign In' : 'Create Account'}
        </button>
      </form>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 4. STYLED LOGIN FORMS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            4. Styled Login Forms
          </h2>
          
          {/* Gradient Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Gradient Background Form</h3>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-white mb-6">Welcome Back</h2>
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg placeholder-blue-100 text-white focus:outline-none focus:ring-2 focus:ring-white focus:bg-white focus:text-gray-800 transition-all"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg placeholder-blue-100 text-white focus:outline-none focus:ring-2 focus:ring-white focus:bg-white focus:text-gray-800 transition-all"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                  >
                    Sign In
                  </button>
                </form>
                <p className="text-center text-sm text-blue-100 mt-6">
                  New here? <a href="#" className="text-white hover:underline">Create an account</a>
                </p>
              </div>
            </div>
            <CodeBlock title="Gradient Background Form - React JSX">
{`<div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
  <h2 className="text-2xl font-bold text-center text-white mb-6">Welcome Back</h2>
  <form className="space-y-4">
    <input
      type="email"
      className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg placeholder-blue-100 text-white focus:outline-none focus:ring-2 focus:ring-white focus:bg-white focus:text-gray-800 transition-all"
      placeholder="Email address"
    />
    <input
      type="password"
      className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg placeholder-blue-100 text-white focus:outline-none focus:ring-2 focus:ring-white focus:bg-white focus:text-gray-800 transition-all"
      placeholder="Password"
    />
    <button
      type="submit"
      className="w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium"
    >
      Sign In
    </button>
  </form>
  <p className="text-center text-sm text-blue-100 mt-6">
    New here? <a href="#" className="text-white hover:underline">Create an account</a>
  </p>
</div>`}
            </CodeBlock>
          </div>

          {/* Dark Theme Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Dark Theme Form</h3>
            <div className="flex justify-center">
              <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-700">
                <h2 className="text-2xl font-bold text-center text-white mb-6">Sign In</h2>
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Password"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500" />
                      <label className="ml-2 text-sm text-gray-300">Remember me</label>
                    </div>
                    <a href="#" className="text-sm text-blue-400 hover:text-blue-300">Forgot password?</a>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Sign In
                  </button>
                </form>
                <p className="text-center text-sm text-gray-400 mt-6">
                  Don't have an account? <a href="#" className="text-blue-400 hover:text-blue-300">Sign up</a>
                </p>
              </div>
            </div>
            <CodeBlock title="Dark Theme Form - React JSX">
{`<div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto border border-gray-700">
  <h2 className="text-2xl font-bold text-center text-white mb-6">Sign In</h2>
  <form className="space-y-4">
    <input
      type="email"
      className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
      placeholder="Email address"
    />
    <input
      type="password"
      className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
      placeholder="Password"
    />
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input type="checkbox" className="h-4 w-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500" />
        <label className="ml-2 text-sm text-gray-300">Remember me</label>
      </div>
      <a href="#" className="text-sm text-blue-400 hover:text-blue-300">Forgot password?</a>
    </div>
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
    >
      Sign In
    </button>
  </form>
  <p className="text-center text-sm text-gray-400 mt-6">
    Don't have an account? <a href="#" className="text-blue-400 hover:text-blue-300">Sign up</a>
  </p>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 5. MULTI-STEP SIGNUP FORMS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            5. Multi-Step Signup Forms
          </h2>
          
          {/* Multi-Step Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Multi-Step Registration Form</h3>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Create Account</h2>
                
                {/* Progress Indicator */}
                <div className="flex items-center mb-6">
                  <div className="flex-1 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full ml-2"></div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full ml-2"></div>
                </div>
                <p className="text-center text-sm text-gray-600 mb-6">Step 1 of 3</p>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Phone number"
                    />
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      disabled
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <CodeBlock title="Multi-Step Registration Form - React JSX">
{`const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Create Account</h2>
      
      {/* Progress Indicator */}
      <div className="flex items-center mb-6">
        <div className={\`flex-1 h-2 rounded-full \${currentStep >= 1 ? 'bg-blue-500' : 'bg-gray-200'}\`}></div>
        <div className={\`flex-1 h-2 rounded-full ml-2 \${currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-200'}\`}></div>
        <div className={\`flex-1 h-2 rounded-full ml-2 \${currentStep >= 3 ? 'bg-blue-500' : 'bg-gray-200'}\`}></div>
      </div>
      <p className="text-center text-sm text-gray-600 mb-6">Step {currentStep} of 3</p>

      <form className="space-y-4">
        {/* Step 1: Personal Info */}
        {currentStep === 1 && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" />
              <input type="text" placeholder="Last name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" />
            </div>
            <input type="email" placeholder="Email address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" />
            <input type="tel" placeholder="Phone number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" />
          </>
        )}
        
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={() => setCurrentStep(currentStep - 1)}
            disabled={currentStep === 1}
            className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium disabled:opacity-50"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => setCurrentStep(currentStep + 1)}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {currentStep === 3 ? 'Create Account' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* 6. SIDE-BY-SIDE LOGIN/SIGNUP */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            6. Side-by-Side Login/Signup
          </h2>
          
          {/* Side by Side Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Side-by-Side Login and Signup</h3>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
                <div className="flex min-h-[500px]">
                  {/* Login Side */}
                  <div className="w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome Back</h2>
                    <form className="space-y-4">
                      <div>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          placeholder="Password"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                          <label className="ml-2 text-sm text-gray-600">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Forgot password?</a>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Sign In
                      </button>
                    </form>
                  </div>

                  {/* Divider */}
                  <div className="w-px bg-gray-200 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-gray-500 text-sm">
                      OR
                    </div>
                  </div>

                  {/* Signup Side */}
                  <div className="w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Account</h2>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                          placeholder="First name"
                        />
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                          placeholder="Last name"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                          placeholder="Password"
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                          placeholder="Confirm password"
                        />
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                        <label className="ml-2 text-sm text-gray-600">
                          I agree to the <a href="#" className="text-green-600 hover:text-green-500">Terms</a>
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                      >
                        Create Account
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Side-by-Side Login/Signup - React JSX">
{`<div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mx-auto">
  <div className="flex min-h-[500px]">
    {/* Login Side */}
    <div className="w-1/2 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome Back</h2>
      <form className="space-y-4">
        <input
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          placeholder="Email address"
        />
        <input
          type="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          placeholder="Password"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label className="ml-2 text-sm text-gray-600">Remember me</label>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Forgot password?</a>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Sign In
        </button>
      </form>
    </div>

    {/* Divider */}
    <div className="w-px bg-gray-200 relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-gray-500 text-sm">
        OR
      </div>
    </div>

    {/* Signup Side */}
    <div className="w-1/2 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Account</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <input type="text" placeholder="First name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors" />
          <input type="text" placeholder="Last name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors" />
        </div>
        <input type="email" placeholder="Email address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors" />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors" />
        <input type="password" placeholder="Confirm password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors" />
        <div className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
          <label className="ml-2 text-sm text-gray-600">I agree to the <a href="#" className="text-green-600 hover:text-green-500">Terms</a></label>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          Create Account
        </button>
      </form>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 7. MOBILE-OPTIMIZED LOGIN FORMS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            7. Mobile-Optimized Login Forms
          </h2>
          
          {/* Mobile Login Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Mobile-First Login Form</h3>
            <div className="flex justify-center">
              <div className="bg-white rounded-t-3xl shadow-lg w-full max-w-sm min-h-[600px] relative">
                {/* Mobile Status Bar Simulation */}
                <div className="bg-gray-50 p-3 rounded border-l-4 border-green-500">
                  <strong>Mobile:</strong> <code className="text-green-600">rounded-t-3xl min-h-[600px] max-w-sm</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-purple-500">
                  <strong>Side-by-Side:</strong> <code className="text-purple-600">flex min-h-[500px] max-w-4xl</code>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Input Styles</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-3 rounded border-l-4 border-red-500">
                  <strong>Standard:</strong> <code className="text-red-600">border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-orange-500">
                  <strong>With Icons:</strong> <code className="text-orange-600">pl-10 pr-4 + absolute left-3 top-1/2</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-indigo-500">
                  <strong>Mobile:</strong> <code className="text-indigo-600">bg-gray-50 border-0 rounded-xl py-3 text-lg</code>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 text-gray-700">Button Variants</h4>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                  <strong>Primary:</strong> <code className="text-blue-600">bg-blue-600 text-white hover:bg-blue-700</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-gray-500">
                  <strong>Secondary:</strong> <code className="text-gray-600">border border-gray-300 hover:bg-gray-50</code>
                </div>
                <div className="bg-gray-50 p-3 rounded border-l-4 border-green-500">
                  <strong>Success:</strong> <code className="text-green-600">bg-green-600 text-white hover:bg-green-700</code>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Pro Tips:</strong> Use <code>focus:ring-2 focus:ring-blue-500</code> for accessibility. 
              Add <code>transition-colors</code> for smooth hover effects. For mobile forms, use larger padding <code>py-3</code> and <code>text-lg</code> for better touch targets.
            </p>
          </div>
        </section>

        {/* 8. ADVANCED LOGIN FORMS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            8. Advanced Login Forms
          </h2>
          
          {/* Two-Factor Authentication Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Two-Factor Authentication Form</h3>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify Your Identity</h2>
                  <p className="text-gray-600 text-sm">We sent a verification code to your phone ending in ***789</p>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 text-center">Enter verification code</label>
                    <div className="flex justify-center space-x-3">
                      {[...Array(6)].map((_, i) => (
                        <input
                          key={i}
                          type="text"
                          maxLength="1"
                          className="w-12 h-12 text-center text-lg font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Verify Code
                  </button>
                </form>

                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600">
                    Didn't receive a code? <a href="#" className="text-blue-600 hover:text-blue-500">Resend</a>
                  </p>
                </div>
              </div>
            </div>
            <CodeBlock title="Two-Factor Authentication Form - React JSX">
{`import { Phone } from 'lucide-react';

<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
  <div className="text-center mb-6">
    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
      <Phone className="h-8 w-8 text-green-600" />
    </div>
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify Your Identity</h2>
    <p className="text-gray-600 text-sm">We sent a verification code to your phone ending in ***789</p>
  </div>

  <form className="space-y-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3 text-center">Enter verification code</label>
      <div className="flex justify-center space-x-3">
        {[...Array(6)].map((_, i) => (
          <input
            key={i}
            type="text"
            maxLength="1"
            className="w-12 h-12 text-center text-lg font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          />
        ))}
      </div>
    </div>
    
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
    >
      Verify Code
    </button>
  </form>

  <div className="text-center mt-6">
    <p className="text-sm text-gray-600">
      Didn't receive a code? <a href="#" className="text-blue-600 hover:text-blue-500">Resend</a>
    </p>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Password Reset Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Password Reset Form</h3>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Lock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Reset Password</h2>
                  <p className="text-gray-600 text-sm">Enter your email and we'll send you a reset link</p>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Send Reset Link
                  </button>
                </form>

                <div className="text-center mt-6">
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-600">← Back to Sign In</a>
                </div>
              </div>
            </div>
            <CodeBlock title="Password Reset Form - React JSX">
{`import { Lock, Mail } from 'lucide-react';

<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
  <div className="text-center mb-6">
    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
      <Lock className="h-8 w-8 text-blue-600" />
    </div>
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Reset Password</h2>
    <p className="text-gray-600 text-sm">Enter your email and we'll send you a reset link</p>
  </div>

  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="email"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          placeholder="Enter your email"
        />
      </div>
    </div>
    
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
    >
      Send Reset Link
    </button>
  </form>

  <div className="text-center mt-6">
    <a href="#" className="text-sm text-gray-600 hover:text-blue-600">← Back to Sign In</a>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 9. FULL-SCREEN LOGIN LAYOUTS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            9. Full-Screen Login Layouts
          </h2>
          
          {/* Split Screen Layout */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Split Screen Layout</h3>
            <div className="w-full">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
                <div className="flex h-full">
                  {/* Left Side - Branding */}
                  <div className="w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 p-8 flex flex-col justify-center items-center text-white">
                    <h1 className="text-3xl font-bold mb-4">Welcome to MyApp</h1>
                    <p className="text-blue-100 text-center mb-6">Join thousands of users who trust our platform for their daily workflow.</p>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    </div>
                  </div>

                  {/* Right Side - Form */}
                  <div className="w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign In</h2>
                    <form className="space-y-4">
                      <div>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          placeholder="Password"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Sign In
                      </button>
                    </form>
                    <p className="text-center text-sm text-gray-600 mt-4">
                      New user? <a href="#" className="text-blue-600 hover:text-blue-500">Create account</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Split Screen Layout - React JSX">
{`<div className="bg-white rounded-lg shadow-lg overflow-hidden h-96 max-w-4xl mx-auto">
  <div className="flex h-full">
    {/* Left Side - Branding */}
    <div className="w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 p-8 flex flex-col justify-center items-center text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to MyApp</h1>
      <p className="text-blue-100 text-center mb-6">Join thousands of users who trust our platform for their daily workflow.</p>
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
      </div>
    </div>

    {/* Right Side - Form */}
    <div className="w-1/2 p-8 flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign In</h2>
      <form className="space-y-4">
        <input
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          placeholder="Email address"
        />
        <input
          type="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Sign In
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        New user? <a href="#" className="text-blue-600 hover:text-blue-500">Create account</a>
      </p>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Floating Card Layout */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Floating Card with Background</h3>
            <div className="relative h-96 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 h-full">
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="border border-white"></div>
                  ))}
                </div>
              </div>
              
              {/* Floating Form */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="bg-white bg-opacity-95 backdrop-blur p-8 rounded-2xl shadow-2xl w-full max-w-md">
                  <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors bg-white bg-opacity-50"
                        placeholder="Email address"
                      />
                    </div>
                    <div>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors bg-white bg-opacity-50"
                        placeholder="Password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium"
                    >
                      Sign In
                    </button>
                  </form>
                  <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account? <a href="#" className="text-purple-600 hover:text-purple-500">Sign up</a>
                  </p>
                </div>
              </div>
            </div>
            <CodeBlock title="Floating Card with Background - React JSX">
{`<div className="relative h-96 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="grid grid-cols-8 h-full">
      {[...Array(64)].map((_, i) => (
        <div key={i} className="border border-white"></div>
      ))}
    </div>
  </div>
  
  {/* Floating Form */}
  <div className="absolute inset-0 flex items-center justify-center p-8">
    <div className="bg-white bg-opacity-95 backdrop-blur p-8 rounded-2xl shadow-2xl w-full max-w-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
      <form className="space-y-4">
        <input
          type="email"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors bg-white bg-opacity-50"
          placeholder="Email address"
        />
        <input
          type="password"
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors bg-white bg-opacity-50"
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium"
        >
          Sign In
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        Don't have an account? <a href="#" className="text-purple-600 hover:text-purple-500">Sign up</a>
      </p>
    </div>
  </div>
</div>`}
            </CodeBlock>
          </div>
        </section>

        {/* 10. COMPACT LOGIN FORMS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            10. Compact Login Forms
          </h2>
          
          {/* Inline Login Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Inline Horizontal Login</h3>
            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
                <h2 className="text-xl font-bold text-center text-gray-800 mb-6">Quick Sign In</h2>
                <form className="flex flex-wrap gap-4 items-end justify-center">
                  <div className="flex-1 min-w-48">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="flex-1 min-w-48">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    Sign In
                  </button>
                </form>
                <div className="text-center mt-4">
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Forgot password?</a>
                  <span className="text-gray-400 mx-2">•</span>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Create account</a>
                </div>
              </div>
            </div>
            <CodeBlock title="Inline Horizontal Login - React JSX">
{`<div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
  <h2 className="text-xl font-bold text-center text-gray-800 mb-6">Quick Sign In</h2>
  <form className="flex flex-wrap gap-4 items-end justify-center">
    <div className="flex-1 min-w-48">
      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
        placeholder="your@email.com"
      />
    </div>
    <div className="flex-1 min-w-48">
      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
        placeholder="Password"
      />
    </div>
    <button
      type="submit"
      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
    >
      Sign In
    </button>
  </form>
  <div className="text-center mt-4">
    <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Forgot password?</a>
    <span className="text-gray-400 mx-2">•</span>
    <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Create account</a>
  </div>
</div>`}
            </CodeBlock>
          </div>

          {/* Modal Login Form */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Modal/Popup Login Form</h3>
            <div className="flex justify-center">
              <div className="relative">
                {/* Backdrop */}
                <div className="bg-black bg-opacity-50 flex items-center justify-center p-4 relative w-full h-96 rounded-lg">
                  <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
                    {/* Close Button */}
                    <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                      <X className="h-5 w-5" />
                    </button>
                    
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 pr-8">Sign In</h2>
                    
                    <form className="space-y-4">
                      <div>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          placeholder="Password"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Sign In
                      </button>
                    </form>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Chrome className="h-4 w-4 mr-2 text-red-500" />
                        <span className="text-gray-700 text-sm">Continue with Google</span>
                      </button>
                    </div>

                    <p className="text-center text-xs text-gray-600 mt-4">
                      New here? <a href="#" className="text-blue-600 hover:text-blue-500">Create an account</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <CodeBlock title="Modal/Popup Login Form - React JSX">
{`import { X, Chrome } from 'lucide-react';
import { useState } from 'react';

const ModalLogin = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Open Login Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
            
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 pr-8">Sign In</h2>
            
            <form className="space-y-4">
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Email address"
              />
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Password"
              />
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Sign In
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Chrome className="h-4 w-4 mr-2 text-red-500" />
                <span className="text-gray-700 text-sm">Continue with Google</span>
              </button>
            </div>

            <p className="text-center text-xs text-gray-600 mt-4">
              New here? <a href="#" className="text-blue-600 hover:text-blue-500">Create an account</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* Form Validation Examples */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
            11. Login Forms with Validation
          </h2>
          
          {/* Form with Validation */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-gray-600">Form with Real-time Validation</h3>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                    <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                      placeholder="Enter your password"
                    />
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center text-xs">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-green-600">At least 8 characters</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-green-600">Contains uppercase letter</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                        <span className="text-gray-500">Contains number</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder="Confirm your password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Create Account
                  </button>
                </form>
              </div>
            </div>
            <CodeBlock title="Form with Validation - React JSX">
{`const ValidationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const getPasswordStrength = (password) => {
    const checks = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password)
    };
    return checks;
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={\`w-full px-4 py-2 border rounded-lg outline-none transition-colors \${
              !validateEmail(email) && email ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
            }\`}
            placeholder="Enter your email"
          />
          {!validateEmail(email) && email && (
            <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
            placeholder="Enter your password"
          />
          {password && (
            <div className="mt-2 space-y-1">
              {Object.entries(getPasswordStrength(password)).map(([key, met]) => (
                <div key={key} className="flex items-center text-xs">
                  <div className={\`w-2 h-2 rounded-full mr-2 \${met ? 'bg-green-500' : 'bg-gray-300'}\`}></div>
                  <span className={\`\${met ? 'text-green-600' : 'text-gray-500'}\`}>
                    {key === 'length' && 'At least 8 characters'}
                    {key === 'uppercase' && 'Contains uppercase letter'}
                    {key === 'number' && 'Contains number'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};`}
            </CodeBlock>
          </div>
        </section>

        {/* Quick Reference Guide */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Quick Reference Guide</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-700">Common Form Patterns</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-medium text-gray-800 mb-2">Toggle Between Login/Signup</h5>
                  <code className="text-sm text-blue-600">useState + conditional rendering</code>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-medium text-gray-800 mb-2">Password Visibility Toggle</h5>
                  <code className="text-sm text-green-600">Eye/EyeOff icons + type toggle</code>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h5 className="font-medium text-gray-800 mb-2">Form Validation</h5>
                  <code className="text-sm text-purple-600">Real-time validation + error states</code>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-700">Styling Variations</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-medium text-gray-800 mb-2">Color Themes</h5>
                  <div className="flex space-x-2 text-xs">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">Blue</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded">Green</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded">Purple</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded">Dark</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h5 className="font-medium text-gray-800 mb-2">Layout Types</h5>
                  <div className="text-xs space-y-1">
                    <div>• Centered card (max-w-md)</div>
                    <div>• Side-by-side (max-w-4xl)</div>
                    <div>• Mobile-first (max-w-sm)</div>
                    <div>• Inline horizontal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
            <h5 className="font-medium text-gray-800 mb-2">Essential Accessibility Features</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong className="text-blue-600">Labels:</strong> Always use proper label elements or aria-label
              </div>
              <div>
                <strong className="text-green-600">Focus States:</strong> Include focus:ring-2 for keyboard navigation
              </div>
              <div>
                <strong className="text-purple-600">Error Messages:</strong> Link errors to inputs with aria-describedby
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Implementation Tips</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-700">State Management</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <code className="text-sm">
{`// Basic form state
const [formData, setFormData] = useState({
  email: '',
  password: '',
  confirmPassword: ''
});

// Handle input changes
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};`}
                </code>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-700">Form Submission</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <code className="text-sm">
{`// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Validate form
  if (!formData.email || !formData.password) {
    setErrors({ message: 'All fields required' });
    return;
  }

  // Submit logic here
  try {
    await submitForm(formData);
  } catch (error) {
    setErrors({ message: error.message });
  }
};`}
                </code>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Remember:</strong> Always handle form submission with preventDefault(), include proper error handling, 
              and use semantic HTML elements for better accessibility. Consider adding loading states for better UX during API calls.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormTemplates;