import React from "react"
import { graphql } from "gatsby"
import { GlobalStyles } from "config/global-styles";
import SEO from "components/seo";
import Layout from "components/Layout/";
import LogHeader from 'components/LogHeader/'
import { Wrapper, Title, Tag, Date, LogBody, TagWrapper, GoBack } from "./LogEntry.style";
import { format } from 'date-fns';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { title, date, tags } = frontmatter;
  return (
    <Layout>
      <SEO
        title={`Roger Ramos - ${title}`}
        keywords={[`design`, `front-end`, `react`, `gatsby`, `react`]}
      />  
      <GlobalStyles />
      <Wrapper>
        <LogHeader />
        <Title>{title}</Title>
        <Date>{format(date, 'MMMM DD, YYYY')}</Date>
        <LogBody
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {tags && (
          <TagWrapper>
            {tags.map(tag => <Tag>{tag}</Tag>)}
          </TagWrapper>
        )}
        <GoBack href="/">Go back</GoBack>
      </Wrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
      frontmatter {
        date
        title
        tags
      }
    }
  }
`