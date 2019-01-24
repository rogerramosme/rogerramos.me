import React, { Fragment } from "react";
import Layout from "components/Layout/";
import ProfileImage from "components/ProfileImage/";
import SEO from "components/seo";
import IntroText from 'components/IntroText';
import LogFeed from 'components/LogFeed';

import { GlobalStyles } from "config/global-styles";
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Fragment>
      <Layout>
        <SEO
          title="Roger Ramos"
          keywords={[`design`, `front-end`, `react`, `gatsby`, `react`]}
        />
        <GlobalStyles />
        <div style={{ marginBottom: `1.45rem`, display: "inline" }}>
          <ProfileImage />
        </div>
        <IntroText />
        {edges && (<LogFeed logs={edges} />)}
      </Layout>
    </Fragment>
  )
}

export default IndexPage;

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
            custom_url
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