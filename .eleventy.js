module.exports = function(eleventyConfig) {
  // Copy the `img/` directory 
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("less");
  eleventyConfig.addPassthroughCopy("node_modules");
  return {
    passthroughFileCopy: true
  };
};