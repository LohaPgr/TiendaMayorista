
module.exports = async function (eleventyConfig) {
  const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");

  eleventyConfig.addPassthroughCopy("code/css");
  eleventyConfig.addPassthroughCopy("code/js");
  eleventyConfig.addPassthroughCopy("code/img");


  // Agregar plugin de Eleventy
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  return {
    dir: {
      input: "code",
      output: "docs",
    },
  };
};
