import styled from "styled-components"

export const Card = styled.article`
  padding: 20px;
  border: 1px solid #e7ebed;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 20px 0 rgb(84 110 122 / 10%);
    transform: translateY(-1px);
  }
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
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 500;
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
  margin-left: 15px;
`

export const ArticleBox = styled.header`
  margin-bottom: 20px;
`

export const ArticleTitle = styled.h2`
  color: ${props => props.theme.colors.cardTitle};

  font-size: 1.2rem;
  text-transform: capitalize;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #0066cc;
  }
`

export const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Category = styled.div`
  background-color: ${props => props.theme.colors.categoryBoxBackground};
  color: ${props => props.theme.colors.categoryBoxTextColor};
  display: inline-block;
  font-size: 11px;
  letter-spacing: 0.5px;
  margin-bottom: 3px;
  padding: 3px 8px 1px 0px;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: #263238;
  }
`
