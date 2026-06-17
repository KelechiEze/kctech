import { motion } from "motion/react";
import { 
  Shield, 
  Database, 
  Eye, 
  Cookie, 
  Mail, 
  Lock, 
  Server, 
  Users, 
  ArrowLeft,
  FileText,
  Globe,
  Smartphone,
  AlertCircle,
  Code,
  Layout
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
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
            <span className="text-sm font-bold text-brand uppercase tracking-widest">Privacy</span>
            <div className="h-[2px] w-6 bg-brand" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Privacy Policy
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
          {/* Introduction */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  At BizzJump ("we," "our," or "us"), we are dedicated web developers specializing in taking 
                  your offline business and creating a world-class digital presence. This Privacy Policy explains 
                  how we collect, use, disclose, and safeguard your information when you visit our website or 
                  use our web development services.
                </p>
                <p className="text-white/70 leading-relaxed">
                  We don't just build websites; we build gateways to your success. Your privacy is important 
                  to us, and we are committed to protecting your personal data while helping you launch your 
                  business on the internet with precision and world-class digital solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <Database className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">2. Information We Collect</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  To provide you with tailored web development solutions, we collect several types of information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/30 p-4 rounded-xl">
                    <h3 className="font-bold text-brand mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Personal Data
                    </h3>
                    <ul className="text-white/70 text-sm space-y-1 list-disc ml-4">
                      <li>Name and contact information</li>
                      <li>Email address and phone number</li>
                      <li>Company/business details</li>
                      <li>Project requirements and preferences</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl">
                    <h3 className="font-bold text-brand mb-2 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Project Data
                    </h3>
                    <ul className="text-white/70 text-sm space-y-1 list-disc ml-4">
                      <li>Website specifications and content</li>
                      <li>Design preferences and assets</li>
                      <li>Hosting and domain information</li>
                      <li>Integration requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <Eye className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">3. How We Use Your Information</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We use your information to provide world-class web development services:
                </p>
                <ul className="space-y-2 text-white/70 ml-6 list-disc">
                  <li>To create tailored, high-performing websites for your business</li>
                  <li>To provide personalized web consultation and support</li>
                  <li>To ensure reliable integration and smooth digital transition</li>
                  <li>To communicate about your project progress and updates</li>
                  <li>To improve our services and develop better solutions</li>
                  <li>To provide launch-ready internet presence and post-launch support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cookies and Tracking */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <Cookie className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">4. Cookies and Tracking Technologies</h2>
                <p className="text-white/70 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  These help us understand how visitors interact with our services, analyze website performance, 
                  and improve our web development offerings. You can control cookie preferences through your 
                  browser settings.
                </p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <Lock className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">5. Data Security</h2>
                <p className="text-white/70 leading-relaxed">
                  The security of your business data is crucial to us. We implement industry-standard security 
                  measures to protect your information during website development and deployment. However, no 
                  method of transmission over the Internet is 100% secure, and we continuously update our 
                  security practices to safeguard your data.
                </p>
              </div>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <Server className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">6. Third-Party Services</h2>
                <p className="text-white/70 leading-relaxed">
                  To deliver comprehensive web solutions, we may partner with trusted third-party services for:
                </p>
                <ul className="space-y-2 text-white/70 ml-6 list-disc mt-4">
                  <li>Hosting and domain registration</li>
                  <li>Payment processing</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Content delivery networks (CDNs)</li>
                </ul>
                <p className="text-white/70 leading-relaxed mt-4">
                  These partners only access your data as needed and are obligated to maintain confidentiality.
                </p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <Users className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">7. Your Data Protection Rights</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  As our client, you have the following rights regarding your data:
                </p>
                <ul className="space-y-2 text-white/70 ml-6 list-disc">
                  <li>The right to access the personal information we hold about you</li>
                  <li>The right to correct inaccurate or incomplete information</li>
                  <li>The right to request deletion of your data (where applicable)</li>
                  <li>The right to object to processing of your personal data</li>
                  <li>The right to data portability for your project files</li>
                  <li>The right to withdraw consent for marketing communications</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Protect Your Projects */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <Layout className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">8. Our Commitment to Your Digital Success</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  At BizzJump, we are committed to:
                </p>
                <ul className="space-y-2 text-white/70 ml-6 list-disc">
                  <li>Delivering tailored development for your specific business needs</li>
                  <li>Ensuring reliable integration and smooth digital transition</li>
                  <li>Providing launch-ready internet presence for your business</li>
                  <li>Offering reliable post-launch support and maintenance</li>
                  <li>Maintaining transparency about how we use your data</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-brand/10 border border-brand/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <Mail className="w-8 h-8 text-brand shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3">9. Contact Us</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our web development services, please 
                  reach out to us:
                </p>
                <div className="space-y-2">
                  <p className="text-white/70 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email: support@bizzjump.com
                  </p>
                  <p className="text-white/70 flex items-center gap-2">
                    <Smartphone className="w-4 h-4" /> Phone: +234 916 679 8290
                  </p>
                  <p className="text-white/70 flex items-center gap-2">
                    <Globe className="w-4 h-4" /> Location: Lagos, Nigeria
                  </p>
                  <p className="text-white/70 flex items-center gap-2">
                    <Code className="w-4 h-4" /> Services: Global Web Launch, Internet Visibility, Digital Maintenance
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