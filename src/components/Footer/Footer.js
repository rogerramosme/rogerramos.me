import React from 'react';
import { FooterWrapper } from './Footer.style';

const Footer = () => (
  <FooterWrapper>
    <p>That‘s all =)</p>
    &copy; {new Date().getFullYear()}, Built with&nbsp;
    <a href="https://www.gatsbyjs.org">Gatsby</a>, hosted by
    <a href="https://www.netlify.com/"> Netlify</a>
  </FooterWrapper>
);

export default Footer;
