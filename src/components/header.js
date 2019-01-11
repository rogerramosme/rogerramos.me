import { string } from "prop-types";
import React from "react";

const Header = ({ siteTitle, siteSubTitle }) => (
  <div
    style={{
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `4rem 1.0875rem 1.45rem`,
        textAlign: "center"
      }}
    >
      <h1
        style={{
          margin: 0,
          lineHeight: 1.125,
          fontSize: "2rem",
          lineBreak: "break-word"
        }}
      >
        {siteTitle}
      </h1>
      <h2 style={{ fontWeight: "400", lineHeight: 1.5, fontSize: "1.25rem" }}>
        {siteSubTitle}
      </h2>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: string.isRequired,
  siteSubTitle: string.isRequired
};

export default Header;
