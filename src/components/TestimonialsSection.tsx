import { motion } from "motion/react";
import { Star } from "lucide-react";
import Button from "./Button";

const testimonials = [
  {
    name: "Marcus Goulda",
    role: "Founder, Velocity Commerce",
    text: "The team built us a website that actually brings in customers. Our online inquiries have doubled since launch and the site runs incredibly fast.",
    rating: 5,
    image: "/frit3.jpg"
  },
  {
    name: "David Okafor",
    role: "CEO, Crest Analytics",
    text: "Working with BizzJump transformed our digital presence. They understood our vision and delivered a stunning website that our clients love.",
    rating: 5,
    image: "/frit4.jpg"
  },
  {
    name: "Sarah Mitchell",
    role: "Director, Nexus Technologies",
    text: "The level of professionalism and technical expertise is unmatched. Our conversion rates have improved significantly since the redesign.",
    rating: 5,
    image: "/frit5.jpg"
  },
  {
    name: "Jessica Williams",
    role: "CMO, Elevate Brands",
    text: "BizzJump delivered beyond our expectations. Their communication throughout the project was top-notch and the results speak for themselves.",
    rating: 5,
    image: "/frit6.jpg"
  },
  {
    name: "Thomas Bennett",
    role: "Founder, Summit Retail Group",
    text: "Their technical depth in developing custom web applications is impressive. They don't just build websites; they solve business problems.",
    rating: 5,
    image: "/frit8.avif"
  },
  {
    name: "Rachel Adeyemi",
    role: "Product Lead, Stride Logistics",
    text: "A truly talented team that cares about the details. The smooth performance of our new site has impressed both our team and our customers.",
    rating: 5,
    image: "/frit9.avif"
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-6 bg-brand" />
              <span className="text-sm font-bold text-brand uppercase tracking-widest">Our Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight text-dark">
              Testimonials from our internet <br /> launch partners
            </h2>
          </div>
          <div className="space-y-6 md:text-right">
            <p className="text-dark/60 max-w-md md:ml-auto">
              Read how we've helped entrepreneurs and businesses establish their official place on the internet through professional development.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel overflow-hidden">
          <div 
            className="flex gap-8 animate-infinite-scroll group-hover/carousel:[animation-play-state:paused]" 
            style={{ width: "max-content" }}
          >
            {/* Array duplicated to ensure seamless infinite effect */}
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-3xl shadow-xl shadow-zinc-200 border border-zinc-100 relative group min-w-[320px] md:min-w-[450px] shrink-0"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand fill-brand" />
                  ))}
                </div>
                
                <p className="text-lg font-medium leading-relaxed mb-12 text-dark/80 italic max-w-[350px]">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4 pt-8 border-t border-zinc-100 mt-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h5 className="font-bold text-dark">{t.name}</h5>
                    <p className="text-zinc-400 text-xs">{t.role}</p>
                  </div>
                </div>

                {/* Decorative Quote Mark */}
                <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                    <path d="M11.4 0C5.1 0 0 5.1 0 11.4v18.6h18.6V11.4H6.2C6.2 8.5 8.5 6.2 11.4 6.2V0zm22.8 0c-6.3 0-11.4 5.1-11.4 11.4v18.6h18.6V11.4h-12.4c0-2.9 2.3-5.2 5.2-5.2V0z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}