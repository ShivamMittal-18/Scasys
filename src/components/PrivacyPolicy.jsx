import React from 'react';
import { Shield, Eye, Lock, Users, FileText, Mail, Database, MessageCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-8 border-b pb-6">
        <div className="flex items-center justify-center mb-4">
          <Shield className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        </div>
        <div className="text-gray-600 space-y-1">
          <p><span className="font-medium">Effective Date:</span> 6th June, 2025</p>
          <p><span className="font-medium">Last Updated:</span> 6th June, 2025</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-8 bg-blue-50 p-6 rounded-lg">
        <p className="text-gray-700 leading-relaxed">
          At <span className="font-semibold text-blue-700">Scasys Technologies</span>, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and protect your data.
        </p>
      </div>

      {/* Information We Collect */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <Database className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">1. Information We Collect</h2>
        </div>
        
        <div className="space-y-4">
          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-400">
            <div className="flex items-start">
              <Users className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Personal Information:</h3>
                <p className="text-gray-700">
                  Name, email, phone number, business details, and other identifiers when you submit forms or contact us.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-start">
              <Eye className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Usage Data:</h3>
                <p className="text-gray-700">
                  IP address, browser type, pages visited, access times, and referral sources.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-400">
            <div className="flex items-start">
              <MessageCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Communication Data:</h3>
                <p className="text-gray-700">
                  Emails, messages, support requests, and call logs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <Lock className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">2. How We Use Information</h2>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">To provide and manage our services</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">To communicate with you about your inquiries or projects</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">To personalize and improve our services</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">For internal research and development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sharing of Information */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <Users className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">3. Sharing of Information</h2>
        </div>
        
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <div className="mb-4">
            <p className="text-gray-700 font-medium text-lg mb-3">
              <span className="text-red-600">We do not sell your data.</span> We may share it only with:
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Trusted third-party service providers (e.g., hosting, analytics)</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Legal or regulatory authorities when required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <FileText className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">4. Your Rights</h2>
        </div>
        
        <div className="bg-indigo-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-4 font-medium">You can request:</p>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Access or correction of your personal data</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Deletion of your data</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Withdrawal of consent for marketing communication</p>
            </div>
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
          © 2024 Scasys Technologies. All rights reserved.
        </p>
      </div>
    </div>
  );
}