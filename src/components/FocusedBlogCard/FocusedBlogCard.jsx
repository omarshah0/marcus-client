import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Moment from "react-moment"

import {
  Card,
  AuthorBox,
  AuthorAvatar,
  AuthorName,
  ArticleBox,
  ArticleTitle,
  CategoryBox,
  Category,
  DescriptionBox,
  Description,
  CTABox,
} from "./FocusedBlogCard.styles"
import Cta from "../CTA"

const BlogCard = ({ post: { title, meta, author, slug, categories } }) => {
  return (
    <Card itemScope itemType="https://schema.org/CreativeWork">
      <AuthorBox>
        <AuthorAvatar>
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
        </AuthorAvatar>
        &nbsp;
        <em>by</em>
        <AuthorName>
          <Link to={`/author/${author.slug}`}>{author.name}</Link>
        </AuthorName>
        &nbsp;
        <em>on</em>
        &nbsp;
        <time itemProp="datePublished" dateTime={meta.createdAt}>
          <Moment format="MMMM D, YYYY" date={meta.createdAt} />
        </time>
      </AuthorBox>
      <ArticleBox>
        <ArticleTitle itemProp="headline">
          <Link to={`/article/${slug}`}>{title}</Link>
        </ArticleTitle>
      </ArticleBox>
      <CategoryBox>
        {React.Children.toArray(
          categories?.map(category => (
            <Category>
              <Link to={`/category/${category.slug}`}>{category.title}</Link>
            </Category>
          ))
        )}
        {/* <Category>
          <Link to="/category/content-marketing">Content Marketing</Link>
        </Category>
        <Category>
          <Link to="/category/productivity">Productivity</Link>
        </Category> */}
      </CategoryBox>
      <DescriptionBox itemProp="text">
        <Description>
          If you’re looking to build a personal brand business, you’re probably
          aware that it’s only a matter of time until…
        </Description>
      </DescriptionBox>
      <CTABox>
        <Cta title="Continue Reading" slug={`/article/${slug}`} />
      </CTABox>
    </Card>
  )
}

export default BlogCard
