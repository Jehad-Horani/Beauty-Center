// components/ClinicSchema.js
import Script from "next/script";

export default function ClinicSchema({ clinic, id = "clinic-schema" }) {
  if (!clinic || !clinic.name || !clinic.url) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Clinic",
    "name": clinic.name,
    "description": clinic.description || undefined,
    "image": clinic.image || clinic.logo || undefined,
    "@id": clinic.url,
    "url": clinic.url,
    "telephone": clinic.telephone || undefined,
    "priceRange": clinic.priceRange || undefined,
    "address": clinic.address ? {
      "@type": "PostalAddress",
      "streetAddress": clinic.address.streetAddress,
      "addressLocality": clinic.address.addressLocality,
      "addressRegion": clinic.address.addressRegion,
      "postalCode": clinic.address.postalCode,
      "addressCountry": clinic.address.addressCountry || "JO"
    } : undefined,
    "geo": (clinic.geo && clinic.geo.latitude && clinic.geo.longitude) ? {
      "@type": "GeoCoordinates",
      "latitude": clinic.geo.latitude,
      "longitude": clinic.geo.longitude
    } : undefined,
    "openingHoursSpecification": Array.isArray(clinic.openingHours) ? clinic.openingHours.map(h => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": h.dayOfWeek,
      "opens": h.opens,
      "closes": h.closes
    })) : undefined,
    "contactPoint": clinic.contactPoint || undefined,
    "sameAs": clinic.sameAs && clinic.sameAs.length ? clinic.sameAs : undefined,
    "medicalSpecialty": clinic.medicalSpecialty || undefined,
    "makesOffer": clinic.services && clinic.services.length ? clinic.services.map(s => ({
      "@type": "Service",
      "name": s.name,
      "description": s.description
    })) : undefined,
    "founder": clinic.founder ? {
      "@type": clinic.founder.type || "Person",
      "name": clinic.founder.name,
      "image": clinic.founder.image,
      "sameAs": clinic.founder.sameAs
    } : undefined,
    "aggregateRating": clinic.aggregateRating ? {
      "@type": "AggregateRating",
      "ratingValue": String(clinic.aggregateRating.ratingValue),
      "reviewCount": String(clinic.aggregateRating.reviewCount)
    } : undefined,
    "potentialAction": clinic.bookingUrl ? {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": clinic.bookingUrl
      }
    } : undefined
  };

  const clean = JSON.parse(JSON.stringify(schema));
  const jsonLd = JSON.stringify(clean).replace(/</g, "\\u003c");

  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
      strategy="afterInteractive"
    />
  );
}
