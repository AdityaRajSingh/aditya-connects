export function getBlogHeroImage(heroImage?: string): string | null {
  if (!heroImage) return null;
  if (heroImage.startsWith('http') || heroImage.startsWith('/')) return heroImage;
  return `/images/blog/${heroImage}`;
}