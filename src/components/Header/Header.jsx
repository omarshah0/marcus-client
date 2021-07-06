import React, { useRef } from "react"
import { Link } from "gatsby"
import { window } from "browser-monads"

import {
  Header,
  FlexBox,
  MobileNav,
  DesktopNav,
  Hamburger,
  TitleH1,
  TitleP1,
} from "./Header.styles"
import { Container } from "../Common/Common.styles"

const HeaderComponent = () => {
  const navRef = useRef()
  const isHome = window.location.pathname === "/"

  const toggleMenu = () => {
    navRef.current.classList.toggle("open")
  }

  // const themeSetter = () => {
  //   if (theme === "light") {
  //     localStorage.setItem("binaryTheme", "dark")
  //     return setTheme("dark")
  //   }
  //   if (theme !== "light") {
  //     localStorage.setItem("binaryTheme", "light")
  //     return setTheme("light")
  //   }
  // }

  return (
    <Header itemScope="" itemType="https://schema.org/WPHeader">
      <Container>
        <FlexBox>
          {isHome ? (
            <TitleH1 itemProp="headline">
              <Link to="/">binaryPakistani</Link>
            </TitleH1>
          ) : (
            <TitleP1 itemProp="headline">
              <Link to="/">binaryPakistani</Link>
            </TitleP1>
          )}

          <MobileNav onClick={toggleMenu} itemScope="">
            <Hamburger>
              <span></span>
              <span></span>
              <span></span>
            </Hamburger>
            Menu
          </MobileNav>
          <DesktopNav
            itemScope=""
            itemType="https://schema.org/SiteNavigationElement"
            ref={navRef}
          >
            <ul>
              <li>
                <Link to="/" itemProp="url">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/" itemProp="url">
                  About
                  About
                </Link>
              </li>
              <li>
                <Link to="/" itemProp="url">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/" itemProp="url">
                  Certified Writers
                </Link>
              </li>
              <li>
                <Link to="/" itemProp="url">
                  Content Marketing
                </Link>
              </li>
            </ul>
          </DesktopNav>
          {/* <button onClick={themeSetter}>Toggle Theme</button> */}
        </FlexBox>
      </Container>
    </Header>
  )
}

export default HeaderComponent
