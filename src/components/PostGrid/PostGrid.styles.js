import styled from "styled-components"

export const Section = styled.section`
  padding-top: 30px;
  position: relative;
  max-width: 1300px;
  margin: 0 auto;
  &:before {
    background-color: #fff;
    content: "";
    height: 1000px;
    left: -1050px;
    position: absolute;
    top: 0px;
    transform: rotate(60deg);
    width: 100%;
    z-index: -5;
  }
  @media screen and (min-width: 768px) {
    padding-top: 60px;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 100px;
  }
`

export const Main = styled.main``

export const GridBox = styled.div`
  article {
    margin-bottom: 10px;
    &:nth-child(1) {
      grid-area: featured-left;
    }
    &:nth-child(8) {
      grid-area: featured-right;
    }
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "featured-left featured-left"
      ". ."
      ". ."
      ". ."
      "featured-right featured-right";
    article {
      margin-bottom: 0px;
    }
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto auto auto;
    grid-template-areas:
      "featured-left featured-left ."
      "featured-left featured-left ."
      ". . ."
      ". featured-right featured-right"
      ". featured-right featured-right";
  }
`
