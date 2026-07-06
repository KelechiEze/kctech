import { motion } from "motion/react";
import { Binoculars, Code2, Magnet, ArrowUpRight } from "lucide-react";
import Button from "./Button";

const services = [
  {
    icon: Code2,
    title: "Global Web Launch",
    desc: "We help you take your business from local to global by launching your official website on the internet.",
    stat: "100%",
    statLabel: "Successful Online Deployments",
  },
  {
    icon: Binoculars,
    title: "Internet Visibility",
    desc: "Strategic development focused on ensuring your business is easily found and ready for your target audience.",
    stat: "24/7",
    statLabel: "Availability For Your Customers",
    highlight: true,
  },
  {
    icon: Magnet,
    title: "Digital Maintenance",
    desc: "Continuous technical support to keep your business running smoothly on the web with zero downtime.",
    stat: "Elite",
    statLabel: "Standard of Web Development",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
        <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-6 bg-brand" />
              <span className="text-sm font-bold text-brand uppercase tracking-widest">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              We build your gateway to the internet
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-white/60 max-w-md">
              Combining individual developer expertise with advanced web technologies to put your business on the map.
            </p>
            <a href="#pricing">
              <Button variant="primary" className="px-8 py-3">View Services</Button>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`group bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:bg-white/[0.08] hover:border-brand/50 ${
                service.highlight ? "border-brand/30" : ""
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110">
                <service.icon className="w-7 h-7 text-brand" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <a href="#pricing" className="inline-flex items-center gap-2 text-sm font-bold group/link hover:text-brand transition-colors mb-12">
                Learn More
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>

              <div className="pt-8 border-t border-white/10">
                <div className="text-4xl font-bold mb-1 tracking-tight">{service.stat}</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-wider">{service.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4">
             <span className="bg-brand text-dark text-[10px] font-bold uppercase py-1 px-3 rounded-full">Free</span>
             <p className="text-sm font-medium">
               Smart, Scalable, and High-Performance Web Solutions — <a href="#pricing" className="text-brand underline underline-offset-4 cursor-pointer">Let's Build Together!</a>
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}