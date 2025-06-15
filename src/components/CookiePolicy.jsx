import React from 'react';
import { Cookie, Calendar, Mail, HelpCircle, Settings, BarChart3, Shield, ExternalLink } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-8 border-b pb-6">
        <div className="flex items-center justify-center mb-4">
          <Cookie className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Cookie Policy</h1>
        </div>
        <div className="text-gray-600 space-y-1">
          <p><span className="font-medium">Effective Date:</span> 6th June, 2025</p>
          <p><span className="font-medium">Last Updated:</span> 6th June, 2025</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-8 bg-blue-50 p-6 rounded-lg">
        <p className="text-gray-700 leading-relaxed">
          This Cookie Policy explains how <span className="font-semibold text-blue-700">Scasys Technologies</span> uses cookies and similar technologies to enhance your experience.
        </p>
      </div>

      {/* Section 1: What Are Cookies */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <HelpCircle className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">1. What Are Cookies?</h2>
        </div>
        
        <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-400">
          <div className="flex items-start">
            <Cookie className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-700">
                Cookies are small text files stored on your device when you browse websites. They help websites remember your preferences and improve your browsing experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Cookies We Use */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <Settings className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">2. Cookies We Use</h2>
        </div>
        
        <div className="space-y-4">
          <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-start">
              <Shield className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Essential:</h3>
                <p className="text-gray-700">
                  Required for basic website functionality and security features.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-400">
            <div className="flex items-start">
              <BarChart3 className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Analytics:</h3>
                <p className="text-gray-700">
                  Help us understand usage behavior and improve our services.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-400">
            <div className="flex items-start">
              <Settings className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Preference:</h3>
                <p className="text-gray-700">
                  Store your chosen settings and personalization options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Managing Cookies */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <Settings className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">3. Managing Cookies</h2>
        </div>
        
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <div className="mb-4">
            <p className="text-gray-700 leading-relaxed">
              You can control cookie preferences in your browser settings. 
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-red-300">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">
                <span className="font-medium text-red-700">Note:</span> Disabling cookies may limit website functionality and your user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Third-Party Tools */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <ExternalLink className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">4. Third-Party Tools</h2>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-start">
            <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <p className="text-gray-700">
              We use services like <span className="font-medium text-gray-900">Google Analytics</span>, which are subject to their own privacy policies and cookie practices.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-8">
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <div className="flex items-center mb-3">
            <Mail className="w-6 h-6 mr-3" />
            <h2 className="text-xl font-semibold">Contact</h2>
          </div>
          <div className="flex items-center">
            <span className="font-medium mr-2">Email:</span>
            <a 
              href="mailto:contactscasys@gmail.com" 
              className="text-blue-200 hover:text-white transition-colors underline"
            >
              contactscasys@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center pt-6 border-t">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Scasys Technologies. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;