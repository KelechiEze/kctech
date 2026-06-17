import { motion } from "motion/react";
import { Settings, Quote, Star } from "lucide-react";
import Button from "./Button";

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-zinc-50 text-dark overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-[2px] w-6 bg-brand" />
                <span className="text-sm font-bold text-brand uppercase tracking-widest">Why Work With Us</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
                Your online identity, crafted with care
              </h2>
            </div>

            {/* Quote Block */}
            <div className="relative bg-white p-10 rounded-3xl shadow-xl shadow-zinc-200 border-l-[3px] border-brand">
               <Quote className="absolute top-6 right-6 w-16 h-16 text-zinc-100 -z-0" />
               <p className="relative z-10 text-xl font-medium leading-relaxed italic">
                 "We don't just put your business on the internet; We give it a digital soul that connects with your customers."
               </p>
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand" />
               </div>
            </div>

            {/* Feature and Progress */}
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-brand flex items-center justify-center shrink-0 shadow-lg shadow-brand/20">
                  <Settings className="w-7 h-7 text-white" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold">Web Development Mastery</h4>
                  <p className="text-dark/60">
                    As professional web developers, We bring the latest technologies to ensure your website is fast, secure, and ready for the modern web.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="font-bold">Business-to-Web Transition</span>
                  <span className="text-sm font-bold">100%</span>
                </div>
                <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-brand"
                  />
                </div>
              </div>
            </div>

            <Button variant="primary" className="px-10 py-4 shadow-xl shadow-brand/10">
              Learn More
            </Button>
          </div>

          {/* Right Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
               <motion.div
                 initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.8 }}
                 className="relative z-10 pt-20"
               >
                 <img
                   src="https://kelechieze.wordpress.com/wp-content/uploads/2026/04/yitu2.jpg"
                   alt="Workplace 1"
                   className="rounded-3xl shadow-2xl object-cover w-full aspect-[4/5]"
                 />
               </motion.div>
               <motion.div
                 initial={{ y: -50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.8 }}
                 className="relative z-0"
               >
                 <img
                   src="https://kelechieze.wordpress.com/wp-content/uploads/2026/04/yitu.jpg"
                   alt="Workplace 2"
                   className="rounded-3xl shadow-2xl object-cover w-full aspect-[4/5]"
                 />
               </motion.div>
            </div>

            {/* Reviews Overlay Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-zinc-100 min-w-[240px]"
            >
              <div className="flex items-center -space-x-3 mb-4">
                 {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                       <img src={`https://picsum.photos/seed/avatar${i}/100/100`} alt="Avatar" />
                    </div>
                 ))}
              </div>
              <div className="flex gap-1 mb-2">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand fill-brand" />
                 ))}
              </div>
              <p className="text-xl font-bold">100+ Reviews</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
