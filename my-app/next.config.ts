/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ftp.goit.study",
        // port: '', // можна залишити порожнім
        // pathname: '/**', // дозволяє всі шляхи на цьому домені
      },
      // Якщо у тебе є зображення з Cloudinary (як було у твоїх типах),
      // варто додати і його:
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
