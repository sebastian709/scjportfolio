import ranLanding from '../assets/ranLanding.png';
import guamLanding from '../assets/guamLanding.png';
import screenLanding from '../assets/screenLanding.jpg';

export const projectsData = [
  {
    id: 1,
    slug: 'ran-lending-platform',
    title: 'Ran Lending Platform',
    description: 'A CRUD-based lending system with authentication, an admin dashboard, and role-based access.',
    thumbnail: ranLanding,
    thumbnailAlt: 'Ran Lending Platform interface',
    features: ['Authentication and role-based access', 'Admin dashboard', 'CRUD-based workflows'],
    technologies: ['Laravel', 'Tailwind CSS', 'Bootstrap', 'MySQL', 'Firebase', 'jQuery', 'JavaScript', 'GitHub', 'VPS', 'Webmin', 'Linux Server'],
    contribution: 'Frontend and backend development for the lending system.',
    links: { live: 'https://ranserenity.com/' },
    seo: {
      title: 'Ran Lending Platform | Sebastian Jabson',
      description: 'A lending platform with authentication, role-based access, an admin dashboard, and CRUD workflows.',
      canonical: 'https://sebastianjabson.vercel.app/projects/ran-lending-platform',
    },
  },
  {
    id: 2,
    slug: 'guam-coral-reef-website',
    title: 'Guam Coral Reef Website',
    description: 'A WordPress business website designed to showcase and promote products sold directly by the owner.',
    thumbnail: guamLanding,
    thumbnailAlt: 'Guam Coral Reef Website homepage',
    features: ['Product-focused business website', 'Responsive web design'],
    technologies: ['WordPress', 'Elementor', 'Adobe Photoshop', 'Responsive Web Design'],
    contribution: 'Website implementation and responsive presentation using WordPress and Elementor.',
    links: { live: 'https://guamcoralreef.com/' },
    seo: {
      title: 'Guam Coral Reef Website | Sebastian Jabson',
      description: 'A responsive WordPress and Elementor business website for showcasing products.',
      canonical: 'https://sebastianjabson.vercel.app/projects/guam-coral-reef-website',
    },
  },
  {
    id: 3,
    slug: 'screenwide-printing-website',
    title: 'Screenwide Printing Website',
    description: 'A static website that clearly presents a printing business and its offerings.',
    thumbnail: screenLanding,
    thumbnailAlt: 'Screenwide Printing Website homepage',
    features: ['Clear business presentation', 'Responsive layout'],
    technologies: ['Bootstrap', 'HTML', 'CSS'],
    contribution: 'Built the static website and its responsive layout.',
    links: { live: 'https://sebastian709.github.io/screen-wide-printing/', github: 'https://github.com/sebastian709/screen-wide-printing' },
    seo: {
      title: 'Screenwide Printing Website | Sebastian Jabson',
      description: 'A responsive static website for a printing business, built with HTML, CSS, and Bootstrap.',
      canonical: 'https://sebastianjabson.vercel.app/projects/screenwide-printing-website',
    },
  },
];

export const getProjectBySlug = (slug) => projectsData.find((project) => project.slug === slug);
