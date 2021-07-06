import styled from "styled-components"

export const BlogPost = styled.div`
  padding: 40px 0;
  background: white;
`

export const BlogHead = styled.header``

export const BlogTitle = styled.h1`
  margin-bottom: 26px;
  font-size: 34px;
  line-height: 1.3;
  letter-spacing: -0.5px;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 900;
  text-align: center;
  text-transform: capitalize;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
`

export const BlogMeta = styled.div``

export const BlogAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

export const BlogAuthorAvatar = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 100px;
  overflow: hidden;
  margin-right: 20px;
  float: left;
`

export const BlogAuthorName = styled.div`
  margin-right: 20px;
  float: left;
  em {
    color: #546e7a;
    display: inline-block;
    font-size: 13px;
    font-style: italic;
  }
  a {
    display: block;
    color: #263238;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 500;
    font-size: 14px;
  }
`

export const BlogDate = styled.div`
  em {
    color: #546e7a;
    display: inline-block;
    font-size: 13px;
    font-style: italic;
  }
  time {
    display: block;
    color: #263238;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 500;
    font-size: 14px;
  }
`

export const BlogShare = styled.div`
  div {
    display: grid;
    grid-template-columns: repeat(4, minmax(min-content, max-content));
    justify-content: center;
    grid-gap: 10px;
  }
  margin-bottom: 20px;
`

export const FeaturedImage = styled.div`
  /* max-height: 500px; */
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 30px;
  /* .gatsby-image-wrapper {
    height: 100%;
  } */
`

export const MainBody = styled.main`
  display: grid;
  @media screen and (min-width: 768px) {
    grid-template-columns: 3fr 1fr;
  }
`

export const Article = styled.article`
  order: 2;
  @media screen and (min-width: 768px) {
    width: 100%;
    order: 1;
  }
  @media screen and (min-width: 1024px) {
    width: 90%;
  }
  p {
    font-size: 20px;
    font-family: "PT Serif", serif;
    font-weight: 400;
    margin: 0 0 30px;
    line-height: 1.7;
    word-wrap: break-word;
    color: #263238;

    a {
      color: #0066cc;
      font-style: italic;
      text-decoration: underline;
    }
  }
  blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    &:before {
      color: #ccc;
      content: open-quote;
      font-size: 4em;
      line-height: 0.1em;
      margin-right: 0.25em;
      vertical-align: -0.4em;
    }
    p {
      display: inline;
    }
  }
  h2 {
    font-size: 30px;
    margin: 0 0 20px;
    @media screen and (min-width: 768px) {
      font-size: 36px;
    }
  }
  h3 {
    font-size: 24px;
    margin: 40px 0 20px;
    @media screen and (min-width: 768px) {
      font-size: 28px;
    }
  }
  li {
    p {
      margin: 0 0 10px;
    }
    &:last-child {
      margin: 0 0 30px;
    }
  }
  ul {
    margin-left: 30px;
    li {
      list-style-type: disc;
    }
  }
  ol {
    margin-left: 30px;
    li {
      list-style-type: decimal;
    }
  }
`

export const Ad = styled.div`
  order: 1;
  background: #d6d2c4;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    order: 2;
    position: sticky;
    top: 20px;
    width: 300px;
    height: 600px;
    margin-bottom: 0px;
  }
`
