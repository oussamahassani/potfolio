import { Helmet } from "react-helmet";

/**
 * SEO Helper Component
 * Manages all SEO meta tags and structured data
 */
export const SEOHelmet = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  author = "Full Stack Developer",
  robots = "index, follow",
  canonicalUrl,
}) => {
  const fullTitle = title ? `${title} | Full Stack Developer Portfolio` : "Full Stack Developer | JavaScript, Java, React";
  const fullDescription = description || "Senior full-stack developer with 8+ years of experience in JavaScript, Java, React, Node.js, and cloud technologies.";
  const fullKeywords = keywords || "full-stack developer, JavaScript, Java, React, Node.js, microservices";
  const siteUrl = process.env.REACT_APP_SITE_URL || "https://yourportfolio.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const ogImage = image || `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0066cc" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Full Stack Developer Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@yourhandle" />

      {/* Additional Meta Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="color-scheme" content="light dark" />
    </Helmet>
  );
};

/**
 * Structured Data (JSON-LD) Generator
 */
export const generateStructuredData = (type = "Person", data = {}) => {
  const baseData = {
    "@context": "https://schema.org/",
    "@type": type,
    "name": data.name || "Full Stack Developer",
    "url": data.url || process.env.REACT_APP_SITE_URL || "https://yourportfolio.com",
    "image": data.image || "https://yourportfolio.com/photo.jpg",
    "description": data.description || "Senior full-stack developer with 8+ years of experience",
    "sameAs": [
      "https://www.linkedin.com/in/yourprofile",
      "https://github.com/yourprofile",
      "https://twitter.com/yourhandle"
    ],
  };

  if (type === "Person") {
    return {
      ...baseData,
      "jobTitle": data.jobTitle || "Full Stack Developer",
      "worksFor": data.worksFor || { "@type": "Organization", "name": "Freelance" },
      "knowsAbout": data.skills || [
        "JavaScript",
        "Java",
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Microservices",
      ],
    };
  }

  if (type === "Article") {
    return {
      ...baseData,
      "@type": "BlogPosting",
      "headline": data.title,
      "datePublished": data.publishDate,
      "dateModified": data.modifiedDate,
      "author": {
        "@type": "Person",
        "name": data.authorName || "Full Stack Developer",
      },
      "image": data.image || "https://yourportfolio.com/article-image.jpg",
    };
  }

  if (type === "Organization") {
    return {
      ...baseData,
      "@type": "Organization",
      "name": data.name || "Portfolio",
      "logo": data.logo || "https://yourportfolio.com/logo.png",
      "sameAs": data.socialProfiles || [],
    };
  }

  return baseData;
};

/**
 * Inject Structured Data into page
 */
export const injectStructuredData = (schema) => {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

/**
 * Breadcrumb Navigation (Structured Data)
 */
export const generateBreadcrumbs = (items = []) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };

  return breadcrumbSchema;
};

/**
 * Product/Service Schema (for services page)
 */
export const generateServiceSchema = (service = {}) => {
  return {
    "@context": "https://schema.org/",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Person",
      "name": "Full Stack Developer",
      "url": process.env.REACT_APP_SITE_URL,
    },
    "areaServed": ["US", "CA", "GB", "FR"],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": process.env.REACT_APP_SITE_URL,
    },
  };
};

/**
 * SEO Meta Tags Preset
 * Ready-to-use configurations for different page types
 */
export const SEO_PRESETS = {
  home: {
    title: "Senior Full Stack Developer",
    description: "8+ years of full-stack development experience with JavaScript, Java, React, Node.js, and cloud architecture.",
    keywords: "full-stack developer, JavaScript, Java, React, Node.js, microservices, freelance",
  },
  about: {
    title: "About Me",
    description: "Learn about my journey as a senior full-stack developer, my philosophy, and what drives my passion for coding.",
    keywords: "about, full-stack developer, experience, journey, philosophy",
  },
  portfolio: {
    title: "Portfolio Projects",
    description: "Explore my professional projects showcasing expertise in web development, system architecture, and cloud solutions.",
    keywords: "portfolio, projects, web development, case studies, React, Node.js",
  },
  services: {
    title: "Services",
    description: "Professional services including system architecture, full-stack development, DevOps, and performance optimization.",
    keywords: "services, consulting, development, architecture, DevOps",
  },
  blog: {
    title: "Technical Blog",
    description: "Articles and insights on full-stack development, microservices, performance optimization, and best practices.",
    keywords: "blog, technical articles, development, best practices, tutorials",
  },
  contact: {
    title: "Contact",
    description: "Get in touch for consulting, development projects, or career opportunities.",
    keywords: "contact, hire, consulting, freelance",
  },
};
