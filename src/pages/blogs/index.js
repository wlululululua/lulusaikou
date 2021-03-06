import React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogsPage = ({ data }) => {
  return (
    <Layout pageTitle="博客">
      <h1>blogs</h1>
      {data.allMarkdownRemark.nodes.map(node => {
        const thumb = getImage(node.frontmatter.thumb);
        const blogFileName = node.parent.name;

        return (
          <Link to={`/blogs/${blogFileName}`}>
            <div key={node.id}>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.frontmatter.date}</p>
              <GatsbyImage image={thumb} alt="thumbnail"></GatsbyImage>
            </div>
          </Link>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/blogs/" } }) {
      nodes {
        frontmatter {
          date
          title
          thumb {
            childImageSharp {
              gatsbyImageData(width: 500)
            }
          }
        }
        id
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`;

export default BlogsPage;
