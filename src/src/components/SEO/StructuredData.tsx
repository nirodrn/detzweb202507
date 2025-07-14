import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'WebPage' | 'Article' | 'Service' | 'JobPosting' | 'Product';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data
    };

    switch (type) {
      case 'WebPage':
        return {
          ...baseData,
          "publisher": {
            "@type": "Organization",
            "name": "DETZ Global Pvt Ltd",
            "url": "https://detzglobal.com"
          }
        };
      
      case 'Service':
        return {
          ...baseData,
          "provider": {
            "@type": "Organization",
            "name": "DETZ Global Pvt Ltd",
            "url": "https://detzglobal.com"
          }
        };
      
      case 'JobPosting':
        return {
          ...baseData,
          "hiringOrganization": {
            "@type": "Organization",
            "name": "DETZ Global Pvt Ltd",
            "sameAs": "https://detzglobal.com"
          }
        };
      
      default:
        return baseData;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;