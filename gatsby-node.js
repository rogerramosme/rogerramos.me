const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const LogEntryTemplate = path.resolve(`src/templates/LogEntry.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              customUrl
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const customUrl = node.frontmatter.customUrl;
      const path = customUrl ? customUrl : node.fields.slug;

      createPage({
        path,
        component: LogEntryTemplate,
        context: {
          id: node.id
        } // additional data can be passed via context
      });
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });

    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        config: path.resolve(__dirname, 'src/config/'),
        images: path.resolve(__dirname, 'src/images/'),
        pages: path.resolve(__dirname, 'src/pages/'),
        templates: path.resolve(__dirname, 'src/templates/')
      }
    }
  });
};
