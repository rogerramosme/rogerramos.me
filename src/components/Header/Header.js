import { string } from "prop-types";
import React from "react";
import { HeaderWraper, HeaderContent, HeaderTitle, HeaderSubtitle } from "./Header.style";

const Header = ({ siteTitle, siteSubTitle }) => (
  <HeaderWraper>
    <HeaderContent>
      <HeaderTitle>
        {siteTitle}
      </HeaderTitle>
      <HeaderSubtitle>
        {siteSubTitle}
      </HeaderSubtitle>
    </HeaderContent>
  </HeaderWraper>
);

Header.propTypes = {
  siteTitle: string.isRequired,
  siteSubTitle: string.isRequired
};

export default Header;
