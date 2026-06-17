import { motion, useScroll, useTransform, useInView } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ShoppingBag } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const shopifyWork = [
    {
    category: "STRATEGY",
    title: "Headless Shopify Solutions",
    time: "NEXT-GEN",
    desc: "For brands that need ultimate flexibility, we deploy Hydrogen and Oxygen to create decoupled, ultra-responsive shopping experiences.",
    img: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop"
  },
    {
    category: "E-COMMERCE",
    title: "Custom Theme Engineering",
    time: "2024 RELEASE",
    desc: "We build high-performance Liquid themes from scratch, optimized for the highest conversion rates and lightning-fast load times.",
    img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop"
  },
  {
    category: "INTEGRATION",
    title: "App & API Ecosystems",
    time: "SCALE READY",
    desc: "Seamlessly connecting your store with custom ERPs, advanced inventory management, and specialized marketing automation tools.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  ];

export const ShopifySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [hasStarted, setHasStarted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Ticker movement
  const tickerX = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const next = () => setActiveIndex((prev) => (prev + 1) % shopifyWork.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + shopifyWork.length) % shopifyWork.length);

  // Auto-slide logic
  useEffect(() => {
    if (!isInView) return;

    const initialDelay = hasStarted ? 6000 : 3000;
    
    const timeout = setTimeout(() => {
      next();
      setHasStarted(true);
    }, initialDelay);

    return () => clearTimeout(timeout);
  }, [activeIndex, isInView, hasStarted]);

  return (
    <section id="shopify" ref={sectionRef} className="py-24 bg-dark text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10 pointer-events-none">
         <div className="grid grid-cols-10 gap-2 w-full h-full p-4">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-brand rounded-full"></div>
            ))}
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShoppingBag className="w-4 h-4 text-brand" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase block">Premium Shopify Development</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              SHOPIFY <span className="text-brand">STORES</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button onClick={prev} className="w-14 h-14 rounded-none border border-white/10 flex items-center justify-center hover:bg-brand hover:text-black transition-all duration-300">
              <ArrowLeft size={24} />
            </button>
            <button onClick={next} className="w-14 h-14 rounded-none border border-white/10 flex items-center justify-center hover:bg-brand hover:text-black transition-all duration-300">
              <ArrowRight size={24} />
            </button>
          </div>
        </header>

        <div className="relative h-[700px] md:h-[450px] flex items-center gap-6">
          {shopifyWork.map((item, idx) => {
            const isVisible = idx === activeIndex || idx === (activeIndex + 1) % shopifyWork.length;
            const isMain = idx === activeIndex;
            
            return (
              <motion.div
                key={item.title}
                initial={false}
                animate={{
                  x: `${(idx - activeIndex) * 105}%`,
                  opacity: isVisible ? (isMain ? 1 : 0.2) : 0,
                  scale: isMain ? 1 : 0.9,
                  zIndex: isMain ? 20 : 10
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="absolute top-0 left-0 w-full md:w-[85%] lg:w-[75%] h-full flex-shrink-0"
              >
                <div className="bg-[#111] h-full rounded-none border border-white/5 overflow-hidden flex flex-col md:flex-row shadow-2xl">
                  <div className="flex-1 relative order-2 md:order-1 h-[400px] md:h-full group">
                    <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent md:hidden" />
                  </div>
                  <div className="w-full md:w-[40%] p-10 bg-white text-black flex flex-col justify-between order-1 md:order-2">
                    <div className="space-y-8">
                      <div className="bg-dark text-white w-14 h-14 rounded-none flex flex-col items-center justify-center">
                        <span className="text-[10px] font-black uppercase opacity-50 font-display">TYPE</span>
                        <span className="text-xs font-black leading-none">{item.category}</span>
                      </div>
                      <div className="space-y-4">
                        <span className="text-[10px] border border-black/10 px-3 py-1 rounded-none uppercase font-black tracking-widest">{item.time}</span>
                        <h4 className="text-3xl font-black uppercase leading-tight tracking-tighter">{item.title}</h4>
                        <p className="text-sm text-black/60 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <a 
                      href="#contact"
                      className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest hover:text-brand transition-colors text-left mt-8 group"
                    >
                      Book a Consultation 
                      <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-dark group-hover:text-white transition-all">
                        <ArrowUpRight size={14} />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-24 right-0 w-64 h-[1px] bg-gradient-to-l from-brand/50 to-transparent rotate-[-15deg] origin-right"></div>
      <div className="absolute bottom-16 right-0 w-80 h-[1px] bg-gradient-to-l from-brand/50 to-transparent rotate-[-15deg] origin-right"></div>

      {/* Scroll-reactive Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-dark py-6 border-t border-white/5 z-30">
        <motion.div 
          style={{ x: tickerX }}
          className="flex gap-20 whitespace-nowrap"
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex gap-20 text-[10px] font-black tracking-[0.4em] text-white/50 items-center uppercase">
              <span className="flex items-center gap-2 italic">Official Shopify Partner</span>
              <span className="flex items-center gap-2">Custom Liquid Engineering</span>
              <span className="flex items-center gap-2 text-brand">Conversion Optimized</span>
              <span className="flex items-center gap-2 italic">Scale Your Brand</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
