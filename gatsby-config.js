module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "micx",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "music",
        path: "./src/music/",
      },
      __key: "music",
    },
  ],
};
