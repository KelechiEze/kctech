import { motion } from "motion/react";
import { Mail, Phone, Instagram, Facebook, Dribbble, Linkedin, Shield, FileText } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20">
          <Logo />
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm font-bold uppercase tracking-widest text-white/40 mr-4">Follow Us On Social:</span>

                  <a 
              href="https://www.linkedin.com/company/bizzjump-agency" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-3 hover:bg-brand transition-all group focus:outline-none"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">Linkedin</span>
            </a> 
             
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/bizzju.mp?igsh=b21jNDMyNzQ3dmhy&utm_source=qr" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-3 hover:bg-brand transition-all group focus:outline-none"
            >
              <Instagram className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">Instagram</span>
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@bizzjump?_r=1&_t=ZS-96iCPCsBf6r" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-3 hover:bg-brand transition-all group focus:outline-none"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.87-4.3 2.93 2.93 0 0 1 .68.09V9.66a6.33 6.33 0 0 0-1-.09A6.34 6.34 0 0 0 5.5 16a6.34 6.34 0 0 0 8.5 5.92 6.34 6.34 0 0 0 3.67-5.63V10.9a8.62 8.62 0 0 0 4.5 1.24V8.84a5.67 5.67 0 0 1-2.58-2.15z"/>
              </svg>
              <span className="text-xs font-bold uppercase">TikTok</span>
            </a>

            {/* Pinterest */}
            <a 
              href="https://pin.it/77HvKUGOB" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-3 hover:bg-brand transition-all group focus:outline-none"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.017 2C6.66 2 3.5 6.013 3.5 9.881c0 2.813 1.386 4.906 3.439 5.826.136.058.271.01.311-.136l.287-1.138c.097-.361.058-.466-.2-.746-.679-.799-.99-1.528-.99-2.799 0-3.29 2.502-6.488 6.77-6.488 3.674 0 5.637 2.221 5.637 5.157 0 3.198-1.361 5.886-3.401 5.886-.405 0-.78-.176-1.031-.476-.292-.36-.363-.831-.24-1.389l.35-1.427c.189-.75.358-1.521.358-2.039 0-1.311-.78-2.181-1.991-2.181-1.571 0-2.444 1.112-2.444 2.535 0 1.44.593 2.413.593 2.413s-.526 2.188-.79 2.948c-.147.545-.19 1.125-.061 1.623-.818.572-1.959.894-3.107.894-4.218 0-6.94-3.444-6.94-7.804 0-5.248 4.184-9.973 11.3-9.973 5.983 0 10.255 4.224 10.255 9.853 0 6.249-3.545 10.102-8.693 10.102-1.774 0-3.304-.845-3.847-1.95-.168.671-.384 1.317-.593 1.908-.206.587-.404 1.16-.596 1.715-.148.424-.302.848-.46 1.273.643.192 1.312.301 2.004.301 6.299 0 11.5-5.199 11.5-11.5C23.5 7.798 18.5 2 12.017 2z"/>
              </svg>
              <span className="text-xs font-bold uppercase">Pinterest</span>
            </a>

            {/* LinkedIn - Commented out */}

            {/* Facebook - Commented out */}
            {/* <a 
              href="#" 
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-3 hover:bg-brand transition-all group focus:outline-none"
            >
              <Facebook className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">Facebook</span>
            </a> */}

            {/* Dribbble - Commented out */}
            {/* <a 
              href="#" 
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-3 hover:bg-brand transition-all group focus:outline-none"
            >
              <Dribbble className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">Dribbble</span>
            </a> */}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-t border-white/5 pt-20">
          {/* About Column */}
          <div className="space-y-8">
            <p className="text-lg text-white/60 leading-relaxed font-light">
              We are professional web developers dedicated to helping you launch and grow your business on the internet.
            </p>
            <div className="space-y-4">
              <a 
                href="mailto:support@bizzjump.com" 
                className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-xl px-4 py-3 hover:border-brand/40 transition-all"
              >
                <Mail className="w-5 h-5 text-brand" />
                <span className="text-sm">support@bizzjump.com</span>
              </a>
              {/* Phone Number Added */}
              <a 
                href="tel:+13858859701" 
                className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-xl px-4 py-3 hover:border-brand/40 transition-all"
              >
                <Phone className="w-5 h-5 text-brand" />
                <span className="text-sm">+1 (385) 885-9701</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Our Services', href: '#services' },
                { name: 'Our Portfolio', href: '#work' },
                { name: 'Contact Me', href: '#contact' }
              ].map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-brand transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold">Services</h4>
            <ul className="space-y-4">
              {[
                'Global Web Launch',
                'Internet Visibility',
                'Digital Maintenance',
                'Business Transition',
                'Web Support'
              ].map(service => (
                <li key={service}>
                  <a href="#services" className="text-white/60 hover:text-brand transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand rounded-full" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold">Working Hours</h4>
            <ul className="space-y-6">
              <li className="space-y-1">
                <p className="text-sm font-bold text-white/80">Monday - Friday</p>
                <p className="text-sm text-white/40">8:00 AM - 09:00 PM</p>
              </li>
              <li className="space-y-1">
                <p className="text-sm font-bold text-white/80">Saturday</p>
                <p className="text-sm text-white/40">8:00 AM - 07:00 PM</p>
              </li>
              <li className="space-y-1">
                <p className="text-sm font-bold text-white/80">Sunday</p>
                <p className="text-sm text-white/40">Closed</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Legal Links */}
        <div className="pt-12 border-t border-white/5 text-center px-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
            <Link 
              to="/terms" 
              className="text-sm text-white/40 hover:text-brand transition-colors flex items-center gap-2"
            >
              <Shield className="w-3 h-3" />
              Terms & Conditions
            </Link>
            <span className="hidden sm:inline text-white/20 text-xs">•</span>
            <Link 
              to="/privacy" 
              className="text-sm text-white/40 hover:text-brand transition-colors flex items-center gap-2"
            >
              <FileText className="w-3 h-3" />
              Privacy Policy
            </Link>
          </div>
          <p className="text-sm text-white/40 font-medium">
            Copyright © {currentYear} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}