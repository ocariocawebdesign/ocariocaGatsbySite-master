module.exports = {
  siteMetadata: {
    title: `O Carioca Web`,
    description: `Site de contato de Carlos Abreu - Desenvolvimento de sites O Carioca Web`,
    author: `@ocariocawebdesign`,
  },
  /* Your site config here */
  plugins: [
    //"gatsby-plugin-sitemap": "^2.8.0", essa linha está no package.json

    //`gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
