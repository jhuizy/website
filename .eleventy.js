module.exports = function(eleventyConfig) {
  // Copy the `img/` directory 
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("less");
  return {
    passthroughFileCopy: true
  };
};