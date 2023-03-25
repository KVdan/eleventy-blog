const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const filters = require("./_11ty/filters.js");

module.exports = function (eleventyConfig) {
  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
    files: "./public/css/**/*.css",
  });
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      data: "_data",
    },
  };
};
