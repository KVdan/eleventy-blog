module.exports = function(eleventyConfig) {
    // Watch CSS files for changes
    eleventyConfig.setBrowserSyncConfig({
        files: "./public/css/**/*.css",
    });
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};