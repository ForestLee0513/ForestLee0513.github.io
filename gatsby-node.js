const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const portfolioDetail = path.resolve(`./src/templates/portfolio-detail.js`)

  // 블로그 생성
  const blogQuery = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/(blog)/" } }
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (blogQuery.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      blogQuery.errors
    )
    return
  }

  const blogPosts = blogQuery.data.allMarkdownRemark.nodes

  // Create blog blogPosts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (blogPosts.length > 0) {
    blogPosts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : blogPosts[index - 1].id
      const nextPostId =
        index === blogPosts.length - 1 ? null : blogPosts[index + 1].id

      createPage({
        path: `/blog${post.fields.slug}`,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  // 포트폴리오 생성
  const portfolioQuery = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (portfolioQuery.errors) {
    reporter.panicOnBuild(
      `There was an error loading your portfolio posts`,
      portfolioQuery.errors
    )
    return
  }

  const portfolioDetails = portfolioQuery.data.allMarkdownRemark.nodes
  if (portfolioDetails.length > 0) {
    portfolioDetails.forEach((post, index) => {
      createPage({
        path: `/portfolio${post.fields.slug}`,
        component: portfolioDetail,
        context: {
          id: post.id,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
      github: String
      facebook: String
      linkedin: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      tags: [String]
    }

    type Fields {
      slug: String
    }
  `)
}
