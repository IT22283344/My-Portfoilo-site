import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // SVGs are served untouched via `unoptimized` (see lib/util.ts#isSvg), so
    // the optimizer only ever handles first-party raster images.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

const uploadToSentry = Boolean(
  process.env.SENTRY_AUTH_TOKEN && process.env.CI
);

const sentryBuildOptions = {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options
  org: "hirusha-rashmika",
  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // Only talk to sentry.io from CI with a token present. Local builds then
  // need no network, and a Sentry outage cannot fail a deploy.
  sourcemaps: {
    disable: !uploadToSentry,
  },
  release: {
    create: uploadToSentry,
    finalize: uploadToSentry,
  },

  // Belt and braces: never let a Sentry step fail the build.
  errorHandler: (err) => {
    console.warn(`[sentry] build step skipped: ${err.message}`);
  },

  // Upload a larger set of source maps for prettier stack traces
  widenClientFileUpload: true,

  // Automatically annotate React components in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
  },

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors.
  automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryBuildOptions);
