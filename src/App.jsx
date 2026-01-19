import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Code, Database, Server, Terminal, ExternalLink, MapPin, Send, Zap, Sparkles, Cpu, Globe, Layers, Box } from 'lucide-react';

export default function DeveloperPortfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [terminalText, setTerminalText] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [matrixChars, setMatrixChars] = useState([]);
  const [particles, setParticles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  const fullText = "$ whoami\n> Iftekhar Uddin Rafti\n> Full Stack Web Developer from Dhaka, Bangladesh\n$ skills --list\n> React • Node.js • MongoDB • PostgreSQL\n$ status\n> Available for exciting projects...";

  // Terminal typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Matrix rain effect
  useEffect(() => {
    const chars = [];
    const columns = Math.floor(window.innerWidth / 20);
    for (let i = 0; i < columns; i++) {
      chars.push({
        id: i,
        x: i * 20,
        y: Math.random() * -100,
        speed: Math.random() * 3 + 1,
        char: String.fromCharCode(0x30A0 + Math.random() * 96)
      });
    }
    setMatrixChars(chars);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setMatrixChars(prev => prev.map(char => ({
        ...char,
        y: char.y > window.innerHeight ? -20 : char.y + char.speed,
        char: Math.random() > 0.95 ? String.fromCharCode(0x30A0 + Math.random() * 96) : char.char
      })));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Particle system
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1
      });
    }
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        x: (p.x + p.vx + window.innerWidth) % window.innerWidth,
        y: (p.y + p.vy + window.innerHeight) % window.innerHeight
      })));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    frontend: [
      { name: 'React.js', level: 95, icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
      { name: 'Next.js', level: 90, icon: '▲', color: 'from-gray-300 to-gray-500' },
      // { name: 'Vue.js', level: 85, icon: '💚', color: 'from-green-400 to-emerald-600' },
      { name: 'TypeScript', level: 88, icon: 'TS', color: 'from-blue-500 to-blue-700' },
      { name: 'Redux', level: 85, icon: '🔄', color: 'from-purple-500 to-purple-700' },
      { name: 'React Query', level: 82, icon: '🔍', color: 'from-red-500 to-pink-600' },
      { name: 'JavaScript', level: 95, icon: 'JS', color: 'from-yellow-400 to-yellow-600' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨', color: 'from-cyan-400 to-blue-500' },
      { name: 'HTML5', level: 98, icon: '🌐', color: 'from-orange-500 to-red-600' },
      { name: 'CSS3', level: 95, icon: '🎭', color: 'from-blue-400 to-purple-600' },
    ],
    backend: [
      { name: 'Node.js', level: 93, icon: '🟢', color: 'from-green-500 to-green-700' },
      { name: 'Express.js', level: 92, icon: '⚡', color: 'from-gray-400 to-gray-600' },
      { name: 'RESTful API', level: 95, icon: '🔌', color: 'from-blue-500 to-indigo-600' },
      // { name: 'GraphQL', level: 80, icon: '◈', color: 'from-pink-500 to-rose-600' },
      // { name: 'Socket.io', level: 85, icon: '📡', color: 'from-purple-500 to-violet-600' },
      { name: 'JWT Auth', level: 90, icon: '🔐', color: 'from-yellow-500 to-orange-600' },
      { name: 'Microservices', level: 78, icon: '🏗️', color: 'from-teal-500 to-cyan-600' },
      { name: 'Sequelize ORM', level: 88, icon: '🗄️', color: 'from-sky-500 to-blue-600' },
      { name: 'Prisma ORM', level: 85, icon: '🔷', color: 'from-indigo-500 to-purple-600' }
    ],
    database: [
      { name: 'MongoDB', level: 93, icon: '🍃', color: 'from-green-500 to-emerald-600' },
      { name: 'MySQL', level: 88, icon: '🐬', color: 'from-blue-500 to-cyan-600' },
      { name: 'PostgreSQL', level: 90, icon: '🐘', color: 'from-blue-600 to-indigo-700' },
      { name: 'Redis', level: 82, icon: '⚡', color: 'from-red-500 to-rose-600' },
      { name: 'Mongoose', level: 90, icon: '📊', color: 'from-green-400 to-teal-600' }
    ]
  };

  const experiences = [
    {
      company: 'Naturo',
      position: 'Full Stack Developer',
      period: 'November 2025 - Present',
      description: 'Leading development of scalable e-commerce solutions and enterprise applications.',
      tech: ['Next.js', 'Node.js', 'Express.js', 'MySQL', 'AWS', 'Prisma', 'Redis', 'Vercel'],
      current: true
    },
    {
      company: 'STITBD',
      position: 'Full Stack Developer',
      period: 'January 2024 - October 2025',
      description: 'Developed and maintained multiple web applications and e-commerce platforms.',
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'React', 'Next.js', 'Prisma', 'Sequelize', 'Vercel', 'VPS'],
      current: false
    }
  ];

  const projects = [
    {
      name: 'ISLE',
      description: 'Advanced Multi-vendor E-commerce Platform with vendor dashboard, real-time analytics, payment gateway integration, and inventory management',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      type: 'E-Commerce',
      gradient: 'from-purple-600 via-pink-600 to-red-600',
      stats: { users: '10K+', vendors: '100+', transactions: '50K+' },
      features: ['Multi-vendor System', 'Real-time Analytics', 'Payment Integration', 'Inventory Management']
    },
    {
      name: 'Naturo E-Commerce',
      description: 'Complete E-Commerce SaaS Solution, advanced analytics',
      tech: ['Next.js', 'Express.js', 'MySQL', 'AWS', 'Prisma', 'Redis'],
      type: 'SaaS',
      gradient: 'from-green-500 via-emerald-600 to-teal-600',
      stats: { businesses: '200+', revenue: '$900K+', uptime: '99.9%' },
      features: ['Advanced Analytics', 'Cloud Hosting']
    },
    {
      name: 'Toofan Courier',
      description: 'Comprehensive Courier Service Management System, route optimization, and automated dispatch',
      tech: ['React', 'Node.js', 'MySQL'],
      type: 'Management',
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      stats: { deliveries: '100K+', drivers: '1K+', cities: '50+' },
      features: ['Real-time Tracking', 'Route Optimization', 'Auto Dispatch', 'SMS Notifications']
    },
    {
      name: 'Dhum',
      description: 'Modern OTT Streaming Platform with adaptive streaming, content management, subscription handling, and user analytics',
      tech: ['React', 'Node.js', 'MySQL', 'VPS', 'Video Streaming'],
      type: 'Media',
      gradient: 'from-red-600 via-orange-600 to-yellow-500',
      stats: { subscribers: '50K+', content: '5K+', hours: '2M+' },
      features: ['Adaptive Streaming', 'Content CMS', 'Subscription System', 'User Analytics']
    },
    {
      name: 'StPOS',
      description: 'Advanced Point of Sale Software with inventory control, sales reporting, customer management, and multi-location support',
      tech: ['Vue.js', 'Express.js', 'PostgreSQL', 'Print API'],
      type: 'Retail',
      gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
      stats: { stores: '300+', sales: '$2M+', items: '100K+' },
      features: ['Inventory Control', 'Sales Reports', 'Multi-location', 'Receipt Printing']
    },
    {
      name: 'Nirzhor',
      description: 'Feature-rich E-Commerce Platform with product filtering, wishlist, cart management, and secure checkout process',
      tech: ['React', 'Node.js', 'MongoDB', 'PayPal'],
      type: 'E-Commerce',
      gradient: 'from-pink-500 via-rose-600 to-red-600',
      stats: { products: '300+', orders: '30K+', rating: '4.8/5' },
      features: ['Advanced Filters', 'Wishlist System', 'Secure Checkout', 'Order Tracking']
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      // Email integration using EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_4ssoqoe',
          template_id: 'template_loojwgr',
          user_id: 'user_1pWNAVFU7QTWLq4OpxUKM',
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'iftekharrafti7040@gmail.com'
          }
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus(''), 3000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full">
          {matrixChars.map(char => (
            <text
              key={char.id}
              x={char.x}
              y={char.y}
              fill="#00ff41"
              fontSize="14"
              fontFamily="monospace"
              style={{ textShadow: '0 0 5px #00ff41' }}
            >
              {char.char}
            </text>
          ))}
        </svg>
      </div>

      {/* Particle Network */}
      <div className="fixed inset-0 pointer-events-none">
        <svg className="w-full h-full">
          {particles.map((p1, i) =>
            particles.slice(i + 1).map((p2, j) => {
              const dist = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
              if (dist < 150) {
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke="#00ff41"
                    strokeWidth="0.5"
                    opacity={1 - dist / 150}
                  />
                );
              }
              return null;
            })
          )}
          {particles.map(p => (
            <circle
              key={p.id}
              cx={p.x}
              cy={p.y}
              r={p.size}
              fill="#00ff41"
              style={{ filter: 'blur(1px)' }}
            />
          ))}
        </svg>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-green-500/30 z-50 shadow-lg shadow-green-500/20">
        <div className="w-full px-8 sm:px-16 lg:px-32 xl:px-48 2xl:px-64">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <Terminal className="w-7 h-7 text-green-400 group-hover:text-cyan-400 transition-colors" />
                <div className="absolute -inset-1 bg-green-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <span className="text-xl font-bold text-green-400 group-hover:text-cyan-400 transition-colors">Iftekhar Uddin Rafti</span>
                <div className="text-xs text-cyan-400 flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Skills', 'Experience', 'Projects', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="hover:text-cyan-400 transition-colors relative group"
                >
                  <span className="relative z-10 flex items-center space-x-1">
                    <span className="text-green-400">&lt;</span>
                    <span>{item}</span>
                    <span className="text-green-400">/&gt;</span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                  <div className="absolute -inset-2 bg-cyan-500/10 blur-xl rounded opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="w-full px-8 sm:px-16 lg:px-32 xl:px-48 2xl:px-64 text-center z-10">
          <div className="mb-8 inline-block group">
            <div
              className="w-40 h-40 mx-auto mb-6 rounded-2xl border-4 border-green-400 overflow-hidden relative shadow-2xl shadow-green-500/50 transform hover:scale-105 transition-all duration-500"
              style={{
                transform: `perspective(1000px) rotateY(${(mousePos.x - window.innerWidth / 2) / 50}deg) rotateX(${-(mousePos.y - window.innerHeight / 2) / 50}deg)`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 via-cyan-400/30 to-blue-500/30 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent group-hover:via-white/10 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-6xl font-bold">
                <Code className="w-20 h-20 text-green-400 mb-2 animate-bounce" />
                <div className="text-xs text-cyan-400 font-mono">DEV</div>
              </div>
              {/* Orbiting particles */}
              <div className="absolute inset-0">
                {[0, 1, 2, 3].map(i => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                    style={{
                      top: '50%',
                      left: '50%',
                      animation: `orbit-${i} 3s linear infinite`,
                      animationDelay: `${i * 0.75}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
              <span className="text-green-400 text-sm flex items-center space-x-2">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Available for Freelance Projects</span>
                <Sparkles className="w-4 h-4 animate-pulse" />
              </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 blur-3xl opacity-30 animate-pulse" />
            <span className="relative glitch text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 animate-gradient" data-text="Iftekhar Uddin Rafti">
              Iftekhar Uddin Rafti
            </span>
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative">
            <span className="text-green-400">&lt;</span>
            <span className="text-cyan-400 animate-pulse">Full Stack Developer</span>
            <span className="text-green-400"> /&gt;</span>
          </h2>

          <div className="bg-black/70 border-2 border-green-500/50 rounded-xl p-8 mb-8 backdrop-blur-md shadow-2xl shadow-green-500/20 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-2 mb-4 text-green-400">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
              <span className="text-sm">terminal@rafti:~$</span>
            </div>
            <pre className="text-left text-sm md:text-base whitespace-pre-wrap font-mono">
              <code className="text-green-400">{terminalText}<span className="animate-pulse text-cyan-400">█</span></code>
            </pre>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#contact" className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/50 hover:shadow-green-500/70 transform hover:scale-105">
              <Mail className="w-5 h-5" />
              <span className="font-bold">Let's Connect</span>
              <Zap className="w-5 h-5 animate-pulse" />
              <div className="absolute inset-0 border-2 border-green-400 rounded-lg animate-ping opacity-0 group-hover:opacity-30" />
            </a>
            <a href="#projects" className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transform hover:scale-105 text-white">
              <Layers className="w-5 h-5" />
              <span className="font-bold">View Projects</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* Social Links with Animation */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com', color: 'hover:text-purple-400' },
              { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-400' },
              { icon: Mail, href: 'mailto:rafti@example.com', color: 'hover:text-red-400' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative text-green-400 ${social.color} transition-all duration-300 transform hover:scale-125`}
              >
                <social.icon className="w-8 h-8" />
                <div className="absolute -inset-2 bg-current blur-xl rounded-full opacity-0 group-hover:opacity-30 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Floating code snippets */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          {['const', 'function', 'async', 'await', 'return', '=>', 'import', 'export'].map((word, idx) => (
            <div
              key={idx}
              className="absolute text-green-400 font-mono text-sm animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${idx * 0.5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            >
              {word}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="w-full px-8 sm:px-16 lg:px-32 xl:px-48 2xl:px-64">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="text-green-400">&lt;</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Technical Arsenal</span>
            <span className="text-green-400"> /&gt;</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Crafting digital experiences with cutting-edge technologies</p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
              <div className="relative bg-black border-2 border-green-500/30 rounded-2xl p-8 hover:border-green-500 transition-all duration-300 backdrop-blur-sm h-full">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-green-500/30 blur-xl rounded-full animate-pulse" />
                    <Code className="relative w-12 h-12 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-green-400">Frontend</h3>
                    <p className="text-cyan-400 text-sm">Client-Side Mastery</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {skills.frontend.map((skill, idx) => (
                    <div key={idx} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-gray-200 font-medium group-hover/skill:text-cyan-400 transition-colors">{skill.name}</span>
                        </div>
                        <span className="text-green-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${idx * 100}ms`,
                            boxShadow: '0 0 10px currentColor'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
              <div className="relative bg-black border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300 backdrop-blur-sm h-full">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-cyan-500/30 blur-xl rounded-full animate-pulse" />
                    <Server className="relative w-12 h-12 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-cyan-400">Backend</h3>
                    <p className="text-green-400 text-sm">Server-Side Expertise</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {skills.backend.map((skill, idx) => (
                    <div key={idx} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-gray-200 font-medium group-hover/skill:text-green-400 transition-colors">{skill.name}</span>
                        </div>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${idx * 100}ms`,
                            boxShadow: '0 0 10px currentColor'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Database Skills */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
              <div className="relative bg-black border-2 border-purple-500/30 rounded-2xl p-8 hover:border-purple-500 transition-all duration-300 backdrop-blur-sm h-full">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-purple-500/30 blur-xl rounded-full animate-pulse" />
                    <Database className="relative w-12 h-12 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-purple-400">Database</h3>
                    <p className="text-pink-400 text-sm">Data Management</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {skills.database.map((skill, idx) => (
                    <div key={idx} className="group/skill">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-gray-200 font-medium group-hover/skill:text-purple-400 transition-colors">{skill.name}</span>
                        </div>
                        <span className="text-purple-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${idx * 100}ms`,
                            boxShadow: '0 0 10px currentColor'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Tech Stack */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-green-400 mb-8">Additional Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Git', 'Docker', 'AWS', 'Nginx', 'CI/CD', 'Webpack', 'Jest', 'Postman', 'Figma', 'VS Code'].map((tool, idx) => (
                <div
                  key={idx}
                  className="group relative px-6 py-3 bg-black/50 border border-green-500/30 rounded-lg hover:border-cyan-500 transition-all duration-300 hover:scale-110"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-300" />
                  <span className="relative text-green-400 group-hover:text-cyan-400 font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="w-full px-8 sm:px-16 lg:px-32 xl:px-48 2xl:px-64">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-green-400">&lt;</span>
            <span className="text-cyan-400">Experience</span>
            <span className="text-green-400"> /&gt;</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group relative">
                <div className="bg-black/50 border border-green-500/30 rounded-lg p-6 hover:border-cyan-500 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-green-400 mb-1">{exp.company}</h3>
                      <p className="text-cyan-400 text-lg">{exp.position}</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-2 md:mt-0">
                      {exp.current && (
                        <span className="px-3 py-1 bg-green-500/20 border border-green-500 rounded text-sm animate-pulse">
                          Current
                        </span>
                      )}
                      <span className="text-green-400">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-sm text-cyan-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {idx < experiences.length - 1 && (
                  <div className="absolute left-1/2 -bottom-4 w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="w-full px-8 sm:px-16 lg:px-32 xl:px-48 2xl:px-64">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="text-green-400">&lt;</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600">Featured Projects</span>
            <span className="text-green-400"> /&gt;</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Building scalable solutions that make an impact</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative"
                style={{
                  animationDelay: `${idx * 100}ms`
                }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse`} />

                {/* Card */}
                <div className="relative bg-black border-2 border-green-500/30 rounded-2xl overflow-hidden h-full flex flex-col group-hover:border-cyan-500 transition-all duration-300 transform group-hover:scale-105">
                  {/* Header with gradient */}
                  <div className={`relative h-32 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(
                          90deg,
                          transparent,
                          transparent 10px,
                          rgba(255,255,255,0.1) 10px,
                          rgba(255,255,255,0.1) 11px
                        )`
                      }} />
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-white/30">
                        <span className="text-white text-xs font-bold">{project.type}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Box className="w-12 h-12 text-white opacity-30" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-green-400 group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                      <ExternalLink className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-1">{project.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {Object.entries(project.stats).map(([key, value], i) => (
                        <div key={i} className="text-center p-2 bg-green-500/5 rounded-lg border border-green-500/20 hover:border-cyan-500/50 transition-colors">
                          <div className="text-cyan-400 font-bold text-sm">{value}</div>
                          <div className="text-gray-500 text-xs capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-6 space-y-2">
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Key Features</div>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-1 text-xs">
                            <Zap className="w-3 h-3 text-green-400" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="mt-16 text-center">
            <button className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-cyan-500 px-10 py-4 rounded-xl hover:from-green-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-green-500/50 hover:shadow-green-500/70 transform hover:scale-105">
              <Globe className="w-6 h-6" />
              <span className="font-bold text-lg">View All Projects</span>
              <ExternalLink className="w-5 h-5 animate-pulse" />
              <div className="absolute inset-0 border-2 border-white rounded-xl animate-ping opacity-0 group-hover:opacity-30" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="w-full px-8 sm:px-16 lg:px-32 xl:px-48 2xl:px-64">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            <span className="text-green-400">&lt;</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Get In Touch</span>
            <span className="text-green-400"> /&gt;</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">Let's build something amazing together</p>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 animate-pulse" />
            <div className="relative bg-black border-2 border-green-500/30 rounded-2xl p-10 backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="group/input">
                  <label className="flex items-center space-x-2 text-green-400 mb-3 text-lg">
                    <span className="text-cyan-400">$</span>
                    <span>name</span>
                    <span className="text-gray-600">--input</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/70 border-2 border-green-500/30 rounded-xl px-6 py-4 text-green-400 focus:border-cyan-500 focus:outline-none transition-all placeholder-gray-600 hover:border-green-500/50"
                    placeholder="John Doe"
                  />
                </div>

                <div className="group/input">
                  <label className="flex items-center space-x-2 text-green-400 mb-3 text-lg">
                    <span className="text-cyan-400">$</span>
                    <span>email</span>
                    <span className="text-gray-600">--input</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/70 border-2 border-green-500/30 rounded-xl px-6 py-4 text-green-400 focus:border-cyan-500 focus:outline-none transition-all placeholder-gray-600 hover:border-green-500/50"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="group/input">
                  <label className="flex items-center space-x-2 text-green-400 mb-3 text-lg">
                    <span className="text-cyan-400">$</span>
                    <span>message</span>
                    <span className="text-gray-600">--input</span>
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full bg-black/70 border-2 border-green-500/30 rounded-xl px-6 py-4 text-green-400 focus:border-cyan-500 focus:outline-none transition-all resize-none placeholder-gray-600 hover:border-green-500/50"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full group/btn relative inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-5 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 shadow-lg shadow-green-500/50 hover:shadow-green-500/70 transform hover:scale-105"
                >
                  <Send className="w-6 h-6" />
                  <span className="text-lg font-bold">
                    {formStatus === 'sending' ? 'Sending Message...' :
                      formStatus === 'success' ? '✓ Message Sent Successfully!' :
                        formStatus === 'error' ? '✗ Error. Please try again.' :
                          'Send Message'}
                  </span>
                  {formStatus !== 'sending' && <Zap className="w-5 h-5 animate-pulse" />}
                  <div className="absolute inset-0 border-2 border-white rounded-xl animate-ping opacity-0 group-hover/btn:opacity-30" />
                </button>
              </form>

              <div className="mt-12 pt-8 border-t border-green-500/30">
                <div className="flex justify-center space-x-8">
                  {[
                    { Icon: Github, href: 'https://github.com/iftekharrafti', label: 'GitHub', color: 'hover:text-purple-400' },
                    { Icon: Linkedin, href: 'https://linkedin.com/in/iftekharrafti', label: 'LinkedIn', color: 'hover:text-blue-400' },
                    { Icon: Mail, href: 'mailto:iftekharrafti7040@gmail.com', label: 'Email', color: 'hover:text-red-400' }
                  ].map(({ Icon, href, label, color }, idx) => (
                    <a
                      key={idx}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/social relative text-green-400 ${color} transition-all duration-300 transform hover:scale-125`}
                    >
                      <div className="text-center">
                        <Icon className="w-10 h-10 mx-auto mb-2" />
                        <span className="text-xs opacity-0 group-hover/social:opacity-100 transition-opacity">{label}</span>
                      </div>
                      <div className="absolute -inset-3 bg-current blur-xl rounded-full opacity-0 group-hover/social:opacity-30 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-green-500/30 relative z-10 bg-black/50 backdrop-blur-sm">
        <div className="w-full px-8 sm:px-16 lg:px-32 xl:px-48 2xl:px-64">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Terminal className="w-8 h-8 text-green-400 animate-pulse" />
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                Iftekhar Uddin Rafti
              </h3>
            </div>
            <p className="text-gray-400 mb-6">Full Stack Web Developer | Building Digital Experiences</p>
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <MapPin className="w-4 h-4" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          <div className="border-t border-green-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-green-400 text-sm">
                <span className="text-cyan-400">&lt;</span>
                Crafted with passion by Iftekhar Uddin Rafti
                <span className="text-cyan-400"> /&gt;</span>
              </p>
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Iftekhar Uddin Rafti. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 animate-gradient" />
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&display=swap');

        * {
          font-family: 'JetBrains Mono', monospace;
        }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .animate-scan {
          animation: scan 8s linear infinite;
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.6;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        @keyframes orbit-0 {
          from { 
            transform: translate(-50%, -50%) rotate(0deg) translateX(80px) rotate(0deg);
          }
          to { 
            transform: translate(-50%, -50%) rotate(360deg) translateX(80px) rotate(-360deg);
          }
        }

        @keyframes orbit-1 {
          from { 
            transform: translate(-50%, -50%) rotate(90deg) translateX(80px) rotate(-90deg);
          }
          to { 
            transform: translate(-50%, -50%) rotate(450deg) translateX(80px) rotate(-450deg);
          }
        }

        @keyframes orbit-2 {
          from { 
            transform: translate(-50%, -50%) rotate(180deg) translateX(80px) rotate(-180deg);
          }
          to { 
            transform: translate(-50%, -50%) rotate(540deg) translateX(80px) rotate(-540deg);
          }
        }

        @keyframes orbit-3 {
          from { 
            transform: translate(-50%, -50%) rotate(270deg) translateX(80px) rotate(-270deg);
          }
          to { 
            transform: translate(-50%, -50%) rotate(630deg) translateX(80px) rotate(-630deg);
          }
        }

        .glitch {
          position: relative;
          text-shadow: 
            0.05em 0 0 #00fffc,
            -0.03em -0.04em 0 #fc00ff,
            0.025em 0.04em 0 #fffc00;
          animation: glitch 725ms infinite;
        }

        .glitch span {
          position: absolute;
          top: 0;
          left: 0;
        }

        @keyframes glitch {
          0% {
            text-shadow: 
              0.05em 0 0 #00fffc,
              -0.03em -0.04em 0 #fc00ff,
              0.025em 0.04em 0 #fffc00;
          }
          15% {
            text-shadow: 
              0.05em 0 0 #00fffc,
              -0.03em -0.04em 0 #fc00ff,
              0.025em 0.04em 0 #fffc00;
          }
          16% {
            text-shadow: 
              -0.05em -0.025em 0 #00fffc,
              0.025em 0.035em 0 #fc00ff,
              -0.05em -0.05em 0 #fffc00;
          }
          49% {
            text-shadow: 
              -0.05em -0.025em 0 #00fffc,
              0.025em 0.035em 0 #fc00ff,
              -0.05em -0.05em 0 #fffc00;
          }
          50% {
            text-shadow: 
              0.05em 0.035em 0 #00fffc,
              0.03em 0 0 #fc00ff,
              0 -0.04em 0 #fffc00;
          }
          99% {
            text-shadow: 
              0.05em 0.035em 0 #00fffc,
              0.03em 0 0 #fc00ff,
              0 -0.04em 0 #fffc00;
          }
          100% {
            text-shadow: 
              -0.05em 0 0 #00fffc,
              -0.025em -0.04em 0 #fc00ff,
              -0.04em -0.025em 0 #fffc00;
          }
        }

        /* Scrollbar Styling */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
          border-left: 1px solid #00ff41;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00ff41, #00fffc);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #00fffc, #00ff41);
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Selection */
        ::selection {
          background: #00ff41;
          color: #000;
        }

        /* Custom cursor effect */
        body {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><circle cx="10" cy="10" r="8" fill="%2300ff41" opacity="0.5"/></svg>'), auto;
        }

        a, button {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><circle cx="10" cy="10" r="8" fill="%2300fffc" opacity="0.7"/></svg>'), pointer;
        }

        /* Fade in animation for sections */
        section {
          animation: fadeIn 0.8s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Skill bars animation */
        @keyframes fillBar {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        /* Glow effect */
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41;
          }
          50% {
            box-shadow: 0 0 10px #00fffc, 0 0 20px #00fffc, 0 0 30px #00fffc;
          }
        }

        /* Typing cursor animation */
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}