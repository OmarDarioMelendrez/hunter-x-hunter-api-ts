// Port for local development
export const SITE_PORT = 3005;

// Determine the base domain based on the environment
// Vercel sets VERCEL_URL environment variable for deployments
const vercelDomain = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : null;

// Fallback to localhost if not on Vercel
export const DOMAIN = vercelDomain || `http://localhost:${SITE_PORT}`;

// Optional: Log the determined domain during startup (in app.ts maybe, not here)
// console.log(`API Domain configured as: ${DOMAIN}`);
