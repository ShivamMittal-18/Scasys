import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, Database, Mail, Server, Users, Clock } from 'lucide-react';

const SecurityPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="text-center mb-8 border-b pb-6">
        <div className="flex items-center justify-center mb-4">
          <Shield className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Security Policy</h1>
        </div>
        <div className="text-gray-600 space-y-1">
          <p><span className="font-medium">Effective Date:</span> 6th June 2025</p>
          <p><span className="font-medium">Last Updated:</span> 6th June 2025</p>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-8 bg-blue-50 p-6 rounded-lg">
        <p className="text-gray-700 leading-relaxed">
          We take data protection seriously at <span className="font-semibold text-blue-700">Scasys Technologies</span>. Here's how we keep your information safe:
        </p>
      </div>

      {/* Section 1: Security Measures */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <Lock className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">1. Security Measures</h2>
        </div>
        
        <div className="space-y-4">
          <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-400">
            <div className="flex items-start">
              <Lock className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-2">SSL Encryption:</h3>
                <p className="text-gray-700">
                  All data transmission is protected with industry-standard SSL encryption.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-400">
            <div className="flex items-start">
              <Shield className="w-5 h-5 text-purple-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Firewalls & Access Control:</h3>
                <p className="text-gray-700">
                  Multi-layered security infrastructure with strict access controls.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-400">
            <div className="flex items-start">
              <Eye className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Regular Security Audits:</h3>
                <p className="text-gray-700">
                  Continuous monitoring and periodic security assessments.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-400">
            <div className="flex items-start">
              <Server className="w-5 h-5 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Secured Third-Party Hosting:</h3>
                <p className="text-gray-700">
                  Our infrastructure is hosted on secure, compliant platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Data Access */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <Users className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">2. Data Access</h2>
        </div>
        
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <div className="flex items-start">
            <Users className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-700">
                <span className="font-medium text-red-700">Restricted Access:</span> Only authorized team members can access personal data, strictly on a need-to-know basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Data Breach Response */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <AlertTriangle className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">3. Data Breach Response</h2>
        </div>
        
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <div className="mb-4">
            <p className="text-gray-700 font-medium text-lg mb-3">
              <span className="text-yellow-700">In the event of a breach:</span>
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">
                <span className="font-medium">Affected users will be notified within 72 hours</span>
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-700">
                <span className="font-medium">We will investigate and take immediate corrective action</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Data Retention */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <Clock className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">4. Data Retention</h2>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-start">
            <Database className="w-5 h-5 text-gray-600 mr-3 mt-1 flex-shrink-0" />
            <p className="text-gray-700">
              We keep personal data only as long as necessary to fulfill our purposes or as required by law. Data is securely deleted when no longer needed.
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

export default SecurityPolicy;