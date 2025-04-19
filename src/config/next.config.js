const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  mozjpeg: {
    quality: 80,
  },
  optipng: {
    optimizationLevel: 3,
  },
  webp: {
    preset: 'default',
    quality: 75,
  },
  handleImages: ['jpeg', 'png', 'webp', 'gif'],
  inlineImageLimit: -1,
});