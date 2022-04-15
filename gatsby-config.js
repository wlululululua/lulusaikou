module.exports = {
	siteMetadata: {
		title: "lulusaikou",
		siteUrl: "https://lulusaikou.gatsbyjs.io/",
		description: "wlulu的学习记录✍️📓",
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "blogs",
				path: `${__dirname}/content/blogs`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "notes",
				path: `${__dirname}/content/notes`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/content/images`,
			},
		},
		"gatsby-transformer-remark",
		"gatsby-transformer-sharp",
	],
};
