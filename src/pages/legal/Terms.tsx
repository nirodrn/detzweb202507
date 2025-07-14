import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, Shield, Code, Zap, Camera, CreditCard, Users, Globe, AlertTriangle } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const Terms = () => {
  return (
    <div>
      <PageHeader
        title="Terms and Conditions"
        description="Guidelines for using our services"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
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
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-gray-600 leading-relaxed">
                Welcome to DETZ Global. These Terms and Conditions govern your access to and use of our website and the purchase of our products and services. By using this site or placing an order, you agree to be bound by all of these Terms and our Privacy Policy and Refund Policy.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-2" />
                  Eligibility
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 mb-4">
                    To use the DETZ Global website and purchase our products or services, you must be at least 18 years old. By registering on our site or placing an order, you confirm that you are of legal adult age.
                  </p>
                  <p className="text-gray-600">
                    You also agree to provide accurate, current, and complete information during registration, checkout, or any time you interact with DETZ. Failure to provide such information may result in the suspension of your order or account.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="w-6 h-6 text-blue-600 mr-2" />
                  Payment and Billing
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Methods</h3>
                    <p className="text-gray-600">
                      We accept secure online payments through Commercial Bank's PayHere gateway and other authorized payment processors. By completing a purchase, you authorize DETZ Global to charge your selected payment method for the amount of your order. Prices are listed in the designated currency on our website and are final at the time of order.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Billing Accuracy</h3>
                    <p className="text-gray-600">
                      You agree to provide accurate billing information. DETZ Global reserves the right to cancel or refuse any order if fraud or an unauthorized or illegal transaction is suspected. We may also request additional verification for unusually large or suspicious orders to protect our customers.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Product and Service Use</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Code className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Software</h3>
                    </div>
                    <p className="text-gray-600">
                      All software products are provided under a per-user license. Each software license is granted to an individual user and must not be shared, transferred, or resold. Unauthorized copying, distribution, or use of the software is strictly prohibited. License purchases are final and non-refundable once the software has been downloaded or activated.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Zap className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Electrical Products</h3>
                    </div>
                    <p className="text-gray-600">
                      Our electrical hardware products must be installed and used strictly in accordance with the provided instructions and any applicable local regulations. Improper installation or misuse of an electrical product is the sole responsibility of the user, and DETZ Global is not liable for any damage or injury resulting from improper use. We recommend that installations be performed by qualified professionals whenever required.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Camera className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Studio Services</h3>
                    </div>
                    <p className="text-gray-600">
                      Our studio services (such as recording or creative studio sessions) are available by prior booking. Clients are responsible for arriving on time for their scheduled sessions and adhering to all studio policies and guidelines during use. Failure to comply with studio rules, or excessive delays, may result in termination of the session without a refund. Any special equipment requests or service details should be communicated to DETZ Global in advance.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-2" />
                  Intellectual Property
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 mb-4">
                    All content and materials provided by DETZ Global, including software code, product designs, user interfaces, documentation, and multimedia content, are the exclusive intellectual property of DETZ Global Pvt Ltd. These are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p className="text-gray-600">
                    You may not reproduce, distribute, modify, create derivative works from, or publicly display any of DETZ's intellectual property without prior written permission. All product names, logos, and marks are trademarks or registered trademarks of DETZ Global or their licensors. Nothing in these Terms grants you any rights to use our trademarks.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-blue-600 mr-2" />
                  Limitation of Liability
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 mb-4">
                    DETZ Global provides its products and services "as is" and to the extent permitted by law. DETZ Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, loss of data, or other damages arising out of or related to your use of our products or services.
                  </p>
                  <p className="text-gray-600">
                    This limitation applies even if DETZ Global has been advised of the possibility of such damages. In all cases, DETZ Global's total liability for any claim related to our products or services shall not exceed the amount you paid for the applicable product or service.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Globe className="w-6 h-6 text-blue-600 mr-2" />
                  Governing Law
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600">
                    These Terms and Conditions are governed by the laws of Sri Lanka. By using our website and purchasing our products or services, you agree that any disputes will be resolved in the appropriate courts of Sri Lanka. If you are accessing our site or using our services from outside Sri Lanka, you agree to comply with any local laws and regulations.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600">
                    DETZ Global reserves the right to modify or update these Terms and Conditions at any time by posting the revised terms on our website. Such changes will take effect immediately upon posting. It is your responsibility to review the Terms and Conditions regularly. Your continued use of the website or purchase of products after any changes are posted constitutes acceptance of the updated Terms.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Company Information</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600">
                    DETZ Global Pvt Ltd is a private limited company registered in Sri Lanka under the Companies Act No. 7 of 2007, Company Registration Number PV00324946. Our registered office is at 141 Waragoda Road, Peliyagoda, Colombo, Sri Lanka. We conduct business globally and comply with local laws in all jurisdictions where we operate.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 mb-4">
                    If you have any questions or need clarification about these Terms and Conditions, please contact us at info@detzglobal.com. We will be happy to assist you with any inquiries or concerns regarding our policies. For faster service, please include the subject "Terms and Conditions Inquiry" in your email.
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

export default Terms;