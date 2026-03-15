import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zpshades.com";

  return [
    { url: `${baseUrl}`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/gallery`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/book`, lastModified: new Date() },
    { url: `${baseUrl}/service-areas`, lastModified: new Date() },

    // city pages
    { url: `${baseUrl}/shade-installation/seattle`, lastModified: new Date() },
    { url: `${baseUrl}/shade-installation/bellevue`, lastModified: new Date() },
    { url: `${baseUrl}/shade-installation/redmond`, lastModified: new Date() },
    { url: `${baseUrl}/shade-installation/kirkland`, lastModified: new Date() },
    { url: `${baseUrl}/shade-installation/mercer-island`, lastModified: new Date() },
    { url: `${baseUrl}/shade-installation/renton`, lastModified: new Date() },
    { url: `${baseUrl}/shade-installation/tacoma`, lastModified: new Date() },
    { url: `${baseUrl}/shade-installation/bainbridge-island`, lastModified: new Date() },
    { url: `${baseUrl}/shade-installation/issaquah`, lastModified: new Date() },
    { url: `${baseUrl}/shade-installation/north-bend`, lastModified: new Date() },
    { url: `${baseUrl}/shade-installation/sammamish`, lastModified: new Date() },
    { url: `${baseUrl}/shade-installation/puyallup`, lastModified: new Date() },
  ];
}