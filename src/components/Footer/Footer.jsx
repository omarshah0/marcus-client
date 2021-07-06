import React from "react"
import { Link } from "gatsby"
import { Container } from "../Common/Common.styles"

const Footer = () => {
  return (
    <footer
      style={{ textAlign: "center", padding: "40px 0", background: "#E2EFFA" }}
    >
      <Container>
        <p>
          Copyright © 2021–2024{" "}
          <Link to="/" style={{ fontSize: "24px", fontWeight: "bolder" }}>
            binaryPakistan
          </Link>{" "}
          Media LLC.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
