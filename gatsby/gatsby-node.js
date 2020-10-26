const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path');

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  return graphql(`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            background
            category
            description
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            title
            image
          }
          timeToRead
          wordCount {
            words
          }
        }
        next {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        previous {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }

  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({node, previous, next}) => {
      createPage({
        path: `${node.fields.slug}`,
        component: path.resolve("./src/templates/blogPost.tsx"),
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous
        },
      })
    })

    const postsPerPage = 6;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, index)=>{
      createPage({
        path: index === 0 ? '/' : `/page/${index + 1}`,
        component: path.resolve("./src/templates/blogList.tsx"),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1
        }
      })
    })

  })
}
