module.exports = {
  siteMetadata: {
    title: "mikesteich",
    titleTemplate: `%s`,
    description:
      "Software engineer and mentor living in Houston, Texas.",
    url: "https://www.michaelsteichen.com",
    image: "/src/images/bwheadshot.jpeg",
    twitterUsername: "@meiksteich",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
  ],
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
};
