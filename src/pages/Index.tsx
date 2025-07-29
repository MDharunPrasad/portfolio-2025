
import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { CartoonSpring } from "@/components/CartoonSpring";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { GlassButton, GlassSkillCard, GlassFilter } from "@/components/ui/liquid-glass";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Balloons } from "@/components/ui/balloons";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Cloud, Globe, Smartphone, Palette, ArrowDown } from "lucide-react";
import { useRef } from "react";

const Index = () => {
  const balloonsRef = useRef<{ launchAnimation: () => void } | null>(null);

  const handleLaunchBalloons = () => {
    if (balloonsRef.current) {
      balloonsRef.current.launchAnimation();
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Glass Filter for liquid glass effects */}
      <GlassFilter />
      
      {/* Animated Grid Background - Full Page */}
      <div className="fixed inset-0 z-0">
        <AnimatedGridPattern
          numSquares={50}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className="fill-gray-400/20 stroke-gray-400/20"
        />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-16">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Dharunprasad M
                </motion.h1>
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
                    Software Engineer / Full Stack Developer
                  </h2>
                  <p className="text-lg text-gray-600 mt-2">
                    21 AGE, TAMILNADU, INDIA
                  </p>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right Side - Cartoon Spring */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center md:justify-end mr-16"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-20 scale-150"></div>
                <CartoonSpring />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-16">Skills & Technologies</h2>
              
              {/* Professional Bento Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {/* Programming - Large Card */}
                <div className="md:col-span-2 lg:col-span-3 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-blue-600" />
                    Programming
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Java", "HTML5", "CSS3", "JavaScript", "React.js", "SQL", "Express.js", "Kaboom.js"].map((skill, index) => (
                      <div
                        key={skill}
                        className="px-3 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-xl text-xs font-semibold border border-blue-200/50 text-center transition-all cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Designing - Medium Card */}
                <div className="md:col-span-2 lg:col-span-2 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Palette className="w-5 h-5 text-purple-600" />
                    Designing
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["Wireframes", "Canva", "Figma", "Prototyping", "UI/UX", "Logo Design", "Banner Design", "Graphic Design", "Thumbnail Designs"].map((tool, index) => (
                      <div
                        key={tool}
                        className="px-3 py-2 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 rounded-xl text-xs font-semibold border border-purple-200/50 text-center transition-all cursor-default"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools - Small Card */}
                <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Database className="w-4 h-4 text-green-600" />
                    Tools
                  </h3>
                  <div className="space-y-3">
                    {["Git", "GitHub", "Vibe Coding Tools"].map((tool, index) => (
                      <div
                        key={tool}
                        className="px-3 py-2 bg-gradient-to-r from-green-50 to-green-100 text-green-800 rounded-lg text-xs font-semibold border border-green-200/50 text-center transition-all cursor-default"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Beyond Coding - Medium Card */}
                <div className="md:col-span-2 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <Globe className="w-5 h-5 text-orange-600" />
                    Beyond Coding
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["Philosophy", "Psychology", "Editing", "Photo-Videography", "Content Creation", "Typing", "Passionate about Tech"].map((tool, index) => (
                      <div
                        key={tool}
                        className="px-3 py-2 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-800 rounded-xl text-xs font-semibold border border-orange-200/50 text-center transition-all cursor-default"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interpersonal Skills - Medium Card */}
                <div className="md:col-span-2 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-pink-600" />
                    Interpersonal Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Empathy", "Storytelling", "Communication", "Leadership & Management"].map((skill, index) => (
                      <div
                        key={skill}
                        className="px-3 py-2 bg-gradient-to-r from-pink-50 to-pink-100 text-pink-800 rounded-lg text-xs font-semibold border border-pink-200/50 text-center transition-all cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            </div>
            
            <div className="relative max-w-md mx-auto">
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Software Engineer / Full Stack Developer</h3>
                <p className="text-blue-600 font-medium mb-2">The GigLabs</p>
                <p className="text-gray-600 text-sm">Jul 2025 - Present · 1 mo</p>
              </div>
              
              {/* Roadmap Line */}
              <div className="flex justify-center my-4 relative">
                <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-blue-300"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Software Engineer Intern</h3>
                <p className="text-blue-600 font-medium mb-2">The GigLabs</p>
                <p className="text-gray-600 text-sm">Feb 2025 - May 2025 · 4 mos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A showcase of my latest work and creative solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Naruto Jump Game",
                  desc: "Interactive game with Kaboom.js",
                  tech: ["React.js", "Kaboom.js", "JavaScript"],
                  live: "https://vercel.com/dharunprasadms-projects/naruto-jump-game",
                  github: "https://github.com/MDharunPrasad/naruto-jump-game",
                  featured: true
                },
                {
                  title: "Weather App",
                  desc: "Real-time weather with API integration",
                  tech: ["React.js", "API", "CSS3"],
                  live: "https://weather-app-rosy-tau-92.vercel.app/",
                  github: "https://github.com/MDharunPrasad/weather-app",
                  featured: true
                },
                {
                  title: "Advertisement Banner",
                  desc: "Responsive banner with animations",
                  tech: ["React.js", "CSS3", "JavaScript"],
                  live: "https://ad-banner-chi.vercel.app/",
                  github: "https://github.com/MDharunPrasad/ad-banner",
                  featured: true
                },
                {
                  title: "Edu Gear",
                  desc: "Educational platform interface",
                  tech: ["HTML", "CSS", "JavaScript"],
                  live: "https://edu-gear.vercel.app/",
                  github: "https://github.com/MDharunPrasad/edu-gear"
                },
                {
                  title: "Personal Design",
                  desc: "UI/UX design portfolio showcase",
                  tech: ["Figma", "UI/UX Design"],
                  live: "https://www.figma.com/design/m9O9RUY7Y6HmO4mRbsm3Nd/Personal?node-id=168-20&t=3xsslltiTnOVX1mJ-1",
                  github: "#"
                },
                {
                  title: "Giglabs Design",
                  desc: "Corporate design system & branding",
                  tech: ["Figma", "Branding", "Design System"],
                  live: "https://www.figma.com/design/3m2VOPwwq0O69S4WTWZtJq/Giglabs?node-id=0-1&t=Tifk8bVoic34lCrq-1",
                  github: "#"
                }
              ].map((project, index) => (
                <div
                  key={project.title}
                  className={`group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 transition-all duration-300 ${
                    project.featured ? 'ring-2 ring-blue-500/20' : ''
                  }`}
                >
                  {project.featured && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{project.desc}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-xs font-semibold border border-blue-200/50 hover:from-blue-100 hover:to-blue-200 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group/link"
                    >
                      <ExternalLink size={16} className="group-hover/link:translate-x-0.5 transition-transform" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold text-sm transition-colors group/link"
                    >
                      <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-12">Get in Touch</h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <LiquidButton asChild size="xl">
                  <a href="mailto:dharunprasad9494@gmail.com" className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </a>
                </LiquidButton>
                <LiquidButton asChild size="xl">
                  <a href="https://github.com/MDharunPrasad" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </LiquidButton>
                <LiquidButton asChild size="xl">
                  <a href="https://www.linkedin.com/in/dharunprasad-m-328974228/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                </LiquidButton>
                <LiquidButton asChild size="xl">
                  <button onClick={handleLaunchBalloons} className="flex items-center gap-3">
                    <span>🎈</span>
                    <span>Launch Balloons</span>
                  </button>
                </LiquidButton>
              </div>
              
              <Balloons 
                ref={balloonsRef}
                type="default"
                className="fixed inset-0 pointer-events-none z-50"
              />
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Index;
