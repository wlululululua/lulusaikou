import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";

const NotesPage = ({ data }) => {
	return (
		<Layout pageTitle="笔记">
			<h1>notes</h1>
			<ul>
				{data.allMarkdownRemark.edges.map(({ node }) => {
					return <li key={node.id}>{node.frontmatter.title}</li>;
				})}
			</ul>
		</Layout>
	);
};

export const query = graphql`
	{
		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
			edges {
				node {
					frontmatter {
						date
						title
					}
					id
				}
			}
		}
	}
`;

export default NotesPage;
