/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                hostname: "image.tmdb.org"
            },
            {
                hostname: "jiocinema-clone-1.onrender.com"
            },
        ]
    }
};

export default nextConfig;
