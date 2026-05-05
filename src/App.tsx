import { motion, useScroll, useSpring } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Layers, 
  Cpu, 
  Globe, 
  MessageSquare,
  ChevronRight,
  Download,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-slate-950/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold text-white group"
        >
          ALEX<span className="text-amber-400 group-hover:text-amber-300 transition-colors">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm font-medium text-slate-400 hover:text-amber-400 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 bg-amber-400/10 border border-amber-400/20 text-amber-400 rounded-full text-sm font-semibold hover:bg-amber-400 hover:text-slate-950 transition-all"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-amber-400/10 text-amber-400 text-xs font-bold tracking-widest uppercase mb-6"
          >
            Available for new projects
          </motion.span>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Crafting Digital <br/>
            <span className="text-gradient">Experiences</span> With <br/>
            Precision.
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            Hi, I'm Alex Rivera. A Full-Stack Developer specializing in building high-performance web applications that bridge the gap between design and technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="btn-primary flex items-center gap-2">
              View Work <ChevronRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Talk
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={24} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Mail size={24} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-amber-400/5">
            <img 
              src="https://picsum.photos/seed/alex-rivera/800/1000" 
              alt="Alex Rivera" 
              className="w-full grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-amber-400/20 rounded-full" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 border-2 border-blue-500/10 rounded-full" />
          
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-12 glass-card p-4 flex items-center gap-4 border-amber-400/30"
          >
            <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-slate-950">
              <Code2 size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-tighter">Experience</p>
              <p className="text-lg font-bold">8+ Years</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-2">
               <img 
                src="https://picsum.photos/seed/workspace/800/800" 
                alt="Workspace" 
                className="w-full h-full object-cover rounded-2xl opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-card p-6 border-amber-400/20 max-w-[200px]">
              <p className="text-3xl font-bold text-amber-400 mb-1">50+</p>
              <p className="text-sm text-slate-400">Successful projects delivered across the globe.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              I am a passionate Full-Stack Developer with a deep-seated love for creating intuitive, dynamic, and powerful user experiences. With over 8 years in the industry, I have mastered the art of turning complex problems into simple, beautiful digital solutions.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              My approach combines technical excellence with a keen eye for design. I don't just write code; I architect systems that scale and design interfaces that delight. Whether it's a React-based frontend or a robust Node.js backend, I ensure every detail is polished.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-amber-400 font-bold text-xl mb-1">UI/UX Design</p>
                <p className="text-sm text-slate-500">Creating designs that are not only beautiful but also functional.</p>
              </div>
              <div>
                <p className="text-amber-400 font-bold text-xl mb-1">Clean Code</p>
                <p className="text-sm text-slate-500">Writing maintainable, scalable, and efficient codebases.</p>
              </div>
            </div>

            <button className="btn-secondary flex items-center gap-2">
              Download CV <Download size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Fintech Dashboard",
      category: "Web Application",
      image: "https://picsum.photos/seed/fintech/800/500",
      link: "#"
    },
    {
      title: "E-Commerce Reimagined",
      category: "Mobile App",
      image: "https://picsum.photos/seed/shop/800/500",
      link: "#"
    },
    {
      title: "AI Analysis Tool",
      category: "SaaS Product",
      image: "https://picsum.photos/seed/ai-tool/800/500",
      link: "#"
    },
    {
      title: "Real Estate Portal",
      category: "Real Estate",
      image: "https://picsum.photos/seed/house/800/500",
      link: "#"
    },
    {
      title: "Social Connect",
      category: "Social Media",
      image: "https://picsum.photos/seed/social/800/500",
      link: "#"
    },
    {
      title: "Cloud Manager",
      category: "Infrastructure",
      image: "https://picsum.photos/seed/cloud/800/500",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of my recent works across various industries, showcasing technical versatility and design precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl glass-card border-none"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">{project.category}</p>
                <div className="flex justify-between items-end">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <a href={project.link} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-amber-400 hover:text-slate-950 transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 98 },
        { name: "Framer Motion", level: 85 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js / Express", level: 88 },
        { name: "PostgreSQL / MongoDB", level: 85 },
        { name: "GraphQL", level: 80 },
        { name: "Python / Django", level: 75 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Docker / K8s", level: 78 },
        { name: "AWS / Google Cloud", level: 82 },
        { name: "CI/CD Pipelines", level: 85 },
        { name: "UI Design (Figma)", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold mb-6">Expertise & Skills</h2>
            <p className="text-slate-400 mb-8">
              I've spent years honing my skills across the stack. My toolkit is built for speed, performance, and scalability.
            </p>
            <div className="p-6 glass-card border-amber-400/20">
              <p className="text-sm font-medium italic text-slate-300">
                "Alex is a rare talent who deeply understands both the artistry of UI and the engineering of a robust backend."
              </p>
              <p className="mt-4 text-xs font-bold text-amber-400 uppercase tracking-widest">— Tech Lead @ Google</p>
            </div>
          </div>

          <div className="md:w-2/3 grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-xl font-bold text-amber-400">{category.title}</h3>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                      <span className="text-xs font-bold text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.3)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe size={28} />,
      title: "Web Development",
      description: "Custom websites built with modern frameworks for optimal speed and SEO performance."
    },
    {
      icon: <Layers size={28} />,
      title: "UI/UX Design",
      description: "Intuitive user interfaces and engaging experiences focused on conversions and user retention."
    },
    {
      icon: <Cpu size={28} />,
      title: "SaaS Architecture",
      description: "End-to-end development of software products, from database design to deployment."
    },
    {
      icon: <Palette size={28} />,
      title: "Brand Identity",
      description: "Helping brands find their voice through digital-first design systems and visual languages."
    },
    {
      icon: <MessageSquare size={28} />,
      title: "AI Integration",
      description: "Leveraging LLMs and machine learning to build smart features and automate workflows."
    },
    {
      icon: <Code2 size={28} />,
      title: "Consultancy",
      description: "Technical advice on tech stack selection, infrastructure scaling, and development best practices."
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What I Can Do For You</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Providing comprehensive solutions that empower businesses to scale and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 glass-card border-none hover:bg-slate-900/80 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-6">Let's Create <br/>Something <span className="text-amber-400">Great.</span></h2>
          <p className="text-slate-400 mb-10 text-lg">
            Whether you have a specific project in mind or just want to explore possibilities, I'm always open to talking about new ideas.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-amber-400">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email me</p>
                <p className="text-lg font-medium">hello@alexrivera.dev</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-amber-400">
                <Github size={22} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Follow me</p>
                <p className="text-lg font-medium">github.com/ariveradev</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Subject</label>
              <input 
                type="text" 
                placeholder="New Project Inquiry" 
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
              <textarea 
                rows={4} 
                placeholder="Tell me about your project..." 
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors resize-none"
              ></textarea>
            </div>
            <button className="btn-primary w-full py-4 uppercase tracking-widest text-sm">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">
          © 2026 Alex Rivera. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Privacy Policy</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Terms of Service</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="soft-gradient min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-amber-400 origin-left z-[60]" 
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
