/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/skygravity-records.com.ua",
  siteMetadata: {
    title: `Skygravity Records`,
    description: `Independent Psychedelic Trance Label from Ukraine`,
    author: `@DigiJet`,
    blog: 'Skygravity records Blog',
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
 /*      {
    resolve: `gatsby-plugin-sass`,
    options: {
      cssLoaderOptions: {
        camelCase: false,
        implementation: require('node-sass'),
      },
      },  
    }, */

    {
      resolve: `gatsby-remark-embed-snippet`,
      options: {
        directory: `${__dirname}/posts`,
      },
    },
      {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sg_logo_small.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
