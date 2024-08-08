import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "./public/assets/styles")],
  },
  basePath: "",
  reactStrictMode: false,
  images: {
    path: "/_next/image",
    disableStaticImages: false
  },
};

export default nextConfig;
