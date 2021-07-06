import React from "react"
import { ThemeProvider } from "styled-components"

import Header from "../Header"
import Footer from "../Footer"
import GlobalStyles from "../../theme/GlobalStyles"
import { lightTheme } from "../../theme/Theme"

// if (typeof window !== `undefined`) {
//   if (!localStorage.getItem("binaryTheme")) {
//     localStorage.setItem("binaryTheme", "light")
//   }
// }

const Layout = ({ children }) => {
  // const persistedTheme =
  //   typeof window === `undefined`
  //     ? "light"
  //     : localStorage.getItem("binaryTheme")
  // console.log("Persisted Theme is ", persistedTheme)
  // const [theme, setTheme] = useState(persistedTheme)
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
