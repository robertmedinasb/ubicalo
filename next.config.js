const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextJsConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        child_process: 'empty',
        fs: 'empty',
      };
    }
    return config;
  },
  redirects: async () => {},
};

const optimizedImagesConfig = {
  assetDirectory: '/_next/static',
  optimizedImages: true, 
  imagesPublicPath: '/_next/static/images',
};

module.exports = withPlugins([[optimizedImages, { optimizedImagesConfig }]], {
  nextJsConfig,
});
