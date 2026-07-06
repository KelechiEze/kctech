import { motion } from "motion/react";
import { 
  Scale, 
  FileText, 
  Users, 
  Shield, 
  AlertCircle, 
  Mail, 
  Smartphone,
  ArrowLeft,
  Clock,
  CreditCard,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsAndConditions() {
  return (
    <section className="min-h-screen bg-dark text-white py-32 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-brand transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-[2px] w-6 bg-brand" />
            <span className="text-sm font-bold text-brand uppercase tracking-widest">Legal</span>
            <div className="h-[2px] w-6 bg-brand" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Agreement to Terms */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <Scale className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">1. Agreement to Terms</h2>
                <p className="text-white/70 leading-relaxed">
                  By accessing or using our website services, you agree to be bound by these Terms & Conditions. 
                  If you disagree with any part of these terms, you may not access our services. These Terms & 
                  Conditions apply to all visitors, users, and others who wish to access or use our services.
                </p>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">2. Intellectual Property Rights</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  All content, features, and functionality on our website, including but not limited to text, 
                  graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive 
                  property of our company and are protected by international copyright laws.
                </p>
                <ul className="space-y-2 text-white/70 ml-6 list-disc">
                  <li>All code and design elements are original works</li>
                  <li>Unauthorized use of our intellectual property is strictly prohibited</li>
                  <li>You may not reproduce, distribute, or create derivative works without permission</li>
                </ul>
              </div>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <Users className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">3. User Responsibilities</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="space-y-2 text-white/70 ml-6 list-disc">
                  <li>Provide accurate and complete information when using our services</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Use our services only for lawful purposes and in compliance with these terms</li>
                  <li>Not interfere with or disrupt the integrity of our services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <CreditCard className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">4. Payment Terms</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  For our web development services:
                </p>
                <ul className="space-y-2 text-white/70 ml-6 list-disc">
                  <li>50% deposit required to commence work on any project</li>
                  <li>Remaining 50% due upon project completion and before final delivery</li>
                  <li>All prices are quoted in USD and are subject to applicable taxes</li>
                  <li>Refunds are handled on a case-by-case basis as outlined in our project agreement</li>
                  <li>Late payments may result in project delays or service suspension</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertCircle className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">5. Limitation of Liability</h2>
                <p className="text-white/70 leading-relaxed">
                  To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages resulting from your use of or inability to use 
                  our services. Our total liability for any claim arising from these terms shall not exceed 
                  the amount you paid us for the specific service giving rise to the claim.
                </p>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <Briefcase className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">6. Termination</h2>
                <p className="text-white/70 leading-relaxed">
                  We may terminate or suspend your access to our services immediately, without prior notice or 
                  liability, for any reason whatsoever, including without limitation if you breach these Terms & 
                  Conditions. Upon termination, your right to use our services will cease immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Governing Law */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">7. Governing Law</h2>
                <p className="text-white/70 leading-relaxed">
                  These Terms shall be governed and construed in accordance with the laws of Nigeria, without 
                  regard to its conflict of law provisions. Any legal action arising from these terms shall be 
                  brought exclusively in the courts located in Lagos, Nigeria.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-brand/10 border border-brand/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <Mail className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">8. Contact Us</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  If you have any questions about these Terms & Conditions, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-white/70 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email: support@bizzjump.com
                  </p>
                  <p className="text-white/70 flex items-center gap-2">
                    <Smartphone className="w-4 h-4" /> Phone: +234 916 679 8290
                  </p>
                  <p className="text-white/70 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Hours: Mon-Fri, 8:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}