/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
          {
            protocol: 'https',
            hostname: "static.djangoproject.com"
          }
        ]
      }
};

export default nextConfig;
