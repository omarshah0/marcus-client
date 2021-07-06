import React, { Fragment } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { StructuredText } from "react-datocms"
import Moment from "react-moment"
import { window } from "browser-monads"

import PageHelmet from "../PageHemlemt"
import SocialSharingButtons from "../SocialSharing"
import { Container } from "../Common/Common.styles"
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

const BlogPostTemplate = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDatoCmsBlogpost {
        nodes {
          title
          excerpt
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
        }
      }
    }
  `)
  const {
    title,
    excerpt,
    body,
    hero,
    meta,
    author,
  } = data.allDatoCmsBlogpost.nodes[0]
  const canonicalUrl = `http://localhost:8000${window.location.pathname}`
  return (
    <Fragment>
      <PageHelmet
        title={title}
        image={hero.url}
        url={canonicalUrl}
        article={{ title, description: excerpt }}
        author={author.name}
        description={excerpt}
        createdDate={meta.createdAd}
        updatedDate={meta.updatedAt}
        subcategory="Name of Article Category. E.g Forex"
      />
      <BlogPost>
        <Container>
          <BlogHead>
            <BlogTitle itemProp="headline">{title}</BlogTitle>
            <BlogMeta>
              <BlogAuthor>
                <BlogAuthorAvatar>
                  <GatsbyImage
                    image={author.image.gatsbyImageData}
                    alt={author.name}
                  />
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
                <SocialSharingButtons location={window.location} />
              </BlogShare>
            </BlogMeta>
          </BlogHead>
          <FeaturedImage>
            <GatsbyImage
              image={hero.gatsbyImageData}
              alt={title}
              placeholder="blurred"
            />
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
    </Fragment>
  )
}

export default BlogPostTemplate
