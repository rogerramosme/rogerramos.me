import React from 'react';
import { FooterWrapper, SocialList, SocialItem } from './Footer.style';

const Footer = () => (
  <FooterWrapper>
    <p>You can reach me out at:</p>
    <SocialList>
      <SocialItem>
        <a href="https://github.com/rodgerpaulo">Github</a>
      </SocialItem>
      <SocialItem>
        <a href="https://linkedin.com/in/rogerramos/">Linkedin</a>
      </SocialItem>
    </SocialList>
    <p>That‘s all folks!</p>
    &copy; {new Date().getFullYear()}, Built with&nbsp;
    <a href="https://www.gatsbyjs.org">Gatsby</a>,<br />
    hosted by
    <a href="https://www.netlify.com/"> Netlify</a>
  </FooterWrapper>
);

export default Footer;
