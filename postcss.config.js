const production = !process.env.ROLLUP_WATCH
const purgecss = require("@fullhuman/postcss-purgecss")
const autoprefixer = require("autoprefixer")

module.exports = {
  plugins: [
    require("postcss-import"),
    autoprefixer(),
    // Only purge css on production
    production &&
      purgecss({
        content: ["./**/*.html", "./**/*.svelte"],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
  ],
}