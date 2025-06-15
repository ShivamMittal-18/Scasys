import React from 'react';
import { FileText, Calendar, Mail, AlertCircle, Briefcase, Shield, CreditCard, XCircle, Edit, Users } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-8 border-b pb-6">
        <div className="flex items-center justify-center mb-4">
          <FileText className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
        </div>
        <div className="text-gray-600 space-y-1">
          <p><span className="font-medium">Effective Date:</span> 6th June, 2025</p>
          <p><span className="font-medium">Last Updated:</span> 6th June, 2025</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-8 bg-blue-50 p-6 rounded-lg">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
          <p className="text-gray-700 leading-relaxed">
            By using our website or services, you agree to comply with these Terms of Service for <span className="font-semibold text-blue-700">Scasys Technologies</span>.
          </p>
        </div>
      </div>

      {/* Section 1: Services */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">1. Services</h2>
        </div>
        
        <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-400">
          <div className="flex items-start">
            <Users className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-700">
                <span className="font-semibold text-green-700">Scasys Technologies</span> provides AI agents, automation solutions, and digital services for small businesses and startups. Each service engagement is governed by its own service-level agreement (SLA).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: User Responsibilities */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <Shield className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">2. User Responsibilities</h2>
        </div>
        
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <div className="mb-4">
            <p className="text-gray-700 font-medium text-lg mb-3">
              <span className="text-red-600">You agree not to:</span>
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Violate laws using our platform</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Reverse engineer or exploit our services</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">Copy or misuse our intellectual property</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Payments & Refunds */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <CreditCard className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">3. Payments & Refunds</h2>
        </div>
        
        <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-400">
          <div className="flex items-start">
            <CreditCard className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-700">
                <span className="font-medium text-purple-700">Payments</span> are governed by contract terms. <span className="font-medium text-purple-700">Refunds</span> are subject to conditions defined in individual agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Limitation of Liability */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">4. Limitation of Liability</h2>
        </div>
        
        <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-400">
          <div className="flex items-start">
            <Shield className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-700">
                <span className="font-medium text-orange-700">Important:</span> We are not liable for indirect or incidental damages resulting from your use of our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Termination */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <XCircle className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">5. Termination</h2>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-gray-500 rounded-full mr-3 flex-shrink-0"></div>
            <p className="text-gray-700">
              We reserve the right to suspend or terminate services if terms are breached.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Changes */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <Edit className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">6. Changes</h2>
        </div>
        
        <div className="bg-indigo-50 p-6 rounded-lg">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 flex-shrink-0"></div>
            <p className="text-gray-700">
              We may modify these terms. <span className="font-medium text-indigo-700">Continued use indicates acceptance.</span>
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

export default TermsOfService;