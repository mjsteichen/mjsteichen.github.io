module.exports = {
  siteMetadata: {
    title: "Michael Steichen",
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Steichen's Personal Website`,
        short_name: `Michael Steichen`,
        start_url: `/`,
        background_color: `#F1FAEE`,
        theme_color: `#1D3557`,
        display: `standalone`,
        icon: `src/images/icon.png`
      },
    },
    `gatsby-plugin-offline`
  ],
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
};
