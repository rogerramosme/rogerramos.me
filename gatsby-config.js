module.exports = {
  siteMetadata: {
    title: `Designer, Front-End Developer and UX Addicted`,
    description: `Soon you will find here my thoughts, ideas and Web Development Journal.`,
    author: `@rodgerpaulo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ff0047`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/profile-image.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400,700`,
        ]
      }
    }
  ],
}
