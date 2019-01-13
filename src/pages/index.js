import React from "react";
import Layout from "../components/Layout/";
import ProfileImage from "../components/ProfileImage/";
import SEO from "../components/seo";
import { GlobalStyles } from "../config/global-styles";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Roger Ramos"
      keywords={[`design`, `front-end`, `react`, `gatsby`, `react`]}
    />
    <GlobalStyles />
    <div style={{ marginBottom: `1.45rem`, display: "inline" }}>
      <ProfileImage />
    </div>
  </Layout>
);

export default IndexPage;
