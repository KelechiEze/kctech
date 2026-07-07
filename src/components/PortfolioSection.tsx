import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "CIAS Models",
    category: "Model Agency Website",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/cias.png",
    url: "https://www.ciasmodels.com/",
    description: "A Model agency website"
  },
  {
    title: "ThryveAcademy",
    category: "E-Commerce",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/thryveacademy.png",
    url: "https://thryveacademy.co/",
    description: "An E-commerce platform designed to host and scale online learning."
  },
  {
    title: "Apmen pharmaceuticals",
    category: "UI/UX Design",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/04/dretf1.png",
    url: "https://apmen.online/",
    description: "A professional UI/UX design for a pharmaceutical brand."
  },
  {
    title: "Greydient",
    category: "Web Application",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/rad.png",
    url: "https://greydient.co/",
    description: "Helping digital learners move from learning to earning."
  },
  {
    title: "RAD",
    category: "Ecommerce App",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/rad.png",
    url: "https://rad.ng/",
    description: "A carbon footprint tracking app helping businesses reduce their environmental impact."
  },
  {
    title: "CADEMIE",
    category: "Educational Visa Platform",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/cademie.png",
    url: "https://cademie.org.uk/",
    description: "A telemedicine platform connecting patients with healthcare providers seamlessly."
  },
  {
    title: "Auxil",
    category: "SaaS Platform",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/auxil.png",
    url: "https://auxil.findar.site/",
    description: "A secure digital banking solution with AI-powered financial insights."
  },
  {
    title: "Klimbase",
    category: "Creative Marketplace",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/07/klimebase.png",
    url: "https://klimebase.findar.site/",
    description: "A curated marketplace connecting collectors with emerging digital artists."
  }
];

export default function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 4;
  const displayedProjects = showAll ? projects : projects.slice(0, initialCount);

  return (
    <section id="work" className="py-24 bg-white text-dark overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-6 bg-brand" />
              <span className="text-sm font-bold text-brand uppercase tracking-widest">Our Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Successful Web Launches
            </h2>
          </div>
          <p className="text-dark/60 max-w-md leading-relaxed">
            Examine how We've transitioned various businesses to the internet, helping them achieve a strong digital footprint and global accessibility.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.a
                key={`${project.title}-${index}`}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: Math.min(index * 0.1, 0.5), duration: 0.6 }}
                exit={{ opacity: 0, scale: 0.9 }}
                layout
                className="group relative block rounded-xl overflow-hidden aspect-video bg-zinc-100 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-dark/20 p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-brand" />
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-brand text-sm font-bold uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-2 text-white font-bold group/btn">
                      <span>View Project</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button - UPDATED: Shows brand green on hover */}
        {projects.length > initialCount && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-3 bg-dark text-white font-semibold rounded-full overflow-hidden transition-all duration-300 text-sm tracking-wide border-2 border-dark hover:border-brand hover:bg-brand"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative flex items-center gap-2">
                {showAll ? (
                  <>
                    Show Less
                    <motion.span
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </>
                ) : (
                  <>
                    Load More Projects
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}