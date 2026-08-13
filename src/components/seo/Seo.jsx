const Seo = () => {
  const baseUrl = 'https://sebastianjabson.vercel.app';

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Sebastian Jabson',
      jobTitle: 'Web Developer',
      url: baseUrl,
      image: `${baseUrl}/scjLogo.png`,
      sameAs: [
        'https://github.com/sebastian709',
        'https://www.linkedin.com/in/sebastian709/'
      ],
      description:
        'Web developer building scalable and responsive applications with PHP, Laravel, React, JavaScript, SQL, and modern frontend tooling.',
      knowsAbout: [
        'PHP',
        'Laravel',
        'React',
        'JavaScript',
        'MySQL',
        'SQL',
        'Bootstrap',
        'Tailwind CSS',
        'jQuery',
        'Git',
        'GitHub',
        'REST APIs',
        'WordPress',
        'Database Development',
        'Web Development'
      ],
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': baseUrl
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Sebastian Jabson Portfolio',
      url: baseUrl,
      description:
        'Portfolio website for Sebastian Jabson, a web developer focused on PHP, Laravel, React, JavaScript, and SQL-backed applications.',
      publisher: {
        '@type': 'Person',
        name: 'Sebastian Jabson'
      },
      inLanguage: 'en'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Sebastian Jabson | Web Developer | PHP, React, SQL',
      url: baseUrl,
      description:
        'Portfolio of Sebastian Jabson, featuring projects, frontend and backend development work, and technical experience in PHP, Laravel, React, JavaScript, and SQL.',
      isPartOf: {
        '@type': 'WebSite',
        url: baseUrl,
        name: 'Sebastian Jabson Portfolio'
      },
      about: {
        '@type': 'Person',
        name: 'Sebastian Jabson'
      }
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
};

export default Seo;
