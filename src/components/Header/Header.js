import { string } from "prop-types";
import React from "react";
import { Wraper, Content, Title, Subtitle } from "./Header.style";

const Header = ({ siteTitle, siteSubTitle }) => (
  <Wraper>
    <Content>
      <Title>
        {siteTitle}
      </Title>
      <Subtitle>
        {siteSubTitle}
      </Subtitle>
    </Content>
  </Wraper>
);

Header.propTypes = {
  siteTitle: string.isRequired,
  siteSubTitle: string.isRequired
};

export default Header;
