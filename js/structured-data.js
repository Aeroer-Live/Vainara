/**
 * Structured Data (JSON-LD) Injection System
 * Adds schema.org structured data for better SEO
 */

(function() {
    'use strict';

    // Get current page name
    function getCurrentPage() {
        var path = window.location.pathname;
        var page = path.split("/").pop() || "index.html";
        return page;
    }

    // Organization Schema
    var organizationSchema = {
        "@context": "https://schema.org",
        "@type": "InteriorDesignBusiness",
        "name": "VIA NARA",
        "alternateName": "via NARA",
        "description": "A groundbreaking interior styling house delivering the highest level of luxury, style and craftsmanship. Specializing in furnishings, interiors, kitchens, objects, and wall systems.",
        "url": "https://vianara.my",
        "logo": "https://vianara.my/images/logo.svg",
        "image": "https://vianara.my/images/home/cover.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "113-1, Jalan Medang Serai",
            "addressLocality": "Bangsar",
            "addressRegion": "Kuala Lumpur",
            "postalCode": "59100",
            "addressCountry": "MY"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "3.139906",
            "longitude": "101.6592705"
        },
        "telephone": "+0122824660",
        "email": "vianara.my@gmail.com",
        "founder": {
            "@type": "Person",
            "name": "Dr. Nasrin Rabiei Karahroudi",
            "jobTitle": "Founder & Interior Artist"
        },
        "sameAs": [
            "https://www.facebook.com/profile.php?id=61558631245925",
            "https://www.linkedin.com/in/via-nara-interior-styling-house-7792732a5/",
            "https://www.instagram.com/vianara.my/"
        ],
        "areaServed": {
            "@type": "Country",
            "name": "Malaysia"
        },
        "priceRange": "$$$"
    };

    // Website Schema
    var websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "VIA NARA",
        "url": "https://vianara.my",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://vianara.my/?s={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    // Service Schema
    var serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Interior Design Services",
        "provider": {
            "@type": "InteriorDesignBusiness",
            "name": "VIA NARA"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Malaysia"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Interior Design Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Interior Styling"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Furniture, Decor & Objects Curation"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Built-in Furniture Solutions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Kitchen Design"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Wall Systems Design"
                    }
                }
            ]
        }
    };

    // Function to inject structured data
    function injectStructuredData() {
        var head = document.head || document.getElementsByTagName('head')[0];
        
        // Remove existing structured data scripts
        var existingScripts = head.querySelectorAll('script[type="application/ld+json"]');
        existingScripts.forEach(function(script) {
            script.remove();
        });

        // Add Organization Schema (all pages)
        var orgScript = document.createElement('script');
        orgScript.type = 'application/ld+json';
        orgScript.textContent = JSON.stringify(organizationSchema);
        head.appendChild(orgScript);

        // Add Website Schema (all pages)
        var websiteScript = document.createElement('script');
        websiteScript.type = 'application/ld+json';
        websiteScript.textContent = JSON.stringify(websiteSchema);
        head.appendChild(websiteScript);

        // Add Service Schema (all pages)
        var serviceScript = document.createElement('script');
        serviceScript.type = 'application/ld+json';
        serviceScript.textContent = JSON.stringify(serviceSchema);
        head.appendChild(serviceScript);

        // Page-specific schemas
        var currentPage = getCurrentPage();
        
        if (currentPage === 'contact.html') {
            // LocalBusiness Schema for Contact page
            var localBusinessSchema = {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "VIA NARA",
                "image": "https://vianara.my/images/logo.svg",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "113-1, Jalan Medang Serai",
                    "addressLocality": "Bangsar",
                    "addressRegion": "Kuala Lumpur",
                    "postalCode": "59100",
                    "addressCountry": "MY"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "3.139906",
                    "longitude": "101.6592705"
                },
                "url": "https://vianara.my",
                "telephone": "+0122824660",
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                    ],
                    "opens": "10:00",
                    "closes": "18:00"
                }
            };
            
            var localBusinessScript = document.createElement('script');
            localBusinessScript.type = 'application/ld+json';
            localBusinessScript.textContent = JSON.stringify(localBusinessSchema);
            head.appendChild(localBusinessScript);
        }

        if (currentPage === 'blog.html') {
            // Article Schema for Blog page
            var articleSchema = {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": "Interior Artist Dr Nasrin Rabiei Talks About Design Approach And Her Relationship With SPACE Furniture",
                "description": "Dr Nasrin Rabiei Karahroudi, interior artist and stylist of Kuala Lumpur-based design firm Actualised Ideas, talks about her design approach.",
                "image": "https://vianara.my/images/magazine/msnara.png",
                "author": {
                    "@type": "Person",
                    "name": "Via Nara"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "VIA NARA",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://vianara.my/images/logo.svg"
                    }
                },
                "datePublished": "2021-05-26T00:00:00+08:00",
                "dateModified": "2021-05-26T00:00:00+08:00"
            };
            
            var articleScript = document.createElement('script');
            articleScript.type = 'application/ld+json';
            articleScript.textContent = JSON.stringify(articleSchema);
            head.appendChild(articleScript);
        }
    }

    // Initialize when DOM is ready
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', injectStructuredData);
        } else {
            injectStructuredData();
        }
    }

    // Start initialization
    init();

})();

