import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Gymaths",
    category: "E-Commerce/Shopify",
    image: "/gymaths.png", // REPLACE with actual image URL
    url: "https://gymaths.com/", // REPLACE with your Gymaths website URL
    description: "An e-commerce platform for gym enthusiasts. Users can discover and purchase high-quality gym outfits and wear, designed for performance and style."
  },
  {
    title: "ThryveAcademy",
    category: "E-Commerce",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/04/dretf2.png",
    url: "https://thryveacademy.co/",
    description: "An E-commerce platform designed to host and scale online learning. It provides a seamless interface for course discovery, enrollment, and digital content delivery, helping the academy establish a strong educational footprint."
  },
  {
    title: "Apmen pharmaceuticals",
    category: "UI/UX Design",
    image: "https://kelechieze.wordpress.com/wp-content/uploads/2026/04/dretf1.png",
    url: "https://apmen.online/",
    description: "A professional UI/UX design that establishes a strong digital footprint for a pharmaceutical brand. The interface prioritizes clarity, accessibility, and trust, ensuring a global audience can easily find essential information."
  },
  {
    title: "Greydient",
    category: "Web Application",
    image: "/greydient.png", // REPLACE with actual image URL
    url: "https://greydient.co/", // REPLACE with your Greydient website URL
    description: "Helping digital learners move from learning to earning through structured remote internships, mentorship, and career transition support."
  }
];

export default function PortfolioSection() {
  return (
    <section id="work" className="py-24 bg-white text-dark overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative block rounded-xl overflow-hidden aspect-video bg-zinc-100 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay - Always visible with semi-transparent background */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-dark/20 p-6 flex flex-col justify-between">
                {/* Top section */}
                <div className="flex justify-end">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-brand" />
                  </div>
                </div>
                
                {/* Bottom section */}
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
        </div>
      </div>
    </section>
  );
}