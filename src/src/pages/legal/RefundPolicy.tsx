import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Mail, Clock, Package, Camera, Code, Zap, CreditCard, AlertCircle, CheckCircle } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

const RefundPolicy = () => {
  return (
    <div>
      <PageHeader
        title="Refund Policy"
        description="Our commitment to customer satisfaction"
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
                <RotateCcw className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
              <p className="text-gray-600">
                Thank you for choosing DETZ Global! We aim to ensure you are completely satisfied with our products and services. If, for any reason, you are not satisfied, the following refund and return policies apply.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Returns and Refunds</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Code className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Software Products</h3>
                    </div>
                    <div className="space-y-3 text-gray-600 text-sm">
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Full refund within 7 days if software not downloaded or activated</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Subscription refunds are prorated based on unused period</span>
                      </div>
                      <div className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>No refunds once software is downloaded or activated</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Zap className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Electrical Products</h3>
                    </div>
                    <div className="space-y-3 text-gray-600 text-sm">
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>14-day return window for unused items in original packaging</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>6-month warranty against manufacturing defects</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Repair, replace, or refund for confirmed defects</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Camera className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Studio Services</h3>
                    </div>
                    <div className="space-y-3 text-gray-600 text-sm">
                      <div className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Cancel/reschedule 48 hours before session for full refund</span>
                      </div>
                      <div className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>No refunds for cancellations under 48 hours</span>
                      </div>
                      <div className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>No refunds for completed services</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="w-6 h-6 text-blue-600 mr-2" />
                  Refund Processing
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Once a return or cancellation is approved, DETZ Global will process your refund within 7 business days. Refunds will be issued to the original payment method used for the purchase. Please note:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                        <span className="ml-3 text-gray-600">If the original payment was made via a bank transfer or credit/debit card, the refund will be credited back to that account. The time it takes for the refund to appear in your account depends on your bank or card issuer.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                        <span className="ml-3 text-gray-600"><strong>Non-Refundable Charges:</strong> Any shipping, handling, or transaction fees that were non-refundable will be deducted from your refund total.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-600 rounded-full"></span>
                        <span className="ml-3 text-gray-600">For subscription cancellations, if you received any promotional discounts at the time of purchase, the prorated refund will account for the actual amount paid.</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl mt-4">
                      <p className="text-blue-800 text-sm">
                        <strong>Note:</strong> You will receive an email notification once your refund has been processed. If you have not received your refund after 7 business days, please check with your payment provider first. If there is still an issue, contact us as mentioned below.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Return Conditions</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Electrical Products - Warranty Coverage</h3>
                    <p className="text-gray-600 mb-3">
                      All electrical products come with a 6-month warranty against manufacturing defects. If a product fails due to a confirmed defect within this period, we will repair or replace it at no cost, or issue a refund if neither is feasible.
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                      <p className="text-yellow-800 text-sm">
                        <strong>Important:</strong> This warranty does not cover damage from misuse, accidents, or unauthorized repairs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Studio Services - Cancellation Policy</h3>
                    <div className="space-y-3 text-gray-600">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>You can cancel or reschedule a studio booking up to 48 hours before the scheduled session to receive a full refund or credit toward a future booking.</span>
                      </div>
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>If you cancel less than 48 hours before the session or do not show up, no refund will be issued.</span>
                      </div>
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Once a session has been completed, all charges are final.</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>If DETZ Global needs to cancel or significantly reschedule a session, you will be offered the choice of a full refund or rescheduling at no additional cost.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 mb-4">
                    For any questions or concerns about returns and refunds, please reach out to our customer support at info@detzglobal.com. For faster assistance, please include "Refund Inquiry" in your email subject line. We are here to assist you with any issues related to returns, refunds, or our policies.
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

export default RefundPolicy;