import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    unoptimized: true, // отключает оптимизацию картинок
    transpilePackages: ['react-leaflet', 'leaflet'],
    output: 'export',
    env: {
        twoGisKey: "9fe3f0d1-1028-4fd1-8e98-e50e0df4ed05",
    },

};

export default nextConfig;