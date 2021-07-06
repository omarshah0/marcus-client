import styled from "styled-components"

export const Card = styled.article`
  padding: 20px 5px;
  ${props => props.theme.colors.categoryBoxTextColor};
  @media screen and (min-width: 768px) {
    padding: 25px;
  }
  @media screen and (min-width: 1024px) {
    padding: 40px;
  }
`
export const AuthorBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  margin-bottom: 30px;
  &:before {
    background-color: #cfd8dc;
    content: "";
    display: block;
    height: 35px;
    left: 0;
    right: 0px;
    position: absolute;
    transform: rotate(10deg);
    top: 0px;
    width: 1px;
  }
  em {
    margin-left: 8px;
    color: ${props => props.theme.colors.categoryBoxTextColor};
    font-size: 13px;
  }
  time {
    margin-left: 8px;
    color: ${props => props.theme.colors.cardTitle};
    font-family: "Noto Sans JP", sans-serif;
    font-size: 14px;
    font-weight: 500;
  }
`

export const AuthorAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  overflow: hidden;
  margin-left: 20px;
`

export const AuthorName = styled.div`
  color: ${props => props.theme.colors.cardTitle};
  margin-left: 12px;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 400;
`

export const ArticleBox = styled.header`
  margin-bottom: 20px;
`

export const ArticleTitle = styled.h2`
  color: ${props => props.theme.colors.cardTitle};
  font-size: 28px;
  line-height: 1.45;
  transition: color 0.2s ease-in-out;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 900;
  text-transform: capitalize;
  &:hover {
    color: #0066cc;
  }
  @media screen and (min-width: 768px) {
    font-size: 2.3rem;
  }
`

export const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 400;
  margin-bottom: 32px;
`

export const Category = styled.div`
  background-color: ${props => props.theme.colors.categoryBoxBackground};
  color: ${props => props.theme.colors.categoryBoxTextColor};
  display: inline-block;
  font-size: 11px;
  letter-spacing: 0.5px;
  margin-bottom: 3px;
  padding: 2px 5px;
  text-transform: uppercase;
  text-decoration: none;
`
export const DescriptionBox = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 40px;
  }
`

export const Description = styled.p`
  color: ${props => props.theme.colors.cardDescription};
  font-size: 20px;
  line-height: 1.7;
`

export const CTABox = styled.div``
