import { motion } from "motion/react";
import { CheckCircle2, Star, ArrowUpRight } from "lucide-react";
import Button from "./Button";

export default function AboutSection() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-12 md:py-24 bg-white text-dark overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl overflow-visible">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center overflow-visible">
          {/* Left: Image Side */}
          <div className="relative overflow-visible">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5]"
            >
              <img
                src="https://kelechieze.wordpress.com/wp-content/uploads/2026/04/hui.jpg"
                alt="Expert Web Developer"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Floating Badge - Fully Responsive */}
            <motion.div
              initial={{ scale: 0, opacity: 0, x: -20, y: 20 }}
              whileInView={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 left-3 sm:-bottom-6 sm:left-4 md:-bottom-8 md:left-8 bg-brand p-4 sm:p-5 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl max-w-[150px] sm:max-w-[180px] md:max-w-[220px] z-20"
              style={{ boxShadow: '0 20px 35px -10px rgba(0,0,0,0.3)' }}
            >
              <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0.5 sm:mb-1 md:mb-2">70+</span>
              <p className="text-white/90 text-[10px] sm:text-xs md:text-sm font-semibold leading-tight uppercase tracking-wider">
                Successful Client Launches
              </p>
            </motion.div>

            {/* Decorative Element - Hidden on mobile, visible on larger screens */}
            <div className="hidden md:block absolute -top-10 -right-10 w-40 h-40 bg-brand/5 rounded-full blur-3xl" />
          </div>

          {/* Right: Content Side */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-[2px] w-6 bg-brand" />
                <span className="text-xs sm:text-sm font-bold text-brand uppercase tracking-widest">About Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                We build websites that bring you more customers
              </h2>
              <p className="text-base sm:text-lg text-dark/60 leading-relaxed font-light">
                We specialize in helping small businesses all around the world grow online with fast, modern websites. 
                We don't just build websites, we build digital gateways that attract customers and drive real business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand flex items-center justify-center">
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white fill-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base mb-0.5 sm:mb-1">Customer-First Design</h4>
                  <p className="text-xs sm:text-sm text-dark/60">Every website is built to convert visitors into paying customers.</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand flex items-center justify-center">
                     <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base mb-0.5 sm:mb-1">Fast & Reliable</h4>
                  <p className="text-xs sm:text-sm text-dark/60">Lightning-fast websites that keep your customers engaged and coming back.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 border-t border-dark/10 space-y-6">
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-x-8 sm:gap-y-4">
                {[
                  "Free consultation to discuss your goals",
                  "Launch-ready customer-focused websites",
                  "Ongoing support and maintenance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand shrink-0" />
                    <span className="font-semibold text-xs sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8">
                <Button 
                  variant="primary" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-center justify-center"
                  onClick={handleContactClick}
                >
                  Book Free Consultation
                </Button>
                
                {/* Rating Card */}
                <div className="flex items-center justify-center sm:justify-start gap-4 bg-zinc-50 p-3 sm:p-4 rounded-2xl border border-dark/5">
                  <div className="flex gap-0.5 sm:gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand fill-brand" />
                    ))}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold">4.9</span>
                    <span className="text-dark/40 text-xs sm:text-sm font-semibold">/5.0</span>
                  </div>
                  <p className="text-[10px] sm:text-xs font-bold text-dark/60 uppercase">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}