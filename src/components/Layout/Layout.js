import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Footer from 'components/Footer';

import { GlobalStyles } from 'config/global-styles';
import { Theme } from 'config/theme';
import { ThemeProvider } from 'styled-components';

const selectedTheme = 'clean';

import { LayoutWraper } from './Layout.style';

const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyles />
    <ThemeProvider theme={Theme[selectedTheme]}>
      <LayoutWraper>
        {children}
        <Footer />
      </LayoutWraper>
    </ThemeProvider>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
