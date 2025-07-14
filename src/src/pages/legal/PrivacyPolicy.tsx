import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Eye, Users, Lock, Globe, Database, Settings } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const PrivacyPolicy = () => {
  return (
    <div>
      <PageHeader
        title="Privacy Policy"
        description="How we handle and protect your data"
        backgroundImage="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80"
      />
      
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-blue-100 p-3 rounded-full">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="w-6 h-6 text-blue-600 mr-2" />
                  Information We Collect
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Data</h3>
                    <p className="text-gray-600">
                      When you use our website or purchase products/services, we collect personal information that you provide, such as your name, email address, phone number, shipping and billing address, and payment details (handled securely by our payment processors). This information is used to fulfill your orders and provide customer support.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Data</h3>
                    <p className="text-gray-600">
                      We also collect technical information automatically when you visit our website. This may include your IP address, browser type, device identifiers, and usage data such as pages visited and time spent on pages. We use cookies, web beacons, and analytics tools to gather this data, which helps us improve site functionality and user experience.
                    </p>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl mt-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> DETZ Global does not knowingly collect personal information from individuals under the age of 18. If we learn that we have inadvertently collected personal data from someone under 18, we will take steps to delete such information from our records.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Settings className="w-6 h-6 text-blue-600 mr-2" />
                  How We Use Your Information
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 mb-4">We use the information we collect for the following purposes:</p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3">To process and fulfill your orders, including payment processing, shipping, and providing customer support.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3">To personalize your experience on our site (for example, saving preferences or recommending relevant products and services).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3">To send you service-related communications, updates, support messages, and promotional offers (you can opt out of promotional emails at any time).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3">To improve our products, services, and website by analyzing usage trends and customer feedback.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3">To comply with legal and regulatory obligations.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-2" />
                  Data Sharing
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 mb-4">
                    DETZ Global will not sell or lease your personal information. We share your data only with trusted third-party service providers who perform services on our behalf. Only the information necessary to provide these services is shared. For example:
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3 text-gray-600"><strong>Payment Processors (e.g., ComBank/PayHere):</strong> to handle payment transactions.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3 text-gray-600"><strong>Shipping and Logistics Companies:</strong> to deliver physical products.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3 text-gray-600"><strong>Analytics and Advertising Partners (e.g., Google Analytics):</strong> to help us understand website performance and user behavior.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3 text-gray-600"><strong>IT and Customer Support Services:</strong> for hosting, customer relationship management, and technical support.</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    All third parties are bound by confidentiality and data protection agreements and are required to use your information only as needed to provide services to DETZ Global. We may also disclose information if required by law (e.g., in response to a subpoena or government request) or to protect our legal rights.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-blue-600 mr-2" />
                  Your Rights
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 mb-4">You have the following rights regarding your personal data:</p>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3 text-gray-600"><strong>Access and Correction:</strong> You can request a copy of the personal data we hold about you and ask us to correct or update any inaccuracies.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3 text-gray-600"><strong>Deletion:</strong> You can request that we delete your personal information, subject to any legal obligations to retain data (for example, transaction records or tax documents).</span>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3 text-gray-600"><strong>Objection and Restrictions:</strong> You can object to or request restrictions on certain data processing activities, such as direct marketing.</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    To exercise your rights, please contact us at info@detzglobal.com. We will respond to your request in accordance with applicable laws. Please allow us a reasonable time to comply, as some requests may require verification or could be limited by law.
                  </p>
                  <div className="flex items-center text-blue-600">
                    <Mail className="w-5 h-5 mr-2" />
                    <a href="mailto:info@detzglobal.com" className="hover:underline">info@detzglobal.com</a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 mb-4">
                    Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies help us remember your preferences, maintain your session, and collect analytics information. You can control and manage cookies through your browser settings:
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3 text-gray-600">You may disable cookies or delete existing cookies through your browser. However, please note that disabling cookies may limit some features and functionality of our website.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                      <span className="ml-3 text-gray-600">We do not use cookies to collect sensitive personal information without your consent.</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    By continuing to use our site, you consent to the use of cookies as described in this policy.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-blue-600 mr-2" />
                  Security
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600">
                    We take reasonable steps to protect your personal information and maintain data accuracy. However, no electronic transmission or storage system can be guaranteed to be 100% secure. We implement standard security measures, such as encryption and secure payment processing, to safeguard your data. DETZ Global will notify you in the unlikely event of a data breach that could affect your personal information, in accordance with applicable law.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 mb-4">
                    If you have questions about this Privacy Policy or wish to access or correct your personal data, please contact us at info@detzglobal.com. Your privacy is important to us, and we will respond promptly to all inquiries. For faster response, please include "Privacy Policy Inquiry" in your email subject line.
                  </p>
                  <div className="flex items-center text-blue-600">
                    <Mail className="w-5 h-5 mr-2" />
                    <a href="mailto:info@detzglobal.com" className="hover:underline">info@detzglobal.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PrivacyPolicy;