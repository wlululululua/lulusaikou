import React from "react";
import Navbar from "./navbar";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ pageTitle, children }) => {
	const data = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					title
					description
				}
			}
			siteBuildMetadata {
				buildTime
			}
		}
	`);

	return (
		<div>
			<title>{pageTitle || data.site.siteMetadata.title}</title>
			<Navbar {...data.site.siteMetadata} />
			{children}
		</div>
	);
};

export default Layout;
