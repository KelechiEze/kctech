import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, ArrowDown } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Work", href: "/#work" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link and we're on the home page, handle smooth scroll
    if (href.startsWith("/#") && location.pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    } else if (href.startsWith("/#") && location.pathname !== "/") {
      // If we're on a different page and clicking a hash link, navigate to home
      e.preventDefault();
      window.location.href = href;
    }
    // For regular links, let react-router handle it
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
      >
        <div className={`transition-all duration-300 rounded-2xl px-6 py-4 flex items-center justify-between border ${
          isScrolled 
            ? "bg-dark/90 backdrop-blur-xl border-white/20 shadow-2xl" 
            : "bg-white/5 backdrop-blur-md border-white/10"
        }`}>
          <Link to="/" className="scale-90 origin-left">
            <Logo className="scale-90 origin-left" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand ${
                  location.pathname === link.href || (link.href === "/" && location.pathname === "/") 
                    ? "text-brand" 
                    : "text-white"
                }`}
              >
                {link.name}
                {link.name === "Services" && <ChevronDown className="w-3 h-3" />}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/#contact" className="hidden sm:block">
              <Button variant="primary" className="py-2 px-5 text-sm">
                Contact Us
              </Button>
            </Link>
            
            <div className="lg:hidden relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute inset-x-0 inset-y-0 -m-1"
              >
                <svg viewBox="0 0 100 100" className="w-10 h-10 opacity-40">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="2" strokeDasharray="30 100" strokeLinecap="round" />
                </svg>
              </motion.div>
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="relative z-10 p-2 text-white hover:text-brand transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-dark flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <Logo />
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white hover:text-brand transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    to={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href);
                      setIsMenuOpen(false);
                    }}
                    className={`text-4xl font-display font-bold hover:text-brand transition-colors flex items-center justify-between group ${
                      location.pathname === link.href || (link.href === "/" && location.pathname === "/") 
                        ? "text-brand" 
                        : "text-white"
                    }`}
                  >
                    {link.name}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto flex justify-center pb-10">
               {/* Spinning Contact Badge in mobile menu */}
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                 className="w-32 h-32 relative flex items-center justify-center"
               >
                 <svg viewBox="0 0 100 100" className="w-full h-full">
                   <path id="mobileCirclePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                   <text className="text-[10px] font-bold uppercase tracking-[4px] fill-brand">
                     <textPath href="#mobileCirclePath">
                       Contact Us • Contact Us • Contact Us • 
                     </textPath>
                   </text>
                 </svg>
                 <div className="absolute inset-0 m-10 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <ArrowDown className="w-4 h-4 text-brand" />
                 </div>
               </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}