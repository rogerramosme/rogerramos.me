module.exports = {
  siteMetadata: {
    title: `Designer, Front-End Developer & UX Addicted`,
    description: `Here you can find my thoughts, ideas and Web Development Journal.`,
    author: `@rodgerpaulo`,
    siteUrl: `https://rogerramos.me`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-5DS763X',
        includeInDevelopment: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/entries/`,
        name: 'markdown-pages'
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-offline',
      runtimeCaching: [
        {
          // Use cacheFirst since these don't need to be revalidated (same RegExp
          // and same reason as above)
          urlPattern: /(\.js$|\.css$|static\/)/,
          handler: `cacheFirst`
        },
        {
          // Google Fonts CSS (doesn't end in .css so we need to specify it)
          urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
          handler: `staleWhileRevalidate`
        }
      ]
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rogerramos.me`,
        short_name: `rogerramos.me`,
        start_url: `/`,
        background_color: `#ff0047`,
        theme_color: `#ff0047`,
        display: `minimal-ui`,
        icon: `src/images/profile-image.jpg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [ `Roboto\:400,700` ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: { sh: 'bash' },
              showLineNumbers: false,
              noInlineHighlight: false
            }
          }
        ]
      }
    }
  ]
};
