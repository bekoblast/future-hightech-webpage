// Source of truth: HITECH 20241 Company Profile PDF (Dec 2024)

export const company = {
  name: 'Future Hitech',
  legal: 'Future Hitech Technical Services',
  tagline: 'Mechanical · Electrical · Plumbing',
  pitch:
    'A Dubai-based MEP company delivering design, installation, maintenance and consulting for residential, commercial and industrial buildings.',
  founded: 2022,
  experienceYears: 2,
  projectsExecuted: 10,
  satisfiedCustomers: 40,
  contact: {
    address: 'Office #1306, Saheel Tower 2, Al Nahda 1, Dubai – UAE',
    phones: ['+971 50 226 4282'],
    emails: ['info@future-hitech.com', 'sales@future-hitech.com'],
    website: 'www.future-hitech.com',
    whatsapp: '+971502264282',
  },
};

export const mission =
  'To be the trusted partner for MEP solutions, providing exceptional service, engineering expertise, and sustainable technologies to create safe, energy-efficient, and environmentally responsible buildings.';

export const vision =
  'To lead the MEP industry by pioneering cutting-edge technologies and fostering long-term client relationships built on trust, professionalism, and excellence.';

export const aboutUs =
  'Future Hitech Technical Services is a leading provider of comprehensive mechanical, electrical, and plumbing services, specializing in innovative design, high-quality installations, and ongoing maintenance. With a proven experience, we are committed to delivering efficient, sustainable, and cost-effective systems for residential, commercial, and industrial projects. Our team of engineers, designers, and technicians is dedicated to creating systems that improve building performance, reduce energy consumption, and enhance occupant comfort.';

export type Service = {
  id: string;
  number: string;
  title: string;
  short: string;
  bullets: string[];
  icon: string; // tabler-style svg path id
};

export const services: Service[] = [
  {
    id: 'mechanical',
    number: '01',
    title: 'Mechanical Systems',
    short:
      'HVAC, ventilation and air-conditioning design and installation for any building scale.',
    bullets: [
      'HVAC, Ventilation, and Air Conditioning (AC) design and installation',
      'Heating and cooling systems for residential, commercial, and industrial facilities',
      'Maintenance and service of mechanical systems',
    ],
    icon: 'fan',
  },
  {
    id: 'electrical',
    number: '02',
    title: 'Electrical Systems',
    short:
      'Power distribution, lighting, switchgear, UPS, low-voltage fire & security systems.',
    bullets: [
      'Electrical design and system integration for new constructions and retrofits',
      'Lighting design, energy-efficient lighting solutions, and LED upgrades',
      'Power distribution, panel boards, and switchgear installations',
      'Emergency power systems, including backup generators and uninterruptible power supplies (UPS)',
      'Data and communication systems (low-voltage systems, fire alarms, security)',
    ],
    icon: 'bolt',
  },
  {
    id: 'plumbing',
    number: '03',
    title: 'Plumbing Systems',
    short:
      'Water supply, drainage, wastewater, storm-water, and gas system installation.',
    bullets: [
      'Water supply, drainage, and wastewater systems',
      'Storm water management, sewer connections, and potable water systems',
      'Plumbing design for large-scale commercial and industrial projects',
      'Gas piping systems for heating, cooking, and industrial processes',
      'Regular inspection and maintenance of plumbing systems',
    ],
    icon: 'droplet',
  },
  {
    id: 'energy',
    number: '04',
    title: 'Energy Efficiency & Sustainability',
    short:
      'LEED-certified consulting, energy audits, renewables, water conservation.',
    bullets: [
      'Green building design and consulting (LEED-certified projects)',
      'Energy audits, building performance analysis, and retrofitting for energy savings',
      'Renewable energy systems (solar, wind, etc.) integration',
      'Sustainable water conservation systems (rainwater harvesting, low-flow fixtures, etc.)',
    ],
    icon: 'leaf',
  },
  {
    id: 'project-management',
    number: '05',
    title: 'Project Management & Consulting',
    short:
      'End-to-end project management from design to handover and ongoing support.',
    bullets: [
      'End-to-end project management from design to installation and maintenance',
      'Value engineering for cost-effective solutions without compromising quality',
      'Coordination with architects, general contractors, and other stakeholders',
      'Compliance with local building codes, regulations, and industry standards',
    ],
    icon: 'briefcase',
  },
];

export const approach = [
  { n: '01', title: 'Innovative Solutions',     icon: 'lightbulb',
    body: 'We leverage the latest technology, including Building Information Modeling (BIM), to ensure that our designs are optimized for performance, cost, and sustainability.' },
  { n: '02', title: 'Customer-Centric Service', icon: 'users',
    body: 'We work closely with clients throughout the entire project lifecycle, ensuring clear communication, timely delivery, and exceptional customer service.' },
  { n: '03', title: 'Quality Assurance',        icon: 'shield-check',
    body: 'Our engineers and technicians adhere to the highest standards of quality control, ensuring that every system is installed and maintained with precision and care.' },
  { n: '04', title: 'Sustainability',           icon: 'recycle',
    body: 'We focus on providing energy-efficient solutions and environmentally friendly designs to reduce operational costs and environmental impact.' },
];

export const whyUs = [
  { title: 'Experienced Team',       icon: 'badge-check',
    body: 'A team of licensed and certified professionals with extensive knowledge of the MEP industry.' },
  { title: 'Comprehensive Service',  icon: 'grid',
    body: 'We offer turnkey solutions from design to installation and ongoing maintenance, ensuring that our clients have a single point of contact for all their MEP needs.' },
  { title: 'Focus on Innovation',    icon: 'sparkles',
    body: 'We stay at the forefront of the industry by adopting the latest technologies and sustainable practices.' },
  { title: 'Reliability',            icon: 'shield-check',
    body: 'We are committed to completing projects on time and within budget while maintaining the highest level of safety and quality.' },
  { title: 'Customer Satisfaction',  icon: 'heart',
    body: "Our clients' needs are our top priority, and we ensure that every project exceeds expectations." },
];

export const sectors = [
  { id: 'commercial',    title: 'Commercial',    icon: 'building',
    items: ['Office buildings', 'Shopping centers', 'Retail spaces'],
    photo: '/img/sectors/commercial.jpeg' },
  { id: 'residential',   title: 'Residential',   icon: 'home',
    items: ['Luxury apartments', 'Multi-family homes', 'Mixed-use developments'],
    photo: '/img/sectors/residential.jpeg' },
  { id: 'industrial',    title: 'Industrial',    icon: 'factory',
    items: ['Manufacturing plants', 'Warehouses', 'Distribution centers'],
    photo: '/img/sectors/industrial.jpeg' },
  { id: 'institutional', title: 'Institutional', icon: 'academic-cap',
    items: ['Hospitals, schools', 'Government buildings', 'Public facilities'],
    photo: '/img/sectors/institutional.jpeg' },
];

// Project gallery (residential + electrical work from the brochure) — 17 images extracted
export const projects = Array.from({ length: 17 }, (_, i) => ({
  n: String(i + 1).padStart(2, '0'),
  src: `/img/projects/p${String(i + 1).padStart(2, '0')}.jpeg`,
  alt: `Future Hitech project ${i + 1}`,
}));
