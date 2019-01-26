import React, { Fragment } from 'react';
import { any } from 'prop-types';
import { graphql } from 'gatsby';
import { GlobalStyles } from 'config/global-styles';

import Layout from 'components/Layout/';
import ProfileImage from 'components/ProfileImage/';
import SEO from 'components/seo';
import IntroText from 'components/IntroText';
import LogFeed from 'components/LogFeed';
import Header from 'components/Header';

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Fragment>
      <Layout>
        <SEO
          title="Roger Ramos"
          keywords={[ `design`, `front-end`, `react`, `gatsby`, `react` ]}
        />
        <GlobalStyles />
        <Header />
        <div style={{ marginBottom: `5rem` }}>
          <ProfileImage style={{ margin: '0 auto' }} />
        </div>
        <IntroText />
        {edges && <LogFeed logs={edges} />}
      </Layout>
    </Fragment>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: any
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            date
            customUrl
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
