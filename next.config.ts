import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
};

export default nextConfig;

export default {
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    },
};
