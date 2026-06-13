/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "prod.spline.design",
      "instagram.fdel32-1.fna.fbcdn.net",
    ], // Add this domain
  },
};

// module.exports = {
//   images: {
//     domains: ["avatars.githubusercontent.com"], // Add this domain
//   },
// };

export default nextConfig;
