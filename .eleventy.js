module.exports = function (eleventyConfig) {
  // fix urls for parcel
  eleventyConfig.addFilter("urlFix", function (value) {
    value = !value || value === "" || value === "/" ? "index" : value;
    return value.indexOf(".html") < 0 ? value + ".html" : value;
  });
  // blogpost collection
  eleventyConfig.addCollection("posts", function (collection) {
    return collection.getFilteredByGlob("./site/posts/*.md");
  });

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