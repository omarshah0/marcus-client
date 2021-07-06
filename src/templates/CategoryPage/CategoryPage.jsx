import React from "react"
import { graphql } from "gatsby"

import { Container } from "../../components/Common/Common.styles"
import { Section, Main } from "../../components/PostGrid/PostGrid.styles"
import Layout from "../../components/Layout"
import PageHelmet from "../../components/PageHemlemt"
import PostGrid from "../../components/PostGrid"

const CategoryPageTemplate = ({ data: { allDatoCmsBlogpost }, location }) => {
  const canonicalUrl = `https://www.binarypakistan.com${location.pathname}`
  const r = location.pathname.split("/")
  const x = r[2]
  const z = x.replace("-", " ")
  const title = capitalizeTheFirstLetterOfEachWord(z)

  return (
    <Layout>
      <PageHelmet title={`${title}, Archives`} url={canonicalUrl} />
      <Section>
        <Container>
          <Main>
            <PostGrid posts={allDatoCmsBlogpost.nodes} />
          </Main>
        </Container>
      </Section>
    </Layout>
  )
}

function capitalizeTheFirstLetterOfEachWord(words) {
  var separateWord = words.toLowerCase().split(" ")
  for (var i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1)
  }
  return separateWord.join(" ")
}

export const singleBlogPostQuery = graphql`
  query($slug: String!) {
    allDatoCmsBlogpost(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
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
`

export default CategoryPageTemplate
