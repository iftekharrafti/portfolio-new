export const projects = [
  {
    slug: 'isle',
    url: 'https://isle.com.bd',
    name: 'ISLE',
    description: 'Advanced Multi-vendor E-commerce Platform with vendor dashboard, real-time analytics, payment gateway integration, and inventory management',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    type: 'E-Commerce',
    gradient: 'from-purple-600 via-pink-600 to-red-600',
    stats: { users: '10K+', vendors: '100+', transactions: '50K+' },
    features: ['Multi-vendor System', 'Real-time Analytics', 'Payment Integration', 'Inventory Management']
  },
  {
    slug: 'naturo-e-commerce',
    url: 'https://naturobd.com',
    name: 'Naturo E-Commerce',
    description: 'Complete E-Commerce SaaS Solution, advanced analytics',
    tech: ['Next.js', 'Express.js', 'MySQL', 'AWS', 'Prisma', 'Redis'],
    type: 'SaaS',
    gradient: 'from-green-500 via-emerald-600 to-teal-600',
    stats: { businesses: '200+', revenue: '$900K+', uptime: '99.9%' },
    features: ['Advanced Analytics', 'Cloud Hosting']
  },
  {
    slug: 'toofan-courier',
    url: 'https://toofan.com.bd',
    name: 'Toofan Courier',
    description: 'Comprehensive Courier Service Management System, route optimization, and automated dispatch',
    tech: ['React', 'Node.js', 'MySQL'],
    type: 'Management',
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    stats: { deliveries: '100K+', drivers: '1K+', cities: '50+' },
    features: ['Real-time Tracking', 'Route Optimization', 'Auto Dispatch', 'SMS Notifications']
  },
  {
    slug: 'dhum',
    url: 'https://dhum.com',
    name: 'Dhum',
    description: 'Modern OTT Streaming Platform with adaptive streaming, content management, subscription handling, and user analytics',
    tech: ['React', 'Node.js', 'MySQL', 'VPS', 'Video Streaming'],
    type: 'Media',
    gradient: 'from-red-600 via-orange-600 to-yellow-500',
    stats: { subscribers: '50K+', content: '5K+', hours: '2M+' },
    features: ['Adaptive Streaming', 'Content CMS', 'Subscription System', 'User Analytics']
  },
  {
    slug: 'stpos',
    url: 'https://stpos.com',
    name: 'StPOS',
    description: 'Advanced Point of Sale Software with inventory control, sales reporting, customer management, and multi-location support',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL', 'Print API'],
    type: 'Retail',
    gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
    stats: { stores: '300+', sales: '$2M+', items: '100K+' },
    features: ['Inventory Control', 'Sales Reports', 'Multi-location', 'Receipt Printing']
  },
  {
    slug: 'nirzhor',
    url: 'https://nirzhor.com.bd',
    name: 'Nirzhor',
    description: 'Feature-rich E-Commerce Platform with product filtering, wishlist, cart management, and secure checkout process',
    tech: ['React', 'Node.js', 'MongoDB'],
    type: 'E-Commerce',
    gradient: 'from-pink-500 via-rose-600 to-red-600',
    stats: { products: '300+', orders: '30K+', rating: '4.8/5' },
    features: ['Advanced Filters', 'Wishlist System', 'Secure Checkout', 'Order Tracking']
  }
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
