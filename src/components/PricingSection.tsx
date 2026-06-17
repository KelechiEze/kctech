import { motion } from "motion/react";
import { Check } from "lucide-react";
import Button from "./Button";

const plans = [
  {
    name: "Basic",
    price: "800",
    period: "/Project",
    description: "Perfect for small businesses ready to establish a professional online presence that attracts customers. Get your business online with a fast, modern website.",
    features: [
      "1 Page Website",
      "SEO Optimization to Get Found",
      "High-Converting Top-Tier Design",
      "1 Year Hosting & Domain Name Purchase",
      "Mobile Responsive Design"
    ],
    isPopular: false
  },
  {
    name: "Standard",
    price: "1,500",
    period: "/Project",
    description: "Our most popular plan for growing businesses that need a comprehensive digital solution to attract more customers and scale their online presence.",
    features: [
      "3 Page Website",
      "Custom Integrations & Advanced Features",
      "Advanced SEO Optimization",
      "Content Management System (CMS)",
      "3 Year Hosting & Domain Name Purchase",
      "Social Media Integration",
      "Contact Forms & Lead Capture"
    ],
    isPopular: true
  },
  {
    name: "Premium",
    price: "2,500",
    period: "/Project",
    description: "For established businesses ready for full-scale digital transformation. Includes e-commerce capabilities and priority support to maximize customer growth.",
    features: [
      "5+ Page Website",
      "Full E-commerce Website",
      "Advanced SEO Optimization",
      "Custom Integrations & Features",
      "Content Management System (CMS)",
      "3+ Year Hosting & Domain Name Purchase",
      "Social Media Integration",
      "Priority Support & Maintenance",
      "Performance Analytics Setup"
    ],
    isPopular: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Background patterns consistent with the theme */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px)`,
            backgroundSize: '8vw 100%'
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-[2px] w-6 bg-brand" />
            <span className="text-sm font-bold text-brand uppercase tracking-widest">Investment Plans</span>
            <div className="h-[2px] w-6 bg-brand" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold">Choose the plan that <br /> brings you more customers</h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-4">
            Fast, modern websites designed specifically for small businesses all around the world.
            Start attracting more customers today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border border-white/10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative flex flex-col p-10 border-white/10 hover:bg-white/[0.02] transition-colors ${
                index !== plans.length - 1 ? "lg:border-r border-b lg:border-b-0" : ""
              } ${plan.isPopular ? "bg-white/[0.03]" : ""}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-brand text-dark text-[10px] font-bold uppercase py-1 px-4 tracking-tighter">
                  Best for growth
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-white/40 text-sm font-medium">{plan.period}</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed min-h-[80px]">
                  {plan.description}
                </p>
              </div>

              <div className="mb-10">
                <a href="#contact" className="block w-full">
                  <Button 
                    variant={plan.isPopular ? "primary" : "outline"} 
                    className="w-full py-4 text-xs font-bold uppercase tracking-widest rounded-none shadow-none"
                  >
                    Book Free Consultation
                  </Button>
                </a>
              </div>

              <div className="space-y-4 mt-auto">
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-[2px] mb-6">What's Included</p>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-brand shrink-0" />
                      <span className="text-sm text-white/80 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom scroll suggestion or similar footer element */}
        <div className="mt-16 text-center">
          <p className="text-xs text-white/30 uppercase tracking-[3px]">
            All plans include fast performance, reliable hosting & ongoing support
          </p>
        </div>
      </div>
    </section>
  );
}