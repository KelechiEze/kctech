import { motion } from "motion/react";
import Button from "./Button";
import { useState, useEffect, useRef } from "react";
import { Instagram } from "lucide-react";

export default function Hero() {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          // Set video properties for background playback
          videoRef.current.loop = true;
          videoRef.current.muted = true;
          videoRef.current.playsInline = true;
          
          await videoRef.current.play();
          console.log("Video playing successfully and looping");
        }
      } catch (error) {
        console.log("Video autoplay failed:", error);
        setVideoError(true);
        
        // Try on user interaction for mobile
        const handleInteraction = () => {
          if (videoRef.current) {
            videoRef.current.loop = true;
            videoRef.current.play().catch(e => console.log("Still can't play:", e));
          }
          document.removeEventListener('click', handleInteraction);
          document.removeEventListener('touchstart', handleInteraction);
        };
        
        document.addEventListener('click', handleInteraction);
        document.addEventListener('touchstart', handleInteraction);
      }
    };

    setTimeout(playVideo, 100);
  }, []);

  // Force restart if video ends for any reason
  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log("Loop restart failed:", e));
    }
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/bizzju.mp?igsh=b21jNDMyNzQ3dmhy&utm_source=qr', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-start pt-20 overflow-hidden pb-10">
      {/* Background Video - From Public Folder */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: videoError ? 0 : 0.4 }}
          onError={() => setVideoError(true)}
          onEnded={handleVideoEnded}
          onLoadedData={() => {
            console.log("Video loaded successfully");
            if (videoRef.current) {
              videoRef.current.loop = true;
            }
          }}
        >
          {/* Local video file from public folder */}
          <source 
            src="/huki.mp4" 
            type="video/mp4" 
          />
          {/* Fallback if you have WebM version */}
          <source 
            src="/huki.webm" 
            type="video/webm" 
          />
        </video>
        
        {/* Fallback animated gradient if video fails */}
        {videoError && (
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/90 to-brand/20 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-brand/20 via-transparent to-brand/20 animate-shimmer" />
          </div>
        )}
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
        
        {/* Soft Glows */}
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 px-4 sm:px-6 max-w-5xl text-left ml-0 sm:ml-6 lg:ml-20"
      >
        {/* Tagline */}
        <motion.div variants={itemVariants} className="flex items-center justify-start gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="h-[1px] w-4 sm:w-6 bg-brand/50" />
          <div className="flex flex-col gap-1">
             <div className="h-[2px] w-3 sm:w-5 bg-brand" />
             <div className="h-[2px] w-2 sm:w-3 bg-brand" />
          </div>
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-white/80">
            Trusted Web Developer For Your Online Presence
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.2] sm:leading-[1.1] mb-4 sm:mb-6 tracking-tight"
        >
          We Build Websites That Bring You <br className="hidden sm:block" />
          <span className="text-white">More Customers</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl mb-6 sm:mb-8 leading-relaxed font-light pr-4 sm:pr-0"
        >
          Helping small businesses all over the world grow online with fast modern websites.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-start"
        >
          {/* Book Free Consultation Button */}
          <motion.a 
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -2, 2, -2, 2, 0],
            }}
            transition={{
              scale: { type: "spring", stiffness: 400, damping: 10 },
              rotate: { duration: 0.4, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.95 }}
            className="block sm:w-auto"
          >
            <Button variant="primary" className="w-full sm:w-auto py-2.5 px-5 text-sm rounded-lg shadow-xl shadow-brand/20">
              Book Free Consultation
            </Button>
          </motion.a>

          {/* Instagram Button */}
          <motion.button
            onClick={handleInstagramClick}
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -2, 2, -2, 2, 0],
            }}
            transition={{
              scale: { type: "spring", stiffness: 400, damping: 10 },
              rotate: { duration: 0.4, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-sm"
          >
            <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            <span>Follow on Instagram</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Decorative vertical lines - hidden on mobile for performance */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-[30vh] pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-around opacity-10"
        >
          {[...Array(20)].map((_, i) => (
             <div key={i} className="w-[1px] h-full bg-gradient-to-t from-white to-transparent" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}