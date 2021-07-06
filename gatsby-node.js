const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const homePageDataQuery = await graphql(`
    {
      allDatoCmsBlogpost {
        nodes {
          title
          slug
          body {
            value
            links {
              __typename
              ... on DatoCmsBlogpost {
                id: originalId
                slug
              }
            }
            blocks {
              __typename
              ... on DatoCmsImage {
                id: originalId
                image {
                  gatsbyImageData
                  alt
                }
              }
            }
          }
          meta {
            createdAt
            updatedAt
          }
          hero {
            gatsbyImageData
            url
          }
          author {
            name
            slug
            image {
              gatsbyImageData
            }
          }
          categories {
            title
            slug
          }
        }
      }
    }
  `)

  const singleBlogPostQuery = await graphql(`
    {
      allDatoCmsBlogpost {
        nodes {
          slug
        }
      }
    }
  `)

  const allAuthorsQuery = await graphql(`
    {
      allDatoCmsAuthor {
        nodes {
          slug
        }
      }
    }
  `)

  const allCategoriesQuery = await graphql(`
    {
      allDatoCmsCategory {
        nodes {
          slug
        }
      }
    }
  `)

  const homePageData = homePageDataQuery.data.allDatoCmsBlogpost.nodes
  const singleBlogPostData = singleBlogPostQuery.data.allDatoCmsBlogpost.nodes
  const allAuthorsData = allAuthorsQuery.data.allDatoCmsAuthor.nodes
  const allCategoriesData = allCategoriesQuery.data.allDatoCmsCategory.nodes

  createPage({
    path: `/`,
    component: path.resolve("./src/templates/HomePage/HomePage.jsx"),
    context: {
      post: homePageData,
    },
  })

  singleBlogPostData.map(post => {
    const { slug } = post
    createPage({
      path: `/article/${slug}`,
      component: path.resolve("./src/templates/BlogPost/BlogPost.jsx"),
      context: {
        slug,
      },
    })
  })

  allAuthorsData.map(author => {
    const { slug } = author
    createPage({
      path: `/author/${slug}`,
      component: path.resolve("./src/templates/AuthorPage/AuthorPage.jsx"),
      context: {
        slug,
      },
    })
  })

  allCategoriesData.map(category => {
    const { slug } = category
    createPage({
      path: `/category/${slug}`,
      component: path.resolve("./src/templates/CategoryPage/CategoryPage.jsx"),
      context: {
        slug,
      },
    })
  })

  //Creating BlogPosts

  // eslint-disable-next-line
  // const createSingleBlogPost = new Promise((resolve, reject) => {
  //   try {
  //     graphql(`
  //       {
  //         allDatoCmsBlogpost {
  //           nodes {
  //             slug
  //           }
  //         }
  //       }
  //     `).then(res => {
  //       const posts = res.data.allDatoCmsBlogpost.nodes
  //       posts.map(post => {
  //         const { slug } = post
  //         createPage({
  //           path: `/article/${slug}`,
  //           component: path.resolve("./src/templates/BlogPost/BlogPost.jsx"),
  //           context: {
  //             slug,
  //           },
  //         })
  //       })
  //       resolve()
  //     })
  //   } catch (error) {
  //     reject(error)
  //   }
  // })

  // eslint-disable-next-line
}
