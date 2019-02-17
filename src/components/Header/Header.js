import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Wraper, Content, Subtitle } from './Header.style';
import { Title } from 'components/Text';

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => {
        const { title, description } = data.site.siteMetadata;
        return (
          <Wraper>
            <Content>
              <Title>{title}</Title>
              <Subtitle>{description}</Subtitle>
            </Content>
          </Wraper>
        );
      }}
    />
  );
};

export default Header;
