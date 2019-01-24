import React from "react";
import PropTypes from "prop-types";
import Footer from "components/Footer"

import { LayoutWraper } from "./Layout.style"

const Layout = ({ children }) => (
  <LayoutWraper>
    {children}
    <Footer />
  </LayoutWraper>
  
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
