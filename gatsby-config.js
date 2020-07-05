module.exports = {
  siteMetadata: {
    title: 'redux-mvc',
    description: 'MVC framework with react and redux',
    keywords: 'mvc,framework,react,redux,composition',
  },
  pathPrefix: `/docs`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl: 'https://github.com/redux-mvc/docs',
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          test: /\.svg$/,
          include: /images\/.*\.svg$/
        }
      }
    }
  ],
};
