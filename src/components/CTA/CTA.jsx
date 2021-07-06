import React from "react"

import { CTABox } from "./CTA.styles"

const CTAComponent = ({ title, slug }) => {
  return <CTABox to={slug}>{title}</CTABox>
}

export default CTAComponent
