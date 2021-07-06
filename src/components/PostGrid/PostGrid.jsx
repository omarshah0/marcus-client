import React from "react"

import { GridBox } from "./PostGrid.styles"
import BlogCard from "../BlogCard"
import FocusedBlogCard from "../FocusedBlogCard"

function skip(c) {
  return this.filter((x, i) => {
    if (i > c - 1) {
      return true
    }
  })
}

function limit(c) {
  return this.filter((x, i) => {
    if (i <= c - 1) {
      return true
    }
  })
}

Array.prototype.skip = skip
Array.prototype.limit = limit

const PostGridComponent = ({ posts }) => {
  const firstSet = posts.limit(7).skip(1)
  const secondSet = posts.limit(4).skip(8)
  return (
    <GridBox>
      {posts.length > 0 && <FocusedBlogCard post={posts[0]} />}
      {firstSet.length > 0 &&
        firstSet.map(post => <BlogCard post={post} key={post.title} />)}
      {posts.length > 7 && <FocusedBlogCard post={posts[7]} />}
      {secondSet.length > 0 &&
        secondSet.map(post => <BlogCard post={post} key={post.title} />)}
    </GridBox>
  )
}

export default PostGridComponent
