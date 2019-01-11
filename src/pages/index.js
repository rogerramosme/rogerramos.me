import React from "react";
import Layout from "../components/layout";
import ProfileImage from "../components/profile-image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Roger Ramos"
      keywords={[`design`, `front-end`, `react`, `gatsby`, `react`]}
    />
    <div style={{ marginBottom: `1.45rem`, display: "inline" }}>
      <ProfileImage />
    </div>
  </Layout>
);

export default IndexPage;
