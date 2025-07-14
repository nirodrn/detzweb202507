import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title = "DETZ Global - Software Development, Studios & Electrical Services in Sri Lanka",
  description = "DETZ Global Pvt Ltd offers premium software development, creative studio services, and electrical solutions in Sri Lanka. Registered company (PV 00324946) serving clients globally with innovative technology solutions.",
  keywords = "software development sri lanka, web development colombo, electrical services sri lanka, photography studio colombo, video production sri lanka, detz global, business websites, e-commerce development, smart home solutions, iot sri lanka",
  image = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=630",
  url = "https://detzglobal.com",
  type = "website",
  author = "DETZ Global Pvt Ltd",
  publishedTime,
  modifiedTime
}) => {
  const fullTitle = title.includes('DETZ Global') ? title : `${title} | DETZ Global`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="DETZ Global" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@detzglobal" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="application-name" content="DETZ Global" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "DETZ Global Pvt Ltd",
          "alternateName": "DETZ Global",
          "url": "https://detzglobal.com",
          "logo": "https://detzglobal.com/logo.png",
          "description": description,
          "foundingDate": "2024",
          "founders": [
            {
              "@type": "Person",
              "name": "DETZ Global Team"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "141 Waragoda Rd",
            "addressLocality": "Peliyagoda",
            "addressRegion": "Colombo",
            "addressCountry": "Sri Lanka"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+94713979029",
              "contactType": "customer service",
              "availableLanguage": ["English", "Sinhala"]
            },
            {
              "@type": "ContactPoint",
              "email": "info@detzglobal.com",
              "contactType": "customer service"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/share/164F7VLjwL/?mibextid=wwXIfr",
            "https://www.linkedin.com/company/detz-global/"
          ],
          "services": [
            {
              "@type": "Service",
              "name": "Software Development",
              "description": "Custom software solutions, web applications, and AI-powered systems"
            },
            {
              "@type": "Service", 
              "name": "Creative Studios",
              "description": "Professional photography, videography, and creative content production"
            },
            {
              "@type": "Service",
              "name": "Electrical Services", 
              "description": "Smart electrical installations, IoT solutions, and safety inspections"
            }
          ],
          "areaServed": [
            {
              "@type": "Country",
              "name": "Sri Lanka"
            },
            {
              "@type": "Country", 
              "name": "United States"
            },
            {
              "@type": "Country",
              "name": "Canada"
            },
            {
              "@type": "Country",
              "name": "United Arab Emirates"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default MetaTags;