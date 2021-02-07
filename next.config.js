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
  env: {
    YELP_API_KEY:
      'YDpYlPy0jvHccCw3lrxAPG2gXQcFJbDoXNSUo6F9P7a9h7fz2RD9ZKXzT0IALMXHYIYKB_iYF7jegXGRYKAHOJME4YyDA3_X_RPzbBuf76zzBhjhi1zlqBiZCiIYYHYx',
    dev: {},
    prod: {},
  },
};

const optimizedImagesConfig = {
  assetDirectory: '/_next/static',
  optimizedImages: true,
  imagesPublicPath: '/_next/static/images',
};

module.exports = withPlugins([[optimizedImages, { optimizedImagesConfig }]], {
  nextJsConfig,
});
