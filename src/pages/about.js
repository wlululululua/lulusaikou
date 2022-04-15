import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="关于">
      you can call me wlulu
      <StaticImage alt="avatar" src="../images/avatar.png" width={100} />
    </Layout>
  );
};

export default AboutPage;
