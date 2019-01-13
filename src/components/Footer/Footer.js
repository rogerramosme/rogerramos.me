import React from "react";
import { FooterWrapper } from "./Footer.style"

const Footer = () => (
    <FooterWrapper>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
    </FooterWrapper>
);

export default Footer;
