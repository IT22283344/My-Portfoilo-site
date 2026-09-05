/**
 * Canonical origin for the deployed site.
 *
 * Set NEXT_PUBLIC_SITE_URL in production so canonical/Open Graph URLs point at
 * the real domain. On Vercel previews VERCEL_URL is used automatically.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");
