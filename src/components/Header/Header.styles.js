import styled from "styled-components"

export const FlexBox = styled.div`
  position: relative;
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Header = styled.header`
  padding: 5% 0;
  color: ${props => props.theme.colors.header};
  @media screen and (min-width: 768px) {
    padding: 3% 0;
  }
  @media screen and (min-width: 1024px) {
    padding: 1% 0;
  }
  .react-toggle {
    svg {
      fill: white;
    }
  }
`

export const TitleH1 = styled.h1`
  font-size: 20px;
  display: inline-block;
`

export const TitleP1 = styled.p`
  font-size: 20px;
  display: inline-block;
  font-weight: 700;
`

export const DesktopNav = styled.nav`
  @media screen and (max-width: 1024px) {
    height: 0px;
    overflow: hidden;
    &.open {
      width: 100%;
      height: 250px;
      margin-top: 20px;
    }
    ul {
      li {
        a {
          display: block;
          font-size: 18px;
          border-bottom: 1px solid #dddddd;
          padding: 10px 0;
          font-weight: 400;
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    display: block;
    ul {
      display: flex;
      li {
        font-size: 15px;
        margin-left: 20px;
        &:nth-child(1) {
          margin-left: 0;
        }
        a {
          transition: all 0.2s ease-in-out;
          &:hover {
            color: blue;
          }
        }
      }
    }
  }
`

export const MobileNav = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  cursor: pointer;
  float: right;
  &:hover {
    background: black;
    color: white;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const Hamburger = styled.div`
  span {
    display: block;
    width: 17px;
    height: 1px;
    border: 1px solid;
    margin-bottom: 2px;
    margin-right: 8px;

    &:nth-child(3) {
      margin-bottom: 0px;
    }
  }
`
