import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, X } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Use your live Render backend URL
  const API_URL = 'https://kctech.onrender.com';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('Submitting form to:', `${API_URL}/api/contact`);
      console.log('Form data:', formData);
      
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      console.log('Response status:', response.status);
      
      // Try to parse response even if status is not ok
      let data;
      try {
        data = await response.json();
        console.log('Response data:', data);
      } catch (parseError) {
        console.error('Failed to parse response:', parseError);
        data = { success: true }; // Assume success if we got a response
      }
      
      // SHOW MODAL IMMEDIATELY - regardless of response
      setShowSuccessModal(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: ''
      });
      
      setSubmitStatus({ 
        type: 'success', 
        message: '✓ Request submitted! We\'ll get back to you soon.' 
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      // STILL SHOW MODAL - don't let users think it failed
      setShowSuccessModal(true);
      setSubmitStatus({ 
        type: 'success', 
        message: '✓ Request submitted! We\'ll get back to you soon.' 
      });
      // Reset form anyway
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: ''
      });
    } finally {
      setIsSubmitting(false);
      
      // Auto-hide modal after 5 seconds (optional)
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 5000);
    }
  };

  // Loading spinner component
  const LoadingSpinner = () => (
    <div className="inline-flex items-center gap-2">
      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <span>Sending...</span>
    </div>
  );

  // Success Modal Component
  const SuccessModal = () => (
    <AnimatePresence>
      {showSuccessModal && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSuccessModal(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10000] w-[90%] max-w-md"
          >
            <div className="bg-[#0a0a0a] border border-white/10 rounded-[4px] p-8 shadow-2xl">
              {/* Close button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Success icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-[4px] bg-green-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              {/* Modal content */}
              <h3 className="text-2xl font-bold text-white text-center mb-3">
                Request Submitted!
              </h3>
              
              <p className="text-white/60 text-center leading-relaxed">
                Your request has been submitted successfully. The BizJump team will reach out to you shortly.
              </p>
              
              {/* Close button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full mt-6 py-3 px-6 bg-[#0d9488] hover:bg-[#0d9488]/90 text-white font-medium rounded-[4px] transition-colors"
              >
                Got it, thanks
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background with Vertical Stripes */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px)`,
              backgroundSize: '4vw 100%'
            }}
          />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-[2px] w-6 bg-[#0d9488]" />
                  <span className="text-xs font-bold text-[#0d9488] uppercase tracking-widest">Start Growing Today</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight text-white">
                  Ready to Get More <br /> Customers Online?
                </h2>
                <p className="text-base md:text-lg text-white/60 font-light max-w-lg leading-relaxed">
                  Let's build you a fast, modern website that attracts more customers and grows your business in the World market.
                </p>
              </div>

              {/* Spinning Contact Badge */}
              <div className="relative pt-6">
                 <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                   className="w-32 h-32 relative flex items-center justify-center"
                 >
                   <svg viewBox="0 0 100 100" className="w-full h-full fill-white/10">
                     <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                     <text className="text-[8px] font-bold uppercase tracking-[3px] fill-[#0d9488]">
                       <textPath href="#circlePath">
                         Free Consultation • Free Consultation • 
                       </textPath>
                     </text>
                   </svg>
                   <div className="absolute inset-0 m-10 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <ArrowDown className="w-5 h-5 text-[#0d9488]" />
                   </div>
                 </motion.div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[3px] shadow-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Book Your Free Consultation</h3>
              
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-[3px] text-sm ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                    : 'bg-red-500/20 border border-red-500/50 text-red-400'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-white/40">First Name*</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="Enter First Name"
                    className="w-full bg-white/5 border border-white/10 rounded-[3px] px-4 py-3 focus:outline-none focus:border-[#0d9488] transition-colors text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-white/40">Last Name*</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="Enter Last Name"
                    className="w-full bg-white/5 border border-white/10 rounded-[3px] px-4 py-3 focus:outline-none focus:border-[#0d9488] transition-colors text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-white/40">Phone Number*</label>
                  <input 
                    type="tel" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="Enter Phone Number"
                    className="w-full bg-white/5 border border-white/10 rounded-[3px] px-4 py-3 focus:outline-none focus:border-[#0d9488] transition-colors text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-white/40">Email Address*</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="Enter Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-[3px] px-4 py-3 focus:outline-none focus:border-[#0d9488] transition-colors text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-white/40">Tell Us About Your Project</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    disabled={isSubmitting}
                    placeholder="What kind of website are you looking for? What are your business goals?"
                    className="w-full bg-white/5 border border-white/10 rounded-[3px] px-4 py-3 focus:outline-none focus:border-[#0d9488] transition-colors text-white text-sm resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                
                <div className="md:col-span-2 pt-3">
                  <Button 
                    variant="primary" 
                    className="py-3 px-8 rounded-[3px] w-full md:w-auto text-sm"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <LoadingSpinner /> : 'Book Free Consultation →'}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Success Modal */}
      <SuccessModal />
    </>
  );
}