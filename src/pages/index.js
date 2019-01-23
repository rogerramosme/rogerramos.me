import React, { Fragment } from "react";
import Layout from "../components/Layout/";
import ProfileImage from "../components/ProfileImage/";
import SEO from "../components/seo";
import { GlobalStyles } from "../config/global-styles";
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
      </Layout>
      <ul>
        {edges && (edges.map(({node}, index) => {
          const customUrl = node.frontmatter.custom_url
          const path = customUrl ? customUrl : node.fields.slug
          return (
            <Fragment key={`log-${index}`}>
              <li>id: {node.id}</li>
              <li>url: <a href={path}>{path}</a></li>
              <li>title: {node.frontmatter.title}</li>
              <li>date: {node.frontmatter.date}</li>
            </Fragment>
          )
        }))}
      </ul>
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
            date(formatString: "MM.DD.YYYY")
            custom_url
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;