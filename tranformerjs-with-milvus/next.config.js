/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,

  // Indicate that these packages should not be bundled by webpack
  experimental: {
    serverComponentsExternalPackages: [
      "sharp",
      "onnxruntime-node",
      "@zilliz/milvus2-sdk-node",
    ],
    outputFileTracingIncludes: {
      "/api/*": ["node_modules/@zilliz/milvus2-sdk-node/dist/proto/*"],
    },
  },
};

module.exports = nextConfig;
