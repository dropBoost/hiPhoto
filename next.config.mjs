/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['isjsobqmkpwrtiaqgthz.supabase.co'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // o qualsiasi valore appropriato
    },
  },
};

export default nextConfig;


