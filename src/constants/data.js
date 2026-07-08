import {
  Building2, Home, Landmark, Shield, Award, Users, HardHat, Compass,
  Paintbrush, Wrench, FileCheck, Layers, ClipboardList, PenTool,
  MapPin, BedDouble, Bath, Maximize, Calendar, User, Phone, Mail, Clock
} from 'lucide-react';

export const SERVICES = [
  {
    id: 'construction',
    title: 'General Construction',
    shortDesc: 'State-of-the-art construction solutions for luxury structures.',
    fullDesc: 'We manage and execute large-scale construction developments, employing advanced engineering methodologies and top-grade resources to ensure structural superiority and legacy-grade finishes.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    features: ['Reinforced concrete works', 'Premium raw materials', 'Advanced structural integrity', 'Green-certified construction']
  },
  {
    id: 'residential-construction',
    title: 'Residential Construction',
    shortDesc: 'Bespoke modern villas, estates, and luxury penthouses.',
    fullDesc: 'Crafting luxury residential estates that reflect personal refinement. From modern minimalist villas to smart mansions, we deliver architectural statements with the highest craftsmanship.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    features: ['Custom luxury design-build', 'Smart home automation', 'Premium outdoor landscapes', 'Sustainable energy solutions']
  },
  {
    id: 'commercial-construction',
    title: 'Commercial Construction',
    shortDesc: 'A-grade high-rises, retail hubs, and corporate complexes.',
    fullDesc: 'Building inspiring commercial assets, corporate hubs, and retail destinations that boost productivity, support scale, and stand out as landmarks in urban skylines.',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    features: ['Seismic-resilient engineering', 'High-speed elevator integration', 'Advanced security infrastructures', 'LEED-certified practices']
  },
  {
    id: 'property-sale',
    title: 'Property Sale',
    shortDesc: 'Exquisite investment properties and luxury estates.',
    fullDesc: 'Offering premium residential and commercial real estate to global buyers. We deal in high-yield assets, elite commercial zones, and spectacular luxury villas.',
    icon: HardHat,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    features: ['Exclusive prime locations', 'High-yield ROI assets', 'Legally verified ownerships', 'Concierge sales support']
  },
  {
    id: 'property-purchase',
    title: 'Property Purchase',
    shortDesc: 'Strategic land and property acquisition assistance.',
    fullDesc: 'Guiding global investors and private clients through premium acquisition processes, ensuring proper legal due diligence, valuation, and high-growth locations.',
    icon: ClipboardList,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    features: ['Sourcing off-market lands', 'Detailed investment reporting', 'Strict legal verification', 'Negotiation assistance']
  },
  {
    id: 'renovation',
    title: 'Renovation & Refurbishment',
    shortDesc: 'Breathing new life and modern design into heritage spaces.',
    fullDesc: 'Upgrading older buildings into spectacular modern spaces. We preserve structural characteristics while updating systems, materials, layouts, and aesthetics.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80',
    features: ['Complete spatial layout redesign', 'HVAC & electrical upgrades', 'Eco-friendly restoration', 'Premium finish installation']
  },
  {
    id: 'architecture',
    title: 'Architecture & Design',
    shortDesc: 'Concept, blueprints, and award-winning spatial plans.',
    fullDesc: 'Pioneering structural and aesthetic blueprints. We synthesize utility, environment, and luxury into beautiful spatial models, 3D renderings, and precise blueprints.',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    features: ['Conceptual 3D rendering', 'Building Information Modeling (BIM)', 'Sustainable passive architecture', 'Comprehensive site layouts']
  },
  {
    id: 'interior-designing',
    title: 'Interior Designing',
    shortDesc: 'Luxury styling, bespoke furniture, and art curation.',
    fullDesc: 'Creating high-end environments with curated custom furniture, premium fabrics, lighting setups, and luxurious color schemes tailored for elite tastes.',
    icon: Paintbrush,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    features: ['Custom interior woodwork', 'Curated luxury lighting plans', 'Exclusive furniture sourcing', 'Detailed color & texture mapping']
  },
  {
    id: 'project-management',
    title: 'Project Management',
    shortDesc: 'Timely, under-budget execution of massive projects.',
    fullDesc: 'Supervising large-scale construction sites from planning through handover. We track resources, milestones, safety, and strict quality control standards.',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    features: ['Critical path timeline tracking', 'Vendor contract management', 'Strict quality assurance checks', 'Comprehensive cost auditing']
  },
  {
    id: 'turnkey-projects',
    title: 'Turnkey Projects',
    shortDesc: 'Complete end-to-end development, fully completed.',
    fullDesc: 'We handle everything from initial land procurement, design layouts, government approvals, active construction, to custom interior design, delivering a ready-to-move-in structure.',
    icon: FileCheck,
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
    features: ['Single point of contact', 'Regulatory permit processing', 'Furnishing & landscaping', 'Ready-to-occupy delivery']
  },
  {
    id: 'structural-consultancy',
    title: 'Structural Consultancy',
    shortDesc: 'Advanced structural assessments and seismic engineering.',
    fullDesc: 'Offering premium consultancy for complex foundations, heavy load structural steel grids, safety diagnostics, and seismic retrofitting.',
    icon: PenTool,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    features: ['Load calculation auditing', 'Foundation soil inspections', 'Structural longevity planning', 'Risk mitigation diagnostics']
  },
  {
    id: 'building-maintenance',
    title: 'Building Maintenance',
    shortDesc: 'Preventative upkeep and estate facility management.',
    fullDesc: 'Providing elite ongoing maintenance agreements for high-rises and luxury residential estates, keeping systems running smoothly and protecting asset value.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80',
    features: ['24/7 emergency response', 'HVAC, plumbing, electrical checks', 'Facade cleaning and upkeep', 'Landscaping and pool maintenance']
  }
];

export const PROJECTS = [
  {
    id: 'aurora-plaza',
    title: 'The Aurora Heights Plaza',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    location: 'Gulberg, Lahore',
    client: 'Aurora Holdings',
    year: '2025',
    area: '450,000 sq ft',
    description: 'A striking 25-story luxury commercial high-rise with glass curtain-wall facade, custom retail lobbies, and LEED Gold certification.',
    details: 'The Aurora Heights Plaza is designed as a futuristic commercial building, integrating state-of-the-art earthquake mitigation systems, luxury executive lounges, smart climate zoning, and high-efficiency double glazing. We delivered the structure ahead of schedule, meeting international standards.'
  },
  {
    id: 'elysium-villas',
    title: 'Elysium Premium Estates',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    location: 'DHA Phase 6, Lahore',
    client: 'Private Owner',
    year: '2024',
    area: '18,000 sq ft',
    description: 'An elite residential compound featuring high-end glass structures, cantilevered pools, and bespoke modern interiors.',
    details: 'This bespoke residential project is a study in clean minimalism and luxury. The construction utilizes raw-textured architectural concrete, high-span cantilevered structural steel, premium travertine cladding, and a high-performance frameless glass facade overlooking private gardens.'
  },
  {
    id: 'zenith-penthouse',
    title: 'Zenith Sky Penthouse',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    location: 'Bahria Town, Lahore',
    client: 'Noveau Developments',
    year: '2025',
    area: '8,500 sq ft',
    description: 'Ultra-luxurious interior redesign combining custom timber wall paneling, Italian marble, and bespoke furniture.',
    details: 'Zenith Penthouse combines absolute opulence with spatial practicality. Features include automated smart lighting, concealed home cinema, built-in custom walk-in closets, marble waterfall counters, and handpicked structural accents.'
  },
  {
    id: 'opus-office',
    title: 'The Opus Corporate HQ',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    location: 'Downtown, Lahore',
    client: 'Opus Global Corp',
    year: '2026',
    area: '120,000 sq ft',
    description: 'A revolutionary architectural concept featuring biophilic designs, open spaces, and steel grid shells.',
    details: 'Designed to challenge conventional office spaces, The Opus incorporates three double-height open-air biophilic sky gardens, structural steel grids that eliminate interior pillar supports, and thermal energy recovery systems.'
  },
  {
    id: 'heritage-mansion',
    title: 'The Heritage Manor Restorations',
    category: 'Renovation',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    location: 'Cantt, Lahore',
    client: 'Waqaf Foundation',
    year: '2023',
    area: '14,000 sq ft',
    description: 'Complete structural stabilization and architectural retrofitting of an iconic early-20th-century manor.',
    details: 'Restoring a historic building requires merging heritage masonry techniques with modern support systems. We structurally reinforced the brickwork with micro-pile foundations, replaced critical timber frames with customized concealed steel columns, and fully modernized the utility grids.'
  }
];

export const PROPERTIES = [
  {
    id: 'prop-travertine-estate',
    title: 'The Travertine Masterpiece',
    price: '$2,850,000',
    location: 'Sector Y, DHA Phase 6, Lahore',
    area: '10,000 sq ft',
    beds: 6,
    baths: 7,
    status: 'For Sale',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Premium Listing',
    description: 'An architectural marvel featuring Italian travertine cladding, double-height main reception lobby, indoor infinity pool, smart-grid utilities, and panoramic garden views.'
  },
  {
    id: 'prop-lumina-penthouse',
    title: 'Lumina Penthouse Residence',
    price: '$1,650,000',
    location: 'Bahria Town Corporate Heights, Lahore',
    area: '5,500 sq ft',
    beds: 4,
    baths: 5,
    status: 'For Sale',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Exclusive',
    description: 'Perched on the 22nd floor, this penthouse offers dramatic cityscape views, bespoke automation systems, sub-zero kitchen appliances, and private direct elevator access.'
  },
  {
    id: 'prop-cantilever-villa',
    title: 'The Cantilever Glass Villa',
    price: '$3,100,000',
    location: 'Sector W, DHA Phase 8, Lahore',
    area: '12,500 sq ft',
    beds: 5,
    baths: 6,
    status: 'Booked',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
    ],
    badge: 'Under Offer',
    description: 'Featuring dramatic modern cantilevers, this structure floats beautifully above beautifully sculpted water channels. Finished with custom dark quartz stone.'
  }
];

export const TEAM = [
  {
    name: 'Asif Shahzad',
    position: 'Chief Executive Officer (CEO)',
    experience: '20+ Years',
    email: 'shahzadaasif2023@gmail.com',
    phone: '03214858075',
    image: '/CEO.png',
    linkedin: '#'
  },
  {
    name: 'Ahmed Ijaz',
    position: 'Project Manager',
    experience: '10+ Years',
    email: 'ahmed2003ijaz@gmail.com',
    phone: '03016361951',
    image: '/Ahmed Ijaz.png',
    linkedin: '#'
  },
  {
    name: 'Muhammad Musab',
    position: 'Project/ Marketing Manager',
    experience: '7+ Years',
    email: 'musabcui.24@gmail.com',
    phone: '03004232175',
    image: '/Musab.png',
    linkedin: '#'
  },
  {
    name: 'Muhammad Moaz',
    position: 'Project Manager',
    experience: '5+ Years',
    email: 'musabcui.24@gmail.com',
    phone: '03341542108',
    image: '/maaz.png',
    linkedin: '#'
  }
];

export const BLOGS = [
  {
    id: 'blog-investment-guide',
    title: 'The 2026 Property Investment Guide: Prime Locations & Assets',
    category: 'Investment Guide',
    date: 'July 5, 2026',
    author: 'M. Ahmed Ijaz',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    summary: 'Analyze high-yield areas, legal frameworks, and commercial trends for luxury real estate investments in corporate hubs.',
    content: 'The luxury real estate landscape in 2026 demands dynamic decision-making. High-rise developments with integrated technology infrastructures and green energy ratings are yielding 15-20% higher rental ROIs. We discuss key regulatory shifts, prime commercial zoning in Lahore, and structural parameters that protect long-term asset value.'
  },
  {
    id: 'blog-architectural-trends',
    title: 'Biophilic Design and Structural Cantilevers: Beyond Aesthetics',
    category: 'Architecture Trends',
    date: 'June 28, 2026',
    author: 'Sarah Rahman',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    summary: 'A deep-dive into how structural steel advances enable dramatic modern cantilevers and floating garden systems.',
    content: 'Biophilic design is transitioning from plant-lined walls to complex structural integrations. By utilizing deep structural cantilevers and advanced thermal barrier joins, we can suspend massive outdoor living zones without heat bridges, integrating rich botanical growth with modern glass structures.'
  },
  {
    id: 'blog-renovation-value',
    title: 'Restoring Heritage Mansions: Balancing History and Utility',
    category: 'Construction Tips',
    date: 'May 12, 2026',
    author: 'Haris Qureshi',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    summary: 'Practical structural advice on upgrading historic building grids with modern foundations, HVAC, and power grids.',
    content: 'Historic properties hold beautiful aesthetics, but modern business operations and lifestyles demand superior services. Retrofitting micro-pile foundation arrays under old masonry structures allows structural stability to carry additional stories. Modern concealed utility raceways preserve the integrity of plaster moulding and lime-wash walls.'
  }
];

export const FAQS = [
  {
    question: 'How do you handle structural quality checks?',
    answer: 'We employ multi-phase quality inspections, including independent concrete compression testing, steel core integrity diagnostics, thermal scanning, and building information modeling audits at every milestone.'
  },
  {
    question: 'What is your average timeline for a turnkey project?',
    answer: 'Turnkey residential villas typically span 12 to 18 months from design approvals to handover. Commercial projects span 18 to 36 months, depending on building height and design complexity.'
  },
  {
    question: 'Do you offer a post-handover warranty?',
    answer: 'Yes. Builders Crew offers a structural warranty of up to 10 years, and a comprehensive systems and finishes warranty for the first 12 months post-handover.'
  },
  {
    question: 'Do you assist with government approvals and environmental clearances?',
    answer: 'Absolutely. Our turnkey services include full management of regulatory permits, environmental impact clearances, utility connection permits, and local zoning approvals.'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Builders Crew completely transformed our vision into an iconic commercial complex. Their commitment to schedules, precision design, and transparent management made them the absolute best partner.",
    author: "Zariq Mirza",
    company: "Mirza Corporate Group",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The Travertine Estate is an architectural masterpiece. Ahmed and his team managed everything: architectural planning, structural consultations, and luxury interior design with stunning execution.",
    author: "Dr. Ayesha Malik",
    company: "Estate Owner",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
  }
];
