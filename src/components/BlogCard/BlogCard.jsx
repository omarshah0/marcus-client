import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import {
  Card,
  AuthorBox,
  AuthorAvatar,
  AuthorName,
  ArticleBox,
  ArticleTitle,
  CategoryBox,
  Category,
} from "./BlogCard.styles"

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
        <AuthorName>
          <Link to={`/author/${author.slug}`}>{author.name}</Link>
        </AuthorName>
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
    </Card>
  )
}

export default BlogCard
