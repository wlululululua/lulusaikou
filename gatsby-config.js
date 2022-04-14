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
                name: "content",
                path: `${__dirname}/content`,
            },
        },
        "gatsby-transformer-remark",
    ],
};
