import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { StructuredText } from "react-datocms"
import Moment from "react-moment"

import Layout from "../../components/Layout"
import PageHelmet from "../../components/PageHemlemt"
import SocialSharingButtons from "../../components/SocialSharing"
import YoutubePlayer from "../../components/YoutubePlayer"
import { Container } from "../../components/Common/Common.styles"
import {
  BlogPost,
  BlogHead,
  BlogTitle,
  BlogMeta,
  BlogAuthor,
  BlogAuthorAvatar,
  BlogAuthorName,
  BlogDate,
  BlogShare,
  FeaturedImage,
  MainBody,
  Article,
  Ad,
} from "./BlogPost.styles"
import "./styles.css"

const BlogPostTemplate = ({ data: { datoCmsBlogpost }, location }) => {
  const {
    title,
    excerpt,
    categories,
    body,
    hero,
    meta,
    author,
  } = datoCmsBlogpost
  const canonicalUrl = `https://www.binarypakistan.com${location.pathname}`
  return (
    <Layout>
      <PageHelmet
        title={title}
        image={hero.url}
        url={canonicalUrl}
        article={{ title, description: excerpt }}
        author={author.name}
        description={excerpt}
        createdDate={meta.createdAd}
        updatedDate={meta.updatedAt}
        subcategory={categories[0].title}
      />
      <BlogPost>
        <Container>
          <BlogHead>
            <BlogTitle itemProp="headline">{title}</BlogTitle>
            <BlogMeta>
              <BlogAuthor>
                <BlogAuthorAvatar>
                  {author.image ? (
                    <GatsbyImage
                      image={author.image.gatsbyImageData}
                      alt={author.name}
                    />
                  ) : (
                    <StaticImage
                      src="https://via.placeholder.com/150"
                      alt="Binary Pakista"
                    />
                  )}
                </BlogAuthorAvatar>
                <BlogAuthorName>
                  <em>written by</em>
                  <Link to={`/author/${author.slug}`}>{author.name}</Link>
                </BlogAuthorName>
                <BlogDate>
                  <em>posted on</em>
                  <time
                    itemProp="datePublished"
                    dateTime="2021-06-01T07:00:00-06:00"
                  >
                    <Moment format="MMMM DD, YYYY">{meta.createdAd}</Moment>
                  </time>
                </BlogDate>
              </BlogAuthor>
              <BlogShare>
                <SocialSharingButtons location={location} />
              </BlogShare>
            </BlogMeta>
          </BlogHead>
          <FeaturedImage>
            {hero && (
              <GatsbyImage
                image={hero.gatsbyImageData}
                alt={title}
                placeholder="blurred"
                className="gatsby-hero-image-wrapper"
              />
            )}
          </FeaturedImage>
          <MainBody>
            <Article className="content">
              <StructuredText
                data={body}
                renderBlock={({ record }) => {
                  switch (record.__typename) {
                    case "DatoCmsImage":
                      return (
                        <GatsbyImage
                          image={record.image.gatsbyImageData}
                          alt={record.image.alt}
                        />
                      )
                    case "DatoCmsVideo":
                      return (
                        <YoutubePlayer
                          providerUid={record.youtubevideo.providerUid}
                        />
                      )

                    default:
                      return null
                  }
                }}
                renderLinkToRecord={({ record, children, transformedMeta }) => {
                  switch (record.__typename) {
                    case "DatoCmsBlogpost":
                      return (
                        <Link {...transformedMeta} to={`/blog/${record.slug}`}>
                          {children}
                        </Link>
                      )
                    default:
                      return null
                  }
                }}
              />
            </Article>
            <Ad>
              Ad<br></br>300x600
            </Ad>
          </MainBody>
        </Container>
      </BlogPost>
    </Layout>
  )
}

export const singleBlogPostQuery = graphql`
  query($slug: String!) {
    datoCmsBlogpost(slug: { eq: $slug }) {
      title
      excerpt
      categories {
        title
      }
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
          ... on DatoCmsVideo {
            id: originalId
            youtubevideo {
              providerUid
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
`

export default BlogPostTemplate
