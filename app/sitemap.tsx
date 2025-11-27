export default function sitemap() {
  return [
    {
      url: 'https://dwarkabikerentals.in/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://dwarkabikerentals.in/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://dwarkabikerentals.in/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://dwarkabikerentals.in/bike-rentals',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    }
  ];
}
