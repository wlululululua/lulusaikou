import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";

const BlogPostPage = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title;
  const html = data.markdownRemark.html;

  return (
    <Layout pageTitle={title}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export const query = graphql`
  query BlogQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        date
        title
      }
    }
  }
`;

export default BlogPostPage;
