import styled from "styled-components"
import { Link } from "gatsby"

export const CTABox = styled(Link)`
  color: #263238;
  font-size: 16px;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 500;
  padding: 9px 20px 9px;
  background: white;
  border-radius: 50px;
  position: relative;
  transition: all 0.2s ease-in-out;
  &:after {
    content: "";
    display: block;
    background-image: linear-gradient(to top right, #0066cc, #653ef1);
    border-radius: 50px;
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -1;
  }
  &:hover {
    background: transparent;
    color: white;
  }
`
