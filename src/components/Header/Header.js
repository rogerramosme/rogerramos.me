import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import pushDataLayer from 'services/pushDataLayer'
import SocialIcon from 'components/SocialIcon'
import { Wraper, Title, Subtitle, ProfileImage } from './Header.style'

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
        const { title } = data.site.siteMetadata;
        return (
          <Wraper>
            <Title>{title}</Title>
            <Subtitle>
              Hi, I’m Roger.
              <br />
              Welcome to my Journal
            </Subtitle>
            <ProfileImage alt="Roger Ramos profile grayscale photo" />
            <div>
              <SocialIcon aria-label="Find out more about my works and experiments at Github" onClick={() => pushDataLayer('Social Network', 'Github')} url="https://github.com/rodgerpaulo" />
              <SocialIcon aria-label="Discover my professional journal at my Linkedin profile" onClick={() => pushDataLayer('Social Network', 'Linkedin')} url="https://linkedin.com/in/rogerramos/" socialName="linkedin"/>
            </div>
          </Wraper>
        );
      }}
    />
  );
};

export default Header;
