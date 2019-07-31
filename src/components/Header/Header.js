import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import pushDataLayer from 'services/pushDataLayer'
import { Title } from 'components/Text';
import SocialIcon from 'components/SocialIcon'
import { Wraper, Subtitle, ProfileImage } from './Header.style';

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
            <Title>{title}</Title>
            <Subtitle>{description}</Subtitle>
            <ProfileImage alt="Roger Ramos profile grayscale photo" />
            <div>
              <SocialIcon aria-label="Find out more about my works and experiments at Github" onClick={() => pushDataLayer('Social Network', 'Github')} url="https://github.com/rodgerpaulo" socialName="github"/>
              <SocialIcon aria-label="Discover my professional journal at my Linkedin profile" onClick={() => pushDataLayer('Social Network', 'Linkedin')} url="https://linkedin.com/in/rogerramos/" />
            </div>
          </Wraper>
        );
      }}
    />
  );
};

export default Header;
